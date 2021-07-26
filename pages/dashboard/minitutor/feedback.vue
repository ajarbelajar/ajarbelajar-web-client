<template>
  <div>
    <h3 class="mb-3 text-xl font-semibold leading-none">Feedback Konstruktif</h3>
    <div v-for="item in feedback" :key="item.id" class="border rounded-lg p-3 mb-3 flex">
      <div class="w-14">
        <nuxt-link :to="`/users/${item.user.username}`" class="border rounded-full p-1 bg-white block hover:bg-gray-200">
          <v-img class="block w-full rounded-full" :src="item.user.avatar || $images.avatar" :src-placeholder="$images.avatar" :alt="item.user.username" />
        </nuxt-link>
      </div>
      <div class="flex-1 pl-3">
        <div class="flex items-center mb-3">
          <nuxt-link :to="`/users/${item.user.username}`" class="block leading-none text-lg font-semibold capitalize text-primary-600 hover:text-primary-700">{{ item.user.name }}</nuxt-link>
          <span class="block pl-2 text-xs leading-none">{{ item.created_at | moment('from', 'now') }}</span>
        </div>
        <div class="mb-3">
          <client-only>
            <star-rating
              :rating="Number(item.rating)"
              :read-only="true"
              :increment="0.01"
              :star-size="16"
              class="h-3 text-sm leading-none"
              text-class="mr-1 text-sm h-3 leading-none"
            />
          </client-only>
        </div>
        <p class="text-gray-700 mb-3">{{ item.message }}</p>
        <nuxt-link :to="`/${item.post.type}s/${item.post.slug}`" class="hover:bg-primary-600 hover:text-white bg-primary-100 inline-flex justify-center items-center px-3 h-7 text-xs font-semibold leading-none text-primary-600 rounded-full">Lihat Postingan</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MinitutorFeedback',
  async asyncData({ error, $axios }) {
    try {
      const feedback = await $axios.$get('/minitutor/feedback')
      return { feedback }
    } catch (e) {
      return error(e)
    }
  },
}
</script>
