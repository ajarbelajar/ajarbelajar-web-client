<template>
  <div class="ab-post-list">
    <div class="ab-post-list-left">
      <div class="ab-post-list-thumb">
        <v-lazy-image
          :src="post.hero.thumb"
          :src-placeholder="Placeholder"
          :alt="post.hero.original_name"
        ></v-lazy-image>
        <span v-if="type === 'Article'" class="post-type">
          Artikel
        </span>
        <span v-else class="post-type red">
          Video
        </span>
      </div>
    </div>
    <div class="ab-post-list-right">
      <span class="info-time">{{ post.created_at | moment('d M Y') }}</span>
      <h3 class="info-title">
        <a rel="nofollow" href="#">{{ post.title }}</a>
      </h3>
      <span v-if="post.category" class="category-info">{{
        post.category.name
      }}</span>
      <div class="more-info">
        <span
          ><i class="icon wb-star"></i> {{ post.rating }} Bintang dari
          {{ post.feedback_count }} Reviewer</span
        >
        <span
          ><i class="icon wb-chat"></i> {{ post.comments_count }} Komentar</span
        >
        <span
          ><i class="icon wb-eye"></i> {{ post.views_count }}x
          {{ type === 'Article' ? 'Dibaca' : 'Ditonton' }}</span
        >
        <span
          ><i class="icon wb-user"></i> Dari
          <a href="#">{{ post.user.name }}</a></span
        >
      </div>
      <div class="actions mt-10">
        <div class="row">
          <div class="col-6">
            <nuxt-link
              v-if="type === 'Article'"
              :to="`/${type.toLowerCase()}s/${post.slug}`"
              class="btn btn-primary btn-block btn-sm"
            >
              <i class="wb-book"></i> Baca Artikel
            </nuxt-link>
            <nuxt-link
              v-else
              :to="`/${type.toLowerCase()}s/${post.slug}`"
              class="btn btn-primary btn-block btn-sm"
            >
              <i class="wb-play"></i> Tonton Video
            </nuxt-link>
          </div>
          <div class="col-6">
            <a
              v-if="$auth"
              rel="nofollow"
              href="#"
              class="btn btn-danger btn-outline btn-block btn-sm"
              ><i class="icon wb-heart"></i> Hapus Favorit</a
            >
            <a
              v-else
              rel="nofollow"
              href="#"
              class="btn btn-danger btn-outline btn-block btn-sm"
              ><i class="icon wb-heart"></i> Tambah Favorit</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Placeholder from '@/assets/img/placeholder/hero-thumb.jpg'
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
  data() {
    return {
      Placeholder,
    }
  },
}
</script>

<style lang="scss">
.ab-post-list {
  display: flex;
  background-color: $white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: $box-shadow-sm;
  margin-bottom: 15px;
  border-bottom: 4px solid $primary;
  @include media-breakpoint-down(md) {
    flex-direction: column;
  }

  &-left {
    display: block;
    padding: 20px;
    @include media-breakpoint-down(md) {
      padding: 0;
    }
  }
  &-thumb {
    width: 340px;
    position: relative;
    img {
      display: block;
      width: 100%;
      border-radius: 3px;
    }
    .post-type {
      display: block;
      position: absolute;
      top: 6px;
      left: 6px;
      line-height: 18px;
      padding: 0 6px;
      background-color: $white;
      color: $primary;
      font-size: 10px;
      font-weight: $font-weight-bold;
      letter-spacing: 1px;
      text-transform: uppercase;
      box-shadow: $box-shadow;
      border-radius: 2px;
      &.red {
        color: $danger;
      }
    }
    @include media-breakpoint-down(md) {
      width: 100%;
      img {
        border-radius: 0;
      }
    }
  }

  &-right {
    padding: 20px;
    padding-left: 0;
    width: 100%;
    @include media-breakpoint-down(md) {
      padding: 10px;
    }

    .info-time {
      display: block;
      font-size: 10px;
      font-weight: $font-weight-bold;
      color: $gray-600;
      margin-bottom: 5px;
    }

    .info-title {
      display: block;
      margin: 0;
      font-size: 18px;
      font-weight: $font-weight-normal;
      letter-spacing: 1px;
      margin-bottom: 10px;
      a {
        color: $gray-500;
        &:hover {
          text-decoration: none;
          color: $primary;
        }
      }
    }

    .category-info {
      display: inline-block;
      line-height: 20px;
      padding: 0 6px;
      background-color: $primary;
      color: $white;
      font-size: 12px;
      font-weight: $font-weight-light;
      text-transform: uppercase;
      box-shadow: $box-shadow;
      border-radius: 4px;
      margin-bottom: 10px;
    }

    .more-info {
      span {
        display: block;
        color: $gray-600;
        font-size: 14px;
        i {
          display: inline-block;
          width: 15px;
          color: $gray-400;
        }
      }
    }
  }
}
</style>
