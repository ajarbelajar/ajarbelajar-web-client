<template>
  <div>
    <div class="container-fluid">
      <div class="minitutor-page-card">
        <div class="minitutor-page-card-left">
          <div class="user-pic">
            <nuxt-link :to="`/minitutors/${user.username}`" class="avatar">
              <v-lazy-image
                class="avatar-holder"
                :src="user.avatar"
                :src-placeholder="Avatar"
                :alt="user.username"
              ></v-lazy-image>
            </nuxt-link>
          </div>
        </div>
        <div class="minitutor-page-card-center">
          <h2 class="info-name text-truncate">
            <nuxt-link :to="`/minitutors/${user.username}`">{{
              user.name
            }}</nuxt-link>
          </h2>
          <span class="info-username text-truncate">
            <nuxt-link :to="`/minitutors/${user.username}`">
              @{{ user.name }}
            </nuxt-link>
          </span>
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
        </div>
        <div class="minitutor-page-card-right">
          <app-follow-toggle v-if="$auth" :mid="minitutor.id" />
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <ul class="my-dashboard-nav nav-quick nav-quick-sm row">
        <li v-for="(link, i) in links" :key="i" class="nav-item col">
          <nuxt-link class="nav-link" :to="link.to" exact-active-class="active">
            <i class="icon" :class="link.icon"></i>
            <span class="d-lg-block d-none">{{ link.name }}</span>
            <span v-if="link.badge" class="badge badge-sm badge-dark m-1">
              {{ link.badge }}
            </span>
          </nuxt-link>
        </li>
      </ul>
    </div>

    <slot />
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
    minitutor: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    Avatar() {
      return Avatar
    },
    links() {
      return [
        {
          to: `/minitutors/${this.user.username}/info`,
          name: 'Info',
          icon: 'wb-info',
        },
        {
          to: `/minitutors/${this.user.username}/playlists`,
          name: 'Playlist',
          icon: 'wb-video',
          badge: this.minitutor.playlists.length || '',
        },
        {
          to: `/minitutors/${this.user.username}/articles`,
          name: 'Artikel',
          icon: 'wb-order',
          badge: this.minitutor.articles.length || '',
        },
        {
          to: `/minitutors/${this.user.username}/followers`,
          name: 'Pengikut',
          icon: 'wb-users',
          badge: this.minitutor.followers.length || '',
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.minitutor-page-card {
  display: flex;
  width: 100%;
  margin-bottom: $spacer/2;
  border-radius: 4px;
  background-color: $white;
  box-shadow: $box-shadow-sm;
  border-bottom: 4px solid $primary;

  @include media-breakpoint-down(sm) {
    flex-direction: column;
  }

  &-left {
    display: block;
    padding: 20px;
    .user-pic {
      display: block;
      .avatar {
        display: block;
        width: 120px;
        position: relative;
        border: 3px solid $primary;
        img {
          border: 3px solid $white;
        }
        @include media-breakpoint-down(sm) {
          width: 100px;
          margin: auto;
        }
      }

      &-points {
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        line-height: 20px;
        padding: 0 10px;
        background-color: $primary;
        color: $white;
        font-size: 10px;
        font-weight: $font-weight-bold;
        text-transform: uppercase;
        border-radius: 20px;
        box-shadow: $box-shadow;
      }
    }
  }

  &-center {
    margin: auto 0;
    display: block;
    width: 100%;
    max-width: calc(100% - 160px - 165px);
    padding: 20px 0;
    @include media-breakpoint-down(sm) {
      text-align: center;
      max-width: 100%;
      padding: 0 20px;
    }
    .info-name {
      margin: 0;
      margin-bottom: 5px;
      font-size: 24px;
      line-height: 1;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-weight: $font-weight-bold;
      @include media-breakpoint-down(sm) {
        font-size: 20px;
      }
      a {
        color: $gray-600;
        &:hover {
          color: $primary;
          text-decoration: none;
        }
      }
    }

    .info-username {
      margin: 0;
      display: block;
      font-size: 16px;
      line-height: 20px;
      text-transform: lowercase;
      margin-bottom: 5px;
      @include media-breakpoint-down(sm) {
        font-size: 14px;
      }
      a {
        color: $gray-400;
        &:hover {
          color: $primary;
          text-decoration: none;
        }
      }
    }
    .social-info {
      display: block;
      margin: 0;

      a {
        display: inline-block;
        font-size: 16px;
        margin-right: 10px;
        color: $gray-400;
        text-decoration: none;
        &:hover {
          color: $primary;
        }
      }
      @include media-breakpoint-down(md) {
        text-align: center;
        a {
          margin: 0 5px;
        }
      }
    }
  }

  &-right {
    padding: 20px;
    width: 165px;
    text-align: right;
    @include media-breakpoint-down(sm) {
      padding-top: 10px;
      width: 100%;
      text-align: center;
    }
  }
}

.my-dashboard-nav {
  box-shadow: $box-shadow-sm;
  overflow: hidden;
  margin-bottom: $spacer/2;

  a.nav-link {
    font-weight: $font-weight-bold;
    transition: 150ms ease-in-out;
    &.active,
    &:hover {
      background-color: $primary;
      color: $white;
    }
  }
}
</style>
