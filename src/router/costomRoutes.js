/**
 * 渲染的路由列表
 */
import Home from '../views/Home.vue'
import Main from '../views/Layout/Home.vue'

export default [{
    path: '/',
    name: '首页',
    component: Main
  },
  {
    path: '/about',
    name: '关于',
    component: Home,
    children: [{
      path: '/about/a1',
      name: '关于',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }]
  },
  {
    path: '/login',
    name: '登录',
    hidden: true,
    component: () => import('../views/Login')
  },
  {
    path: '/404',
    name: '错误警告',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: '错误警告',
    redirect: '/404'
  }
]