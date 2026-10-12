<template>
  <div class="lab">
    <h2>实验 06｜emit 子传父</h2>
    <p>父组件收到的消息：<b>{{ msg || '（还没收到）' }}</b></p>
    <SendCard @send-msg="getMsg" />
  </div>
</template>

<script>
import SendCard from './SendCard.vue'
export default {
  name: 'EmitLab',
  components: { SendCard },
  data() { return { msg: '' } },
  methods: {
    getMsg(val) {  // 形参接收子组件传来的载荷
      this.msg = val
    }
  }
}
</script>
