<template>
  <div class="container-fluid mb-2">
    <app-activity-list
      v-for="(activity, i) in user.activities"
      :key="i"
      :activity="activity"
    />
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  head() {
    return this.$seo()
  },
}
</script>
