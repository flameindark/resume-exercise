import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./views/projects/index.vue'),
      meta: {
        title: '项目经历'
      }
    },
    {
      path: '/data',
      name: 'data',
      component: () => import('./views/data/index.vue'),
      meta: {
        title: '数据'
      }
    }
  ]
})
