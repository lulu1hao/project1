# 第 02 课：Vue 开发基础 —— 单文件组件 · 数据绑定 · 指令 · 事件处理

| 项目 | 内容 |
|---|---|
| 课程 | WEB 前端框架技术（203051）· 2026—2027 学年第一学期 · 2024 级计算机科学与技术 |
| 本课学时 | **4 学时（180 分钟）**：上半场 90′ + 课间 10′ + 下半场 90′，**以实验任务流为主线**，知识点在做中穿插讲 |
| 教材 | 《Vue.js 前端开发实战（第 2 版）》黑马程序员，人民邮电出版社 · 第 2 章 2.1—2.5 |
| 对应教案单元 | **第 5—8 学时**：学时 5—6 = 2.1 单文件组件、2.2 数据绑定、2.3 指令；**第 7—8学时**： 2.4 事件对象、2.5 事件修饰符 |
| 对应实验 | [实验 2](../实验指导/实验2-单文件组件数据绑定与指令.md) 全部任务 + [实验 3](../实验指导/实验3-事件处理与计算属性.md) 任务 1—2（事件对象、事件修饰符）；计算属性（实验 3 任务 3—5）留到第 03 课 |
| 对应大纲 | 实验项目 2「表单交互与动态列表展示」（任务二 · 阶段 1） |
| 本课新规 | 《[00-项目目录与命名规范](../实验指导/00-项目目录与命名规范.md)》全学期启用（任务 0 执行整改） |

> **本课怎么上**：不讲"先理论后练习"——**直接开做实验，把项目一步步长出来，知识点在做到哪讲到哪**。本课启动贯穿全学期的记事本项目 **notes-app**（第 8 章演进为"微商城"），每个任务完成时页面上都会"长"出新东西（配效果图对照自查）。四个约定：
> ① 动手代码统一**选项式 API**（`data`/`methods`），与实验验收一致；教材第 2 章是组合式（`<script setup>` + `ref`/`reactive`），穿插"教材写法对照"——**选项式会写、组合式会读**；
> ② 每个任务后附 **🐣 初学者卡点表**（往届同学真实踩过的坑），卡住先查表再举手；
> ③ **目录与命名从本课起严格执行《00-项目目录与命名规范》**——上次课的路径混乱在本课任务 0 一次性整改；
> ④ 课末按新格式提交 Git（`lab02-binding-学号`）。

---

## 〇、上课前 3 分钟：先对齐"环境事实"

**教学机房已统一预装**（个人电脑对照《[00-环境准备与搭建报告](../实验指导/00-环境准备与搭建报告.md)》）。本课所有命令输出以下表**教师机实测值**为准（实测日期 2026-10-05）：

| 工具 | 机房要求 | 教师机实测 | 用途 |
|---|---|---|---|
| Node.js | ≥ 18（推荐 20/22 LTS） | **v22.23.2** | JS 运行环境 |
| npm | ≥ 9（随 Node 附带） | **10.9.8** | 包管理（镜像源 npmmirror） |
| 脚手架 create-vite | latest | **9.2.1** | 创建 Vite 项目 |
| Vite（脚手架安装后） | — | **8.3.2** | 开发服务器 / 构建工具 |
| Vue（脚手架安装后） | 3.x | **3.5.42** | 本课程框架 |
| VS Code + Vue Official(Volar) | 最新稳定版 | **1.138.0（实测）** | 编辑器（不可与 Vetur 共存） |

> ⚠️ **五处"过时/不一致口径"预警**（教材与 PPT 成书于 Vite 2/3 时代，以下均已在教师机实测验证，本课按实测口径执行）：
> 1. **创建项目命令**：教材 `yarn create vite` 已失效（第 01 课已勘误），本课程统一 `npm create vite@latest`——本课用**复制项目**方式启动 notes-app，不再新建；
> 2. **脚手架交互变了**：选完 Vue → JavaScript 后会**多一步** `Install with npm and start now?`（问是否自动装依赖并启动），选 `No` 手动执行；变体列表里的 **`Official Vue Starter ↗` 不要选**；
> 3. **API 风格不一致**：教材第 2 章全章组合式（`<script setup>` + `ref`/`reactive`），脚手架默认组件也是组合式；实验与贯穿项目用**选项式**——本课双轨对照，不冲突；
> 4. **两处 Vue 2 时代残留说法**（实验文档已同步勘误）：`this.$set` 在 Vue 3 **已移除**；"template 多根元素会报错"在 Vue 3 **不成立**（Fragment 特性）——课程仍统一**单根**写法；
> 5. **教材目录/命名无统一规范**：本课程以《[00-项目目录与命名规范](../实验指导/00-项目目录与命名规范.md)》为准——项目名全英文短横线、实验 2 起只在 notes-app 里干活、提交信息 `labNN-短名-学号`。

---

## 一、本节课流程总览（4 学时 · 以实验任务为主线）

### 上半场（学时 5—6，90′）：实验 2 —— notes-app 从无到有

| # | 实验任务（主线） | 穿插讲解的知识点 | 时间 | 对应 |
|---|---|---|---|---|
| 0 | 任务 0：**目录体检整改** + 复制启动 notes-app | 命名规范五条铁律 · 脚手架欢迎页解剖 · 组件化初印象 | 8′ | 实验 2 任务 0 |
| 1 | 任务 1：创建第一个组件 NoteCard | **2.1 单文件组件**：三段结构 / data 是函数 / 单根规范 / 局部注册三步 | 15′ | 实验 2 任务 1 |
| 2 | 任务 2：插值表达式与响应式验证 | **2.2 数据绑定**：插值规则 / 响应式原理 / $set 口径修正 / 双轨对照 | 15′ | 实验 2 任务 2 |
| 3 | 任务 3：六类指令逐项实操 | **2.3 指令**：v-text/v-html、v-bind、v-on、v-model、v-if/v-show、v-for+`:key` | 37′ | 实验 2 任务 3 |
| 4 | 任务 4：综合任务——记事本雏形 | 知识综合 · 贯穿项目数据结构定型 | 10′ | 实验 2 任务 4 |
| 5 | 上半场收尾：提交 lab02 + 小结 | Git 四步口诀 | 5′ | 实验 2 任务 5 |

**课间 10′**（服务器不用关；屏幕锁定，回来继续）

### 下半场（学时 7—8，90′）：实验 3 前半 —— 事件让页面"活"起来

| # | 实验任务（主线） | 穿插讲解的知识点 | 时间 | 对应 |
|---|---|---|---|---|
| 6 | 开场衔接：上半场高频问题集中答疑 + 本半场目标 | —— | 5′ | —— |
| 7 | 实验 3 任务 1：事件对象 | **2.4**：$event 两种获取 / target · currentTarget · type / 鼠标键盘事件 / $emit 概念预告 | 25′ | 实验 3 任务 1 |
| 8 | 实验 3 任务 2：事件修饰符 | **2.5.1—2.5.2**：五类修饰符分类 / .stop 冒泡对比 / .prevent / .once / .self / .enter·.esc | 40′ | 实验 3 任务 2 |
| 9 | 下半场综合小练：给记事本加 Esc 清空 | 修饰符迁移应用 | 10′ | 实验 3 作业 1 前移 |
| 10 | 课末提交 + 知识梳理 + 作业与预告 | 知识树 · 课堂五问 | 10′ | 实验 3 任务 5（增量提交） |

（教师参考：本课全部代码已在教师机实测跑通，完整可运行版本存于 [参考代码/notes-app](../参考代码/notes-app/)，与脚手架原始模板 [参考代码/scaffold-原始模板](../参考代码/scaffold-原始模板/) 对照使用；课堂各阶段真实截图存于 [第02课效果图](./第02课效果图/)。）

---

#  上半场（学时 5—6）

## 任务 0｜目录体检整改 + 复制启动 notes-app（8 分钟）

### 【做】第 1 步：按《命名规范》体检并整改课程目录（约 4′）

