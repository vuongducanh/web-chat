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
        <a class="codrops-icon codrops-icon-drop">
          <span>Back to the Codrops Article</span>
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
  mounted() {
    new gnMenu( document.getElementById( 'gn-menu' ))
  }
}
</script>

<style lang="scss">
  @import './css/component.scss';
  @import './css/index.scss';
  @import './css/normalize.scss';
</style>

