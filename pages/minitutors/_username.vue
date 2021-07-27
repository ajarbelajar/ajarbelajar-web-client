<template>
  <div class="py-3">
    <div class="overflow-hidden rounded-lg border">
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
          <a :href="user.website" v-if="user.website" target="_blank" class="inline-flex justify-center items-center text-sm hover:bg-primary-600 hover:text-white font-semibold rounded-full text-primary-600 leading-none h-8 w-8 bg-primary-100"><i class="ft ft-globe"></i></a>
          <block-follow-toggle :mid="minitutor.id" />
        </div>
      </div>
      <p class="p-3 border-t text-sm" v-if="user.about">{{ user.about }}</p>
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
    <nuxt-child :minitutor="minitutor" :user="user" :articles="articles" :videos="videos" :followers="followers" />
  </div>
</template>

<script>
export default {
  name: 'MinitutorWrapper',
  async asyncData({$axios, params, error}) {
    const { username } = params
    try {
      return await $axios.$get(`/minitutors/${username}`)
    } catch (e) {
      return error(e)
    }
  },
    computed: {
    links() {
      return [
        {
          text: 'Info',
          icon: 'info',
          to: `/minitutors/${this.$route.params.username}`
        },
        {
          text: 'Video',
          icon: 'play',
          to: `/minitutors/${this.$route.params.username}/videos`
        },
        {
          text: 'Artikel',
          icon: 'book',
          to: `/minitutors/${this.$route.params.username}/articles`
        },
        {
          text: 'Pengikut',
          icon: 'users',
          to: `/minitutors/${this.$route.params.username}/followers`
        },
        {
          text: 'Profil',
          icon: 'user',
          to: `/users/${this.$route.params.username}`
        },
      ]
    }
  },
}
</script>
