<template>
  <div class="login">
    <div v-if="!showFormRegister" class="main">
      <div class="signin-form profile">
        <h3>Login</h3>
        <div class="login-form">
          <form autocomplete="off" v-on:submit.prevent="handleLogin">
            <input v-model="email" autocomplete="false" name="email" placeholder="E-mail" type="text" />
            <input v-model="password" name="password" autocomplete placeholder="Password" type="password" />
            <div class="tp">
              <input type="submit" value="LOGIN NOW" />
            </div>
          </form>
        </div>
        <p>
          <a @click="handleFormRegister" class="show-form-register">Don't have an account?</a>
        </p>
      </div>
    </div>

    <el-dialog
      :visible.sync="showFormRegister"
      width="25%"
      class="dialog-register"
      :close-on-click-modal="false"
    >
      <div class="main register-form">
        <div class="signin-form profile">
          <h3>REGISTER</h3>
          <div class="login-form">
            <form v-on:submit.prevent="createAccount">
              <input v-model="regemail" placeholder="E-mail" type="text" />
              <input v-model="regname" placeholder="Name" type="text" />
              <input v-model="regpassword" placeholder="Newpassword" autocomplete type="password" />
              <input v-model="confirmpassword" placeholder="Confirmpassword" autocomplete type="password" />
              <div class="tp">
                <input type="submit" value="REGISTER" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      email: "",
      password: "",
      regemail: '',
      regname: '',
      regpassword: '',
      confirmpassword: '',
      showFormRegister: false
    };
  },

  methods: {
    handleLogin() {
      let dataLogin = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch("Login", dataLogin).then(() => {
        this.$router.push({ path: "/dashboard" })
      }).catch(err => {
        throw new Error(err)
      })
    },

    resetForm() {
      this.regemail = '',
      this.regname = '',
      this.regpassword = '',
      this.confirmpassword = ''
    },

    handleFormRegister() {
      this.resetForm()
      this.showFormRegister = true
    },

    createAccount() {
      let data = {
        email: this.regemail,
        name: this.regname,
        password: this.regpassword
      }

      this.$store.dispatch("Register", data)
      .then(() => {
        this.$message({
          message: 'Create account success',
          type: 'success'
        });

        setTimeout(() => {
          this.showFormRegister = false
        }, 3000)
      }).catch(err => {
        this.showFormRegister = true
        throw new Error(err)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  background: #0a4981;
  height: 100%;
  overflow: hidden;

  .main {
    margin: 0 auto;
    width: 25%;
    padding-top: 100px;

    .show-form-register {
      cursor: pointer;
    }

    &.register-form {
      width: 100%;
      padding-top: 0;
    }
  }

  .signin-form {
    background: url(../images/banner1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2em;
    text-align: center;
  }
  .signin-form h3 {
    font-size: 2em;
    color: #fff;
    font-weight: 700;
    margin-bottom: 1.5em;
  }
  .signin-form h3 span {
    color: #67e1ff;
  }
  .signin-form img {
    border-radius: 50%;
  }
  .login-form {
    margin: 1em 0 2.5em;
  }
  .signin-form input[type="text"],
  .signin-form input[type="password"] {
    width: 92%;
    padding: 1em;
    font-size: 0.8em;
    margin: 1em 0;
    outline: none;
    color: #fff;
    border: none;
    border-bottom: 2px solid #fff;
    letter-spacing: 1px;
    text-align: center;
  }
  .signin-form input[type="text"] {
    background: none;
    display: block;
  }
  .signin-form input[type="password"] {
    background: none;
    display: block;
  }
  ::-webkit-input-placeholder {
    color: #fff !important;
  }
  .signin-form input[type="submit"] {
    outline: none;
    padding: 0.9em 0;
    width: 100%;
    text-align: center;
    font-size: 1em;
    margin-top: 1em;
    border: none;
    color: #fff;
    cursor: pointer;
    background: #0b4379;
    box-shadow: 0 2px 1px rgba(28, 28, 29, 0.42);
    border-radius: 22px;
  }
  .signin-form input[type="submit"]:hover {
    color: #fff;
    background: #002242;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
  }
  .signin-form p a {
    font-size: 0.875em;
    color: #fff;
    letter-spacing: 1px;
  }
  .tp {
    margin: 3.7em 0 0;
  }
  h5 {
    border-left: 1px dotted #7467b9;
    padding: 0.5em;
  }
  /*--copyright--*/
  .copyright {
    margin: 2em;
    text-align: center;
  }
  .copyright p {
    font-size: 1em;
    color: #fff;
    line-height: 1.8em;
  }
  .copyright p a {
    color: #fff;
  }
  .copyright p a:hover {
    color: #56c8dc;
  }
}

</style>

<style lang="scss">
  .dialog-register {
    .el-dialog__header {
      padding: 0;
    }

    .el-dialog__body {
      padding: 0;
    }
  }
</style>

