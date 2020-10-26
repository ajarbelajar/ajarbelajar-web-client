<template>
  <div class="container"></div>
</template>

<script>
export default {
  async asyncData({ $axios, error }) {
    try {
      const promise = await Promise.all([
        $axios.$get('playlists/popular'),
        $axios.$get('categories/popular'),
        $axios.$get('users/most-points'),
        $axios.$get('playlists/news'),
        $axios.$get('articles/news'),
      ])
      return {
        popularPlaylists: promise[0].data,
        popularCategories: promise[1].data,
        mostUserPoints: promise[2].data,
        newPlaylists: promise[3].data,
        newArticles: promise[4].data,
      }
    } catch (e) {
      error(e)
    }
  },
  head() {
    return this.$seo()
  },
}
</script>
