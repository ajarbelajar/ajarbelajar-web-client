<template>
  <minitutor-dashboard-wrap>
    <div v-if="feedback.length" class="container-fluid">
      <minitutor-feedback-list
        v-for="(val, i) in feedback"
        :key="i"
        :feedback="val"
      />
    </div>
    <div v-else class="py-100 panel panel-body">
      <h3 class="text-muted text-center">
        Belum ada Feedback pada artikel atau playlist anda.
      </h3>
    </div>
  </minitutor-dashboard-wrap>
</template>

<script>
export default {
  middleware: ['auth', 'activeMinitutor'],
  async asyncData({ $axios, store, error }) {
    try {
      return {
        feedback: await $axios.$get('/minitutor/feedback'),
      }
    } catch (e) {
      error(e)
    }
  },
}
</script>
