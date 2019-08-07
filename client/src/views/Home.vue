<template>
  <div class="home">
    <div class="el-col-4 mr-10">
      <el-button
        type="primary"
        icon="el-icon-edit"
        @click="showCreateForm"
      >
        addItem
      </el-button>
      <el-input v-model="keySearch" />
      <el-button
        type="primary"
        @click="handleSearchUser"
      >
        Search User
      </el-button>
    </div>

    <el-table
      v-if="callApi"
      v-loading="loading"
      :data="callApi"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        label="birthday"
        min-width="100px"
        align="left"
      >
        <template slot-scope="scope">
          <span class="item-cursor content">{{ scope.row.birthday }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="email"
        min-width="100px"
        align="left"
      >
        <template slot-scope="scope">
          <span class="item-cursor content">{{ scope.row.email }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="gender"
        min-width="100px"
        align="left"
      >
        <template slot-scope="scope">
          <span class="item-cursor content">{{ scope.row.gender }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="username"
        min-width="100px"
        align="left"
      >
        <template slot-scope="scope">
          <span class="item-cursor content">{{ scope.row.username }}</span>
        </template>
      </el-table-column>

      <el-table-column
        label="actions"
        align="center"
        width="250px"
      >
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="small"
            @click="showFormDelete(scope.row.id)"
          >
            Delete
          </el-button>
          <el-button
            type="danger"
            size="small"
            @click="showFormUpdate(scope.row)"
          >
            Update
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :visible.sync="dialogCreateForm"
      :close-on-click-modal="false"
      title="create new"
      :width="(dialogStatus === 'delete') ? '25%' : '50%'"
    >
      <el-form v-if="dialogStatus === 'create' || dialogStatus === 'update'">
        <el-form-item
          label="birthday"
          label-width="130px"
        >
          <el-input
            v-model="params.birthday"
            type="text"
          />
        </el-form-item>

        <el-form-item
          label="email"
          label-width="130px"
        >
          <el-input
            v-model="params.email"
            type="text"
          />
        </el-form-item>

        <el-form-item
          label="gender"
          label-width="130px"
        >
          <el-input
            v-model="params.gender"
            type="text"
          />
        </el-form-item>

        <el-form-item
          label="username"
          label-width="130px"
        >
          <el-input
            v-model="params.username"
            type="text"
          />
        </el-form-item>

        <el-form-item
          label="password"
          label-width="130px"
        >
          <el-input
            v-model="password"
            type="password"
          />
        </el-form-item>
      </el-form>
      <p v-else>
        Do you want delete
      </p>

      <div class="dialog-footer-center">
        <el-button
          type="danger"
          @click="dialogCreateForm = false"
        >
          cancle
        </el-button>
        <el-button
          v-if="dialogStatus === 'create'"
          type="primary"
          @click="createItem"
        >
          create
        </el-button>

        <el-button
          v-if="dialogStatus === 'delete'"
          type="danger"
          @click="deleteUser"
        >
          Confirm
        </el-button>

        <el-button
          v-if="dialogStatus === 'update'"
          type="danger"
          @click="updateUser"
        >
          Confirm
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      loading: false,
      dialogCreateForm: false,
      dialogStatus: 'create',
      idDelete: '',
      keySearch: '',
      params: {
        birthday: '',
        email: '',
        gender: '',
        username: '',
      },
      password: ''
    }
  },

  computed: {
    callApi() {
      return this.$store.state.user.listData
    }
  },

  created() {
    // this.loading = true
    // this.$store.dispatch('getAdmin').then(() => {
    //   this.loading = false
    // })
  },

  methods: {
    showCreateForm() {
      this.resetForm()
      this.dialogStatus = 'create'
      this.dialogCreateForm = true
    },

    resetForm() {
      this.params = {
        birthday: '',
        email: '',
        gender: '',
        username: '',
      },
      this.password = ''
    },

    createItem() {
      const data = {
        birthday: this.params.birthday,
        email: this.params.email,
        gender: this.params.gender,
        username: this.params.username,
        password: this.password
      }

      this.$store.dispatch('createNew', data).then(() => {
        this.dialogCreateForm = false
      })
    },

    showFormDelete(id) {
      this.dialogCreateForm = true
      this.dialogStatus = 'delete'
      this.idDelete = id
    },

    deleteUser() {
      this.$store.dispatch('removeUser', this.idDelete).then(() => {
         this.$store.dispatch('getAdmin')
         this.dialogCreateForm = false
      })
    },

    showFormUpdate(params) {
      this.dialogStatus = 'update'
      this.params = Object.assign({}, params)
      console.log(' this.params = ',  this.params)
      this.dialogCreateForm = true
    },

    updateUser() {
      this.$store.dispatch('updateUser', this.params).then(() => {
        this.$store.dispatch('getAdmin')
        this.dialogCreateForm = false
      })
      .catch((err) => {
        console.log(err)
        this.dialogCreateForm = false
      })
    },

    handleSearchUser() {
      this.$store.dispatch('searchUser', this.keySearch)
    }
  },
}
</script>
