<template>
  <div class="container-fluid">
    <div class="article-watch-card">
      <div class="article-watch-card-content">
        <article>
          <v-lazy-image
            :src="article.hero.large"
            class="hero"
            :src-placeholder="HeroPlaceholder"
          />
          <div class="post-detail">
            <div class="post-info">
              <span class="info"
                >Diposting pada {{ article.created_at | moment('d M Y') }}</span
              >
              <span class="v-divider">|</span>
              <span class="info"
                ><i class="wb-eye"></i> {{ article.views_count }}</span
              >
            </div>
            <div class="post-action">
              <a href="#" class="btn btn-danger btn-sm d-none d-md-inline-block"
                ><i class="wb-heart"></i> Hapus dari Favorit</a
              >
              <a
                href="#"
                class="btn btn-danger btn-xs btn-icon d-block d-md-none"
                ><i class="wb-heart"></i
              ></a>
            </div>
          </div>
          <div class="post-rating">
            <client-only>
              <star-rating
                class="post-rating-star"
                :rating="article.rating"
                :read-only="true"
                :increment="0.01"
                :star-size="14"
                text-class="mt-0 font-weight-light"
              ></star-rating>
            </client-only>
            <span class="post-rating-text"
              >dari {{ article.feedback_count }} Feedback</span
            >
          </div>
          <div class="post-title">
            <h1>{{ article.title }}</h1>
          </div>
          <div v-if="article.category" class="post-category">
            <a href="#">{{ article.category.name }}</a>
          </div>
          <div class="post-body">
            <editorjs-compiler :editor="JSON.parse(article.body)" />
          </div>
        </article>
        <app-comment
          :url="`/comments/article/${article.id}`"
          :comments-count="article.comments_count"
          :comments="comments"
        />
      </div>
      <div class="article-watch-card-side"></div>
    </div>
  </div>
</template>

<script>
import HeroPlaceholder from '@/assets/img/placeholder/hero-large.jpg'
import StarRating from 'vue-star-rating'
export default {
  components: {
    StarRating,
  },
  async asyncData({ store, error, $axios, params, query, redirect }) {
    let articles
    try {
      articles = await store.dispatch('public_article/fetch')
    } catch (e) {
      return error(e)
    }
    const data = {}
    articles.forEach((article) => {
      if (article.slug === params.slug) {
        data.article = article
      }
    })

    try {
      data.comments = await $axios.$get(`comments/article/${data.article.id}`)
    } catch (e) {
      return error(e)
    }

    return data
  },
  data() {
    return {
      HeroPlaceholder,
    }
  },
}
</script>

<style lang="scss">
.article-watch-card {
  display: flex;
  max-width: 100%;
  @include media-breakpoint-down(md) {
    display: block;
  }
  &-content {
    max-width: calc(100% - 350px);
    width: 100%;
    @include media-breakpoint-down(md) {
      max-width: 100%;
    }
  }
  &-side {
    width: 350px;
    padding-left: 15px;
    @include media-breakpoint-down(md) {
      width: 100%;
      padding: 0;
    }
  }

  article {
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
}
</style>
