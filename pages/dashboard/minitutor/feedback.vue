<template>
  <div class="p-3">
    <div v-for="item in feedback" :key="item.id" class="flex p-3 mb-3 bg-white rounded shadow">
      <div class="w-14">
        <nuxt-link :to="`/users/${item.user.username}`" class="block p-1 bg-white rounded-full border hover:bg-gray-200">
          <v-img class="block w-full rounded-full" :src="item.user.avatar || $images.avatar" :src-placeholder="$images.avatar" :alt="item.user.username" />
        </nuxt-link>
      </div>
      <div class="flex-1 pl-3">
        <div class="flex items-center mb-3">
          <nuxt-link :to="`/users/${item.user.username}`" class="hover:text-primary-700 text-primary-600 block text-lg font-semibold leading-none capitalize">{{ item.user.name }}</nuxt-link>
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
        <p class="mb-3 text-gray-700">{{ item.message }}</p>
        <nuxt-link :to="`/${item.post.type}s/${item.post.slug}`" class="hover:bg-primary-600 bg-primary-100 text-primary-600 inline-flex justify-center items-center px-3 h-7 text-xs font-semibold leading-none rounded hover:text-white">Lihat Postingan</nuxt-link>
      </div>
    </div>

    <block-blank v-if="!feedback.length" text="Belum ada Feedback Konstruktif." />
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
