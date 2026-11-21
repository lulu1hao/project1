// ============================================================
// store/user.js —— Pinia 用户仓库（模块化 + 持久化，教材 7.4.3 / 7.4.4）
// 模块化：Pinia 不用像 Vuex 那样配 modules——一个 defineStore 一个文件，
//        user.js 和 counter.js 互相独立，这就是"天然模块化"。
// 持久化：persist 配置项由 pinia-plugin-persistedstate 插件提供——
//        插件在 main.js 里 pinia.use() 挂上后，写了 persist 的仓库
//        才会把数据存进 localStorage（网页关了也不丢）。
// ============================================================
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '张三',
    age: 18
  }),
  actions: {
    setName(name) {
      this.name = name
    },
    grow() {
      this.age++            // 补全：长一岁——age 自己加一
    }
  },
  persist: {
    // pick = 挑着存：只把 age 写进 localStorage，name 不存（刷新即回默认值）
    pick: ['age']
  }
})