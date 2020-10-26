<template>
  <minitutor-dashboard-wrap>
    <div v-if="feedback.length" class="container-fluid">
      <minitutor-feedback-list
        v-for="(val, i) in feedback"
        :key="i"
        :feedback="val"
      />
    </div>
    <div v-else class="container-fluid">
      <div class="py-100 panel panel-body">
        <h3 class="text-muted text-center">
          Belum ada Feedback pada artikel atau playlist anda.
        </h3>
      </div>
    </div>
  </minitutor-dashboard-wrap>
</template>

<script>
export default {
  middleware: ['auth', 'activeMinitutor'],
  computed: {
    feedback() {
      return this.$auth.minitutor.feedback
    },
  },
  head() {
    return this.$seo()
  },
}
</script>
