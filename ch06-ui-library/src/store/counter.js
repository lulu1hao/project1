// ============================================================
// store/counter.js —— Pinia 计数器仓库（任务 8，教材 7.4.2）
// 对比 Vuex（隔壁 index.js）三处变化：
//   ① defineStore('仓库名', {...})：每个仓库一个文件、一个名字——天然模块化
//   ② 没有 mutations：actions 直接 this.count++ 改数据
//   ③ getters 就是仓库里的 computed：double 跟着 count 自动算
// ============================================================
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // state 是函数（返回对象），Pinia 的固定写法
  state: () => ({
    count: 0
  }),
  getters: {
    // 箭头函数收 state：state.count 变，double 自动重算
    double: (state) => state.count * 2      // 补全：double 是 count 的几倍？
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})