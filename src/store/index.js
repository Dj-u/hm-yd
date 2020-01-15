// vuex解决数据共享
import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth'
// vuex 和缓存数据的同步 reux
Vue.use(Vuex)

export default new Vuex.Store({
  // 防止数据的地方  初始化的时候直接将用户信息给我们的公共状态
  state: {
    user: auth.getUser()// 缓存中
  },
  // state数据修改必须通过mutations
  // payload 载荷中携带user
  mutations: {
    // 存储数据
    updateUser (state, payload) {
      state.user = payload.user // 更新数据
      auth.setUser(payload.user) // 将数据同步设置到本地存储中
    },
    // 用户退出时  清空数据
    clearUser (state) {
      state.user = {}
      auth.delUser() // 将缓存中的数据也情况
    }
  },
  actions: {
  }

})
