<template>
  <div class="middle">
    <p>我是中间层：<b>零传递</b>，不做任何 props 转发</p>
    <GrandChild />
  </div>
</template>

<script>
import GrandChild from './GrandChild.vue'
export default {
  name: 'MiddleChild',
  components: { GrandChild }
}
</script>
