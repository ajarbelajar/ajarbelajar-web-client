<template>
  <div>
    <h3 class="mb-3 text-xl font-semibold leading-none">Komentar</h3>
    <div v-for="comment in comments" :key="comment.id" class="flex p-3 mb-3 rounded-lg border">
      <div class="w-14">
        <nuxt-link :to="`/users/${comment.user.username}`" class="block p-1 bg-white rounded-full border hover:bg-gray-200">
          <v-img class="block w-full rounded-full" :src="comment.user.avatar || $images.avatar" :src-placeholder="$images.avatar" :alt="comment.user.username" />
        </nuxt-link>
      </div>
      <div class="flex-1 pl-3">
        <div class="flex items-center mb-3">
          <nuxt-link :to="`/users/${comment.user.username}`" class="hover:text-primary-700 text-primary-600 block text-lg font-semibold leading-none capitalize">{{ comment.user.name }}</nuxt-link>
          <span class="block pl-2 text-xs leading-none">{{ comment.created_at | moment('from', 'now') }}</span>
        </div>
        <p class="mb-3 text-gray-700">{{ comment.body }}</p>
        <nuxt-link :to="`/${comment.post.type}s/${comment.post.slug}`" class="hover:bg-primary-600 bg-primary-100 text-primary-600 inline-flex justify-center items-center px-3 h-7 text-xs font-semibold leading-none rounded-full hover:text-white">Lihat Postingan</nuxt-link>
      </div>
    </div>

    <block-blank v-if="!comments.length" text="Belum ada Feddback Konstruktif." />
  </div>
</template>

<script>
export default {
  name: 'MinitutorComments',
  async asyncData({ error, $axios }) {
    try {
      const comments = await $axios.$get('/minitutor/comments')
      return { comments }
    } catch (e) {
      return error(e)
    }
  },
}
</script>
