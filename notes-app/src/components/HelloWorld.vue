<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <!-- ……欢迎页图片与链接…… -->
  <button type="button" class="counter" @click="count++">
    Count is {{ count }}
  </button>
</template>