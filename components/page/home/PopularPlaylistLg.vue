<template>
  <swiper class="ab-popular-playlist-lg" :options="swiperOptions">
    <swiper-slide v-for="(item, i) in playlists">
      <div class="card" style="background-image: url({{ item->heroUrl() }})">
        <div class="card-block">
          <div class="filter">
            <div class="content">
              <div class="vertical-center">
                @if($popular->category)
                <span
                  class="category-info"
                  >{{ $popular->category->name }}</span
                >
                @endif
                <h3 class="title-info">{{ $popular->title }}</h3>
                <div class="description-info">
                  by {{ $popular->user->first_name }} -
                  {{ $popular->created_at->format('d M Y') }} -
                  {{ $popular->views_count }}x dilihat
                </div>
                <a
                  rel="nofollow"
                  href="{{ route('post.show', $popular->slug) }}"
                  class="btn btn-primary btn-round btn-watch btn-inverse"
                >
                  <i class="icon wb-play" aria-hidden="true"></i>
                  Tonton Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination"></div>
    <div slot="button-prev" class="swiper-nav swiper-button-prev">
      <i class="wb-chevron-left"></i>
    </div>
    <div slot="button-next" class="swiper-nav swiper-button-next">
      <i class="wb-chevron-right"></i>
    </div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    playlists: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        effect: 'coverflow',
        speed: 600,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>

<style lang="scss">
.ab-popular-playlist-lg {
  position: relative;
  &:hover .swiper-nav {
    opacity: 1;
  }
  .swiper-nav {
    opacity: 0;
    cursor: pointer;
    display: block;
    position: absolute;
    z-index: 100;
    width: 30px;
    height: 30px;
    background-color: $white;
    bottom: 40px;
    color: $dark;
    border-radius: 100%;
    line-height: 30px;
    text-align: center;
    box-shadow: $box-shadow-sm;
    transition: $transition-base;
    outline: none;
    &:hover {
      background-color: $primary;
      color: $white;
    }

    &.swiper-button-prev {
      left: 10px;
    }
    &.swiper-button-next {
      right: 10px;
    }
  }

  .swiper-pagination {
    display: block;
    text-align: center;
    position: relative;
    &-bullet {
      display: inline-block;
      margin: 0 3px;
      width: 10px;
      height: 10px;
      border: 1px solid $gray-400;
      border-radius: 50%;
      cursor: pointer;
      transition: $transition-base;
      &-active {
        background-color: $gray-400;
      }
    }
  }

  .card {
    display: block;
    margin-bottom: 10px;
    border-radius: 6px;
    overflow: hidden;
    padding: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .card-block {
    padding: 0;
  }

  .filter {
    background: linear-gradient(
      90deg,
      rgba($black, 0.8) 0%,
      rgba($dark, 0.5) 50%,
      rgba(0, 212, 255, 0) 100%
    );
    @include media-breakpoint-down(md) {
      background: linear-gradient(
        90deg,
        rgba($black, 0.5) 0%,
        rgba($black, 0.5) 50%,
        rgba($black, 0.5) 100%
      );
    }
  }

  .content {
    width: 50%;
    padding: 40px;
    height: 400px;
    display: flex;
    position: relative;

    @include media-breakpoint-down(md) {
      width: 100%;
      text-align: center;
    }

    .vertical-center {
      margin: auto 0;
      width: 100%;
      overflow: hidden;
    }

    .category-info {
      display: inline-block;
      line-height: 22px;
      font-size: 12px;
      background-color: $primary;
      font-weight: $font-weight-bold;
      letter-spacing: 1px;
      border-radius: 22px;
      color: $white;
      padding: 0 8px;
      box-shadow: $box-shadow;
      text-transform: uppercase;
    }

    .title-info {
      font-size: 28px;
      font-weight: $font-weight-bold;
      color: $light;
      text-shadow: 2px 2px 3px rgba($dark, 0.5);
      text-transform: uppercase;
      letter-spacing: 2px;
      line-height: 1;
      margin-bottom: 5px;
      margin-top: 5px;
    }

    .description-info {
      color: $light;
      font-weight: $font-weight-light;
      letter-spacing: 1px;
      text-shadow: 1px 1px 2px rgba($dark, 0.5);
      margin-bottom: 10px;
    }

    .btn.btn-watch {
      padding-left: 15px;
      padding-right: 15px;
      letter-spacing: 1px;
      font-weight: $font-weight-bold;
      text-transform: uppercase;
    }
  }
}
</style>
