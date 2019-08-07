<template>
  <div class="login">
    <el-form>
      <el-form-item
        required
        label="username"
      >
        <el-input
          v-model="username"
          placeholder="enter username"
          type="text"
          auto-complete="off"
        />
      </el-form-item>

      <el-form-item
        required
        label="password"
      >
        <el-input
          v-model="password"
          placeholder="enter password"
          type="password"
          auto-complete="off"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>
      <el-button
        class="btn__login"
        native-type="submit"
        type="primary"
        @click.native.prevent="handleLogin"
      >
        Submit
      </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      username: '',
      password: ''
    }
  },

  computed: {
  },

  created() {
  },

  methods: {
    handleLogin() {
      let dataLogin = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('Login', dataLogin)
    }
  }
}
</script>

<style>
  .login {
    max-width: 400px;
  }
</style>

