<template>
  <div class="app-playlist-card">
    <div class="card-thumb">
      <span v-if="playlist.category" class="category-badge">{{
        playlist.category.name
      }}</span>
      <v-lazy-image
        class="user-avatar"
        :src="playlist.user.avatar"
        :src-placeholder="Avatar"
        :alt="playlist.user.username"
      ></v-lazy-image>
      <v-lazy-image
        :src="playlist.hero.thumb"
        :src-placeholder="Placeholder"
        :alt="playlist.title"
        class="img-fluid thumb-img"
      ></v-lazy-image>
    </div>
    <div class="card-content">
      <span class="time-info">
        {{ playlist.created_at | moment('dddd, Do MMMM YYYY') }}
      </span>
      <h4 class="post-title">{{ playlist.title }}</h4>
      <span class="author-info"
        >Dari <span>{{ playlist.user.name }}</span></span
      >
    </div>
    <div class="post-type">
      <span>Playlist</span>
      <span><i class="icon wb-eye"></i> {{ playlist.view_count }}</span>
      <span><i class="icon wb-chat"></i> {{ playlist.comments_count }}</span>
      <span
        ><i class="icon wb-star"></i> {{ playlist.rating }} /
        {{ playlist.feedback_count }}</span
      >
    </div>
    <div class="card-post-actions">
      <nuxt-link :to="postUrl" class="btn btn-primary btn-sm btn-block">
        <i class="wb-play"></i>
        Tonton Video
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Avatar from '@/assets/img/placeholder/avatar.png'
import Placeholder from '@/assets/img/placeholder/hero-thumb.jpg'
export default {
  props: {
    playlist: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      Placeholder,
      Avatar,
    }
  },
  computed: {
    postUrl() {
      return `/playlists/${this.playlist.slug}`
    },
  },
}
</script>
<style lang="scss">
.app-playlist-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: $white;
  position: relative;
  border-radius: 4px;
  box-shadow: $box-shadow-sm;

  .card-thumb {
    position: relative;
    padding: 5px;

    .category-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      display: inline-block;
      line-height: 18px;
      font-size: 10px;
      background-color: $primary;
      font-weight: $font-weight-bold;
      border-radius: 2px;
      color: $white;
      padding: 0 6px;
      box-shadow: $box-shadow;
      text-transform: uppercase;
    }

    .user-avatar {
      position: absolute;
      z-index: 3;
      display: block;
      width: 40px;
      height: 40px;
      border: 2px solid $white;
      border-radius: 50%;
      right: 8px;
      bottom: -8px;
      box-shadow: $box-shadow;
    }

    .thumb-img {
      box-shadow: $box-shadow-sm;
    }
  }
  .card-content {
    padding: 5px;

    .post-title {
      display: block;
      margin: 0;
      font-size: 14px;
      font-weight: $font-weight-bold;
      color: $dark;
    }
    .time-info {
      display: block;
      font-size: 10px;
      font-weight: $font-weight-bold;
      color: $gray-600;
      margin-bottom: 5px;
    }
    .author-info {
      display: block;
      font-size: 12px;
      color: $gray-500;
      font-weight: $font-weight-bold;
      margin-top: 5px;
      span {
        color: $dark;
      }
    }
  }

  .post-type {
    padding: 5px;
    margin-top: auto;
    span {
      display: inline-block;
      font-size: 10px;
      line-height: 16px;
      padding: 0 2px;
      background-color: $gray-100;
      border: 1px solid $gray-200;
      border-radius: 1px;
      color: $gray-400;
      font-weight: $font-weight-bold;
    }
  }

  .card-post-actions {
    background-color: $gray-100;
    padding: 5px;
  }
}
</style>
