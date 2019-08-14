import * as Chat  from '@/api/chat'

const chat = {
  state: {
    listMessage: []
  },

  mutations: {
    GET_LIST_MESSAGE: (state, message) => {
      state.listMessage = message
    }
  },

  actions: {
    async SendMessage(_, data) {
      try {
        const dataMessage = await Chat.sendMessage(data)
      } catch (err) {
        throw new Error(err)
      }
    },

    async GetMessageFromRoom({ commit }, idRoom) {
      try {
        const listMessage = await Chat.getMessageFromRoom(idRoom)
        commit('GET_LIST_MESSAGE', listMessage.data)
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}

export default chat