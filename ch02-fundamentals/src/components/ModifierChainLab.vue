<template>
  <div class="lab">
    <h2>实验 01｜修饰符串联（2.5.3）</h2>
    <!-- 外层：带点击事件，接收冒泡 -->
    <div class="bubble" @click="log('外层触发')">
      外层盒子 @click
      <!-- 阻断冒泡 -->
      <button @click.stop="log('内层.stop：冒泡被阻止')">内层 .stop</button>
      <!-- 不阻断，冒泡到外层 -->
      <button @click="log('内层无.stop：冒泡到外层')">内层 无.stop</button>
      <!-- 串联：先阻冒泡、再阻跳转 -->
      <a href="https://vuejs.org" @click.stop.prevent="log('串联：冒泡+跳转都被拦下')">
        .stop.prevent 串联
      </a>
    </div>
    <!-- 日志展示 -->
    <ol class="logs">
      <li v-for="(item, index) in logs" :key="index">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'ModifierChainLab',
  data() {
    return { logs: [] }
  },
  methods: {
    log(msg) {
      this.logs.unshift(msg) // 新日志插最前面
    }
  }
}
</script>