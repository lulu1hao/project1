import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/01-basic/Home.vue'
import About from '../views/01-basic/About.vue'
import NotFound from '../views/02-redirect/NotFound.vue'
import User from '@/views/03-dynamic/User.vue'
import Users from '@/views/03-dynamic/Users.vue'
import Center from '../views/04-nested/Center.vue'
import CenterProfile from '../views/04-nested/CenterProfile.vue'
import CenterOrders from '../views/04-nested/CenterOrders.vue'
import NamedDemo from '../views/05-named/NamedDemo.vue'
import ProgramDemo from '../views/06-programmatic/ProgramDemo.vue'
import Search from '../views/06-programmatic/Search.vue'
import Login from '../views/07-guard/Login.vue'

const router = createRouter({
  history: createWebHashHistory(),   
  routes: [

    // 根路径重定向：打开 / 自动跳 /home（放在最前，第一时间接管）
    // redirect 的值是"要跳去的目标地址字符串"，不是组件！
    { path: '/', redirect: '/home' },   // 补全：根路径 / → 跳去 /home
    // 一条规则 = 一个地址配一个组件：path 是地址、component 是页面
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/users', component: Users },
    // name 给这条规则发"工牌"：跳转按名字找，改路径不用改跳转代码
    { path: '/user/:id', name: 'user', component: User },

    // 嵌套路由：外壳 + children（子 path 不带开头斜杠，自动拼成 /center/profile）
    {
      path: '/center',
      component: Center,
      children: [
        // 空路径重定向：访问 /center 本身时进默认子页，否则壳里空白
        { path: '', redirect: '/center/profile' },
        { path: 'profile', component: CenterProfile },
        { path: 'orders', component: CenterOrders }
      ]
    },
    { path: '/named', component: NamedDemo },
    { path: '/program', component: ProgramDemo },
    { path: '/search', component: Search },
    // 登录页（守卫的拦截目的地）
    { path: '/login', component: Login },
    // 404 兜底：通配符必须放最后——从上往下匹配，先到先得（照【讲】抄一遍，体会两个星号）
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }   // 补全：通配符地址（见上方【讲】）
  ]
})

// 实验 07：全局前置守卫——/center 是会员区，没 token 一律拦去 /login
// to=去哪 from=从哪来 next=放行函数（每个分支都必须调，忘了就整站卡住）
router.beforeEach((to, from, next) => {
  // 目标是 /center 本身、或 /center/ 开头的子路由
  if (to.path === '/center' || to.path.startsWith('/center/')) {
    if (localStorage.getItem('token')) {
      next()   // 验明正身，放行
    } else {
      next('/login')   // 拦下，改道去登录页
    }
  } else {
    next()   // 非会员区，直接放行
  }
})

export default router