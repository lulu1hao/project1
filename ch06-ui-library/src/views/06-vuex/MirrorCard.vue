<!-- ============================================================
  MirrorCard.vue —— Vuex"隔壁同事"卡
  它只有一个 reset 按钮，却能改掉左卡显示的数字——
  因为两张卡 commit 的是同一间仓库的同一个 count。
  "公共仓库"四个字，这一页就是活证据。
============================================================ -->
<template>
  <div class="card">
    <h2>隔壁卡（只有重置，也能影响左卡）</h2>
    <p style="font-size: 40px; margin: 8px 0">{{ $store.state.count }}</p>
    <button @click="$store.commit('reset')">清零</button>
  </div>
</template>

<script>
export default {
  name: 'MirrorCard'
}
</script>