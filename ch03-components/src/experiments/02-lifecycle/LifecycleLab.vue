<template>
  <div class="inner">
    <p>count = {{ count }}（点+1触发 updated）</p>
    <button @click="count++">+1</button>
    <ol class="logs">
      <li v-for="(item, index) in logs" :key="index">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'LifecycleLab',
  data() {
    return {
      count: 0,
      timer: null,
      logs: [],
      lastUpdatedCount: null  // 防止 updated 死循环
    }
  },
  methods: {
    log(msg) {
      this.logs.push(msg)
    }
  },
  created() {
    this.log('1. created：组件创建，data可用，拿不到DOM')
  },
  mounted() {
    this.log('2. mounted：DOM就绪，可发请求/开定时器')
    this.timer = setInterval(() => console.log('tick'), 2000)
  },
  updated() {
    if (this.lastUpdatedCount !== this.count) {
      this.lastUpdatedCount = this.count
      this.log(`3. updated：数据变化后 count = ${this.count}`)
    }
  },
  unmounted() {
    clearInterval(this.timer)  // 销毁时清理定时器，防内存泄漏
    console.log('4. unmounted：组件销毁，定时器已清理')
  }
}
</script>