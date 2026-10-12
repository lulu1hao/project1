<template>
  <div id="app">
    <h1>ch02-fundamentals｜第 2 章实验台</h1>
    <!-- 锚点导航 -->
    <nav class="lab-nav">
      <a href="#exp-01">01 修饰符串联</a>
      <a href="#exp-02">02 计算属性</a>
      <a href="#exp-03">03 侦听器</a>
      <a href="#exp-04">04 样式绑定</a>
    </nav>
    <!-- 实验挂载区 -->
    <section id="exp-01"><ModifierChainLab /></section>
    <section id="exp-02"><ComputedLab /></section>
    <section id="exp-03"><WatchLab /></section>
    <section id="exp-04"><StyleBindingLab /></section>
  </div>
</template>

<script>
// 逐个导入实验组件
import ModifierChainLab from './components/ModifierChainLab.vue'
import ComputedLab from './components/ComputedLab.vue'
import WatchLab from './components/WatchLab.vue'
import StyleBindingLab from './components/StyleBindingLab.vue'

export default {
  name: 'App',
  components: { ModifierChainLab, ComputedLab, WatchLab, StyleBindingLab }
}
</script>

<style scoped>
.lab-nav { display: flex; gap: 10px; margin: 12px 0 20px; }
.lab-nav a { border: 1px solid var(--primary); border-radius: 999px; padding: 3px 14px; }
section { margin: 18px 0; }
</style>