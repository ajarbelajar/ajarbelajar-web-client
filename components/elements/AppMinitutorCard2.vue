<template>
  <div class="minitutor-card">
    <div class="minitutor-card-top">
      <nuxt-link :to="`/minitutors/${user.username}`" class="avatar">
        <v-lazy-image
          class="avatar-holder"
          :src="user.avatar"
          :src-placeholder="Avatar"
          :alt="user.username"
        ></v-lazy-image>
        <span class="minitutor-point">{{ user.points }} Poin</span>
      </nuxt-link>
    </div>

    <div class="minitutor-card-body">
      <h4 class="minitutor-name">
        <nuxt-link :to="`/minitutors/${user.username}`">
          {{ user.name }}
        </nuxt-link>
      </h4>
      <span class="minitutor-address">
        {{ minitutor.city_and_country_of_study || 'T_T' }}
      </span>
    </div>

    <div class="minitutor-card-social-info">
      <a
        v-if="user.website_url"
        :href="user.website_url"
        rel="noreferrer"
        target="_blank"
        class="btn btn-icon btn-default btn-outline btn-sm"
      >
        <i class="icon wb-globe"></i>
      </a>
      <a
        v-if="user.twitter_url"
        :href="user.twitter_url"
        rel="noreferrer"
        target="_blank"
        class="btn btn-icon btn-default btn-outline btn-sm"
      >
        <i class="icon socicon-twitter"></i>
      </a>
      <a
        v-if="user.instagram_url"
        :href="user.instagram_url"
        rel="noreferrer"
        target="_blank"
        class="btn btn-icon btn-default btn-outline btn-sm"
      >
        <i class="icon socicon-instagram"></i>
      </a>
      <a
        v-if="user.facebook_url"
        :href="user.facebook_url"
        rel="noreferrer"
        target="_blank"
        class="btn btn-icon btn-default btn-outline btn-sm"
      >
        <i class="icon socicon-facebook"></i>
      </a>
      <a
        v-if="user.youtube_url"
        :href="user.youtube_url"
        rel="noreferrer"
        target="_blank"
        class="btn btn-icon btn-default btn-outline btn-sm"
      >
        <i class="icon socicon-youtube"></i>
      </a>
    </div>

    <div v-if="$auth" class="minitutor-card-follow-toggle">
      <app-follow-toggle :mid="minitutor.id" class="btn-xs" />
    </div>

    <div class="minitutor-card-counter mt-auto">
      <div class="column">
        <span class="number">{{ minitutor.followers_count }}</span>
        <span class="name">Pengikut</span>
      </div>
      <div class="column">
        <span class="number">{{ minitutor.articles_count }}</span>
        <span class="name">Artikel</span>
      </div>
      <div class="column">
        <span class="number">{{ minitutor.playlists_count }}</span>
        <span class="name">Playlist</span>
      </div>
    </div>

    <div class="minitutor-card-bottom">
      <nuxt-link
        :to="`/minitutors/${user.username}`"
        class="btn btn-block btn-sm btn-primary"
      >
        Lihat MiniTutor
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Avatar from '@/assets/img/placeholder/avatar.png'
export default {
  props: {
    minitutor: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    user: {
      type: Object,
      required: true,
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
.minitutor-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: $white;
  margin-bottom: 15px;
  border-radius: 4px;
  box-shadow: $box-shadow-sm;
  border-top: 4px solid $primary;
  padding-top: $spacer;

  &-top {
    padding: $spacer 0;

    .avatar {
      display: block;
      width: 80px;
      height: 80px;
      margin: auto;
      border-radius: 4px;
      position: relative;
      img {
        border-radius: 4px;
      }
      .minitutor-point {
        display: block;
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        margin: 0 auto;
        line-height: 16px;
        padding: 0 10px;
        background-color: $primary;
        color: $white;
        font-size: 10px;
        font-weight: $font-weight-bold;
        letter-spacing: 1px;
        text-transform: uppercase;
        box-shadow: $box-shadow;
        border-radius: 4px;
      }
    }
  }

  &-body {
    text-align: center;
    padding: 0 $spacer/2;
    .minitutor-name {
      font-size: 20px;
      font-weight: $font-weight-bold;
      margin: 0;
      a {
        color: $dark;
        text-decoration: none;
      }
    }

    .minitutor-address {
      display: block;
      font-size: 13px;
      font-weight: $font-weight-bold;
      color: $gray-400;
    }
  }

  &-social-info {
    display: block;
    text-align: center;
    padding-top: $spacer/2;
  }

  &-follow-toggle {
    text-align: center;
    display: block;
    width: 100%;
    margin-top: auto;
  }

  &-counter {
    display: flex;
    padding: $spacer/2;

    .column {
      display: block;
      width: 100%;
      text-align: center;

      .number {
        display: block;
        font-size: 16px;
        font-weight: $font-weight-bold;
        color: $dark;
      }
      .name {
        display: block;
        font-size: 12px;
        font-weight: $font-weight-bold;
        color: $gray-400;
      }
    }
  }
  &-bottom {
    padding: $spacer/2;
    background-color: $gray-100;
    border-radius: 4px;
  }
}
</style>
