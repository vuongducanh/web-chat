import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import login from './modules/login'
import room from './modules/room'

const store = new Vuex.Store({
  modules: {
    user,
    login,
    room
  }
})

export default store

