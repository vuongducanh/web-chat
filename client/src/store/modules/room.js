import * as Room  from '@/api/room'

const room = {
  state: {
    listRoom: []
  },

  mutations: {
    GET_LIST_ROOM: (state, room) => {
      state.listRoom = room
    }
  },

  actions: {
    async ListRoom({ commit }) {
      try {
        const listRoom = await Room.listRoom()
        commit('GET_LIST_ROOM', listRoom.data)
        return listRoom.data
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}

export default room
