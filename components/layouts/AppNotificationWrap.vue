<template>
  <span>
    <span class="action-toggle" @click="open = true">
      <i class="wb-bell"></i>
      <span class="label">{{ $auth.notification_count || '' }}</span>
    </span>
    <app-notifications v-if="open" @close="close"></app-notifications>
  </span>
</template>
<script>
export default {
  data() {
    return {
      open: false,
    }
  },
  methods: {
    close() {
      this.open = false
    },
  },
}
</script>
<style lang="scss">
.action-toggle {
  cursor: pointer;
}
</style>
