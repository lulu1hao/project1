<template>
  <div class="grand">
    <p>我是孙子：爷爷传来的车 = <b>{{ car }}</b></p>
    <span class="ver">{{ appVersion }}</span>
  </div>
</template>

<script>
export default {
  name: 'GrandChild',
  inject: ['car', 'appVersion']  // 直接注入祖先的数据
}
</script>
