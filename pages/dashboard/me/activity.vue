<template>
  <my-dashboard-wrap>
    <div class="container-fluid mb-2">
      <app-activity-list
        v-for="(activity, i) in activities"
        :key="i"
        :activity="activity"
      />
    </div>
  </my-dashboard-wrap>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios, store, error }) {
    try {
      const id = store.state.auth.id
      const activities = await $axios.$get(`/activities/${id}`)
      return { activities }
    } catch (e) {
      return error(e)
    }
  },
  head() {
    return this.$seo()
  },
}
</script>
