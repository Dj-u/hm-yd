// 封装request模块
// 因为要在拦截器里处理 token统一注入 ，响应数据的统一处理返回 处理大数字  token失效
import axios from 'axios' // 引入axios插件
import JsonBig from 'json-bigint'
import store from '../store'
import router from '@/router'
// 创建一个axios实例 和原来的axios没有关系
// 应该给request请求一个默认的请求头  baseURL
const instance = axios.create({
  // 设置一个常量的基础地址
  baseURL: 'http://ttapi.research.itcast.cn/app/v1_0',
  transformResponse: [function (data) {
    // 如果data是一个空字符串 直接转换会报错
    // data 就是后端响应的字符串 摩尔你的转化是JSON.parse  处理大数字是有问题的  需要用JsonBig替换
    // return data ? JsonBig.parse(data) : {}
    // try  捕获异常
    try {
      return JsonBig.parse(data)
    } catch (error) {
      return data// 如果失败 就把字符串直接fanhui
    }
  }]// 处理后台返回的数据 字符串===》JsonBig.parse()==>转换大数字类型
})// 创建一个axios的请求 工具
// 拦截器
/***
 * 1.请求拦截器----》发送请求------》请求拦截器---------》服务器 统一注入token
 * 2.响应拦截器----》服务器--------》响应拦截器---------》then await
 */
instance.interceptors.request.use(function (config) {
  // 应该在返回配置之前 往配置中添加token
  if (store.state.user.token) {
    // 如果token存在 就要注册
    config.headers['Authorization'] = `Bearer ${store.state.user.token}` // 统一注入token
  }
  // 配置信息
  return config
},
function (error) {
  return Promise.reject(error)// 直接返回promise错误
})
// 响应拦截器
instance.interceptors.response.use(function (response) {
  // 响应数据 返回得到的响应数据 第一层data是axios默认包data，第二个data是接口返回里面的包的data
  try {
    return response.data.data
  } catch (error) {
    return response.data
  }
}, async function (error) {
  // 错误的时候 token容易失效 处理token失效的问题
  // 如何判断失效
  // error =》config(当前请求 的配置) request(请求) response(响应)
  // return Promise.reject(error)// 返回错误信息
  if (error.response && error.response.status === 401) {
    let toPath = { path: '/login', query: { redirectUrl: router.currentRoute.path } }// 跳转对象  到登录界面
    // 表示token过期 先判断 是否有refresh_token
    if (store.state.user.refresh_token) {
      try {
        // 应该发送一个请求 换取新的token
        // 这里不能再用instance 因为instance会再次进入拦截器 用默认的axios
        let result = await axios({
          method: 'put',
          url: 'http://ttapi.research.itcast.cn/app/v1_0/authorizations',
          headers: {
            Authorization: `Bearer ${store.state.user.refresh_token}`
          }
        })
        store.commit('updateUser', {
          user: {
            token: result.data.data.token, // 拿到新的token之后
            refresh_token: store.state.user.refresh_token// 将之前 refresh_token 14天有效期
          }
        })// 更新vuex的数据 也更新了本地缓存数据
        return instance(error.config)// 把刚才错误的请求再次发送出去 然后将promise返回   result就是返回结果
      } catch (error) {
        // 如果错误 表示补救措施没用了 应该跳转到登录界面 并且清除user
        store.commit('clearUser')// 所有用户信息清空
        router.push(toPath)
      }
    } else {
      // refresh_token 不存在
      // 当访问 页面时 去登录界面 ，登录成功之后回到当前界面，所以要记住当前地址 登录界面读取地址 然后跳转到地址
      /**
       * params 动态路由  user/:id
       * query传参 user?id=1111
       */
      router.push(toPath)
    }
  }
  return Promise.reject(error)
})
export default instance // 导出request 工具
