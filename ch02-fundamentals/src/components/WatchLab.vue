<template>
  <div class="lab">
    <h2>实验 03｜侦听器（2.7）</h2>
    <input v-model="keyword" placeholder="输入看新旧值" />
    <p v-if="savedTip" class="save-tip">{{ savedTip }}</p>
    
    <!-- 笔记列表：增删改触发自动保存 -->
    <ul>
      <li v-for="note in notes" :key="note.id">
        <label><input type="checkbox" v-model="note.done" /></label>
        {{ note.text }}
        <button @click="notes.splice(notes.indexOf(note), 1)">删除</button>
      </li>
    </ul>
    <button @click="notes.push({id:Date.now(), text:'新增笔记', done:false})">添加一条</button>

    <hr />
    <h3>deep / 路径侦听对比</h3>
    <p>user.name = {{ user.name }}｜user.city = {{ user.city }}</p>
    <button @click="user.name = '张三'">改 user.name（两种都响）</button>
    <button @click="user.city = '成都'">改 user.city（只有deep响）</button>
  </div>
</template>

<script>
export default {
  name: 'WatchLab',
  data() {
    return {
      keyword: '',
      savedTip: '',
      saveTimer: null,
      notes: [
        { id: 1, text: '侦听器自动保存演示', done: false },
        { id: 2, text: 'deep深层侦听', done: false }
      ],
      user: { name: '张三', city: '成都' }
    }
  },
  watch: {
    // 1. 简写形式：拿到新旧值
    keyword(newVal, oldVal) {
      console.log(`从 "${oldVal}" 变为 "${newVal}"`)
    },
    // 2. 标准形式 + deep + immediate：自动保存防抖
    notes: {
      handler() {
        this.savedTip = '正在保存…'
        clearTimeout(this.saveTimer)
        this.saveTimer = setTimeout(() => {
          this.savedTip = '已自动保存 ✓'
        }, 600)
      },
      deep: true,        // 侦听数组内部属性变化
      immediate: true    // 组件创建立即执行一次
    },
    // 3. 路径写法：只侦听单个嵌套属性
    'user.name'(v) {
      console.log('路径侦听 user.name：', v)
    },
    // 4. 对象深层侦听：侦听整个对象
    user: {
      handler(v) {
        console.log('deep侦听 user：', v.name, v.city)
      },
      deep: true
    }
  }
}
</script>