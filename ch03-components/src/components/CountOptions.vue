<template>
  <div class="mini">
    <h3>选项式 API</h3>
    <p>计数器的值为：{{ count }}</p>
    <button @click="countFn">+1</button>
  </div>
</template>

<script>
export default {
  name: 'CountOptions',
  data() {
    return { count: 0 }
  },
  methods: {
    countFn() {
      this.count++
    }
  }
}
</script>