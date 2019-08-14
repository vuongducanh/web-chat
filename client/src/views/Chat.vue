<template>
  <div class="chat">
    <div class="list-room">
       <el-table
        :data="listRoom"
        style="width: 200px">
          <el-table-column lable="list-room">
            <template slot-scope="scope">
              <span class="room-item" @click="joinRoom(scope.row._id, scope.row.room_name)">{{ scope.row.room_name }}</span>
            </template>
          </el-table-column>
        </el-table>
    </div>

    <div class="content-chat" v-if="showMessage">
      <div class="item-chat">
        <div class="item-message" :class="itemMessage.nickname === nickname ? 'left' : 'right'" v-for="(itemMessage, index) in listMessage" :key="index">
          <span>{{itemMessage.message}}</span>
        </div>
      </div>
      <div class="type-message">
        <el-input
          placeholder="Please Input"
          type="text"
          @keyup.enter.native="sendMessage"
          v-model="chat.message">
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chat: {},
        showMessage: false,
        nickname: this.$route.params.nickname,
      }
    },

    computed: {
      listRoom() {
        return this.$store.state.room.listRoom
      },

      listMessage() {
        return this.$store.state.chat.listMessage
      }
    },

    created() {
      this.getListRoom()
    },

    methods: {
      getListRoom() {
        this.$store.dispatch('ListRoom')
      },

      joinRoom(id, nickname) {
        this.showMessage  = true
        this.$router.push({
          name: 'ChatRoom',
          params: { id: id, nickname: nickname}
        })

        this.$store.dispatch('GetMessageFromRoom', id)
      },

      sendMessage() {
        this.chat.room = this.$route.params.id
        this.chat.nickname =  this.$route.params.nickname
        this.$store.dispatch('SendMessage', this.chat).then(() => {
          this.chat.message = ''
        })
      }
    },
  }
</script>

<style lang="scss">
  .chat {
    display: flex;
    align-items: end;

    .el-table td {
      padding: 0;
    }

    .list-room {
      margin-right: 20px;
    }

    .item-chat {
      height: 400px;
      overflow-y: auto;
    }

    .room-item {
      cursor: pointer;
      display: block;
      padding: 12px 0;
    }

    .content-chat {
      width: 300px;
      background-color: #fff;
      color: #000;
    }

    .item-message{
      max-width: 164px;
      overflow-wrap: break-word;
      width: 150px;
      color: #000;
      background-color: #e9ebee;
      margin: 10px 0;
      padding: 6px 10px;
      border-radius: 20px;
    }
  }
</style>
