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
      return await $axios.$get('/nuxt/home')
    } catch (e) {
      error(e)
    }
  },
  head() {
    return this.$seo()
  },
}
</script>
