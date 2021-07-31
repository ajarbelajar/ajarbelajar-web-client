<template>
  <div>
    <block-popular-posts :posts="popularPosts" />
    <div class="p-3">
      <div class="grid grid-cols-2 gap-3 py-3 md:grid-cols-4">
        <elements-category-list v-for="item in popularCategories" :key="item.id" :category="item" />
      </div>
      <div class="py-3 text-center">
        <nuxt-link to="/categories" class="hover:bg-primary-700 bg-primary-600 inline-block py-2 px-4 text-sm font-semibold text-white rounded">Muat lebih banyak Kategori</nuxt-link>
      </div>
    </div>

    <div class="p-3">
      <h4 class="pt-3 text-xl font-bold tracking-wider">VIDEO TERBARU</h4>
      <div class="grid grid-cols-1 gap-3 py-3 md:grid-cols-2 xl:grid-cols-4">
        <elements-post-list v-for="item in newVideos" :key="item.id" :post="item" />
      </div>
      <div class="py-3 text-center">
        <nuxt-link to="/videos" class="hover:bg-primary-700 bg-primary-600 inline-block py-2 px-4 text-sm font-semibold text-white rounded">Muat lebih banyak Video</nuxt-link>
      </div>
    </div>

    <div class="p-3">
      <h4 class="pt-3 text-xl font-bold tracking-wider">ARTIKEL TERBARU</h4>
      <div class="grid grid-cols-1 gap-3 py-3 md:grid-cols-2 xl:grid-cols-4">
        <elements-post-list v-for="item in newArticles" :key="item.id" :post="item" />
      </div>
      <div class="py-3 text-center">
        <nuxt-link to="/articles" class="hover:bg-primary-700 bg-primary-600 inline-block py-2 px-4 text-sm font-semibold text-white rounded">Muat lebih banyak Artikel</nuxt-link>
      </div>
    </div>

    <div class="p-3">
      <h4 class="pt-3 text-xl font-bold tracking-wider">POIN TERBANYAK</h4>
      <div class="grid grid-cols-2 gap-3 py-3 xl:grid-cols-4">
        <elements-user-list v-for="user in mostUserPoints" :key="user.id" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  async asyncData({$axios, error}) {
    try {
      return await $axios.$get('/nuxt/home')
    } catch (e) {
      return error(e)
    }
  },
}
</script>
