<template>
  <div class="article-watch-card-side">
    <div class="creator-card">
      <div class="creator-card-body">
        <div class="user-pic">
          <nuxt-link :to="`/minitutors/${user.username}`" class="avatar">
            <v-lazy-image
              class="avatar-holder"
              :src="user.avatar || $images.avatar"
              :src-placeholder="$images.avatar"
              :alt="user.username"
            />
            <span class="minitutor-point">{{ user.points }} Poin</span>
          </nuxt-link>
        </div>
        <div class="user-info">
          <h4 class="info-name text-truncate">
            <nuxt-link :to="`/minitutors/${user.username}`">{{
              user.name
            }}</nuxt-link>
          </h4>
          <span class="info-username"
            ><nuxt-link :to="`/minitutors/${user.username}`"
              >@{{ user.username }}</nuxt-link
            ></span
          >
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
          <app-follow-toggle v-if="$auth" :mid="minitutor.id" />
        </div>
      </div>
      <div class="creator-card-foot">
        <p>Postingan ditulis oleh {{ user.name }}</p>
      </div>
    </div>
    <div v-if="latesSorted.length" class="lates-post-card">
      <div class="lates-post-head">
        <h4 class="lates-post-title">Lainnya dari {{ user.name }}</h4>
      </div>
      <div class="lates-post-list list-group">
        <nuxt-link
          v-for="(item, i) in latesSorted"
          :key="i"
          :to="`/${item.type.toLowerCase()}s/${item.slug}`"
          class="list-group-item"
        >
          <div class="list-group-wrap">
            <span class="type" :class="item.type">{{ item.type }}</span>
            {{ item.title }}
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
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
    lates: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      latesSorted: [],
    }
  },
  created() {
    const arr = []
    this.lates.forEach((item) => {
      if (this.$route.params.slug !== item.slug) {
        arr.push(item)
      }
    })

    this.latesSorted = arr.sort((a, b) => {
      return new Date(b.created_at * 1000) - new Date(a.created_at * 1000)
    })
  },
}
</script>

<style lang="scss">
.creator-card {
  display: block;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  background-color: $white;
  box-shadow: $box-shadow-sm;
  margin-bottom: 15px;
  border-bottom: 4px solid $primary;

  &-body {
    text-align: center;
    padding: 20px;
    padding-top: 30px;

    .user-pic {
      .avatar {
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
      }
    }

    .user-info {
      .info-name {
        font-size: 20px;
        letter-spacing: 1px;
        font-weight: $font-weight-bold;
        text-transform: uppercase;
        margin-top: 10px;
        margin-bottom: 0px;
        a {
          color: $gray-600;
          &:hover {
            color: $primary;
            text-decoration: none;
          }
        }
      }
      .info-username {
        display: block;
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: $font-weight-light;
        text-transform: lowercase;
        margin-bottom: 0px;
        a {
          color: $gray-400;
          &:hover {
            color: $primary;
            text-decoration: none;
          }
        }
      }
    }

    .social-info {
      display: block;
      margin: 8px 0;

      a {
        display: inline-block;
        font-size: 14px;
        padding: 5px;
        color: $gray-500;
        text-decoration: none;
        &:hover {
          color: $primary;
        }
      }
    }
  }

  &-foot {
    padding: 5px 20px;
    border-top: 1px solid $border-color;
    background-color: $gray-100;
    p {
      margin: 0;
      font-size: 10px;
      color: $gray-700;
      text-align: center;
    }
  }
}

.lates-post-card {
  display: block;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  background-color: $white;
  box-shadow: $box-shadow-sm;
  margin-bottom: 15px;
  border-bottom: 4px solid $primary;

  .lates-post-head {
    padding: $spacer;
  }

  .lates-post-title {
    line-height: 1.2;
    margin: 0;
    font-size: 14px;
  }

  .list-group-item {
    padding: 0 $spacer;
    color: $gray-600;
    &:hover {
      background-color: rgba($gray-100, 0.5);
    }

    &:last-child .list-group-wrap {
      border: none;
    }
  }

  .list-group-wrap {
    padding: $spacer/2 0;
    border-bottom: 1px solid $border-color;
    font-size: 14px;
    line-height: 1.2;
    .type {
      display: block;
      margin-bottom: 5px;
      color: $primary;

      &.Playlist {
        color: $danger;
      }
    }
  }
}
</style>
