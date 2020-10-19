<template>
  <my-dashboard-wrap>
    <app-input-search v-model="search" />
    <div class="container-fluid mb-2">
      <app-post-list
        v-for="favorite in results"
        :key="favorite.favorite_id"
        :post="favorite"
        :type="favorite.type"
      />
    </div>
  </my-dashboard-wrap>
</template>

<script>
import Fuse from 'fuse.js'
export default {
  middleware: 'auth',
  async asyncData({ $axios, store, error }) {
    try {
      const id = store.state.auth.id
      const favorites = await $axios.$get(`/favorites/${id}`)
      return { favorites, results: favorites }
    } catch (e) {
      return error(e)
    }
  },
  data() {
    return {
      search: '',
      fuseOption: {
        keys: [
          {
            name: 'title',
            weight: 0.5,
          },
          {
            name: 'description',
            weight: 0.4,
          },
        ],
      },
    }
  },
  watch: {
    search: {
      deep: true,
      immediate: true,
      handler(val) {
        let results = this.favorites
        if (val) {
          const fuse = new Fuse(this.favorites, this.fuseOption)
          results = []
          fuse.search(val).forEach((val) => results.push(val.item))
        }
        this.results = results
      },
    },
  },
  head() {
    return this.$seo()
  },
}
</script>
