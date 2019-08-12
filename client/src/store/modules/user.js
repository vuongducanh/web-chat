
import { getCurrentAccount } from '../../api/user';
import { removeToken } from '@/utils/auth'

const user = {
  state: {
    listData: []
  },

  mutations: {
   
  },

  actions: {
    async getCurrentAccount({ commit }) {
      try {
        const account = await getCurrentAccount()
        return account
      } catch(err) {
        throw new Error(err)
      }
    },

    async LogOut({ commit }) {
      try {
        commit('SET_TOKEN', '')
        removeToken()
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}
export default user
