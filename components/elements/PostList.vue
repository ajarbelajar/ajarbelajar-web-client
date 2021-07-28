<template>
  <div class="flex overflow-hidden flex-col bg-white rounded shadow">
    <div class="block p-2 w-full">
      <div class="relative">
        <nuxt-link v-if="post.category" :to="`/categories/${post.category.slug}`" class="hover:bg-primary-700 bg-primary-600 leading-0 text-2xs block absolute top-1 left-1 py-1 px-2 font-semibold leading-none text-white uppercase rounded-sm shadow">
          {{ post.category.name }}
        </nuxt-link>
        <v-img
          :src="post.hero.thumb || $images.hero.thumb"
          :src-placeholder="$images.hero.thumb"
          :alt="post.title"
          class="block w-full rounded shadow"
        />
        <div class="absolute right-1 -bottom-4 p-px w-9 h-9 bg-white rounded-full shadow-lg">
          <v-img
            :src="post.user.avatar || $images.avatar"
            :src-placeholder="$images.avatar"
            :alt="post.user.username"
            class="block w-full rounded-full border border-white"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 p-2">
      <div class="flex-1 mb-3 w-full">
        <div class="text-2xs font-semibold text-gray-600">
          <span>{{ post.created_at | moment('dddd, Do MMMM YYYY') }}</span>
        </div>
        <h4 class="mb-1 font-bold leading-5">{{ post.title }}</h4>
        <div class="text-xs font-semibold text-gray-400">
          Dari <span class="text-gray-900">{{ post.user.name }}</span>
        </div>
      </div>
      <div class="flex w-full">
        <span class="text-2xs block px-1 mr-1 font-bold text-gray-500 bg-gray-100 rounded-sm border"><i class="ft ft-eye"></i> {{ post.view_count }}</span>
        <span class="text-2xs block px-1 mr-1 font-bold text-gray-500 bg-gray-100 rounded-sm border"><i class="ft ft-message-circle"></i> {{ post.comments_count }}</span>
        <span class="text-2xs block px-1 mr-1 font-bold text-gray-500 bg-gray-100 rounded-sm border"><i class="ft ft-star"></i> {{ post.rating }}/{{ post.feedback_count }}</span>
      </div>
    </div>
    <div class="p-2 bg-gray-100">
      <nuxt-link :to="postUrl" class="hover:bg-primary-700 bg-primary-600 flex justify-center items-center px-4 h-8 text-sm font-semibold leading-none text-center text-white rounded">
        <i :class="post.type === 'video' ? 'ft-play' : 'ft-book'" class="ft pr-2"></i>
        {{ post.type === 'video' ? 'Tonton Video' : 'Baca Artikel' }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    }
  },
  computed: {
    postUrl() {
      return `/${this.post.type}s/${this.post.slug}`
    },
  },
}
</script>
