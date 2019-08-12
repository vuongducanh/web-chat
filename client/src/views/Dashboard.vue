<template>
  <div>
    hello dashboard

    <button @click="handleLogout">Log Out</button>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('getCurrentAccount')
    },

    methods: {
      handleLogout() {
        this.$store.dispatch('LogOut').then(() => {
          location.reload()
        })
      }
    },
  }
</script>
