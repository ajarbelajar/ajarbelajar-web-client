<template>
  <div class="home-categories">
    <div class="panel">
      <div class="panel-body">
        <h2>Mau belajar apa hari ini?</h2>
      </div>
      <hr v-show="open" class="my-0" />
      <div v-show="open" class="panel-body scroll">
        <div ref="elScroll" class="scroll-wrapper">
          <div class="list-group scroll-content">
            <nuxt-link
              v-for="category in categories"
              :key="category.id"
              :to="`/categories/${category.slug}`"
              class="list-group-item"
              >{{ category.name }}</nuxt-link
            >
          </div>
        </div>
      </div>
      <hr class="my-0" />
      <div class="panel-body">
        <button class="btn btn-default btn-block" @click="open = !open">
          {{ open ? 'Tutup' : 'Telusuri' }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
const Ps = process.client ? require('perfect-scrollbar').default : undefined
export default {
  data() {
    return {
      categories: [],
      elScroll: null,
      elScrollStyle: null,
      ps: null,
      open: false,
    }
  },
  computed: {
    ...mapGetters({ all_categories: 'category/categories' }),
  },
  destroyed() {
    if (this.ps) {
      this.ps.destroy()
      this.ps = null
    }
  },
  mounted() {
    this.elScroll = this.$refs.elScroll
    this.elScrollStyle = window.getComputedStyle(this.elScroll)
    this.scroll()
    window.onresize = this.scroll
  },
  created() {
    const categories = []
    this.all_categories.forEach((category) => {
      if (category.playlists_count || category.articles_count) {
        categories.push(category)
      }
    })
    this.categories = categories
  },
  methods: {
    scroll() {
      if (this.elScrollStyle.getPropertyValue('overflow-y') !== 'auto') {
        if (!this.ps) {
          this.ps = new Ps(this.elScroll)
        }
      } else if (this.ps) {
        this.ps.destroy()
        this.ps = null
      }
    },
  },
}
</script>
<style lang="scss">
.home-categories {
  h2 {
    text-align: center;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
  }
  .scroll {
    height: 300px;
    padding: 0;
    display: block;
    position: relative;
    @include perfect-scrollbar-ver-size(4px);
    @include perfect-scrollbar-skin($gray-400);
    .ps__rail-y {
      left: auto !important;
      right: 0 !important;
      z-index: 20;
    }
    .ps__scrollbar-x-rail {
      display: none;
    }
    &-wrapper {
      position: relative;
      height: 300px;
      width: 100%;
      overflow: hidden;
      @include media-breakpoint-down(md) {
        overflow-y: auto !important;
      }
    }
  }
}
</style>
