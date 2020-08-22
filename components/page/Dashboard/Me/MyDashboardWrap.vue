<template>
  <div>
    <resend-email-verify />

    <div class="container-fluid">
      <div class="ab-profile-card-lg">
        <div class="avatar">
          <v-lazy-image
            :src="$auth.avatar"
            :src-placeholder="avatar"
            :alt="$auth.username"
          ></v-lazy-image>
        </div>
        <div class="info">
          <h3 class="name">{{ $auth.name }}</h3>
          <p class="username">@{{ $auth.username }}</p>
          <span v-if="$auth.email_verified_at" class="email-info unverified"
            >Tidak Diverifikasi</span
          >
          <span v-else class="email-info verified">Diverifikasi</span>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <ul class="my-dashboard-nav nav-quick nav-quick-sm row">
        <li v-for="link in links" :key="link.to" class="nav-item col">
          <nuxt-link class="nav-link" active-class="active" :to="link.to">
            <i class="icon" :class="link.icon"></i>
            <span class="d-lg-block d-none">{{ link.name }}</span>
            <span v-if="link.badge" class="badge badge-sm badge-dark m-1">{{
              link.badge
            }}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import avatar from '@/assets/img/placeholder/avatar.png'
export default {
  data() {
    return {
      links: [
        {
          to: '/dashboard/me/activity',
          name: 'Aktifitas',
          icon: 'wb-graph-up',
        },
        {
          to: '/dashboard/me/edit',
          name: 'Edit Profile',
          icon: 'wb-user-circle',
        },
        {
          to: '/dashboard/me/following',
          name: 'Diikuti',
          icon: 'wb-star',
          badge: 4,
        },
        {
          to: '/dashboard/me/favorite',
          name: 'Favorit',
          icon: 'wb-heart',
          badge: 3,
        },
      ],
    }
  },
  computed: {
    avatar() {
      return avatar
    },
  },
}
</script>

<style lang="scss">
.ab-profile-card-lg {
  display: flex;
  width: 100%;
  margin-bottom: $spacer / 2;
  padding: 30px;
  border-radius: 4px;
  background-color: $white;
  box-shadow: $box-shadow-sm;
  border-bottom: 4px solid $primary;

  @include media-breakpoint-down(md) {
    flex-direction: column;
    padding: 30px 15px;
  }

  .avatar {
    display: block;
    width: 120px;
    height: 120px;
    border: 3px solid $primary;
    margin: 0;
    margin-right: 15px;
    img {
      border: 3px solid $white;
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
    margin: auto 0;
    @include media-breakpoint-down(md) {
      text-align: center;
    }
    .name {
      margin: 0;
      margin-bottom: 5px;
      font-size: 24px;
      line-height: 1;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-weight: $font-weight-bold;
      color: $gray-600;
      @include media-breakpoint-down(md) {
        font-size: 20px;
        letter-spacing: 0px;
        text-align: center;
      }
    }
    .username {
      margin: 0;
      font-size: 16px;
      line-height: 20px;
      text-transform: lowercase;
      color: $gray-400;
      margin-bottom: 5px;
    }
    .email-info {
      display: inline-block;
      line-height: 20px;
      padding: 0 6px;
      background-color: $primary;
      color: $white;
      font-size: 10px;
      font-weight: $font-weight-bold;
      text-transform: uppercase;
      border-radius: 2px;
    }
  }
}

.my-dashboard-nav {
  box-shadow: $box-shadow-sm;
  overflow: hidden;

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
