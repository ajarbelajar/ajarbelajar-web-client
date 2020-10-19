<template>
  <div class="container">
    <client-only>
      <popular-playlist-lg :playlists="popularPlaylists" />
    </client-only>
    <category-scroll></category-scroll>
    <new-playlists :playlists="newPlaylists" />
    <new-articles :articles="newArticles" />
    <popular-category :categories="popularCategories" />
    <most-user-point :users="mostUserPoints" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, error }) {
    try {
      return {
        popularPlaylists: await $axios.$get('playlists/popular'),
        popularCategories: await $axios.$get('categories/popular'),
        mostUserPoints: await $axios.$get('users/most-points'),
        newPlaylists: await $axios.$get('playlists/news'),
        newArticles: await $axios.$get('articles/news'),
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
