<template>
  <div class="sidebar flex overflow-y-auto flex-1 p-3">
    <div class="flex-1 py-3">
      <component :is="url ? 'nuxt-link' : 'div'" v-for="url, i in urls" :key="i" :to="url && url.to" active-class="bg-gray-100" :class="!url ? 'py-2' : 'flex w-full px-3 py-3 mb-1 text-gray-600 hover:bg-gray-100 rounded-lg items-center leading-none text-sm font-semibold'">
        <span v-if="url" class="mr-3 opacity-60">{{ url.icon }}</span>
        <span v-if="url">{{ url.text }}</span>
      </component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      urls: [
        {
          text: 'Home',
          to: '/home',
          icon: '🏠',
          active: false
        },
        {
          text: 'Artikel',
          to: '/articles',
          icon: '📓',
          active: true
        },
        {
          text: 'Playlist',
          to: '/playlists',
          icon: '🎬',
          active: false
        },
        {
          text: 'Kategori',
          to: '/categories',
          icon: '📚',
          active: false
        },
        {
          text: 'Minitutor',
          to: '/minitutors',
          icon: '🎭',
          active: false
        },
        null,
        {
          text: 'Masuk',
          to: '/login',
          icon: '🎭',
          active: false
        },
        {
          text: 'Daftar',
          to: '/register',
          icon: '🎭',
          active: false
        },
      ]
    }
  },
}
</script>
