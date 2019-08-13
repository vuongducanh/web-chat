
import { getCurrentAccount } from '../../api/user';
import { removeToken } from '@/utils/auth'

const user = {
  state: {
    listData: [],
    infoUser: {}
  },

  mutations: {
    SET_USER_INFO: (state, infoUser) => {
      state.infoUser = infoUser
    }
  },

  actions: {
    async getCurrentAccount({ commit }) {
      try {
        const account = await getCurrentAccount()
        commit('SET_USER_INFO', account.data.data)
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
