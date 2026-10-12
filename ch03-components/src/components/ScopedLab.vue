<template>
  <div class="lab">
    <h2>实验 04｜样式冲突与 scoped</h2>
    <div class="box">
      父组件自己的 .box（绿色边框）
      <ScopedChild />
    </div>
    <p>:deep() 穿透：下面子组件的边框被父组件改成红色</p>
    <div class="deep-zone">
      <ScopedChild />
    </div>
  </div>
</template>

<script>
import ScopedChild from './ScopedChild.vue'
export default {
  name: 'ScopedLab',
  components: { ScopedChild }
}
</script>

<style scoped>
/* 父子同名类 .box：互不干扰 */
.box { border: 2px solid var(--primary); border-radius: 8px; padding: 10px; margin: 8px 0; }

/* :deep() 穿透：影响子组件内部 */
.deep-zone :deep(.box) {
  border: 2px solid #c0392b;
}
</style>
