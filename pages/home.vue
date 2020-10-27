<template>
  <div class="container">
    <client-only>
      <popular-playlist-lg :playlists="popularPlaylists" />
    </client-only>
    <popular-category :categories="popularCategories" />
    <new-playlists :playlists="newPlaylists" />
    <new-articles :articles="newArticles" />
    <most-user-point :users="mostUserPoints" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, error }) {
    try {
      return {
        popularPlaylists: (await $axios.$get('playlists/popular')).data,
        popularCategories: (await $axios.$get('categories/popular')).data,
        mostUserPoints: (await $axios.$get('users/most-points')).data,
        newPlaylists: (await $axios.$get('playlists/news')).data,
        newArticles: (await $axios.$get('articles/news')).data,
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
