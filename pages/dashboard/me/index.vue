<template>
  <my-dashboard-wrap>
    <nuxt-child v-if="user" :user="user" />
  </my-dashboard-wrap>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios, store, error }) {
    try {
      const id = store.state.auth.id
      return { user: (await $axios.$get(`/users/${id}`)).data }
    } catch (e) {
      return error(e)
    }
  },
}
</script>
