<template>
  <div class="minitutor-card">
    <div class="minitutor-card-top">
      <div class="minitutor-card-user-pic">
        <nuxt-link :to="`/minitutor/${user.id}`" class="avatar">
          <v-lazy-image
            class="avatar-holder"
            :src="user.avatar"
            :src-placeholder="Avatar"
            :alt="user.username"
          ></v-lazy-image>
          <span class="minitutor-point">{{ user.points }} Poin</span>
        </nuxt-link>
      </div>
      <div class="minitutor-card-content">
        <div class="minitutor-card-content-header">
          <h3 class="minitutor-card-content-title">
            <nuxt-link :to="`/minitutor/${user.id}`" class="name">{{
              user.name
            }}</nuxt-link>
            <nuxt-link :to="`/minitutor/${user.id}`" class="username"
              >@{{ user.username }}</nuxt-link
            >
          </h3>
          <div class="minitutor-card-content-actions">
            <nuxt-link
              :to="`/minitutor/${user.id}`"
              class="btn btn-primary btn-sm"
              >Lihat MiniTutor</nuxt-link
            >
            <app-follow-toggle :mid="minitutor.id" />
          </div>
        </div>
        <div class="minitutor-card-content-social-info">
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
        <div class="minitutor-card-content-user-info">
          <div
            v-if="minitutor.last_education && minitutor.last_education !== '-'"
            class="minitutor-card-content-user-info-detail"
          >
            <i class="icon wb-small-point"></i>
            <strong>{{ minitutor.last_education }}</strong>
          </div>
          <div
            v-if="minitutor.majors && minitutor.majors !== '-'"
            class="minitutor-card-content-user-info-detail"
          >
            <i class="icon wb-small-point"></i> {{ minitutor.majors }}
          </div>
          <div
            v-if="minitutor.university && minitutor.university !== '-'"
            class="minitutor-card-content-user-info-detail"
          >
            <i class="icon wb-small-point"></i> {{ minitutor.university }}
          </div>
          <div
            v-if="
              minitutor.city_and_country_of_study &&
              minitutor.city_and_country_of_study !== '-'
            "
            class="minitutor-card-content-user-info-detail"
          >
            <i class="icon wb-small-point"></i>
            {{ minitutor.city_and_country_of_study }}
          </div>
        </div>
      </div>
    </div>
    <div class="minitutor-card-footer">
      <div class="row">
        <div class="col-4 minitutor-card-counter-wrapper">
          <div class="minitutor-card-counter">
            <div class="minitutor-card-counter-icon">
              <i class="wb wb-users"></i>
            </div>
            <div class="minitutor-card-counter-info">
              <div class="minitutor-card-counter-title">Pengikut</div>
              <span class="minitutor-card-counter-number">{{
                minitutor.followers_count
              }}</span>
            </div>
          </div>
        </div>
        <div class="col-4 minitutor-card-counter-wrapper">
          <div class="minitutor-card-counter">
            <div class="minitutor-card-counter-icon">
              <i class="wb wb-clipboard"></i>
            </div>
            <div class="minitutor-card-counter-info">
              <div class="minitutor-card-counter-title">Artikel</div>
              <span class="minitutor-card-counter-number">{{
                minitutor.articles_count
              }}</span>
            </div>
          </div>
        </div>
        <div class="col-4 minitutor-card-counter-wrapper">
          <div class="minitutor-card-counter">
            <div class="minitutor-card-counter-icon">
              <i class="wb wb-play"></i>
            </div>
            <div class="minitutor-card-counter-info">
              <div class="minitutor-card-counter-title">Video</div>
              <span class="minitutor-card-counter-number">{{
                minitutor.playlists_count
              }}</span>
            </div>
          </div>
        </div>
      </div>
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
  display: block;
  background-color: $white;
  margin-bottom: 15px;
  border-radius: 4px;
  box-shadow: $box-shadow-sm;
  border-top: 4px solid $primary;
  width: 100%;

  &-top {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    padding: 25px;
    padding-bottom: 0;
    @include media-breakpoint-down(md) {
      flex-direction: column;
    }
  }

  &-user-pic {
    display: flex;
    padding-right: 20px;
    @include media-breakpoint-down(md) {
      padding: 0;
    }
    .avatar {
      display: block;
      width: 110px;
      height: 110px;
      margin: 0;
      border-radius: 4px;
      position: relative;
      img {
        border-radius: 4px;
      }
      .minitutor-point {
        display: block;
        position: absolute;
        top: -8px;
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
        margin-bottom: 15px;
      }
      @include media-breakpoint-down(md) {
        width: 80px;
        height: 80px;
        margin: 10px auto;
      }
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    width: 100%;

    &-header {
      display: flex;
      flex-wrap: wrap;
      @include media-breakpoint-down(md) {
        flex-direction: column;
        text-align: center;
      }
    }

    &-title {
      font-size: 16px;
      font-weight: $font-weight-bold;
      text-transform: capitalize;
      margin: 0;
      line-height: 1;
      margin: auto 0;
      vertical-align: middle;
      margin-right: auto;
      @include media-breakpoint-down(md) {
        width: 100%;
        padding: 0;
        margin-bottom: 5px;
        text-align: center;
      }
      .name {
        display: block;
        text-decoration: none;
        color: $gray-500;
        &:hover {
          color: $primary;
        }
      }
      .username {
        display: block;
        text-transform: lowercase;
        font-size: 0.75em;
        color: $gray-400;
        font-weight: $font-weight-light;
        text-decoration: none;
        margin-top: 5px;
        &:hover {
          color: $primary;
        }
      }
    }

    &-actions {
      .btn.btn-sm {
        @include media-breakpoint-down(md) {
          font-size: 10px;
          line-height: 24px;
          padding: 0 8px;
        }
      }
    }

    &-social-info {
      display: block;
      flex-wrap: wrap;
      margin: 8px 0;

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

    &-user-info {
      display: block;
      &-detail {
        color: $gray-500;
        display: block;
        font-size: 12px;
        margin-bottom: 5px;
        @include media-breakpoint-down(md) {
          text-align: center;
        }
        .icon {
          margin-right: 10px;
          display: inline-block;
          color: $gray-400;
          @include media-breakpoint-down(md) {
            display: none;
          }
        }
      }
    }
  }

  &-footer {
    margin-top: 10px;
    border-top: 1px solid $border-color;
    padding: 10px 0;
    .minitutor-card-counter-wrapper {
      display: flex;
    }
    .minitutor-card-counter {
      padding: 10px;
      margin: auto;
      display: flex;
      &-icon {
        display: flex;
        margin: auto 0;
        padding-right: 10px;
        color: $gray-300;
        i {
          display: block;
          line-height: 1;
          font-size: 30px;
        }
      }
      &-info {
        margin: auto 0;
      }
      &-title {
        font-size: 12px;
        font-weight: $font-weight-bold;
        margin: 0;
        padding: 0;
        margin-bottom: 3px;
        line-height: 12px;
        text-transform: uppercase;
        color: $gray-400;
      }
      &-number {
        display: block;
        font-size: 14px;
        font-weight: $font-weight-bold;
        margin: 0;
        padding: 0;
        line-height: 14px;
        text-transform: uppercase;
        color: $gray-500;
        text-align: center;
      }
    }
  }
}
</style>
