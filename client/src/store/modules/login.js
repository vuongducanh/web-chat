import * as actionApi  from '@/api/login'

const login = {
  state: {
    infoUsername: []
  },

  mutations: {
  },

  actions: {
    async Login(_, data) {
      try {
        await actionApi.login(data)
      } catch(err) {
        return err
      }
    },
  }
}
export default login
