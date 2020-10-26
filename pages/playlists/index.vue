<template>
  <div class="container-fluid">
    <div class="row">
      <div
        v-for="item in data"
        :key="item.id"
        class="col-lg-3 col-md-4 col-sm-6 pb-3"
      >
        <app-post-list-2 :post="item" />
      </div>
    </div>
    <client-only>
      <infinite-loading @infinite="infiniteHandler" />
    </client-only>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  async asyncData({ $axios, error }) {
    try {
      return await $axios.$get(`/playlists`)
    } catch (e) {
      return error(e)
    }
  },
  methods: {
    infiniteHandler($state) {
      this.$axios
        .$get(`/playlists?page=${this.meta.current_page + 1}`)
        .then(({ data, meta }) => {
          if (meta.current_page < this.meta.last_page) {
            this.meta.current_page = meta.current_page
            this.data = [...this.data, ...data]
            $state.loaded()
          } else {
            this.meta.current_page = meta.current_page
            this.data = [...this.data, ...data]
            $state.loaded()
            $state.complete()
          }
        })
        .catch((e) => {
          $state.error()
        })
    },
  },
  head() {
    return this.$seo()
  },
}
</script>
