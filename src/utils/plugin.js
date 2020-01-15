// 时间格式转换
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
dayjs.extend(relativeTime)
export default {
  // Vue.use(obj)==>会调用obj中的install  更改vant组件中的设置
  install (Vue) {
    // 插件
    Vue.prototype.$gnotify = (params) => Vue.prototype.$notify({ duration: 800, ...params })
    Vue.prototype.$sleep = sleep
    Vue.filter('relTime', relTime)
  }
}
function sleep (time = 500) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(), time)
  })
}
// 相对时间的过滤器 得到一个相对时间
// value值我们认为是时间
function relTime (value) {
  return dayjs().locale('zh-cn').from(value)
}
