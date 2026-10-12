<template>
  <div class="lab">
    <h2>实验 07｜provide / inject 跨级</h2>
    <p>爷爷说：我提供的是「{{ car }}」</p>
    <button @click="car = car === '宝马' ? '奔驰' : '宝马'">换一辆车</button>
    <MiddleChild />
    <p class="muted">⚠️ 选项式 provide 非响应式：爷爷换车，孙子不会变</p>
  </div>
</template>

<script>
import MiddleChild from './MiddleChild.vue'
export default {
  name: 'ProvideInjectLab',
  components: { MiddleChild },
  provide() {  // 提供数据给所有后代
    return {
      car: this.car,
      appVersion: 'ch03-lab-v1'
    }
  },
  data() {
    return { car: '宝马' }
  }
}
</script>

