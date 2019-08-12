
import { getListUser } from '../../api/user';

const user = {
  state: {
    listData: []
  },

  mutations: {
    GET_ADMIN: (state, listAdmin) => {
      state.listData = listAdmin
    },

    CREATE_USER: (state, listUser) => {
      state.listData.unshift(listUser)
    },

    SEARCH_USER: (state, listUserFilter) => {
      state.listData = listUserFilter
    }
  },

  actions: {
    async getListUser({ commit }) {
      try {
        const listData = await getListUser()
        console.log(listData)
      } catch(err) {
        return err
      }
    }
  }
}
export default user
