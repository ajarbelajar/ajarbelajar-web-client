<template>
  <div class="user-card-sm">
    <div class="user-pic">
      <nuxt-link :to="`/users/${user.username}/activity`" class="avatar">
        <v-lazy-image
          class="avatar-holder"
          :src="user.avatar"
          :src-placeholder="Avatar"
          :alt="user.username"
        ></v-lazy-image>
      </nuxt-link>
    </div>
    <div class="info">
      <h4 class="info-name text-truncate">
        <nuxt-link :to="`/users/${user.username}/activity`">
          {{ user.name }}
        </nuxt-link>
      </h4>
      <span class="info-username text-truncate">
        <nuxt-link :to="`/users/${user.username}/activity`">
          @{{ user.username }}
        </nuxt-link>
      </span>
    </div>
    <div class="social-info">
      <a
        v-if="user.website_url"
        :href="user.website_url"
        rel="noreferrer"
        target="_blank"
      >
        <i class="icon wb-globe"></i>
      </a>
      <a
        v-if="user.twitter_url"
        :href="user.twitter_url"
        rel="noreferrer"
        target="_blank"
      >
        <i class="icon socicon-twitter"></i>
      </a>
      <a
        v-if="user.instagram_url"
        :href="user.instagram_url"
        rel="noreferrer"
        target="_blank"
      >
        <i class="icon socicon-instagram"></i>
      </a>
      <a
        v-if="user.facebook_url"
        :href="user.facebook_url"
        rel="noreferrer"
        target="_blank"
      >
        <i class="icon socicon-facebook"></i>
      </a>
      <a
        v-if="user.youtube_url"
        :href="user.youtube_url"
        rel="noreferrer"
        target="_blank"
      >
        <i class="icon socicon-youtube"></i>
      </a>
    </div>
    <div class="actions">
      <nuxt-link
        :to="`/users/${user.username}/activity`"
        class="btn btn-primary btn-sm px-30"
      >
        Lihat Profil Pengguna
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Avatar from '@/assets/img/placeholder/avatar.png'
export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      Avatar,
    }
  },
}
</script>

<style lang="scss">
.user-card-sm {
  display: block;
  background-color: $white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
  border-bottom: 4px solid $primary;
  text-align: center;
  width: 100%;

  .user-pic {
    padding: 15px;
    .avatar {
      width: 100px;
      border: 3px solid $primary;
      img {
        border: 3px solid $white;
      }
    }
  }
  .info {
    margin-bottom: 10px;
    &-name {
      margin: 0;
      font-weight: $font-weight-bold;
      letter-spacing: 1px;
      font-size: 16px;
      text-transform: uppercase;
      a {
        color: $gray-700;
        &:hover {
          text-decoration: none;
          color: $primary;
        }
      }
    }
    &-username {
      margin: 0;
      display: block;
      font-weight: $font-weight-bold;
      font-size: 12px;
      text-transform: lowercase;
      a {
        color: $gray-400;
        &:hover {
          text-decoration: none;
          color: $primary;
        }
      }
    }
  }
  .social-info {
    display: block;
    margin-bottom: 10px;
    a {
      display: inline-block;
      padding: 5px;
      color: $gray-500;
      &:hover {
        text-decoration: none;
        color: $primary;
      }
    }
  }
}
</style>
