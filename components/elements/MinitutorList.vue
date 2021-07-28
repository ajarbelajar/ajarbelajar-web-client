<template>
  <div class="border-primary-600 overflow-hidden relative bg-white rounded border-t-4 shadow">
    <div v-if="user.website" class="absolute top-0 right-0 p-3 text-center">
      <a :href="user.website" target="_blank" class="text-primary-600 flex justify-center items-center w-7 h-7 font-bold tracking-wider leading-none bg-gray-100 rounded border hover:shadow">
        <i class="ft ft-globe"></i>
      </a>
    </div>
    <div class="p-3 pt-6">
      <div class="flex flex-col justify-center items-center mb-2">
        <div class="p-1 mb-1 w-20 bg-white rounded-full border">
          <v-img class="w-full rounded-full" :src="user.avatar || $images.avatar" :src-placeholder="$images.avatar" />
        </div>
        <span class="text-primary-600 block p-1 text-xs font-bold leading-none bg-gray-100 rounded border">{{ user.points }} POIN</span>
      </div>
      <h4 class="truncate font-bold leading-none text-center capitalize">
        <nuxt-link :to="`/minitutors/${user.username}`">{{ user.name }}</nuxt-link>
      </h4>
      <div class="truncate mb-3 text-sm font-semibold text-center text-gray-500">
        <nuxt-link :to="`/minitutors/${user.username}`">@{{ user.username }}</nuxt-link>
      </div>
      <div class="mb-3 text-center">
        <elements-follow-toggle v-if="$store.getters.auth" :mid="minitutor.id" small />
      </div>
      <div v-if="!noCounter" class="grid grid-cols-3">
        <div class="text-center">
          <span class="block text-lg font-bold">{{ minitutor.article_count }}</span>
          <span class="block text-xs font-semibold text-gray-500 uppercase">Pengikut</span>
        </div>
        <div class="text-center">
          <span class="block text-lg font-bold">{{ minitutor.article_count }}</span>
          <span class="block text-xs font-semibold text-gray-500 uppercase">Artikel</span>
        </div>
        <div class="text-center">
          <span class="block text-lg font-bold">{{ minitutor.video_count }}</span>
          <span class="block text-xs font-semibold text-gray-500 uppercase">Video</span>
        </div>
      </div>
    </div>
    <div class="p-3 bg-gray-100">
      <nuxt-link :to="`/minitutors/${user.username}`" class="hover:bg-primary-700 bg-primary-600 flex justify-center items-center px-4 h-8 text-sm font-semibold leading-none text-center text-white rounded">Lihat MiniTutor</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MinitutorList',
  props: {
    user: {
      type: Object,
      default: () => ({})
    },
    minitutor: {
      type: Object,
      default: () => ({})
    },
    noCounter: {
      type: Boolean,
      default: false
    }
  }
}
</script>
