// 路由的拦截  ========》导航守卫
// 引入路由实例  store
import router from '@/router'
import store from '@/store'
// 前置守卫===》当你的路由发生改变之前触发
/**
 * to 到哪里去
 * from 从哪里来
 * next 函数---->必须是  next()-->resolve这个钩子  前边不执行next  后边永远不执行
 * next(false) 终止当前的跳转
 * next(地址) 跳转到另外一个地址
 * next() 放行
 */
router.beforeEach(function (to, from, next) {
  // 判断跳转页面是不是user 有没有携带token
  if (to.path.startswith('/user') && !store.state.user.token) {
    // 拦截 判断有误token 有token----》放行   没有token----》登录
    let toPath = {
      path: '/login',
      query: {
        //   携带要求的地址带首页  登录成功之后 有了权限 再回到刚才没有权限去的地址
        redirectUrl: to.path
      }
    }
    next(toPath)
  } else {
    next()// 直接放行
  }
})
// 后置守卫
export default router
