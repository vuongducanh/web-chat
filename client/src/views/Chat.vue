<template>
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

    <div class="content-chat">
      <el-input
        placeholder="Please Input"
        type="text"
        v-model="chat.message">
      </el-input>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chat: {}
      }
    },

    computed: {
      listRoom() {
        return this.$store.state.room.listRoom
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
        this.$router.push({
          name: 'ChatRoom',
          params: { id: id, nickname: nickname}
        })
      }
    },
  }
</script>

<style lang="scss">
  .list-room {
    .room-item {
      cursor: pointer;
    }
  }
</style>
