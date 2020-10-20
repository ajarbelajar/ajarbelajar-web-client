<template>
  <div class="container-fluid">
    <app-post-list
      v-for="item in data"
      :key="item.id"
      :post="item"
      type="Playlist"
    />
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
        .$get(`/playlists?page=${this.current_page + 1}`)
        .then((data) => {
          if (data.current_page < this.last_page) {
            this.current_page = data.current_page
            this.data = [...this.data, ...data.data]
            $state.loaded()
          } else {
            this.current_page = data.current_page
            this.data = [...this.data, ...data.data]
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
