// 专门处理用户信息符存储和删除 一级获取 放置在localStorge
// 操作localStorage的一些函数 目的是将来实现刷新token，需要存储的信息 关闭浏览器后再次打开，需要保持登录状态
const USER_TOKEN = 'hm-yd'// 这个key专门用来存储用户信息
// 设置用户的信息
export function setUser (user) {
  localStorage.setItem(USER_TOKEN, JSON.stringify(user))// 把对象转换成字符串形式
}
// 读取用户信息
export function getUser () {
  return JSON.parse(localStorage.getItem(USER_TOKEN) || '{}')// 短路表达式  数据为空会报错 所以要加'{}'
}
// 删除信息
export function delUser () {
  localStorage.removeItem(USER_TOKEN)
}
