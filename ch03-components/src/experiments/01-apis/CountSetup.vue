<template>
  <div class="mini">
    <h3>组合式 API</h3>
    <p>计数器的值为：{{ count }}</p>
    <button @click="countFn">+1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const countFn = () => {
  count.value++  // script 内要 .value，模板自动解包
}
</script>
