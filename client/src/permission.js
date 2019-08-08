import router from './router'
import { getToken } from '@/utils/auth' // getToken from cookie

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) || to.path !== '/login') {
    if (typeof getToken() === 'undefined') {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (typeof getToken() === 'undefined') {
      next()
    }
    else {
      next({ name: 'dashboard' })
    }
  } else {
    next()
  }
})
