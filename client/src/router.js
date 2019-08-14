import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        requiresAuth: true,
        layout: 'default-layout'
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile.vue'),
      meta: {
        requiresAuth: true,
        layout: 'default-layout'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        guest: true,
        layout: 'no-layout'
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue'),
      meta: {
        requiresAuth: true,
        layout: 'default-layout'
      }
    },
    {
      path: '*',
      component: () => import('@/views/404.vue'),
      meta: {
        layout: 'no-layout'
      }
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/views/Chat.vue'),
      meta: {
        requiresAuth: true,
        layout: 'default-layout'
      }
    },
    {
      path: '/chat/:id/:nickname',
      name: 'ChatRoom',
      component: () => import('@/views/Chat.vue'),
      meta: {
        requiresAuth: true,
        layout: 'default-layout'
      }
    },
  ]
})


