<template>
  <div class="login">
    <el-form>
      <el-form-item
        required
        label="email"
      >
        <el-input
          v-model="email"
          placeholder="enter email"
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
      email: '',
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
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('Login', dataLogin).then(() => {
        this.$router.push({ path: '/dashboard' })
      })
    }
  }
}
</script>

<style>
  .login {
    max-width: 400px;
  }
</style>

