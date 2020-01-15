import Vue from 'vue'
import App from './App.vue'
import router from './permission'// 经过权限处理后的router
// import Permission from './permission'
import Plugin from '@/utils/plugin'
import store from './store'
import Vant, { Lazyload } from 'vant' // 引入 vant组件库  引入lazyload对象 (懒加载)
import 'amfe-flexible' // 引入适配组件
import 'vant/lib/index.less'// 样式文件
import '@/styles/index.less'// 引入全局的自定义样式 因为要覆盖vant的样式 代码从上到下执行 要放在vant/lib/index.css下边 不然会被覆盖掉
Vue.use(Vant)// 全局注册 实际上调用Vant导出的对象的方法  install方法  在任意位置使用组件库
Vue.use(Plugin)// 全局注册
Vue.use(Lazyload)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
