<template>
  <minitutor-dashboard-wrap>
    <div v-if="comments.length" class="container-fluid">
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="dashboard-comment-list"
      >
        <div class="dashboard-comment-list-info">
          <div class="dashboard-comment-list-left">
            <div class="user-pic">
              <nuxt-link
                :to="`/users/${comment.user.username}/activity`"
                class="avatar"
              >
                <v-lazy-image
                  class="avatar-holder"
                  :src="comment.user.avatar"
                  :src-placeholder="Avatar"
                  :alt="comment.user.username"
                />
              </nuxt-link>
            </div>
          </div>
          <div class="dashboard-comment-list-right">
            <h5 class="dashboard-comment-list-info-name">
              <nuxt-link :to="`/users/${comment.user.username}/activity`">{{
                comment.user.name
              }}</nuxt-link>
            </h5>
            <span class="dashboard-comment-list-info-date">{{
              comment.created_at | moment('from', 'now')
            }}</span>
            <p class="dashboard-comment-list-info-message">
              {{ comment.body }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="py-100 panel panel-body">
      <h3 class="text-muted text-center">
        Belum ada komentar pada artikel atau playlist anda.
      </h3>
    </div>
  </minitutor-dashboard-wrap>
</template>

<script>
import Avatar from '@/assets/img/placeholder/avatar.png'
export default {
  middleware: ['auth', 'activeMinitutor'],
  async asyncData({ $axios, store, error }) {
    try {
      return {
        comments: await $axios.$get('/minitutor/comments'),
      }
    } catch (e) {
      error(e)
    }
  },
  data() {
    return {
      Avatar,
    }
  },
}
</script>

<style lang="scss">
.dashboard-comment-list {
  display: block;
  background-color: $white;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 15px;
  border-bottom: 4px solid $primary;
  &.in-panel {
    border-radius: 0;
    border-bottom: 1px solid $border-color;
    box-shadow: none;
  }
  &-info {
    display: flex;
    &-name {
      display: block;
      margin: 0;
      margin-bottom: 3px;
      font-size: 14px;
      text-transform: uppercase;
      font-weight: $font-weight-bold;
      letter-spacing: 1px;
      line-height: 1;
    }
    &-date {
      display: block;
      font-size: 12px;
    }
    &-message {
      margin: 0;
    }
  }
  &-left {
    padding-right: 10px;
  }
}
</style>
