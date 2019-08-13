<template>
  <div> helo layout
    <navbar/>
    <slot />
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
