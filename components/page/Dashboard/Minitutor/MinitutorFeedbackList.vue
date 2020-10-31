<template>
  <div class="feedback-row">
    <div v-if="!showDetail" class="feedback-row-info">
      <div class="feedback-row-left">
        <div class="user-pic">
          <nuxt-link
            :to="`/users/${feedback.user.username}/activity`"
            class="avatar"
          >
            <v-lazy-image
              class="avatar-holder"
              :src="feedback.user.avatar"
              :src-placeholder="Avatar"
              :alt="feedback.user.username"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="feedback-row-right">
        <h5 class="feedback-row-info-name">
          <nuxt-link :to="`/users/${feedback.user.username}/activity`">{{
            feedback.user.name
          }}</nuxt-link>
        </h5>
        <span class="feedback-row-info-date">{{
          feedback.created_at | moment('from', 'now')
        }}</span>
        <client-only>
          <star-rating
            class="line-height-1 feedback-row-info-rating"
            :rating="Number(feedback.rating)"
            :read-only="true"
            :increment="0.01"
            :star-size="16"
            text-class="mt-0 font-weight-bold"
          ></star-rating>
        </client-only>
        <p class="feedback-row-info-message">{{ feedback.message }}</p>
      </div>
    </div>
    <div v-else class="feedback-row-detail">
      <table class="table table-bordered">
        <tr>
          <th>Nama</th>
          <td>
            <nuxt-link :to="`/users/${feedback.user.username}/activity`">{{
              feedback.user.name
            }}</nuxt-link>
          </td>
        </tr>
        <tr>
          <th>Dibuat pada</th>
          <td>{{ feedback.created_at | moment('from', 'now') }}</td>
        </tr>
        <tr>
          <th>Berkaitan dengan reviewer</th>
          <td>{{ feedback.sync_with_me ? 'Ya' : 'Tidak' }}</td>
        </tr>
        <tr>
          <th>Tingkat pemahaman</th>
          <td>{{ feedback.understand }}</td>
        </tr>
        <tr>
          <th>Inspiratif</th>
          <td>{{ feedback.inspiring }}</td>
        </tr>
        <tr>
          <th>Bahasa dan gaya penyampaian</th>
          <td>{{ feedback.language_style }}</td>
        </tr>
        <tr>
          <th>Alur konten</th>
          <td>{{ feedback.content_flow }}</td>
        </tr>
        <tr>
          <th>Total rating</th>
          <td>{{ feedback.rating }}</td>
        </tr>
        <tr>
          <th>Pesan</th>
          <td>{{ feedback.message }}</td>
        </tr>
      </table>
    </div>
    <div class="feedback-row-action">
      <button
        type="button"
        class="btn btn-default btn-sm btn-block"
        @click="showDetail = !showDetail"
      >
        {{ showDetail ? 'Tutup' : 'Detail' }}
      </button>
    </div>
  </div>
</template>

<script>
import Avatar from '@/assets/img/placeholder/avatar.png'
export default {
  props: {
    feedback: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      Avatar,
      showDetail: false,
    }
  },
}
</script>

<style lang="scss">
.feedback-row {
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
  }
  &-left {
    padding-right: 10px;
  }
}
</style>
