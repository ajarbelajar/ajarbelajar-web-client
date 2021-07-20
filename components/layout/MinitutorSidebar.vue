<template>
  <div class="sidebar flex overflow-y-auto flex-col flex-1 p-3">
    <div class="flex flex-col w-full bg-opacity-25 rounded-lg border group hover:bg-gray-100">
      <div class="flex p-3 w-full items-center">
        <div class="pr-2">
          <figure class="block m-auto w-12 p-1 border rounded-full h-12 group-hover:bg-gray-200">
            <v-img class="block w-full h-full rounded-full" :src="auth.avatar" :src-placeholder="$images.avatar" />
          </figure>
        </div>
        <div class="flex-1">
          <h3 class="capitalized truncate font-semibold leading-none mb-1 group-hover:text-primary-600">{{ auth.name }}</h3>
          <p class="truncate text-sm text-gray-400  leading-none">@{{ auth.username }}</p>
        </div>
      </div>
      <div class="border-t px-3 py-2 text-center text-xs leading-none font-bold text-primary-600">
          {{ auth.points }} POINT
      </div>
    </div>
    <div class="flex-1 py-3">
      <nuxt-link v-for="url, i in urls" :key="i" :to="url.to" :exact-active-class="i ? '' : 'bg-gray-100'" :active-class="i ? 'bg-gray-100' : ''" class="flex items-center py-3 px-3 mb-1 w-full text-sm font-semibold leading-none text-gray-600 rounded-lg hover:bg-gray-100">
        <span class="mr-3 opacity-60">{{ url.icon }}</span>
        <span>{{ url.text }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    auth() {
      return this.$store.getters.auth
    },
    urls() {
      return [
        {
          text: 'Edit informasi',
          to: '/dashboard/minitutor',
          icon: '🏠',
        },
        {
          text: 'Artikel',
          to: '/dashboard/minitutor/articles',
          icon: '📓',
        },
        {
          text: 'Playlist',
          to: '/dashboard/minitutor/playlists',
          icon: '🎬',
        },
        {
          text: 'Komentar',
          to: '/dashboard/minitutor/comments',
          icon: '📨',
        },
        {
          text: 'Feedback konstruktif',
          to: '/dashboard/minitutor/feedback',
          icon: '💻',
        }
      ];
    }
  }
}
</script>
