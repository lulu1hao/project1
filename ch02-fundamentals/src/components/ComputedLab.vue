<template>
  <div class="lab">
    <h2>实验 02｜计算属性（2.6）</h2>
    <!-- 搜索框 -->
    <input v-model="keyword" placeholder="搜索笔记…" />
    <!-- 统计行：全部由 computed 计算 -->
    <p>共 {{ notes.length }} 条｜筛选后 {{ filteredNotes.length }} 条｜总字数 {{ totalChars }}｜完成率 {{ donePercent }}%</p>
    <!-- 笔记列表 -->
    <ul class="notes">
      <li v-for="note in filteredNotes" :key="note.id" :class="['', { done: note.done }]">
        <label><input type="checkbox" v-model="note.done" /></label>
        {{ note.text }}【{{ note.priority }}】
      </li>
    </ul>
    <!-- 缓存验证区 -->
    <hr />
    <h3>缓存验证</h3>
    <p>computed 调用3次：{{ totalChars }}｜{{ totalChars }}｜{{ totalChars }}</p>
    <p>methods 调用3次：{{ getTotalChars() }}｜{{ getTotalChars() }}｜{{ getTotalChars() }}</p>
    <button @click="refreshTick++">触发重渲染（改无关数据）</button>
  </div>
</template>

<script>
export default {
  name: 'ComputedLab',
  data() {
    return {
      keyword: '',
      refreshTick: 0,
      notes: [ // 自带3条假数据
        { id: 1, text: '学习单文件组件', priority: '高', done: false },
        { id: 2, text: 'v-model表单跑通', priority: '中', done: false },
        { id: 3, text: '记事本加删除功能', priority: '低', done: false }
      ]
    }
  },
  computed: {
    // 搜索过滤
    filteredNotes() {
      return this.notes.filter(n => n.text.includes(this.keyword))
    },
    // 总字数（带打印验证计算次数）
    totalChars() {
      console.log('[computed] totalChars 计算了1次')
      return this.notes.reduce((sum, n) => sum + n.text.length, 0)
    },
    // 完成率
    donePercent() {
      if (this.notes.length === 0) return 0
      const done = this.notes.filter(n => n.done).length
      return Math.round((done / this.notes.length) * 100)
    }
  },
  methods: {
    // 对照组：无缓存
    getTotalChars() {
      console.log('[methods] getTotalChars 执行了1次')
      return this.notes.reduce((sum, n) => sum + n.text.length, 0)
    }
  }
}
</script>