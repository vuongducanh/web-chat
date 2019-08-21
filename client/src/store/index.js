import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import login from './modules/login'
import room from './modules/room'
import chat from './modules/chat'

const store = new Vuex.Store({
  modules: {
    user,
    login,
    room,
    chat
  }
})

export default store

