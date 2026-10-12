<template>
  <div class="lab">
    <h2>实验 02｜生命周期</h2>
    <button @click="show = !show">
      {{ show ? '卸载组件' : '挂载组件' }}
    </button>
    <LifecycleLab v-if="show" />
  </div>
</template>

<script>
import LifecycleLab from './LifecycleLab.vue'
export default {
  name: 'LifecycleDemo',
  components: { LifecycleLab },
  data() { return { show: true } },
  mounted() {
    console.log('[父组件] mounted：我后于子组件')
  }
}
</script>
