<template>
  <div class="app-post-card">
    <div class="card-thumb">
      <nuxt-link
        v-if="post.category"
        :to="`/categories/${post.category.slug}`"
        class="category-badge"
        >{{ post.category.name }}</nuxt-link
      >
      <v-lazy-image
        class="user-avatar"
        :src="post.user.avatar || $images.avatar"
        :src-placeholder="$images.avatar"
        :alt="post.user.username"
      ></v-lazy-image>
      <v-lazy-image
        :src="post.hero.thumb || $images.hero.thumb"
        :src-placeholder="$images.hero.thumb"
        :alt="post.title"
        class="img-fluid thumb-img"
      ></v-lazy-image>
    </div>
    <div class="card-content">
      <span class="time-info">
        {{ post.created_at | moment('dddd, Do MMMM YYYY') }}
      </span>
      <h4 class="post-title">{{ post.title }}</h4>
      <span class="author-info"
        >Dari <span>{{ post.user.name }}</span></span
      >
    </div>
    <div class="post-type">
      <span v-if="type === 'Article'"> Artikel </span>
      <span v-else> Playlist </span>
      <span><i class="icon wb-eye"></i> {{ post.view_count }}</span>
      <span><i class="icon wb-chat"></i> {{ post.comments_count }}</span>
      <span
        ><i class="icon wb-star"></i> {{ post.rating }} /
        {{ post.feedback_count }}</span
      >
    </div>
    <div class="card-post-actions">
      <nuxt-link :to="postUrl" class="btn btn-primary btn-sm btn-block">
        <i :class="type === 'Playlist' ? 'wb-play' : 'wb-book'"></i>
        {{ type === 'Playlist' ? 'Tonton Video' : 'Baca Artikel' }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
    type: {
      type: String,
      default: 'Playlist',
    },
  },
  computed: {
    postUrl() {
      return `/${this.type.toLowerCase()}s/${this.post.slug}`
    },
  },
}
</script>
<style lang="scss">
.app-post-card {
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