> 📖 **穿插知识点：为什么管命名**（第一次课的三个真实教训）：① 实测 create-vite 9.2.1 会把**中文项目名清洗成空壳**（`package.json` 的 name 变成 `scaffold--`）；② 中文路径在终端里显示 `\346\226...` 乱码、工具链偶发找不到文件；③ 项目建在桌面/C 盘/嵌套文件夹，下次课自己都找不到。**路径和命名不是个人习惯，是团队协作的接口。**

**全学期唯一合法的目录树**（详见《[00-项目目录与命名规范](../实验指导/00-项目目录与命名规范.md)》第二节）：

```
D:\web-framework-2024xxxx\            ← 课程总仓库（学号=身份，D 盘根，全英文）
├── README.md                          ← 学号/姓名登记
├── labs\lab01-env\my-first-vue-app\   ← 实验 1 项目（原 lab01-环境搭建 改名）
├── notes-app\                         ← 贯穿项目：实验 2 起所有功能都在这里
└── screenshots\                       ← 全学期截图：labNN-序号-说明.png
```

**命名五条铁律**（速记）：目录/项目/截图 = **小写短横线全英文**；组件文件 = **大驼峰**；**姓名不进路径**（学号在根目录名、git user.name、commit 三处体现）；**见名知义**；**新建前先查树**。**从实验 2 起没有"新建项目"这个动作**——只在 notes-app 里加功能。

对照体检表逐项打勾（不合规范按下方命令整改）：

- [ ] 根目录在 **D 盘根**、名为 `web-framework-2024xxxx`（无中文/空格，不在桌面、C 盘、嵌套目录）
- [ ] `labs\lab01-env\my-first-vue-app` 存在（原 `lab01-环境搭建` 已改名）
- [ ] `screenshots` 文件夹已建立
- [ ] `git status` 正常、`git config user.name` 为"学号+姓名"

> 💻 本课命令统一在 **CMD（命令提示符）** 中执行：开始菜单搜「cmd」，或 VS Code 终端面板右上角下拉箭头 → 选 **Command Prompt**。

```bat
rem 情形 A：根目录名不对 / 含中文（在 D 盘根执行）
move "D:\原来的目录名" D:\web-framework-2024xxxx

rem 情形 B：实验 1 目录还是中文名（ren = 重命名）
cd /d D:\web-framework-2024xxxx\labs && ren lab01-环境搭建 lab01-env

rem 建截图目录
mkdir D:\web-framework-2024xxxx\screenshots

rem 验证：改名不影响 Git 提交历史
git status && git log --oneline -3
```

📸 **截图留档**：整改后的目录结构截一张图，存 `screenshots\lab02-00-folder-tree.png`——本课第一份过程凭证。

### 【做】第 2 步：复制项目为 notes-app 并启动（约 4′）

```bat
npm create vite@latest my-first-vue-app
npm install
npm run dev
```

> `xcopy` 参数速记：`/E` 连子目录一起复制（含空目录）、`/I` 目标按目录处理、`/H` 含隐藏文件、`/Y` 覆盖时不询问——整体效果等价于"复制整个项目文件夹并改名"。

看到如下输出即成功（**实测输出，Vite 已是 8.x，别再抄教材的 2.x/3.x 版本号**）：

```
  VITE v8.3.2  ready in 1914 ms
  ➜  Local:   http://localhost:5173/
```

### 【讲】第 3 步：趁启动空档解剖欢迎页（开课热身）

**当前脚手架的 `src/App.vue`（实测，极简）**：

```vue
<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld />
</template>
```

**`src/components/HelloWorld.vue` 节选（欢迎页全部内容都在这，含计数器按钮）**：

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <!-- ……欢迎页图片与链接…… -->
  <button type="button" class="counter" @click="count++">
    Count is {{ count }}
  </button>
</template>
```

> ❓ **课堂三连问**（学生先答再揭示，答案就是本课四大板块的引子）：
> 1. 欢迎页上的内容，在哪个文件里？（`HelloWorld.vue`——`App.vue` 只是"装配工"，页面由组件拼装 = **组件化**）
> 2. `Count is {{ count }}` 里的 `{{ }}` 是什么？（**插值表达式**，任务 2 的主角）
> 3. 点按钮数字 +1，谁在改页面？（**没人改页面，改的是数据**——数据驱动视图，任务 2 讲透）
> 4. 下半场我们还要让页面"听懂"鼠标和键盘（**事件**）。

**本课终点效果图（先看见再出发）**：180 分钟后，欢迎页会变成一个你自己一行行敲出来的记事本 + 事件实验室：

![上半场终点：记事本雏形](第02课效果图/07-任务4-记事本雏形.png)

![下半场终点：事件实验室](第02课效果图/09-下半场-事件修饰符.png)

**当前效果（任务 0 完成时的页面）**——给"起点"留个影（实验 1 已截过欢迎页的无需重复截图）：

![任务0效果图](第02课效果图/01-任务0-启动验证-欢迎页.png)

✅ **检查点 0**：① 目录体检 4 项全过、`lab02-00-folder-tree.png` 已存；② notes-app 能启动访问。

### 🐣 初学者卡点 0（命名与路径——第一次课实录）

| 现象 | 原因 | 解决 |
|---|---|---|
| 项目建在桌面 / C 盘 / 嵌在别的文件夹里 | 没有固定"家" | 一律挪到 `D:\web-framework-2024xxxx\`（规范第二节标准树） |
| 目录或项目名含中文/空格 | 以为"自己看得懂就行" | 全改英文短横线；实测脚手架会把中文项目名清洗成空壳 |
| `cp` 提示"不是内部或外部命令" | `cp` 是 Linux/Git Bash 命令，本课程统一用 CMD | 按上方命令块用 `xcopy labs\lab01-env\my-first-vue-app notes-app /E /I /H /Y`；或资源管理器复制 `my-first-vue-app` 文件夹重命名为 `notes-app` |
| `npm install` 报 `Cannot find module 'vite'` 一堆错 | 复制时 `node_modules` 没拷全 | 删掉 `node_modules` → 重新 `npm install` |
| `Port 5173 is in use` | 上次 dev 服务器没关 | 旧终端 `Ctrl+C`；急用 `npm run dev -- --port 5174` |
| 双击 `index.html` 打开是白屏 | Vite 项目不能当普通网页开 | 必须 `npm run dev` → 访问 `http://localhost:5173/` |

---

## 任务 1｜创建第一个单文件组件（15 分钟）

### 【做】第 1 步：新建 `src/components/NoteCard.vue`，完整敲一遍

```vue
<template>
  <div class="note-card">
    <h3>{{ title }}</h3>
    <p>这是一个单文件组件</p>
  </div>
</template>

<script>
export default {
  name: 'NoteCard',        // 组件 name 与文件名一致（规范铁律 2）
  data() {                 // data 必须是函数，返回对象（原因见知识点 2）
    return { title: '我的第一条笔记' }
  }
}
</script>

<style scoped>
.note-card { border: 1px solid #42b883; padding: 10px 16px; border-radius: 6px; }
</style>
```

### 【讲】知识点 1：单文件组件（SFC）的三段结构

**单文件组件（Single File Component）**：一个 `.vue` 文件 = 一个组件，结构、逻辑、样式写在一个文件里：

| 段 | 职责 | 类比 |
|---|---|---|
| `<template>` | 结构：HTML 写"长什么样" | 人的身体 |
| `<script>` | 逻辑：JS 写"有什么数据、干什么事" | 大脑 |
| `<style scoped>` | 样式：CSS 写"好看" | 衣服（`scoped` = 这件衣服只有本组件能穿） |

`.vue` 文件浏览器不认识——由 Vite 开发时按需编译成 JS（第 01 课"按需编译"的落点）。

### 【讲】知识点 2：`data` 必须是函数（考点）

组件可能被多处复用，`data()` 每次调用返回**新对象**，保证每个实例的数据**互相隔离**（本课页面里两个组件的 count 会各自独立变化，亲眼看到）。写成对象 `data: { ... }` 直接报错。

