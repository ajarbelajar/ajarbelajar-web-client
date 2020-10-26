<template>
  <span>
    <span class="action-toggle" @click="open = true">
      <i class="wb-bell"></i>
      <span class="label">{{ unreadNotifications.length || '' }}</span>
    </span>
    <app-notification-body
      v-if="open"
      :notifications="notifications"
      @close="handleClose"
    />
  </span>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      open: false,
      unreadNotifications: [],
    }
  },
  computed: {
    ...mapGetters({
      notifications: 'notification/notifications',
    }),
  },
  watch: {
    notifications: {
      deep: true,
      immediate: true,
      handler(val) {
        const notifications = val.filter((notification) => {
          return !notification.read_at
        })
        this.unreadNotifications = notifications
      },
    },
  },
  methods: {
    handleClose() {
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
