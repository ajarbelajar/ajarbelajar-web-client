<template>
  <div class="overflow-hidden relative bg-white rounded shadow hover:shadow-lg">
    <div class="overflow-hidden relative p-3 rounded border-l-4 cursor-pointer" :class="notification.read_at ? 'border-primary-600' : 'border-red-600'" @click="handleClick(notification.id)">
      <p class="font-semibold">
        {{ notification.data.message }}
      </p>
      <p class="text-sm text-gray-700">
        {{ notification.created_at | moment('from', 'now') }}
      </p>
      <span v-if="!notification.read_at" class="text-2xs absolute top-0 right-0 px-1 font-bold text-red-700 bg-red-100 rounded">BARU</span>
    </div>
    <block-loading v-if="loading" />
  </div>
</template>

<script>
export default {
  name: 'NotificationList',
  props: {
    notification: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    handleClick(id) {
      this.loading = true
      this.$axios
        .$get('account/notifications/read/' + id)
        .then((data) => {
          switch (data.type) {
            case 'article':
              this.$router.push('/articles/' + data.slug)
              break
            case 'video':
              this.$router.push('/videos/' + data.slug)
              break
            case 'join.minitutor':
              this.$router.push('/join-minitutor')
              break
            case 'dashboard.minitutor':
              this.$router.push('/dashboard/minitutor/edit')
              break
            case 'feedback':
              this.$router.push('/dashboard/minitutor/feedback')
              break
          }
          this.$store.commit('notification/read', id)
        })
        .catch((err) => {
          this.$toast.danger(this.$errorMessage(err))
          this.loading = false
        })
    },
  },
}
</script>