### 【做】第 2 步：改写 `src/App.vue`，把组件用起来

**整体替换**（脚手架默认的 `<script setup>` 版换成选项式；`HelloWorld` 不再使用；`style.css` 欢迎页样式整体清空换极简基础样式，见参考代码）：

```vue
<template>
  <div id="app">
    <h1>记事本 · 第 2 章实验</h1>
    <NoteCard />
  </div>
</template>

<script>
import NoteCard from './components/NoteCard.vue'
export default {
  components: { NoteCard }
}
</script>
```

### 【讲】知识点 3：使用组件的三步（局部注册，3.3 详讲）

```js
import NoteCard from './components/NoteCard.vue'   // ① 引入
export default { components: { NoteCard } }        // ② 注册
```
```html
<NoteCard />                                        <!-- ③ 使用 -->
```

> 📖 **教材写法对照①**：教材第 2 章组件用组合式——`<script setup>` 里 `import { ref } from 'vue'` 后直接 `const title = ref('...')`。两种写法编译结果等价。**脚手架默认给组合式，我们课堂练选项式**（与实验验收、贯穿项目一致）；任务 2 专门练"换算眼力"。

### 【做】第 3 步：动手验证"根元素"口径（30 秒）

故意给 `template` 加第二个根元素 → 保存 → **页面不报错、正常渲染**（Vue 3 Fragment 特性；"多根报错"是 Vue 2 行为，已实测验证）。看完改回**单根**——课程规范（多根有"属性透传给谁"的歧义，第 3 章会遇到）。

### 【看】效果图：做到这里，页面应该是这样

![任务1效果图](第02课效果图/02-任务1-第一个组件NoteCard.png)

✅ **检查点 1**：① 绿色边框卡片显示；② 能口述三段结构职责；③ 能说出"引入 → 注册 → 使用"三步。

> 📸 **截图留档**：`screenshots\lab02-01-notecard.png`。

### 🐣 初学者卡点 1

| 现象 | 原因 | 解决 |
|---|---|---|
| `.vue` 文件全白无高亮 | 没装 Vue Official / 被 Vetur 接管 | 装 Vue Official (Volar)；禁用 Vetur |
| 白屏 + `Failed to resolve import "./components/NoteCard.vue"` | 路径少 `./`、少 `.vue`、大小写不一致 | 对照 import 行逐字符核对 |
| 页面出现 `<NoteCard />` 原文，或控制台 `Unknown custom element` | 只 import 没注册 | 补 `components: { NoteCard }` |
| 改了代码页面没反应 | 没 `Ctrl+S` | 保存；看终端有无红色报错 |
| 组件直接编译失败 | 把 `export default` 写进了 `<script setup>` | 选项式用**不带 setup** 的 `<script>`，两种风格不混写 |
| 花括号红线、语法错 | 用了**中文冒号/中文引号** | 全换英文符号（写代码前切英文标点） |
| 组件文件叫 `card2.vue`、`新组件.vue` | 违反命名铁律 2/4 | 组件统一 **PascalCase 且见名知义**：`NoteCard.vue` |

---

## 任务 2｜插值表达式与数据绑定（15 分钟）

### 【做】第 1 步：在 NoteCard 里加"插值三连"

`data` 补两个字段，`template` 的 `<h3>` 后加三行：

```vue
<p>{{ message }}</p>
<p>{{ message.toUpperCase() }}</p>
<p>{{ 1 + 2 * 3 }}</p>
```

```js
data() {
  return {
    title: '我的第一条笔记',
    message: 'hello vue',
    count: 0
  }
}
```

### 【讲】知识点 1：插值表达式 `{{ }}` 的规则

数据绑定 = **数据与页面分离**：用 **Mustache 语法（双大括号）**把数据渲染进模板。`{{ }}` 里只能写**一个表达式**（有值的式子）：

| 写法 | 结果 |
|---|---|
| `{{ message }}` | hello vue |
| `{{ message.toUpperCase() }}` | HELLO VUE（JS 方法调用） |
| `{{ 1 + 2 * 3 }}` | 7（四则运算） |
| `{{ if (...) ... }}` | ❌ 报错——语句不行，条件用三元 |

### 【做】第 2 步：3 秒响应式验证

把 `mounted` 加进 **NoteCard.vue 的 `export default {}` 里——与 `data` 平级**（它是生命周期钩子，不是方法，写进 `methods` 里不会自动执行）。加完后组件结构如下：

```js
export default {
  name: 'NoteCard',
  data() {
    return {
      title: '我的第一条笔记',
      message: 'hello vue',
      count: 0
    }
  },
  mounted() {                    // 挂载完成后自动执行一次（与 data、methods 平级）
    setTimeout(() => {
      this.count = 100           // 只改数据，不碰 DOM
    }, 3000)
  }
}
```

NoteCard 的 template（`<h3>` 下方）放 `<p>count = {{ count }}（3 秒后自动变 100）</p>`。保存盯着页面：**3 秒后 0 自动跳 100**。

### 【讲】知识点 2：响应式——数据变了页面为什么自动变

Vue 在数据和视图之间架了**自动同步机制**（第 01 课 MVVM 里 ViewModel 干的活）：改数据 → Vue 监听到 → 自动更新对应 DOM。本课建立直觉，原理（Proxy）第 3 章展开。

> ⚠️ **口径修正（重要，已实测）**：Vue 2 时代"给对象**新增属性**、按**索引**改数组不触发更新，需 `this.$set`"——**Vue 3（Proxy）限制全部消失**，直接赋值就更新；`this.$set` **已移除**（实测为 `undefined`）。任务 3 会加两个验证按钮自证——**用实验说话，不背旧结论**。

### 【讲】知识点 3：选项式 vs 组合式"换算对照表"（本课难点）

| | 选项式（课堂主线） | 组合式（教材第 2 章） |
|---|---|---|
| 声明 | `data() { return { name: '' } }` | `const name = ref('')`（基本类型）<br>`const form = reactive({ name: '' })`（对象） |
| script 中读写 | `this.name` | `name.value`（ref 要 `.value`）<br>`form.name`（reactive 不用） |
| 模板中 | `{{ name }}` | `{{ name }}`（**自动解包**） |
| 方法 | `methods: { add() {} }`，内部 `this.` | 直接 `function add() {}`，内部无 `this` |

> 📖 **教材写法对照②**：教材 2.2.2 的 `toRef()`/`toRefs()`（reactive 属性转 ref）本课**了解即可**，读到组合式代码能认出就行。
>
> ❓ **课堂设问**：为什么脚手架默认组合式、我们却先练选项式？（组合式逻辑复用强、官方主推，第 3 章正式上手；选项式"数据一块、方法一块"结构清晰，从大一 JS 过渡最顺——**先立骨架，再换引擎**。）

### 【看】效果图：做到这里（等满 3 秒后截图）

![任务2效果图](第02课效果图/03-任务2-插值与响应式.png)

✅ **检查点 2**：① 插值三连输出 `hello vue` / `HELLO VUE` / `7`；② 3 秒后 count 自动变 100；③ 能口述"改数据页面为什么自动变"。

### 🐣 初学者卡点 2

| 现象 | 原因 | 解决 |
|---|---|---|
| `{{ message }}` 原样显示成文字 | 写到了组件 template 之外（如 index.html） | 插值只在 Vue 管辖的模板内生效 |
| `{{ if ... }}` 报错 | 插值只支持表达式 | 条件用三元 `x ? 1 : 2` |
| 3 秒后页面没变 | `mounted` 拼错 / 写进了 `methods` / 没保存 | `mounted` 与 `data`、`methods` **平级** |
| 写 `count = 100` 页面不变 | 漏 `this`，成了局部变量 | `this.count = 100` |
| 组件白屏 + 终端语法错 | `data` 成员之间**漏逗号** | 成员间用逗号分隔 |
| 回调里 `this.count` 报 undefined | `setTimeout` 回调用了普通 `function` | 回调用**箭头函数** `() => {...}` |

