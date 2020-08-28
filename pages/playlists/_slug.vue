<template>
  <div class="container-fluid">
    <div class="playlist-watch-card">
      <div class="playlist-watch-card-content">
        <article>
          <div v-if="routerAlive" class="hero">
            <app-video-simple
              :options="{
                autoplay: true,
                sources: [{ src: video.url }],
              }"
            />
          </div>
          <img v-else :src="playlist.hero.large" class="hero" />
          <div v-if="playlist.videos.length > 1" class="row p-2 bg-light">
            <div
              v-for="(item, i) in playlist.videos"
              :key="i"
              :class="{
                'col-2 mb-2': playlist.videos.length > 6,
                col: playlist.videos.length <= 6,
              }"
            >
              <nuxt-link
                :to="{ query: { index: item.index } }"
                :class="{
                  'active focus': currentIndex === item.index,
                }"
                class="btn btn-outline-default btn-lg font-weight-bold btn-block"
              >
                Part {{ ++i }}
              </nuxt-link>
            </div>
          </div>
          <div class="post-detail">
            <div class="post-info">
              <span class="info"
                >Diposting pada
                {{ playlist.created_at | moment('d M Y') }}</span
              >
              <span class="v-divider">|</span>
              <span class="info"
                ><i class="wb-eye"></i> {{ playlist.views_count }}</span
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
                :rating="playlist.rating"
                :read-only="true"
                :increment="0.01"
                :star-size="14"
                text-class="mt-0 font-weight-light"
              ></star-rating>
            </client-only>
            <span class="post-rating-text"
              >dari {{ playlist.feedback_count }} Feedback</span
            >
          </div>
          <div class="post-title">
            <h1>{{ playlist.title }}</h1>
          </div>
          <div v-if="playlist.category" class="post-category">
            <a href="#">{{ playlist.category.name }}</a>
          </div>
          <div class="post-body">
            <p>{{ playlist.description }}</p>
          </div>
        </article>
        <app-comment
          :url="`/comments/playlist/${playlist.id}`"
          :comments-count="playlist.comments_count"
          :comments="comments"
        />
      </div>
      <div class="playlist-watch-card-side"></div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  components: {
    StarRating,
  },
  async asyncData({ store, error, $axios, params, query, redirect }) {
    let playlists
    try {
      playlists = await store.dispatch('public_playlist/fetch')
    } catch (e) {
      return error(e)
    }
    const data = {}
    playlists.forEach((playlist) => {
      if (playlist.slug === params.slug) {
        data.playlist = playlist
      }
    })

    try {
      data.comments = await $axios.$get(`comments/playlist/${data.playlist.id}`)
    } catch (e) {
      return error(e)
    }

    if (!data.playlist)
      return error({ statusCode: 404, message: 'Playlist tidak tersedia.' })

    if (data.playlist.videos.length === 1) {
      if (query.index) {
        return redirect(`/playlists/${params.slug}`)
      }
      data.currentIndex = data.playlist.videos[0].index
      return data
    }

    if (!query.index && data.playlist.videos.length > 1) {
      return redirect(
        `/playlists/${params.slug}?index=${data.playlist.videos[0].index}`
      )
    }

    data.playlist.videos.forEach((val) => {
      if (val.index === Number(query.index))
        data.currentIndex = Number(query.index)
    })

    if (!data.currentIndex) {
      return error({ statusCode: 404, message: 'Video tidak tersedia.' })
    }

    return data
  },
  data() {
    return {
      routerAlive: true,
    }
  },
  computed: {
    video() {
      let video = {}
      this.playlist.videos.forEach((val) => {
        if (val.index === this.currentIndex) video = val
      })
      return video
    },
  },
  watch: {
    $route(val, old) {
      let exists
      this.playlist.videos.forEach((video) => {
        if (video.index === Number(val.query.index)) exists = true
      })

      if (exists) {
        this.currentIndex = Number(val.query.index)
      } else {
        this.currentIndex = this.playlists.videos[0].index
      }

      this.routerAlive = false
      setTimeout(() => {
        this.routerAlive = true
      }, 0)
    },
  },
}
</script>

<style lang="scss">
.playlist-watch-card {
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

    .post-tags {
      border-top: 1px solid $border-color;
      padding: 20px;
      &-title {
        font-size: 16px;
        font-weight: $font-weight-bold;
        letter-spacing: 1px;
        margin-bottom: 3px;
      }
      @include media-breakpoint-down(sm) {
        padding: 10px;
      }
    }
  }
}
</style>
