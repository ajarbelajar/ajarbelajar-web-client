<template>
  <div class="py-3">
    <div class="overflow-hidden rounded-lg border">
      <div class="flex py-5 px-4">
        <div class="p-1 w-16 rounded-full border">
          <v-img class="block w-full rounded-full" :src="auth.avatar" :src-placeholder="$images.avatar" />
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
export default {
  name: "MyDashboard",
  middleware: 'auth',
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
  }
}
</script>
