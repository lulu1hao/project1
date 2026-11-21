// ============================================================
// store/index.js —— Vuex 仓库（任务 7，教材 7.3.2）
// 一个文件管全项目的公共数据：
//   state     = 仓库货架（放公共数据，这里是 count）
//   mutations = 收银员（只有它能改货架；组件用 commit('增量名') 喊它干活）
// 注意：Vuex 4（Vue 3 配套）用 createStore；老教材里的 new Vuex.Store() 是 Vuex 3 写法。
// ============================================================
import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0                    // 补全：公共计数的初始值（数字）
  },
  mutations: {
    increment(state) {
      state.count++                   // 补全：收银员亲手把哪个货架数据加一？
    },
    decrement(state) {
      state.count--
    },
    reset(state) {
      state.count = 0        // 隔壁卡片也能喊收银员"清零"——同一间仓库
    }
  }
})