// ============================================================
// vite.config.js —— 任务 4 起：给 Vant 配"按需引入"（教材 6.3.3 第 3 部分）
// Components 插件会在编译每个 .vue 文件时扫描模板里的自定义标签，
// 见到 van-xxx 就按 VantResolver 的对照表，只把这个组件的代码和样式
// 真正 import 进来——不用手动 import，也不会打包整个 Vant。
// ⚠️ 改完本文件必须重启 dev 服务器（Ctrl+C 后重新 npm run dev）才生效！
// ============================================================
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // resolvers 数组里放"各家组件库的翻译官"——
    // 以后要给 Element Plus 也按需引入，就再 import 一个 ElementPlusResolver 加进来
    Components({
      resolvers: [VantResolver()],
    }),
  ],
})