---

## 任务 3｜六类指令逐项实操（37 分钟 · 六小步，每步敲完立即看效果）

**指令（Directive）**：带 `v-` 前缀的特殊模板属性，给标签"附加行为"。全程在 `NoteCard.vue` 里**叠代码**。

| 步 | 类别 | 指令 | 一句话 |
|---|---|---|---|
| 3.1 | 内容渲染 | `v-text` / `v-html` | 往标签里放内容 |
| 3.2 | 属性绑定 | `v-bind`（简写 `:`） | 让属性值跟随数据 |
| 3.3 | 事件绑定 | `v-on`（简写 `@`） | 让页面事件触发方法（下半场深挖） |
| 3.4 | 双向绑定 | `v-model` | 表单 ↔ 数据互相同步 |
| 3.5 | 条件渲染 | `v-if` / `v-else` / `v-show` | 控制元素显隐 |
| 3.6 | 列表渲染 | `v-for` | 用数据批量生成元素 |

### 3.1 内容渲染指令 v-text / v-html（5′）

```html
<p v-text="rawText"></p>   <!-- 按纯文本渲染，HTML 标签不解析 -->
<p v-html="htmlText"></p>  <!-- 解析 HTML 标签后渲染 -->
```

```js
rawText: '<b>我是 v-text 的纯文本</b>',    // 页面原样显示这串字符
htmlText: '<b>我是 v-html 解析出的加粗</b>'  // 页面显示被 <b> 加粗的文字
```

知识点：`{{ }}` 用在标签内部，v-text/v-html 直接**替换整个内容**。
⚠️ **v-html = XSS 入口**：它把字符串当 HTML 执行——**永远不要用它渲染用户输入**。

> 💡 **思政融入**：XSS 是《网络安全法》"不得危害网络安全"的高发技术落点。前端是用户数据的第一道闸门——**代码写得安全，就是工程师的职业操守与法律底线**。

### 3.2 属性绑定指令 v-bind（8′）

`{{ }}` 不能写进属性，属性"跟随数据"用 `v-bind`（简写 `:`，**属性值就是 JS 表达式**）：

```html
<img :src="imgSrc" :title="tipTitle" width="96" />
<p :class="{ active: count > 0 }">count 大于 0 时这行变高亮</p>
```

```js
imgSrc: 'https://vuejs.org/images/logo.svg',
tipTitle: '我是 :title 绑定的悬停提示'
```

`active` 样式类本组件还没有——不补样式，"变高亮"就看不到效果。位置：NoteCard.vue 的 `<style scoped>` 里，`.note-card` 那行的后面：

```css
/* 修改前 */
.note-card { border: 1px solid #42b883; padding: 10px 16px; border-radius: 6px; }

/* 修改后（新增第 2 行） */
.note-card { border: 1px solid #42b883; padding: 10px 16px; border-radius: 6px; }
.active { color: #42b883; font-weight: bold; }
```

知识点：`:class` **对象语法** `{ 类名: 布尔表达式 }`（字符串/数组语法见 2.8）。

### 3.3 事件绑定指令 v-on（4′）

NoteCard 首次出现 `methods` 选项。位置：`export default` 里，**与 `data`、`mounted` 平级**（三项顺序不拘，课程统一 data → methods → mounted）：

```html
<button @click="count++">count +1（内联语句）</button>
<button @click="say('你好', $event)">say（方法 + 传参）</button>
```

script 结构修改前后对照：

```js
// 修改前（任务 2 时的结构，省略号代表已有内容）
export default {
  name: 'NoteCard',
  data() { return { /* ……已有数据…… */ } },
  mounted() { /* ……3 秒响应式验证…… */ }
}

// 修改后（data 后补逗号，插入 methods）
export default {
  name: 'NoteCard',
  data() { return { /* ……已有数据…… */ } },
  methods: {
    say(word, event) {
      alert(word + '｜事件类型：' + event.type)
    }
  },
  mounted() { /* ……3 秒响应式验证…… */ }
}
```

知识点：不加括号时方法**首参自动是事件对象**；加括号传参时用 `$event` 占位——**这是下半场的主角，先埋个伏笔**。

> ❓ **课堂设问**：`@click="say()"` 里 `event` 为什么是 `undefined`？（括号一加，参数全靠手动传——想拿事件对象必须写 `say($event)`。下半场第 7 个任务专攻它。）

### 【看】效果图：3.1—3.3 做完（点过一次 count+1，高亮生效）

![任务3a效果图](第02课效果图/04-任务3a-内容属性事件绑定.png)

✅ **阶段自检**：v-text 显示原字符串、v-html 显示加粗、图片显示且悬停有提示、两按钮有效。

### 3.4 双向数据绑定指令 v-model（8′）

**表单三件套**——输入框、单选框、复选框（大纲明确要求，实验项目 2 验收点）：

```html
<p>实时展示 → 姓名：{{ form.name }}｜性别：{{ form.gender }}｜爱好：{{ form.hobbies.join('、') }}</p>

<input v-model="form.name" placeholder="输入姓名" />
<label><input type="radio" value="男" v-model="form.gender" /> 男</label>
<label><input type="radio" value="女" v-model="form.gender" /> 女</label>
<label><input type="checkbox" value="篮球" v-model="form.hobbies" /> 篮球</label>
<label><input type="checkbox" value="编程" v-model="form.hobbies" /> 编程</label>
```

`form` **合并**进 NoteCard 的 `data`（一个组件只有一个 `data`，不要另写一个）。位置：`data` 的 `return` 对象末尾：

```js
// 修改前（return 里是前面已加的字段）
data() {
  return {
    // ……title、message、count、rawText、htmlText、imgSrc、tipTitle……
  }
}

// 修改后（末尾新增 form 一行，上一行记得补逗号）
data() {
  return {
    // ……前面已加的字段……
    form: { name: '', gender: '', hobbies: [] }
  }
}
```

知识点：v-model = **双向同步**；**单选框绑单值、复选框绑数组**；顶部"实时展示"行是双向绑定最直观的证据；修饰符 `.number`/`.trim`。

> 📖 **教材写法对照③**：v-model 是指令，两种 API 下**写法完全一样**；差别只在 `form` 声明位置。

### 【看】效果图：3.4 做完（填了姓名、选了性别、勾了爱好）

![任务3b效果图](第02课效果图/05-任务3b-v-model表单三件套.png)

📸 **截图留档**：`screenshots\lab02-02-form.png`。

### 3.5 条件渲染指令 v-if / v-else / v-show（6′）

```html
<button @click="show = !show">切换显隐（观察 DevTools 元素面板）</button>
<p v-if="show">v-if：条件为真我才被"渲染"出来</p>
<p v-else>v-else：上面条件为假时才轮到我</p>
<p v-show="show">v-show：我一直存在，只是被 display:none 藏起来</p>
```

**人人动手 30 秒**：F12 元素面板 → 点"切换显隐" → `v-if` 的节点**创建/销毁**；`v-show` 的节点**一直在**，只有 `display: none` 在变。

| | v-if | v-show |
|---|---|---|
| 实现 | 真删真建 DOM 节点 | 只切 CSS `display` |
| 切换开销 | 高 | 低 |
| 适用 | 条件很少变（权限区块） | 频繁切换（Tab 面板） |

### 3.6 列表渲染指令 v-for（6′）

```html
<ul>
  <li v-for="(subject, index) in subjects" :key="index">
    {{ index }} - {{ subject }}
  </li>
</ul>
```

```js
subjects: ['语文', '数学', 'Vue']
```

知识点：`(项, 索引) in 数组`；也支持对象/数字/字符串；**:key 是 v-for 的标配**。

