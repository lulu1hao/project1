<template>
  <!-- 根元素挂 dark 类，控制本卡片夜间模式 -->
  <div class="lab" :class="{ dark: isDark }">
    <h2>实验 04｜样式绑定（2.8）</h2>
    <button @click="isDark = !isDark">{{ isDark ? '切日间' : '切夜间' }}</button>

    <!-- ① 对象语法：条件挂类 -->
    <h3>① 对象语法</h3>
    <p :class="{ active: count > 0 }">count>0时变绿（count = {{ count }}）</p>
    <button @click="count++">count +1</button>

    <!-- ② 数组语法：多状态切换 -->
    <h3>② 数组语法</h3>
    <p :class="[sizeClass]">字号切换（{{ sizeClass }}）</p>
    <button @click="sizeClass = sizeClass==='size-s' ? 'size-m' : 'size-l'">切换字号</button>

    <!-- ③ 数组嵌对象：固定类+条件类（最常用） -->
    <h3>③ 数组嵌对象</h3>
    <p :class="['badge', { done: isDone }]">{{ isDone ? '已完成' : '进行中' }}</p>
    <button @click="isDone = !isDone">切换状态</button>

    <!-- :style 行内样式绑定 -->
    <h3>:style 对象绑定</h3>
    <p :style="{ color: themeColor, fontSize: fontSize + 'px' }">
      颜色 {{ themeColor }}｜字号 {{ fontSize }}px
    </p>
    <label>颜色 <input type="color" v-model="themeColor" /></label>
    <label>字号 <input type="range" min="12" max="32" v-model.number="fontSize" /></label>
  </div>
</template>

<script>
export default {
  name: 'StyleBindingLab',
  data() {
    return {
      isDark: false,
      count: 0,
      sizeClass: 'size-m',
      isDone: false,
      themeColor: '#42b883',
      fontSize: 18
    }
  }
}
</script>

<style scoped>
/* 卡片夜间模式：重定义CSS变量，只作用于本组件 */
.lab.dark {
  --card: #242b36;
  --text: #e6edf3;
  --border: #3a4452;
  background: var(--card);
  color: var(--text);
}
.active { color: var(--primary-dark); font-weight: bold; }
.size-s { font-size: 12px; }
.size-m { font-size: 16px; }
.size-l { font-size: 22px; }
.badge { border: 1px solid var(--primary); border-radius: 999px; padding: 2px 14px; }
.badge.done { color: var(--muted); text-decoration: line-through; }
</style>