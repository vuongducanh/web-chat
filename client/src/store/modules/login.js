import * as actionApi  from '@/api/login'
import { setToken, getToken } from '@/utils/auth'

const login = {
  state: {
    infoUsername: [],
    token: getToken()
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    async Login({ commit }, data) {
      try {
       const infoLogin =  await actionApi.login(data)
       setToken(infoLogin.data.token)
       commit('SET_TOKEN', infoLogin.data.token)
       return infoLogin.data
      } catch(err) {
        await Promise.reject(err.response.data)
      }
    },

    async Register(_, data) {
      try {
        const register =  await actionApi.register(data)
        return register
       } catch(err) {
        await Promise.reject(err.response.data)
       }
    }
  }
}
export default login
