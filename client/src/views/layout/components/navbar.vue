<template>
  <div class="container">
    <ul id="gn-menu" class="gn-menu-main">
      <li class="gn-trigger">
        <a class="gn-icon gn-icon-menu">
          <span>Menu</span>
        </a>
        <nav class="gn-menu-wrapper">
          <div class="gn-scroller">
            <ul class="gn-menu">
              <li class="gn-search-item">
                <input placeholder="Search" type="search" class="gn-search" />
                <a class="gn-icon gn-icon-search">
                  <span>Search</span>
                </a>
              </li>
              <li>
                <a class="gn-icon gn-icon-download">Downloads</a>
                <ul class="gn-submenu">
                  <li>
                    <a class="gn-icon gn-icon-illustrator">Vector Illustrations</a>
                  </li>
                  <li>
                    <a class="gn-icon gn-icon-photoshop">Photoshop files</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="gn-icon gn-icon-cog">Settings</a>
              </li>
              <li>
                <a class="gn-icon gn-icon-help">Help</a>
              </li>
              <li>
                <a class="gn-icon gn-icon-archive">Archives</a>
                <ul class="gn-submenu">
                  <li>
                    <a class="gn-icon gn-icon-article">Articles</a>
                  </li>
                  <li>
                    <a class="gn-icon gn-icon-pictures">Images</a>
                  </li>
                  <li>
                    <a class="gn-icon gn-icon-videos">Videos</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <!-- /gn-scroller -->
        </nav>
      </li>
      <li>
        <a>Codrops</a>
      </li>
      <li>
        <a
          class="codrops-icon codrops-icon-prev"
        >
          <span>Previous Demo</span>
        </a>
      </li>
      <li>
        <a class="codrops-icon">
          <el-dropdown class="avatar-container right-menu-item" trigger="click">
          <div class="avatar-wrapper">
            <img :src="getInfoUser.avatar" class="user-avatar">
            <i class="el-icon-caret-bottom"/>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided>
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

  .user-avatar {
    width: 45px;
    border-radius: 50%;
  }
</style>

