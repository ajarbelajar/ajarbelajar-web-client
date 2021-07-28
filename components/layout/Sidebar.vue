<template>
  <div class="flex overflow-y-auto flex-1 p-3">
    <div class="flex-1">
      <component :is="url ? 'nuxt-link' : 'div'" v-for="url, i in urls" :key="i" :to="url && url.to" active-class="bg-gray-100" :class="!url ? 'py-2' : 'flex w-full px-3 py-3 mb-1 text-gray-600 hover:bg-gray-100 rounded-lg items-center leading-none text-sm font-semibold'" @click.native="onclick">
        <span v-if="url" class="mr-3 opacity-60">
          <i :class="`ft ft-${url.icon}`" />
        </span>
        <span v-if="url">{{ url.text }}</span>
      </component>
      <a href="/logout" class="flex items-center py-3 px-3 mb-1 w-full text-sm font-semibold leading-none text-gray-600 rounded-lg hover:bg-gray-100" @click="logout">
        <span class="mr-3 text-red-600">
          <i class="ft ft-log-out" />
        </span>
        <span>Keluar</span>
      </a>
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
      let urls = [
        {
          text: 'Home',
          to: '/home',
          icon: 'home',
        },
        {
          text: 'Artikel',
          to: '/articles',
          icon: 'book',
        },
        {
          text: 'Video',
          to: '/videos',
          icon: 'film',
        },
        {
          text: 'Kategori',
          to: '/categories',
          icon: 'database',
        },
        {
          text: 'Minitutor',
          to: '/minitutors',
          icon: 'users',
        },
        null

      ];

      if(this.auth) {

        if(!this.auth.minitutor) {
          urls.push({
            text: 'Jadi MiniTutor',
            to: '/join-minitutor',
            icon: 'user-plus',
          })
        }

        urls.push({
          text: 'Dasbor kamu',
          to: '/dashboard/me',
          icon: 'user',
        })

        if(this.auth.minitutor && this.auth.minitutor.active) {
          urls.push({
            text: 'Dasbor MiniTutor',
            to: '/dashboard/minitutor',
            icon: 'clipboard',
          })
        }

      } else {
        urls = [
          ...urls,
          {
            text: 'Masuk',
            to: '/login',
            icon: '🎭',
          },
          {
            text: 'Daftar',
            to: '/register',
            icon: '🎭',
          },
        ]
      }
      return urls;
    }
  },
  methods: {
    logout(e) {
      e.preventDefault();
      this.$toast.confirm.danger(
        async () => {
          try {
            await this.$store.dispatch('auth/logout')
            window.location.reload()
          } catch (e) {
            this.$toast.danger('Logout gagal!')
          }
        },
        null,
        { message: 'Anda yakin ingin keluar?' }
      )
    },
    onclick() {
      this.$sidebar.display(false)
    }
  },
}
</script>
