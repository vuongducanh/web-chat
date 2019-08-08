import * as actionApi  from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

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
        return err
      }
    },
  }
}
export default login