> ❓ **课堂设问**：`:key` 绑什么？为什么**不建议用 index**？
> （index 是"位置"不是"身份"：删除第 1 条后原第 2 条 index 变 0，Vue 对节点的记忆全部错位——轻则状态串位，重则渲染错乱。**数据有唯一 id 就用 id**，正如你的身份是学号而不是"第 3 排第 5 座"——座次会变，学号不变。）
>
> **现场实验**：删掉 `:key` → 控制台出现 Vue 警告 → 补回，警告消失。
>
> 💡 **思政融入**：`:key` 教的是"**唯一标识**"思维——学号、身份证号、商品条码，现代社会运转在"万物有唯一 ID"的规则之上。写代码守规则，做事讲诚信。

顺手加两个"响应式验证按钮"（口径修正的自证材料）：

```html
<button @click="subjects[1] = '英语（索引赋值）'">数组索引赋值</button>
<button @click="form.school = '成都理工大学工程技术学院'">对象新增属性</button>
<p v-if="form.school">{{ form.school }}</p>
```

点这两个按钮：列表第二项即时变化、新属性行即时出现——**Vue 3 没有 Vue 2 的响应式限制**。

### 【看】效果图：任务 3 全部完成

![任务3c效果图](第02课效果图/06-任务3c-条件与列表渲染.png)

✅ **检查点 3**：① 六类指令全部跑通；② 删 `:key` 见过警告并补回；③ 能说清 v-if/v-show 在 DevTools 里的差异；④ 两个响应式验证按钮都点过。

### 🐣 初学者卡点 3（按指令分组）

| 现象 | 原因 | 解决 |
|---|---|---|
| v-html 里放 `<script>` 没执行 | 浏览器安全策略（innerHTML 的 script 不执行） | 这正是安全机制；但 `img onerror` 等攻击仍可行——**用户输入永远不进 v-html** |
| `:src` 图片不显示 | URL 错 / 本地图片路径不对 | 核对 URL；本地图片放 `src/assets/` 用 import，或 `public/` 绝对路径 |
| `:title="{{ x }}"` 报错 | 属性值里嵌套插值 | 直接 `:title="x"` |
| `@click="say()"` 里 event 是 undefined | 加括号后参数全靠手动传 | 写 `say($event)` |
| 点按钮报 `Cannot read properties of undefined` | methods 里用了**箭头函数**，`this` 不对 | methods 用普通函数（对象方法简写） |
| v-model 绑在 `<div>` 上无效 | v-model 只支持表单类元素 | 用在 `input / select / textarea` |
| 单选框能多选、复选框只能选一个 | 单选绑数组、复选绑字符串（绑反） | **单选绑单值，复选绑数组** |
| 控制台警告缺 key / 删除后内容错乱 | 没写 `:key` / 用 index 作 key | 补 `:key="item.id"` |
| 指令没反应，页面原样输出属性 | 拼写错误 `v-modle` / `v-bing` | 对照六类指令表核对拼写 |

---

## 任务 4｜综合任务：记事本雏形（10 分钟）

### 【讲】先设计再动手：代码放哪、数据长什么样

**① 文件分工（目录设计）**——记事本**不建新文件**，写进 `App.vue`：

| 文件 | 角色 | 本任务动作 |
|---|---|---|
| `src/App.vue` | 记事本主界面：表单 + 列表 + 数据与增删逻辑 | **整体替换**为下方代码（`<h1>`、`<NoteCard />` 已包含在新代码里） |
| `src/components/NoteCard.vue` | 指令练习场（任务 1—3 成果） | **不动**，继续显示在页面上方 |
| `src/components/` 目录 | 存放**可复用组件** | 实验 5 组件化时把记事本拆成 NoteHeader、NoteList 放进来；实验 9 起再新增 `src/views/` 放页面级组件 |

> 为什么先全写进 App.vue：`notes` 数据与增删逻辑先**集中一处**，实验 5 学完组件通信（props / emit）再拆——"先集中，后拆分"。

**② 数据结构设计**（贯穿项目核心数据结构，本任务定型，全学期不再变）——一条笔记 = 一个对象，整份笔记 = 对象数组：

```js
{ id: 1, text: '买牛奶', priority: '高', tags: ['待办'] }
```

| data 字段 | 类型 | 职责 |
|---|---|---|
| `newNote` | String | 输入框草稿，添加成功后清空 |
| `priority` | String | 优先级（单选绑定**单值**），默认 `'中'` |
| `tags` | Array | 标签（复选绑定**数组**） |
| `notes` | Array | 笔记列表，v-for 的数据源 |
| `nextId` | Number | 自增发号器，保证每条 `id` 唯一（`:key` 的规范取值） |

### 【做】把上半场所学拼成完整小应用

用下面的代码**整体替换** `App.vue`（实测通过版；对照上方两个设计表边看边敲）：

```vue
<template>
  <div id="app">
    <h1>记事本 notes-app · 第 2 章实验</h1>
    <NoteCard />
    <hr />
    <h2>📝 记事本雏形（综合任务）</h2>

    <input v-model="newNote" placeholder="输入笔记内容" @keyup.enter="addNote" />
    <button @click="addNote">添加</button>
    <br />
    <label><input type="radio" value="高" v-model="priority" /> 高</label>
    <label><input type="radio" value="中" v-model="priority" /> 中</label>
    <label><input type="radio" value="低" v-model="priority" /> 低</label>
    <br />
    <label><input type="checkbox" value="待办" v-model="tags" /> 待办</label>
    <label><input type="checkbox" value="灵感" v-model="tags" /> 灵感</label>

    <p>实时展示 → 内容：{{ newNote }}｜优先级：{{ priority }}｜标签：{{ tags.join('、') || '（未选）' }}</p>

    <ul>
      <li v-for="(note, index) in notes" :key="note.id">
        {{ index + 1 }}. {{ note.text }} 【{{ note.priority }}】{{ note.tags.join('/') }}
        <button @click="notes.splice(index, 1)">删除</button>
      </li>
    </ul>

    <p v-if="notes.length === 0">暂无笔记，快添加一条吧</p>
    <p v-show="notes.length > 0">共 {{ notes.length }} 条</p>
  </div>
</template>

<script>
import NoteCard from './components/NoteCard.vue'
export default {
  components: { NoteCard },
  data() {
    return {
      newNote: '',      // 输入框内容
      priority: '中',    // 优先级（单选，单值）
      tags: [],         // 标签（复选，数组）
      notes: [],        // 笔记列表：{ id, text, priority, tags }
      nextId: 1         // 唯一 id 发号器
    }
  },
  methods: {
    addNote() {
      if (!this.newNote.trim()) return            // 空内容不添加
      this.notes.push({
        id: this.nextId++,                        // 唯一 id：:key 的规范取值
        text: this.newNote.trim(),
        priority: this.priority,
        tags: [...this.tags]                      // 复制一份，避免和表单联动
      })
      this.newNote = ''
    }
  }
}
</script>
```

**代码分区导读**（对照上面代码从上往下看，每区只用已学知识）：

| 模板分区 | 用到的知识 | 看什么 |
|---|---|---|
| 表单区（输入框 + 单选 + 复选） | `v-model` 三件套 | 单选取单值、复选取数组 |
| 实时展示行 | 插值 `{{ }}` | 输入/勾选即时变化 = 双向绑定证据 |
| 列表区（ul / li） | `v-for` + `:key="note.id"` | 序号 `index + 1`；删除按钮 `splice(index, 1)` |
| 空状态两行 | `v-if` / `v-show` | 添加第一条后两行同时切换 |
| script 的 `addNote` | `v-on` + methods | 三步：判空 → `push`（`tags: [...this.tags]` 复制入列，防与表单联动）→ 清空输入框 |

### 【看】效果图：上半场终点（已添加 3 条不同优先级/标签的笔记）

![任务4效果图](第02课效果图/07-任务4-记事本雏形.png)

**验收动作**（自测 + 教师抽查）：添加 3 条 → 删除中间一条 → 序号内容不错位（`:key` 的功劳）→ 清空看"暂无笔记"出现（v-if）、"共 N 条"消失（v-show）。

