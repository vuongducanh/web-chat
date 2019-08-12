<template>
  <div>hello dashboard
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('getCurrentAccount')
    }
  }
</script>
