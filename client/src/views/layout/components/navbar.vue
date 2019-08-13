<template>
  <div class="container-nav">
    <ul id="gn-menu" class="gn-menu-main">
      <li class="gn-trigger">
        <a class="gn-icon gn-icon-menu">
          <span>Menu</span>
        </a>
        <nav class="gn-menu-wrapper">
          <div class="gn-scroller">
            <ul class="gn-menu">
              <li>
                <router-link tag="a" to="/dashboard">
                   <a class="gn-icon gn-icon-cog">Dashboard</a>
                </router-link>
              </li>
              <li>
                <router-link tag="a" to="/">
                  <a class="gn-icon gn-icon-download">Home</a>
                </router-link>
              </li>
              <li>
                <a class="gn-icon gn-icon-help">Help</a>
              </li>
              <li>
                <a class="gn-icon gn-icon-videos" @click="handleLogout">Log Out</a>
              </li>
            </ul>
          </div>
        </nav>
      </li>
      <li>
        <a>Codrops</a>
      </li>
      <li>
        <router-link tag="a" to="/profile">
          <a >Profile</a>
        </router-link>
      </li>
      <li>
        <a class="codrops-icon icon-avatar">
          <el-dropdown class="avatar-container right-menu-item" trigger="click">
          <img :src="getInfoUser.avatar" class="user-avatar">
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span class="logout" @click="handleLogout">Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import * as classie from './js/classie'
import gnmenu from './js/gnmenu'
Vue.use(classie)
Vue.use(gnmenu)

export default {
  computed: {
    getInfoUser() {
      return this.$store.state.user.infoUser
    }
  },

  mounted() {
    new gnMenu( document.getElementById( 'gn-menu' ))
  },

  methods: {
    handleLogout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()
      })
    }
  }
}
</script>

<style lang="scss">
  @import './css/component.scss';
  @import './css/index.scss';
  @import './css/normalize.scss';

  .container-nav {
    .user-avatar {
      width: 45px;
      border-radius: 50%;
    }

    .avatar-container {
      line-height: 0;
    }

    .icon-avatar {
      padding-top: 8px;
    }

    .gn-menu-main {
      z-index: 999
    }
  }
</style>