✅ **检查点 4**：增、删、列表、空状态、实时展示五项全部正常。📸 `screenshots\lab02-03-notes.png`。

### 🐣 初学者卡点 4

| 现象 | 原因 | 解决 |
|---|---|---|
| 勾选标签报 `Cannot read properties of undefined` | `tags` 没初始化为数组 | `data` 里 `tags: []` |
| 列表项显示报 join 错误 | 某条笔记 `tags` 是 undefined | 添加时 `tags: [...this.tags]` |
| 空内容也能添加 | 没做空值判断 | `if (!this.newNote.trim()) return` |
| 删除删错行 | `:key` 用 index / splice 索引错位 | `:key="note.id"`；用 v-for 的 index 删 |
| 添加后输入框不清空 | 忘了清空 | `this.newNote = ''` |
| 笔记标签跟着表单变 | 存的是引用 | 展开复制 `[...this.tags]` |

---

## 上半场收尾｜提交 lab02（5 分钟）

```bat
rem 回仓库根
cd /d D:\web-framework-2024xxxx
git add .
rem 提交信息格式：labNN-短名-学号
git commit -m "lab02-binding-2024xxxx"
git push
```

✅ **检查点 5**：`git log --oneline` 出现 `lab02-binding-2024xxxx`；`git status` 干净（node_modules 不入库，`.gitignore` 脚手架自带）。

---

#  课间 10 分钟 

（dev 服务器不用关；离开座位请锁屏 `Win + L`。）

---

# 下半场（学时 7—8）

## 开场衔接（5 分钟）

- 上半场高频问题集中答疑（教师汇总巡检发现的共性问题，对照卡点表 1—4）；
- 本半场目标一句话：**让页面"听懂"鼠标和键盘**——上半场的 `@click` 只是"能响"，下半场搞清楚"事件里装了什么信息、怎么优雅地控制事件行为"（对应教案 2.4 事件对象、2.5 事件修饰符）。

> 💡 **思政融入**（教案原文）：事件对象完整携带触发元素、事件类型等关键信息——**信息完整、有据可依**是精准处理问题的前提，正如工作反馈要完整清晰，这是严谨细致的工程师素养。

---

## 实验 3 任务 1｜事件对象：事件里到底装了什么（25 分钟）

### 【做】第 1 步：新建"事件实验室"组件

在 `src/components/` 下新建 `EventLab.vue`（下半场主场组件，完整版见参考代码，先敲事件对象部分）：

```vue
<template>
  <div class="event-lab">
    <h3>🎯 事件实验室（2.4 事件对象 · 2.5 事件修饰符）</h3>

    <!-- 获取方式一：不传参，方法首参自动是事件对象 -->
    <button @click="showEvent">打印事件对象（不传参）</button>
    <!-- 获取方式二：传参时用 $event 占位 -->
    <button @click="showEventArg($event, 66)">showEventArg($event, 66)（传参版）</button>
    <!-- 原生阻止默认行为（2.5 将用 .prevent 替代这种手动写法） -->
    <a href="https://vuejs.org" @click="goVue">Vue 官网链接（手动 preventDefault）</a>

    <!-- 页面日志区：最新在上（Console 同步输出，便于展开完整对象） -->
    <ol class="logs">
      <li v-for="(item, index) in logs" :key="index">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'EventLab',
  data() {
    return { logs: [] }
  },
  methods: {
    log(msg) {
      this.logs.unshift(msg)          // 最新日志插到最前面
      console.log(msg)
    },
    showEvent(e) {                    // 不传参：首参就是事件对象
      this.log(`type=${e.type}｜target=<${e.target.tagName.toLowerCase()}>｜timeStamp=${Math.round(e.timeStamp)}ms`)
      console.log('完整事件对象：', e)   // 到 Console 展开看全貌！
    },
    showEventArg(e, number) {         // 传参版：模板里 $event 占位
      this.log(`传参版：target=<${e.target.tagName.toLowerCase()}>｜number=${number}`)
    },
    goVue(e) {
      e.preventDefault()              // 原生 API：阻止链接默认跳转
      this.log('手动 preventDefault() 阻止了跳转')
    }
  }
}
</script>
```

**再补样式**（不加样式，页面就是"裸"的——效果图里金色虚线圆角卡片、绿色冒泡盒、蓝色 .self 盒、日志区底色全靠它）。位置：`EventLab.vue` 的 `</script>` 之后追加整个 `<style scoped>` 块：

```vue
<!-- 修改前（文件以 </script> 结尾） -->
</script>

<!-- 修改后（</script> 后追加整段样式；其中 .bubble / .self-box 供下一任务的
     冒泡与 .self 实验用，先一起写好） -->
<style scoped>
.event-lab {                             /* 外层：金色虚线圆角卡片 */
  border: 1px dashed #b8860b;
  padding: 12px 16px;
  border-radius: 8px;
  line-height: 2;
}
.bubble {                                /* 冒泡实验：绿色实线盒（下一任务用） */
  border: 2px solid #42b883;
  padding: 6px 10px;
  margin: 6px 0;
}
.self-box {                              /* .self 实验：蓝色点线盒（下一任务用） */
  border: 2px dotted #646cff;
  padding: 6px 10px;
  margin: 6px 0;
}
.logs {                                  /* 日志区：浅灰底 + 金色左边线 */
  background: #fafafa;
  border-left: 3px solid #b8860b;
  margin: 8px 0 0;
  padding: 4px 8px 4px 28px;
  color: #555;
  min-height: 2em;
}
</style>
```

在 `App.vue` 里接入（引入 → 注册 → 使用三步，同任务 1）。**共改 3 处**，逐处给出修改前 → 修改后：

**改动 ①（引入）：`<script>` 顶部 import 区加一行**

```js
// 修改前
import NoteCard from './components/NoteCard.vue'

// 修改后（新增第 2 行）
import NoteCard from './components/NoteCard.vue'
import EventLab from './components/EventLab.vue'
```

**改动 ②（注册）：`components` 里加 EventLab**

```js
// 修改前
components: { NoteCard },

// 修改后
components: { NoteCard, EventLab },
```

**改动 ③（使用）：`<template>` 末尾——"共 N 条"那行之后、`</div>` 之前追加**

```html
<!-- 修改前（template 结尾） -->
    <p v-show="notes.length > 0">共 {{ notes.length }} 条</p>
  </div>
</template>

<!-- 修改后（</div> 前新增 3 行） -->
    <p v-show="notes.length > 0">共 {{ notes.length }} 条</p>

    <hr />
    <h2>🎯 事件实验室（2.4—2.5）</h2>
    <EventLab />
  </div>
</template>
```

### 【讲】知识点 1：事件对象的两种获取方式

| 写法 | 事件对象怎么拿 |
|---|---|
| `@click="showEvent"` | 方法**首参自动是**事件对象 |
| `@click="showEventArg($event, 66)"` | **`$event` 占位**，位置任意 |

### 【讲】知识点 2：三个最常用属性（考点：target 与 currentTarget 的区别）

| 属性 | 含义 | 上面的例子 |
|---|---|---|
| `e.type` | 事件类型 | `click` |
| `e.target` | **实际点击**的那个元素 | 点按钮就是 `<button>` |
| `e.currentTarget` | **绑定**事件处理器的元素 | 冒泡时可能 ≠ target |
| `e.timeStamp` | 触发时刻（ms） | 页面加载后多少毫秒 |

鼠标事件还有坐标（`offsetX/clientX`）、键盘事件有 `e.key`（任务 2 的 `.enter` 底层就是它）——到 Console 展开完整对象挨个看。

> 📖 **多学一招（2.4.3 概念预告，3′）**：组件化之后还有"**自定义事件**"——子组件用 `$emit('事件名', 数据)` 通知父组件，携带的是**自定义数据**而非原生事件对象。这是第 5 章组件通信的主角，现在混个脸熟。

### 【看】效果图：点过"打印事件对象"和"Vue 官网链接"后

