<template>
  <div>
    <navbar/>
    <div class="content-router">
      <slot />
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar'

export default {
  name: 'layout',

  components: {
    navbar
  },

  created() {
    this.$store.dispatch('getCurrentAccount')
  },
}
</script>

<style>
  .content-router {
    padding: 60px;
  }
</style>
