<template>
  <div class="p-3">
    <div class="overflow-hidden bg-white rounded shadow">
      <div class="flex py-5 px-4">
        <div class="relative p-1 w-16 rounded-full border">
          <v-img class="block w-full rounded-full" :src="auth.avatar" :src-placeholder="$images.avatar" />
          <div class="flex absolute bottom-0 left-0 justify-center w-full transform translate-y-2/4">
            <button type="button" :disabled="loading" class="text-primary-600 flex justify-center items-center w-7 h-7 bg-white rounded-full border hover:bg-gray-200" @click.prevent="handleClick">
              <svg-spinner v-if="loading" class="w-4" />
              <i v-else class="ft ft-image" />
            </button>
            <input ref="input" type="file" class="hidden" accept="image/*" @change="handleChange" />
          </div>
        </div>
        <div class="flex-1 pl-4 my-auto">
          <h2 class="truncate text-lg font-semibold leading-none">{{ auth.name }}</h2>
          <p class="truncate text-sm leading-none">@{{ auth.username }}</p>
        </div>
        <div class="pl-4 my-auto">
          <span class="bg-primary-100 flex justify-center items-center px-5 h-9 rounded-full">
            <span class="text-primary-600 block text-sm font-bold md:text-base">
              {{ auth.points }} Poin
            </span>
          </span>
        </div>
      </div>
      <div class="border-top flex border-t">
        <div v-for="(link, i) in links" :key="i" class="first:border-l-0 flex flex-1 border-l">
          <nuxt-link :to="link.to" exact-active-class="border-b-4 pb-2 bg-gray-100" class="border-b-transparent border-primary-600 flex flex-1 justify-center items-center py-3 text-center hover:bg-gray-100">
            <span  class="block md:pr-3 md:text-xl">
              <i :class="'ft ft-' + link.icon"></i>
            </span>
            <span class="hidden font-semibold md:block">
              {{ link.text }}
            </span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
import FormData from 'form-data'
export default {
  name: "MyDashboard",
  middleware: 'auth',
  data() {
    return {
      loading: false
    }
  },
  head() {
    return {
      title: 'Dasbor'
    }
  },
  computed: {
    auth() {
      return this.$store.getters.auth
    },
    links() {
      return [
        {
          text: 'Aktifitas',
          icon: 'activity',
          to: '/dashboard/me'
        },
        {
          text: 'Edit Profil',
          icon: 'settings',
          to: '/dashboard/me/edit'
        },
        {
          text: 'Diikuti',
          icon: 'user-check',
          to: '/dashboard/me/followings'
        },
        {
          text: 'Favorit',
          icon: 'heart',
          to: '/dashboard/me/favorites'
        },
      ]
    }
  },
  methods: {
    handleClick() {
      this.$refs.input.click()
    },
    async handleChange(ev) {
      this.loading = true
      try {
        const file = ev.target.files[0]
        const data = new FormData()
        data.append('avatar', file)
        const { url } = await this.$axios.$post('/account/avatar', data)
        this.$store.commit('auth/setAuth', { ...this.auth, avatar: url })
        this.$toast.success('Foto anda telah diupdate.')
      } catch (e) {
        this.$toast.danger(this.$errorMessage(e))
      }
      this.loading = false
    },
  },
}
</script>