![事件对象效果图](第02课效果图/08-下半场-事件对象.png)

✅ **检查点 6**：① Console 能展开事件对象并找到 `target`、`type`、`timeStamp`；② 能说清 `$event` 两种获取方式；③ 点链接页面**不跳转**（preventDefault 生效）。

### 🐣 初学者卡点 5（事件对象）

| 现象 | 原因 | 解决 |
|---|---|---|
| 报 `Cannot read properties of undefined (reading 'target')` | 传参写法下没接 `$event` | 模板写 `fn($event, ...)`，方法签名对应接 |
| `e.target` 拿到的不是想要的元素 | target=**实际点击**的元素（可能是内层子元素） | 想拿绑定元素用 `e.currentTarget`；Console 打印对比 |
| 点链接直接跳走了 | 忘了 `preventDefault()` | 方法里加，或下一任务的 `.prevent` |
| 在 template 里直接写 `event` 报不存在 | 模板里事件对象的名字是 `$event` | `$event` 是 Vue 内置变量 |
| 事件函数没反应 | `@cilck` 拼错 / 方法名大小写不一致 | 对照拼写；方法名复制粘贴 |
| 点了没进 logs，页面也没变 | 方法里忘了 `this.` | `this.logs.unshift(...)` |

---

## 实验 3 任务 2｜事件修饰符：优雅地控制事件（40 分钟）

### 【讲】知识点 1：五类修饰符总览

修饰符写在事件后面（`@事件.修饰符`），把"手动控制事件行为"变成"一句话声明"。**先记分类，再逐个体验**：

| 类别 | 常用 | 一句话 |
|---|---|---|
| 冒泡/捕获 | `.stop` / `.self` / `.capture` | 控制"事件往哪传" |
| 默认行为 | `.prevent` | 拦截浏览器默认动作（跳转/刷新） |
| 触发次数 | `.once` | 只触发一次 |
| 键盘 | `.enter` / `.esc` / `.tab`… | 认按键 |
| 鼠标 | `.left` / `.right` / `.middle` | 认鼠标键 |

### 【做】第 1 步：.stop 冒泡对比实验（10′，最重点）

给 `EventLab.vue` 追加（样式见参考代码）：

```html
<!-- 嵌套盒子：内层点击会"冒泡"触发外层 -->
<div class="bubble" @click="log('outer 触发（外层 @click）')">
  <button @click.stop="log('inner 触发（.stop：冒泡被阻止）')">内层 .stop</button>
  <button @click="log('inner 触发（无 .stop：冒泡到外层）')">内层 无.stop</button>
</div>
```

**观察日志区**：点"内层 无.stop" → **两条**日志（inner + outer，事件从内向外冒泡）；点"内层 .stop" → **只有一条**（`.stop` = 原生 `e.stopPropagation()`）。

> ❓ **课堂设问**：为什么点"内层 无.stop"会打印两条？（事件冒泡：子元素事件触发后会沿 DOM 树向外传播，依次触发祖先的同类事件——`.stop` 就是剪断这条传播链。）

### 【做】第 2 步：.prevent / .once / .self（15′）

```html
<!-- .prevent：替代任务 1 里手写的 e.preventDefault() -->
<a href="https://vuejs.org" @click.prevent="log('.prevent 阻止了跳转')">Vue 官网（.prevent 版）</a>

<!-- .once：只触发一次的"抽奖" -->
<button @click.once="log('`.once` 抽奖按钮：只触发这一次！')">抽奖按钮 .once</button>

<!-- .self：只有点击盒子本身才触发，点子元素不算 -->
<div class="self-box" @click.self="log('.self：点到盒子本身才触发')">
  点盒子本身（.self）<button>我是子元素（点我没用）</button>
</div>
```

对照表（修饰符 vs 原生等价写法）：

| 修饰符 | 原生等价 | 本例现象 |
|---|---|---|
| `.stop` | `e.stopPropagation()` | 内层点击不再触发外层 |
| `.prevent` | `e.preventDefault()` | 链接不跳转（对比任务 1 的手动写法，**简洁得多**） |
| `.once` | 触发后手动解绑 | 抽奖按钮点第二次没反应 |
| `.self` | 判断 `e.target === e.currentTarget` | 点子元素按钮盒子不响应 |

### 【做】第 3 步：键盘修饰符 .enter / .esc（15′）

```html
<input
  @keyup.enter="log('回车 .enter 触发')"
  @keyup.esc="log('Esc .esc 触发')"
  placeholder="这里按 Enter / Esc 试试"
/>
```

回忆：上半场记事本的 `<input @keyup.enter="addNote">` **已经在用它**——现在明白底层了（键盘事件对象的 `e.key === 'Enter'`，修饰符帮你省掉判断）。

> ⚠️ **口径提醒（2.5.3 预告）**：修饰符可以串联（如 `@click.stop.prevent`），**从左到右依次执行**——顺序不同效果不同。这是下次课内容，现在先不串。

### 【看】效果图：事件修饰符全部体验完（日志区记录了每一步）

![事件修饰符效果图](第02课效果图/09-下半场-事件修饰符.png)

✅ **检查点 7**：① 能演示 `.stop` 两按钮的日志差异（1 条 vs 2 条）；② `.prevent` 链接不跳转；③ `.once` 第二次点击无日志；④ `.self` 点子元素无反应；⑤ 输入框 Enter/Esc 都有日志。📸 `screenshots\lab02-04-events.png`。

### 🐣 初学者卡点 6（事件修饰符）

| 现象 | 原因 | 解决 |
|---|---|---|
| `@key.enter` 无效 | 键盘事件是 `keyup`/`keydown`，没有 `@key` | `@keyup.enter` |
| `.enter` 写成 `.Enter`（大写） | 修饰符全小写 | `@keyup.enter` |
| `.once` 按钮刷新后又灵了 | `.once` 是"本次页面生命周期内一次"，刷新即重置 | 这是正常行为，不是 bug |
| `.self` 盒子点子元素没反应，以为坏了 | 这正是 `.self` 的定义（只认自身） | 想子元素也触发就去掉 `.self` |
| 表单提交后页面刷新 | 没阻止默认行为 | `@submit.prevent`（实验 3 综合任务将用到） |
| 修饰符乱串 `@click.prevent.stop` 还没学就用 | 串联顺序有讲究（2.5.3 下次课） | 现在一律单修饰符 |
| 加了 `.stop` 后外层"永远不响"了 | `.stop` 只阻止当前这次冒泡，没删外层事件 | 直接点外层盒子仍会触发 |

---

## 下半场综合小练｜给记事本加 Esc 清空（10 分钟）

学以致用：给**记事本输入框**（不是 EventLab 的）加 Esc 清空（实验 3 作业 1 前移）：

```html
<input
  v-model="newNote"
  placeholder="输入笔记内容"
  @keyup.enter="addNote"
  @keyup.esc="newNote = ''"
/>
```

✅ **检查点 8**：输入一半按 Esc → 输入框清空、"实时展示"行同步清空（一个修饰符 + 双向绑定联动）。

---

## 课末收尾｜增量提交 + 知识梳理（10 分钟）

### 【做】增量提交（下半场改动一并入库）

```bat
cd /d D:\web-framework-2024xxxx
git add .
rem 下半场内容属实验 3，用 lab03 代号
git commit -m "lab03-events-2024xxxx"
git push
```

> 说明：本课横跨实验 2 与实验 3，**每次"完整做完一个实验"就提交一次**——上半场交了 `lab02-binding`，课末交 `lab03-events`（实验 3 的计算属性部分下次课完成后再次提交）。提交记录就是你的学习轨迹，也是考核依据。

### 本课知识树（一分钟自检）

