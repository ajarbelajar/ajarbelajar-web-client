<template>
  <div class="sidebar flex overflow-y-auto flex-col flex-1 p-3">
    <div class="flex flex-col w-full bg-opacity-25 rounded-lg border">
      <div class="flex items-center p-3 w-full">
        <div class="pr-2">
          <figure class="block p-1 m-auto w-12 h-12 rounded-full border">
            <v-img class="block w-full h-full rounded-full" :src="auth.avatar" :src-placeholder="$images.avatar" />
          </figure>
        </div>
        <div class="flex-1">
          <h3 class="capitalized truncate mb-1 font-semibold leading-none">{{ auth.name }}</h3>
          <p class="truncate text-sm leading-none text-gray-400">@{{ auth.username }}</p>
        </div>
      </div>
      <div class="text-primary-600 py-2 px-3 text-xs font-bold leading-none text-center border-t">
        {{ auth.points }} POINT
      </div>
    </div>
    <div class="flex-1 py-3">
      <nuxt-link v-for="url, i in urls" :key="i" :to="url.to" :exact-active-class="i ? '' : 'bg-gray-100'" :active-class="i ? 'bg-gray-100' : ''" class="flex items-center py-3 px-3 mb-1 w-full text-sm font-semibold leading-none text-gray-600 rounded-lg hover:bg-gray-100" @click.native="onclick">
        <span class="mr-3 opacity-60">
          <i :class="`ft ft-${url.icon}`"></i>
        </span>
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
          icon: 'info',
        },
        {
          text: 'Artikel',
          to: '/dashboard/minitutor/articles',
          icon: 'book',
        },
        {
          text: 'Video',
          to: '/dashboard/minitutor/videos',
          icon: 'film',
        },
        {
          text: 'Komentar',
          to: '/dashboard/minitutor/comments',
          icon: 'message-circle',
        },
        {
          text: 'Feedback konstruktif',
          to: '/dashboard/minitutor/feedback',
          icon: 'star',
        }
      ];
    }
  },
  methods: {
    onclick() {
      this.$sidebar.display(false)
    }
  }
}
</script>
