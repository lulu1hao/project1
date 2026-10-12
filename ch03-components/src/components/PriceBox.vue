<template>
  <div class="mini">
    <h3>PriceBox 子组件</h3>
    <p>单价：{{ price }}，数量：{{ count }}，总计：{{ total }}</p>
  </div>
</template>

<script>
export default {
  name: 'PriceBox',
  props: {
    price: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      required: true  // 必填，不传会警告
    }
  },
  computed: {
    total() {
      return this.price * this.count
    }
  }
}
</script>