```
规范工程化：目录树 + 命名五铁律（kebab-case / 组件PascalCase / 姓名不进路径 / 见名知义 / 先查树）
单文件组件 SFC：template / script / style(scoped) ｜ data 必须是函数 ｜ 局部注册三步
数据绑定：插值 {{ }}（只能表达式）｜ 响应式（数据→视图自动同步；Vue3 无 Vue2 限制，$set 已移除）
两种 API：选项式 data/methods（会写）↔ 组合式 <script setup>+ref/reactive（会读）
六类指令：v-text/v-html(XSS!) ｜ v-bind : ｜ v-on @ ｜ v-model(单选单值/复选数组) ｜ v-if v-else v-show ｜ v-for+:key(唯一id)
事件对象：$event 两种获取 ｜ e.target vs e.currentTarget ｜ preventDefault
事件修饰符：.stop(冒泡) .prevent(默认) .once(一次) .self(仅自身) .enter/.esc(键盘)
贯穿项目：notes-app = 表单 + 列表 + 空状态 + 增删 + 事件实验室
```

### 课堂五问（先自答再听点评）

1. **v-if 与 v-show 在实现原理和适用场景上有何不同？**（真删真建节点 vs 切换 display；少变用 v-if、频切换用 v-show）
2. **为什么 `data` 必须写成函数？**（复用组件时每实例需独立数据，函数返回新对象实现隔离）
3. **`:key` 绑什么？index 作 key 会怎样？**（唯一身份 id；index 是位置，删除后错位串状态）
4. **传参时如何拿到事件对象？`e.target` 和 `e.currentTarget` 区别？**（`$event` 占位；target 实际点击元素 / currentTarget 绑定元素）
5. **`.stop` 阻止的是什么？和 `.prevent` 有何不同？**（.stop 阻止事件冒泡传播；.prevent 阻止浏览器默认行为——一个管"传播"，一个管"默认"）

### 课后作业

1.（实验 2）为记事本补充"**编辑**"功能：点击"编辑"把内容填回输入框；
2.（实验 2）同一元素分别用 v-if / v-show 控制显隐，**截图 DevTools 元素面板差异**（存 `screenshots\lab02-05-if-show.png`）；
3.（实验 2）整理**六类指令知识卡片**（指令 + 简写 + 适用场景 + 示例代码）；
4.（教材习题）把课堂 `form` 数据改写成组合式 `reactive` 写法并跑通；
5.（实验 3，预习性）把"添加笔记"改成 `<form @submit.prevent>` 表单提交方式，对比按钮 `@click` 与表单提交的差异。

**课前准备（下次课）**：notes-app 能正常启动、两次提交（lab02/lab03）已推送；预习教材 2.6 计算属性。

### 下次课预告（第 03 课 · 第 9—12 学时）

《计算属性与侦听器——搜索过滤 · 统计 · 自动保存》：修饰符串联（2.5.3）、**计算属性**（2.6，实验 3 任务 3—5：给记事本加**搜索过滤与字数统计**）、侦听器与样式绑定（2.7—2.8，实验 4：**自动保存提示与夜间模式**）。

---

## 附录 A｜本课任务流与教案、实验的对应关系（备查）

| 本课环节 | 穿插知识点 | 教案组织表（时间） | 实验 |
|---|---|---|---|
| 任务 0 体检整改+启动 | 命名规范 / 脚手架现状 | 第 5—6 学时导入 | 实验 2 任务 0 |
| 任务 1 第一个组件 | 2.1 | 「2.1 单文件组件」15′ | 实验 2 任务 1 |
| 任务 2 插值与响应式 | 2.2 | 「2.2 数据绑定」10′+5′ | 实验 2 任务 2 |
| 任务 3.1—3.2 | 2.3.1—2.3.2 | 5′+8′ | 实验 2 任务 3 |
| 任务 3.3—3.4 | 2.3.3—2.3.4 | 5′+8′ | 实验 2 任务 3 |
| 任务 3.5—3.6 | 2.3.5—2.3.6 | 7′+7′ | 实验 2 任务 3 |
| 任务 4 综合任务 | 综合运用 | 综合练习 | 实验 2 任务 4 |
| 上半场收尾 | Git 提交 | 收尾 | 实验 2 任务 5 |
| 衔接+思政 | 信息完整性素养 | 第 7—10 学时导入 10′（取 5′） | — |
| 实验 3 任务 1 事件对象 | 2.4.1—2.4.2（2.4.3 概念预告） | 20′+20′（压缩为 25′） | 实验 3 任务 1 |
| 实验 3 任务 2 修饰符 | 2.5.1—2.5.2 | 15′+25′（本课 40′） | 实验 3 任务 2 |
| 综合小练 Esc 清空 | 修饰符迁移 | 综合练习 | 实验 3 作业 1 |
| 课末收尾 | 知识梳理 | 「知识梳理」5′ | 实验 3 任务 5（增量） |

## 附录 B｜教材 ↔ 本地实测环境差异对照表（本课全部勘误一览）

| # | 项 | 教材/PPT/旧文档口径 | 本地实测（2026-10-05，教师机） | 本课处理 |
|---|---|---|---|---|
| 1 | 创建项目命令 | `yarn create vite`（已失效） | `npm create vite@latest`（create-vite 9.2.1，走 npmmirror） | 第 01 课已勘误，本课沿用 |
| 2 | Node 版本 | 14.18+ / 16.17+ | **v22.23.2**（npm 10.9.8） | 要求 ≥ 18 |
| 3 | Vite / Vue 版本 | 成书时 Vite 2/3 时代 | **Vite 8.3.2 + Vue 3.5.42** | 命令输出以实测为准 |
| 4 | 脚手架默认 App.vue | logo + `<HelloWorld msg>` | 极简 `<script setup>` + `<HelloWorld />`，欢迎页在 HelloWorld.vue | 任务 0 专门对照 |
| 5 | create-vite 交互 | 选框架 → 选变体，两步 | 变体含 `Official Vue Starter ↗`（勿选）；多一步 `Install with npm and start now?` | 〇节预警 |
| 6 | API 风格 | 第 2 章全组合式 | 课程主线选项式（与实验/notes-app 一致） | 每任务"教材写法对照"双轨 |
| 7 | `this.$set` | 实验文档提示"需用 $set" | Vue 3 已移除；新增属性/索引赋值**直接生效** | 任务 2 口径修正 + 任务 3 验证按钮 |
| 8 | template 根元素 | "多根元素会报错" | Vue 3 多根**不报错**（Fragment，实测验证） | 任务 1 动手验证；规范单根 |
| 9 | 项目名 | — | 中文项目名被脚手架清洗（package.json name 变空壳） | 《命名规范》铁律 1 |
| 10 | 目录/命名 | 教材无统一规范 | 本课程《00-项目目录与命名规范》 | 任务 0 整改执行 |

## 附录 C｜参考资料

- 教材第 2 章《Vue.js 开发基础》＋ 出版社配套教学 PPT（第 2 章，仅作课堂配套资源，课件不按页码对应）
- Vue 官方文档（中文）：模板语法 <https://cn.vuejs.org/guide/essentials/template-syntax.html> · 事件处理 <https://cn.vuejs.org/guide/essentials/event-handling.html> · 列表渲染 <https://cn.vuejs.org/guide/essentials/list.html>
- 课程配套：[00-项目目录与命名规范](../实验指导/00-项目目录与命名规范.md)（本课启用）· [实验 2](../实验指导/实验2-单文件组件数据绑定与指令.md) · [实验 3](../实验指导/实验3-事件处理与计算属性.md) · [00-环境准备与搭建报告](../实验指导/00-环境准备与搭建报告.md) · [Git 操作指南](../实验指导/Git操作指南.md)
- 教师参考：[参考代码/notes-app](../参考代码/notes-app/)（含 EventLab 事件实验室，全部实测可运行）· [参考代码/scaffold-原始模板](../参考代码/scaffold-原始模板/) · [第02课效果图](./第02课效果图/)（9 张分阶段真实截图，可贴入 PPT）

---

*第 03 课课件：《计算属性与侦听器——搜索过滤 · 统计 · 自动保存》（对应教案第 9—12 学时：2.5.3—2.8，实验 3 后半 + 实验 4）*
