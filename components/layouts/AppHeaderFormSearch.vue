<template>
  <div class="form-search" :class="{ open }">
    <div v-click-outside="clickOutside" class="container-fluid">
      <div class="form-search-input" :class="{ focus, empty }">
        <span class="icon">
          <i class="wb-search"></i>
        </span>
        <span class="icon close-toggle" @click.prevent="$emit('close-form')">
          <i class="wb-close"></i>
        </span>
        <input
          ref="input"
          v-model="input"
          type="text"
          class="form-control"
          placeholder="Search"
          @focus="focus = true"
        />
        <span v-if="loading" class="loading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#ccd5db"
              stroke-width="12"
              fill="none"
            ></circle>
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#677ae4"
              stroke-width="12"
              stroke-linecap="round"
              fill="none"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;180 50 50;720 50 50"
                keyTimes="0;0.5;1"
              ></animateTransform>
              <animate
                attributeName="stroke-dasharray"
                repeatCount="indefinite"
                dur="1s"
                values="25.132741228718345 226.1946710584651;170.90264035528475 80.4247719318987;25.132741228718345 226.1946710584651"
                keyTimes="0;0.5;1"
              ></animate>
            </circle>
          </svg>
        </span>
      </div>
      <div
        v-if="(focus && !empty)"
        class="search-result-wrapper"
        @click="focus = true"
      >
        <div class="container-fluid">
          <div class="search-result">
            <div class="info">
              Result for : <span>{{ input }}</span>
            </div>
            <div class="result-lists">
              <a
                v-for="(item, i) in results"
                :key="i"
                class="result-list"
                :href="`/${item.type.toLowerCase()}s/${item.slug}`"
                @click.prevent="listClick(item)"
              >
                <div class="result-wrapper">
                  <div class="result-thumb">
                    <v-lazy-image
                      :src="item.img || $images.hero.small"
                      :src-placeholder="$images.hero.small"
                      :alt="item.title"
                    />
                  </div>
                  <div class="result-info">
                    <h4 class="result-title">
                      {{ item.title }}
                    </h4>
                    <div class="result-author">
                      by : <span>{{ item.name }}</span>
                    </div>
                  </div>
                  <div class="result-type">
                    <span>{{ item.type }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fuse from 'fuse.js'
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      input: '',
      focus: false,
      loading: false,
      data: [],
      results: [],
      fuseOption: {
        keys: [
          {
            name: 'title',
            weight: 0.5,
          },
          {
            name: 'name',
            weight: 0.4,
          },
        ],
      },
    }
  },
  computed: {
    empty() {
      return !this.input
    },
  },
  watch: {
    input: {
      immediate: true,
      deep: true,
      async handler(val) {
        if (val.length <= 0) {
          this.results = []
          this.data = []
          return 0
        }
        try {
          if (!this.data.length) {
            this.loading = true
            this.data = (await this.$axios.$get('/search')).data
            this.loading = false
          }
        } catch (e) {
          // console.log(e)
        }
        this.search()
      },
    },
  },
  methods: {
    listClick(item) {
      this.input = item.title
      this.$router.push(`/${item.type.toLowerCase()}s/${item.slug}`)
      setTimeout(() => (this.focus = false), 100)
    },
    clickOutside() {
      this.focus = false
    },
    search() {
      const fuse = new Fuse(this.data, this.fuseOption)
      const results = []
      fuse.search(this.input).forEach((val) => results.push(val.item))
      this.results = results
    },
  },
}
</script>

<style lang="scss">
.form-search {
  width: 100%;
  position: relative;
  z-index: 30;

  @include media-breakpoint-down(md) {
    position: fixed;
    display: none;
    &.open {
      display: block;
    }
  }

  .form-search-input {
    position: relative;
    width: 100%;
    height: 40px;
    border-radius: 3px;
    background-color: $gray-100;

    &.focus {
      background-color: $white;
      box-shadow: 0px 1px 4px rgba($black, 0.1);
      .form-control {
        color: $gray-700;
      }
      .icon {
        color: $primary;
      }
    }

    .icon {
      position: absolute;
      display: block;
      height: 40px;
      width: 40px;
      left: 0;
      line-height: 40px;
      font-size: 16px;
      text-align: center;
      color: $gray-500;
      pointer-events: none;
      &.close-toggle {
        display: none;
      }

      @include media-breakpoint-down(md) {
        display: none;

        &.close-toggle {
          display: block;
          pointer-events: inherit;
          color: $gray-500;
          cursor: pointer;
          &:hover {
            color: $danger;
          }
        }
      }
    }

    .loading {
      position: absolute;
      display: flex;
      height: 40px;
      width: 40px;
      right: 0;
      top: 0;
      text-align: center;
      color: $gray-500;
      pointer-events: none;
      svg {
        width: 18px;
        height: 18px;
        display: block;
        margin: auto;
      }
    }

    .form-control {
      width: 100%;
      height: 40px;
      border: none;
      padding-left: 40px;
      padding: 5px 40px;
      line-height: 30px;
      font-size: 16px;
      font-weight: $font-weight-medium;
      color: $gray-700;
      background-color: transparent;
      letter-spacing: 1px/2;
      transition: 150ms ease-in-out;

      &::placeholder {
        font-weight: $font-weight-medium;
        color: $gray-500;
      }
    }
  }

  .search-result-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    height: 200px;
  }

  .search-result {
    border-radius: 3px;
    overflow: hidden;
    background-color: $white;
    box-shadow: 0 20px 25px -5px rgba($black, 0.1),
      0 10px 10px -5px rgba($black, 0.04);

    .info {
      padding: 0 $spacer;
      line-height: 1.8;
      background-color: $gray-200;
      font-size: 11px;
      color: $gray-500;
      font-weight: $font-weight-medium;

      span {
        color: $gray-700;
      }
    }

    .result-lists {
      max-height: 60vh;
      overflow-y: auto;
    }

    .result-list {
      display: block;
      padding: 0 $spacer;
      text-decoration: none;
      &:hover {
        background-color: $gray-100;
      }
      .result-wrapper {
        display: flex;
        padding: $spacer/2 0;
        border-bottom: 1px solid $border-color;

        .result-thumb {
          margin: auto 0;
          width: 40px;
          min-width: 40px;
          img {
            display: block;
            width: 100%;
            border-radius: 3px;
          }
        }
        .result-info {
          width: 100%;
          margin: auto 0;
          padding: 0 $spacer/2;
          .result-title {
            font-size: 14px;
            line-height: 16px;
            margin: 0;
            font-weight: $font-weight-light;
            letter-spacing: 0.5px;
            color: $gray-600;
            @include media-breakpoint-down(md) {
              font-size: 12px;
              line-height: 14px;
            }
          }
          .result-author {
            color: $gray-400;
            font-weight: $font-weight-light;
            letter-spacing: 0.5px;
            font-size: 11px;
            @include media-breakpoint-down(md) {
              font-size: 9px;
            }

            span {
              color: $gray-600;
            }
          }
        }
        .result-type {
          margin: auto;
          color: $gray-400;
          font-weight: $font-weight-light;
          letter-spacing: 0.5px;
          font-size: 11px;
          @include media-breakpoint-down(md) {
            font-size: 9px;
          }
        }
      }
    }
  }
}
</style>
