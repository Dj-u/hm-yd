import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'// 引入组件库
import 'amfe-flexible' // 引入适配组件
import 'vant/lib/index.css'// 样式文件
import '@/styles/index.less'// 引入全局的自定义样式  代码从上到下执行 要放在vant/lib/index.css下边 不然会被覆盖掉
Vue.use(Vant)// 全局注册 实际上调用Vant导出的对象的方法  install方法  在任意位置使用组件库
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
