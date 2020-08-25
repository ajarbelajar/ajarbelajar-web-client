<template>
  <div class="minitutor-dashboard-layout">
    <div class="minitutor-dashboard-layout-side" sticky-container>
      <div class="container-fluid pr-lg-0">
        <div v-sticky class="ab-profile-card-side" sticky-offset="{ top: 60 }">
          <div class="avatar">
            <v-lazy-image
              :src="$auth.avatar"
              :src-placeholder="avatar"
              :alt="$auth.username"
            ></v-lazy-image>
            <span class="point">{{ $auth.points }} Poin</span>
          </div>

          <div class="info">
            <a href="#" class="name">{{ $auth.name }}</a>
            <a href="#" class="username">@{{ $auth.username }}</a>
            <a href="#" class="btn btn-primary btn-sm btn-block"
              >Edit Profile</a
            >
          </div>

          <div class="minitutor-menu">
            <div class="list-group">
              <nuxt-link
                v-for="link in links"
                :key="link.to"
                active-class="active"
                class="list-group-item"
                :to="link.to"
              >
                <i class="icon" :class="link.icon"></i>{{ link.name }}
                <span v-if="link.badge" class="badge">{{ link.badge }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="minitutor-dashboard-layout-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import avatarPlaceholder from '@/assets/img/placeholder/avatar.png'
export default {
  data() {
    return {
      links: [
        {
          to: '/dashboard/minitutor/edit',
          name: 'Edit Informasi',
          icon: 'wb-user-circle',
        },
        {
          to: '/dashboard/minitutor/accepted/playlists',
          name: 'Video Diterima',
          icon: 'wb-check-circle',
          badge: 5,
        },
        {
          to: '/dashboard/minitutor/accepted/articles',
          name: 'Artikel Diterima',
          icon: 'wb-check-circle',
          badge: 5,
        },
        {
          to: '/dashboard/minitutor/playlists',
          name: 'Playlist',
          icon: 'wb-video',
          badge: 4,
        },
        {
          to: '/dashboard/minitutor/articles',
          name: 'Artikel',
          icon: 'wb-list',
          badge: 5,
        },
        {
          to: '/dashboard/minitutor/comments',
          name: 'Komentar',
          icon: 'wb-chat-group',
          badge: 3,
        },
        {
          to: '/dashboard/minitutor/feeback-konstruktif',
          name: 'Feedback konstruktif',
          icon: 'wb-reply',
          badge: 2,
        },
        {
          to: '/dashboard/minitutor/followers',
          name: 'Pengikut',
          icon: 'wb-users',
          badge: 3,
        },
      ],
    }
  },
  computed: {
    avatar() {
      return avatarPlaceholder
    },
  },
}
</script>

<style lang="scss">
.minitutor-dashboard-layout {
  display: flex;
  max-width: 100%;
  overflow: hidden;
  &-side {
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-bottom: $spacer/2;
    width: 240px;
    min-width: 240px;
  }
  &-content {
    flex: 1 0 auto;
    display: block;
    max-width: calc(100% - 240px);
    width: 100%;

    .panel {
      box-shadow: $box-shadow-sm;
      border-bottom: 4px solid $primary;
      border-radius: 4px;
      margin-bottom: $spacer/2;
      overflow: hidden;
    }
  }

  @include media-breakpoint-down(md) {
    display: block;
    &-side {
      min-width: auto;
      width: auto;
    }
    &-content {
      margin-top: 0;
      min-width: 100%;
    }
  }
}

.ab-profile-card-side {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 15px 0;
  border-radius: 4px;
  background-color: $white;
  box-shadow: $box-shadow-sm;
  border-bottom: 4px solid $primary;

  .avatar {
    display: block;
    position: relative;
    width: 100px;
    height: 100px;
    border: 3px solid $primary;
    margin: 15px auto;
    img {
      border: 3px solid $white;
    }

    .point {
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

    @include media-breakpoint-down(md) {
      margin: 15px auto;
      width: 100px;
      height: 100px;
      border-width: 2px;
      img {
        border-width: 2px;
      }
    }
  }

  .info {
    text-align: center;
    margin-bottom: 15px;
    border-bottom: 1px solid $border-color;
    padding: 0 15px;
    padding-bottom: 10px;
    .name {
      display: block;
      margin: 0;
      margin-bottom: 5px;
      font-size: 16px;
      line-height: 1;
      text-transform: uppercase;
      font-weight: $font-weight-bold;
      color: $gray-600;
      &:hover {
        text-decoration: none;
        color: $primary;
      }
    }
    .username {
      display: block;
      margin: 0;
      line-height: 1;
      font-size: 12px;
      text-transform: lowercase;
      color: $gray-400;
      margin-bottom: 5px;
      margin-bottom: 15px;
      &:hover {
        text-decoration: none;
        color: $primary;
      }
    }
  }

  .minitutor-menu {
    .list-group {
      margin: 0;
      .list-group-item {
        position: relative;
        padding: 8px 10px;
        border-radius: 0;
        font-weight: $font-weight-bold;
        border-left: 2px solid $white;
        &.active,
        &:hover {
          border-left: 2px solid $primary;
          background-color: rgba($primary, 0.1);
          color: $primary;
        }

        .badge {
          display: block;
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background-color: $primary;
          color: $white;
          font-size: 10px;
          line-height: 0;
          padding: 8px 5px;
        }
      }
    }
  }
}
</style>
