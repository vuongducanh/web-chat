<template>
  <div>hello dashboard
    <button @click="getListUser()">click get list user</button>
  </div>
</template>

<script>
export default {
  methods: {
    getListUser() {
      this.$store.dispatch('getListUser')
    }
  }
}
</script>
