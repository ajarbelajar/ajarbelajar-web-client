<template>
  <div class="p-3">
    <div class="overflow-hidden bg-white rounded shadow">
      <div class="flex py-5 px-4">
        <div class="p-1 w-16 rounded-full border">
          <v-img class="block w-full rounded-full" :src="user.avatar" :src-placeholder="$images.avatar" />
        </div>
        <div class="relative flex-1 pl-4 my-auto">
          <h2 class="truncate text-lg font-semibold leading-none capitalize">{{ user.name }} <span class="text-sm">😄</span></h2>
          <p class="truncate text-sm leading-none">@{{ user.username }}</p>
          <span class="text-2xs bg-primary-100 text-primary-600 inline-block absolute bottom-0 px-2 font-bold rounded-full border transform translate-y-5">{{ user.points }} Poin</span>
        </div>
        <div class="pl-4">
          <a v-if="user.website" :href="user.website" target="_blank" class="hover:bg-primary-600 text-primary-600 bg-primary-100 inline-flex justify-center items-center w-8 h-8 text-sm font-semibold leading-none rounded-full hover:text-white"><i class="ft ft-globe"></i></a>
        </div>
      </div>
      <p v-if="user.about" class="py-3 px-4 text-sm text-center border-t">{{ user.about }}</p>
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
    <nuxt-child :user="user" :followings="followings" :favorites="favorites" />
  </div>
</template>

<script>
export default {
  name: 'UserWrapper',
  async asyncData({$axios, params, error}) {
    const { username } = params
    try {
      return await $axios.$get(`/users/${username}`)
    } catch (e) {
      return error(e)
    }
  },
    computed: {
    links() {
      return [
        {
          text: 'Favorit',
          icon: 'heart',
          to: `/users/${this.$route.params.username}`
        },
        {
          text: 'Diikuti',
          icon: 'users',
          to: `/users/${this.$route.params.username}/followings`
        }
      ]
    }
  },
}
</script>
