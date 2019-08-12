import router from './router'
import { getToken } from '@/utils/auth' // getToken from cookie
import store from './store'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) || to.path !== '/login') {
    if (typeof getToken() === 'undefined') {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      store.dispatch('getCurrentAccount').then(() => {
        next()
      }).catch(() => {
        store.dispatch('LogOut').then(() => {
          next({ path: '/' })
        })
      })
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (typeof getToken() === 'undefined') {
      next()
    }
    else {
      store.dispatch('getCurrentAccount').then(() => {
         next({ name: 'dashboard' })
      }).catch(() => {
        store.dispatch('LogOut').then(() => {
          next({ path: '/' })
        })
      })
    }
  } else {
    next()
  }
})
