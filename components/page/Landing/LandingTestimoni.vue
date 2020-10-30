<template>
  <div class="landing-testimoni">
    <div class="container">
      <div class="row mb-20">
        <div class="col-lg-8 mx-auto">
          <h2 class="landing-title">Testimonials</h2>
        </div>
      </div>
      <swiper class="testimoni-carousel" :options="swiperOptions">
        <swiper-slide v-for="(item, i) in testimonials" :key="i">
          <div class="row">
            <div class="col-lg-10 col-md-12 mx-auto">
              <div class="card card-body text-center m-0">
                <span class="quotes"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 123.961 123.961"
                  >
                    <g xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14   C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6   H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z"
                      />
                      <path
                        d="M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9   c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3   c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z"
                      />
                    </g></svg
                ></span>
                <!-- eslint-disable-next-line vue/no-v-html -->
                <p class="paragraph" v-html="item.message"></p>

                <div class="avatar mx-auto">
                  <img :src="item.avatar" :alt="item.name" />
                </div>

                <span class="name">{{ item.name }}</span>
                <span class="jobs">MiniTutor</span>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    testimonials: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    }
  },
}
</script>

<style lang="scss">
.landing-testimoni {
  padding: $spacer 0;
  .quotes {
    display: block;
    text-align: center;
    margin-bottom: $spacer;
    svg {
      width: 30px;
      path {
        fill: $gray-200;
      }
    }
  }
  .paragraph {
    font-size: 20px;
    font-weight: $font-weight-light;
    color: $gray-500;
    margin-bottom: $spacer * 1.5;
    font-style: italic;
  }
  .avatar {
    width: 120px;
    margin-bottom: 8px;
  }

  .name {
    display: block;
    text-transform: uppercase;
    font-size: 16px;
    color: $gray-600;
    font-weight: $font-weight-bold;
    letter-spacing: 1px;
  }

  .job {
    display: block;
    font-size: 14px;
    color: $gray-400;
    font-weight: $font-weight-light;
  }

  .swiper-pagination {
    text-align: center;
    position: relative;
    margin-bottom: $spacer;

    .swiper-pagination-bullet {
      display: inline-block;
      width: 14px;
      height: 14px;
      margin: 0 7px;
      background-color: $gray-300;
      border-radius: 100%;
      transition: 200ms ease-in-out;
      cursor: pointer;

      &.swiper-pagination-bullet-active {
        background-color: $primary;
      }
    }
  }
}
</style>
