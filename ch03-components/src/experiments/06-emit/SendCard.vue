<template>
  <div class="mini">
    <h3>子组件 SendCard</h3>
    <button @click="send">发送动态数据</button>
    <button @click="sendHello">发送固定问候</button>
  </div>
</template>

<script>
export default {
  name: 'SendCard',
  emits: ['sendMsg'],  // 声明事件
  data() {
    return { msg: '我是子组件里的数据' }
  },
  methods: {
    send() {
      this.msg = '子组件消息 ' + new Date().toLocaleTimeString()
      this.$emit('sendMsg', this.msg)  // 触发事件 + 传载荷
    },
    sendHello() {
      this.$emit('sendMsg', 'Hello from 子组件！')
    }
  }
}
</script>
