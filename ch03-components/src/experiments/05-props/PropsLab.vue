<template>
  <div class="lab">
    <h2>实验 05｜props 父传子</h2>
    <div class="pair">
      <PriceBox :price="price" :count="count" />
      <PriceBox :price="price" :count="badCount" />
    </div>
    <p>正常 count = {{ count }}｜错误类型 badCount = {{ badCount }}（看Console警告）</p>
    <button @click="count++">count +1</button>
  </div>
</template>

<script>
import PriceBox from './PriceBox.vue'
export default {
  name: 'PropsLab',
  components: { PriceBox },
  data() {
    return {
      price: 3999,
      count: 2,
      badCount: 'abc'  // 故意传错类型，触发校验警告
    }
  }
}
</script>
