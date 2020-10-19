<template>
  <div class="most-user-point">
    <div class="most-user-point-header">
      <h3 class="most-user-point-title">Pengguna dengan Poin terbanyak</h3>
      <div class="most-user-point-links">
        <!-- <a href="#" class="btn btn-primary btn-sm">Poin user?</a> -->
      </div>
    </div>
    <div class="row">
      <div v-for="(user, i) in users" :key="i" class="col-lg-3">
        <nuxt-link
          class="most-user-point-card"
          :to="`/users/${user.username}/activity`"
        >
          <div class="avatar">
            <v-lazy-image
              :src="user.avatar"
              :src-placeholder="Avatar"
              :alt="user.username"
              class="avatar-holder"
            ></v-lazy-image>
          </div>
          <h4 class="info-name text-truncate">{{ user.name }}</h4>
          <span class="info-point">{{ user.points }} Poin</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import Avatar from '@/assets/img/placeholder/avatar.png'
export default {
  props: {
    users: {
      type: Array,
      default: () => [],
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
.most-user-point {
  padding: 15px 0;

  &-header {
    display: flex;
    margin-bottom: 10px;
  }
  &-title {
    display: block;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: $font-weight-bold;
    margin: auto 0;
    line-height: 1;
  }
  &-links {
    display: block;
    margin: auto 0;
    margin-left: auto;
    padding: 0;
  }

  .most-user-point-card {
    display: flex;
    flex-direction: column;
    padding: 5px;
    box-shadow: $box-shadow-sm;
    background-color: $white;
    overflow: hidden;
    border-radius: 4px;
    transition: $transition-base;
    text-decoration: none;
    margin-bottom: 15px;
    border-top: 4px solid $primary;

    &:hover {
      box-shadow: $box-shadow;
    }

    .avatar {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      margin-top: 30px;
      margin-bottom: 10px;
      border: 3px solid $primary;
      img {
        border: 3px solid $white;
      }
    }

    .info-name {
      display: block;
      margin: 0;
      padding: 10px;
      font-size: 14px;
      font-weight: $font-weight-bold;
      color: $dark;
      text-align: center;
      text-transform: uppercase;
    }

    .info-point {
      display: block;
      margin: 0 auto;
      line-height: 26px;
      padding: 0 10px;
      background-color: $primary;
      color: $white;
      font-size: 14px;
      font-weight: $font-weight-bold;
      letter-spacing: 1px;
      text-transform: uppercase;
      box-shadow: $box-shadow;
      border-radius: 4px;
      margin-bottom: 15px;
    }
  }
}
</style>
