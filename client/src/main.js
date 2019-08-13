import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
import './permission' // permission control
import Layout from './views/layout/layout.vue'
import NoLayout from './views/layout/no-layout.vue'

Vue.component('default-layout', Layout)
Vue.component('no-layout', NoLayout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
