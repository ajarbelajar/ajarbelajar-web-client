<template>
  <article class="auth-required-post-card">
    <v-lazy-image
      :src="post.hero.large || $images.hero.large"
      class="hero"
      :src-placeholder="$images.hero.large"
    />
    <div class="post-detail">
      <div class="post-info">
        <span class="info">
          Diposting pada {{ post.created_at | moment('dddd, Do MMMM YYYY') }}
        </span>
        <span class="v-divider">|</span>
        <span class="info"> <i class="wb-eye"></i> {{ post.view_count }} </span>
      </div>
      <div class="post-action">
        <app-favorite-toggle v-if="$auth" :pid="post.id" type="Article" />
      </div>
    </div>
    <div class="post-rating">
      <client-only>
        <star-rating
          class="post-rating-star"
          :rating="Number(post.rating)"
          :read-only="true"
          :increment="0.01"
          :star-size="14"
          text-class="mt-0 font-weight-light"
        />
      </client-only>
      <span class="post-rating-text">
        dari {{ post.feedback_count }} Feedback
      </span>
    </div>
    <div class="post-title">
      <h1>{{ post.title }}</h1>
    </div>
    <div v-if="post.category" class="post-category">
      <a href="#">{{ post.category.name }}</a>
    </div>
    <div class="post-body">
      <div class="text-center">
        <p class="lead my-15">
          Anda harus login untuk mengakses postingan ini.
        </p>
        <nuxt-link
          :to="`/login?next=${$route.fullPath}`"
          class="btn btn-primary px-30"
          >LOGIN</nuxt-link
        >
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss">
.auth-required-post-card {
  display: block;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  background-color: $white;
  box-shadow: $box-shadow-sm;
  margin-bottom: 15px;
  border-bottom: 4px solid $primary;
  padding-bottom: 20px;

  .hero {
    display: block;
    width: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
  }

  .post-detail {
    display: flex;
    padding: 10px 20px;
    border-bottom: 1px solid $border-color;
    vertical-align: middle;
    @include media-breakpoint-down(sm) {
      padding: 10px;
    }

    .post-info {
      line-height: 1;
      margin: auto 0;
      white-space: nowrap;
      .info {
        font-size: 13px;
        color: $gray-600;
        @include media-breakpoint-down(sm) {
          font-size: 9px;
        }
        i {
          color: $gray-400;
        }
      }
      .v-divider {
        display: inline-block;
        padding: 0 10px;
        @include media-breakpoint-down(sm) {
          padding: 0 5px;
        }
      }
    }
    .post-action {
      margin: auto 0;
      margin-left: auto;
    }
  }

  .post-rating {
    padding: 10px 20px;
    display: flex;
    line-height: 1;
    font-size: 12px;
    vertical-align: middle;
    @include media-breakpoint-down(sm) {
      padding: 10px;
    }
    .post-rating-star {
      margin: auto 0;
      margin-right: 3px;
    }
    .post-rating-text {
      display: block;
      margin: auto 0;
    }
  }

  .post-title {
    padding: 0px 20px;
    margin-top: 20px;
    @include media-breakpoint-down(sm) {
      padding: 0 10px;
    }
    h1 {
      margin: 0;
      font-weight: $font-weight-light;
      text-transform: capitalize;
    }
  }

  .post-category {
    padding: 10px 20px;
    @include media-breakpoint-down(sm) {
      padding: 10px;
    }
    a {
      display: inline-block;
      line-height: 24px;
      padding: 0 10px;
      font-size: 12px;
      font-weight: $font-weight-bold;
      letter-spacing: 1px;
      color: $primary;
      background-color: $gray-100;
      border: 1px solid $gray-300;
      border-radius: 2px;
      text-transform: uppercase;
      &:hover {
        text-decoration: none;
        box-shadow: $box-shadow-sm;
      }
    }
  }

  .post-body {
    padding: 20px;
    padding-top: 0;
    @include media-breakpoint-down(sm) {
      padding: 10px;
    }
  }
}
</style>
