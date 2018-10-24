import Vue from 'vue'
import Router from 'vue-router'

// Layouts
import DefaultLayout from '@/layout/Default'

Vue.use(Router)

/* eslint-disable-next-line */
const router = new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [{
        path: '/',
        name: 'home',
        component: () => import('@/components/Home')
      },
      {
        path: '/blog',
        name: 'blog',
        component: () => import('@/components/Blog')
      },
      {
        path: '/events',
        name: 'events',
        component: () => import('@/components/Events')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/components/Contact')
      }]
    }
  ]
})

export default router
