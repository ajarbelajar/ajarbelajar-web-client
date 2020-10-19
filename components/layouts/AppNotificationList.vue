<template>
  <li class="list-group-item" @click="handleClick(notification.id)">
    <div class="notif-content-wrap" :class="{ unread: !notification.read_at }">
      <span class="notif-title">
        {{ notification.data.message }}
      </span>
      <span class="notif-time">
        {{ notification.created_at | moment('from', 'now') }}
      </span>
    </div>
    <div class="line"></div>
  </li>
</template>

<script>
export default {
  props: {
    notification: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleClick(id) {
      this.$emit('loading', true)
      this.$axios
        .$get('notifications/read/' + id)
        .then((data) => {
          switch (data.type) {
            case 'article':
              this.$router.push('/articles/' + data.slug)
              break
            case 'playlist':
              this.$router.push('/playlists/' + data.slug)
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
          if (!this.notification.read_at) {
            this.$store.commit('setAuth', {
              ...this.$auth,
              notification_count: this.$auth.notification_count - 1,
            })
          }
          this.$store.commit('notification/read', id)
          this.$emit('close')
        })
        .catch((err) => {
          this.$toast.danger(this.$errorMessage(err))
          this.$emit('loading', false)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.list-group-item {
  display: block;
  background-color: $gray-100;
  padding: 0 $spacer/2;
  transition: background-color 150ms ease-in-out;
  cursor: pointer;

  &:last-child .line {
    display: none;
  }

  &:hover {
    background-color: rgba($primary, 0.05);
  }

  .line {
    display: block;
    width: 100%;
    height: 1px;
    background-color: $gray-300;
  }
  .notif-content-wrap {
    position: relative;
    padding: $spacer/2 0;
    padding-left: 20px;

    .notif-title {
      display: block;
      font-size: 14px;
      line-height: 16px;
      color: $gray-600;
      margin-bottom: 4px;
    }
    .notif-time {
      display: block;
      font-size: 12px;
      line-height: 12px;
      margin: 0;
      color: $gray-500;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      margin-top: 4px;
      width: 8px;
      height: 8px;
      border: 1px solid $gray-600;
      border-radius: 50%;
    }

    &.unread::before {
      background-color: $danger;
      border-color: $danger;
    }
  }
}
</style>
