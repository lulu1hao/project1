<template>
  <div class="box">
    子组件的 .box（蓝色边框）
  </div>
</template>
<script>
export default { name: 'ScopedChild' }
</script>
<style scoped>
.box { border: 2px solid var(--accent); border-radius: 8px; padding: 10px; margin: 8px 0; }
</style>
