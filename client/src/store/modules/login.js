import * as actionApi  from '@/api/login'
import { setToken } from '@/utils/auth'

const login = {
  state: {
    infoUsername: []
  },

  mutations: {
  },

  actions: {
    async Login(_, data) {
      try {
       const infoLogin =  await actionApi.login(data)
       setToken(infoLogin.data.token)
      } catch(err) {
        throw new Error(err)
      }
    },

    async Register(_, data) {
      try {
        const register =  await actionApi.register(data)
        return register
       } catch(err) {
        throw new Error(err)
       }
    }
  }
}
export default login
