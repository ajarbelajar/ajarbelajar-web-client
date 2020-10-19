<template>
  <div class="new-playlists">
    <h3 class="new-playlists-title">Playlist Terbaru</h3>
    <div class="row">
      <div v-for="(playlist, i) in playlists" :key="i" class="col-lg-3">
        <nuxt-link
          class="new-playlists-card"
          rel="nofollow"
          :to="`/playlists/${playlist.slug}`"
        >
          <div class="overlay-icon-play">
            <i class="wb-play"></i>
          </div>
          <v-lazy-image
            :src="playlist.hero.thumb"
            :src-placeholder="Placeholder"
            :alt="playlist.title"
            class="img-fluid"
          ></v-lazy-image>
          <v-lazy-image
            class="new-playlists-card-avatar"
            :src="playlist.user.avatar"
            :src-placeholder="Avatar"
            :alt="playlist.user.username"
          ></v-lazy-image>
          <span v-if="playlist.category" class="info-category">{{
            playlist.category.name
          }}</span>
          <h4 class="info-title text-truncate">{{ playlist.title }}</h4>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import Avatar from '@/assets/img/placeholder/avatar.png'
import Placeholder from '@/assets/img/placeholder/hero-thumb.jpg'
export default {
  props: {
    playlists: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      Avatar,
      Placeholder,
    }
  },
}
</script>
<style lang="scss">
.new-playlists {
  padding: 15px 0;
  .new-playlists-title {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: $font-weight-bold;
    margin: 0;
    margin-bottom: 10px;
    line-height: 1;
  }

  .new-playlists-card {
    display: block;
    padding: 5px;
    box-shadow: $box-shadow-sm;
    background-color: $white;
    overflow: hidden;
    border-radius: 4px;
    transition: $transition-base;
    text-decoration: none;
    position: relative;
    margin-bottom: 15px;

    .overlay-icon-play {
      opacity: 0;
      transition: $transition-base;
      position: absolute;
      z-index: 5;
      background-color: rgba($dark, 0.2);
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      i {
        position: absolute;
        top: 50%;
        font-size: 50px;
        display: block;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        color: $white;
      }
    }
    &:hover {
      box-shadow: $box-shadow;
      .overlay-icon-play {
        opacity: 1;
      }
    }
    .new-playlists-card-avatar {
      position: absolute;
      z-index: 3;
      display: block;
      width: 40px;
      height: 40px;
      border: 2px solid $white;
      border-radius: 50%;
      right: 10px;
      bottom: 30px;
    }
    .info-category {
      position: absolute;
      top: 10px;
      left: 10px;
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
    .info-title {
      display: block;
      margin: 0;
      padding: 10px;
      font-size: 14px;
      font-weight: $font-weight-bold;
      color: $dark;
    }
  }
}
</style>
