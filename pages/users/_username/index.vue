<template>
  <users-dashboard-wrap :user="user">
    <nuxt-child v-if="user" :user="user" />
  </users-dashboard-wrap>
</template>

<script>
export default {
  async asyncData({ params, $axios, store, error }) {
    try {
      return { user: (await $axios.$get(`/users/${params.username}`)).data }
    } catch (e) {
      return error(e)
    }
  },
}
</script>
