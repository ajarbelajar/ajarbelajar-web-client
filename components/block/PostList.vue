<template>
  <div class="overflow-hidden rounded-lg border md:flex" :class="{'flex-col': flat}">
    <div class="block p-2" :class="{'md:w-64': !flat}">
      <div class="relative">
        <nuxt-link v-if="post.category" :to="`/categories/${post.category.slug}`" class="hover:bg-primary-700 bg-primary-600 leading-0 text-2xs block absolute top-1 left-1 py-1 px-2 font-semibold leading-none text-white uppercase rounded-full shadow">
          {{ post.category.name }}
        </nuxt-link>
        <v-img
          :src="post.hero.thumb || $images.hero.thumb"
          :src-placeholder="$images.hero.thumb"
          :alt="post.title"
          class="block w-full rounded-lg"
        />
      </div>
    </div>
    <div class="flex flex-col flex-1 p-2">
      <div class="flex-1 mb-3 w-full">
        <div class="mb-1 text-xs font-semibold text-gray-600">
          <span>{{ post.created_at | moment('dddd, Do MMMM YYYY') }}</span>
        </div>
        <h4 class="mb-1 font-bold leading-5">{{ post.title }}</h4>
        <div class="text-xs text-gray-600">
          <span>Dari <span class="font-semibold">{{ post.user.name }}</span></span>
        </div>
      </div>
      <div class="flex mb-2 w-full">
        <!-- <span v-if="type === 'Article'" class="block py-1 px-2 mr-1 text-xs font-bold leading-none text-gray-500 bg-gray-100 rounded-full border">Artikel</span>
        <span v-else class="block py-1 px-2 mr-1 text-xs font-bold leading-none text-gray-500 bg-gray-100 rounded-full border">Video</span> -->
        <span class="block py-1 px-2 mr-1 text-xs font-bold leading-none text-gray-500 bg-gray-100 rounded-full border"><i class="ft ft-eye"></i> {{ post.view_count }}</span>
        <span class="block py-1 px-2 mr-1 text-xs font-bold leading-none text-gray-500 bg-gray-100 rounded-full border"><i class="ft ft-message-circle"></i> {{ post.comments_count }}</span>
        <span class="block py-1 px-2 mr-1 text-xs font-bold leading-none text-gray-500 bg-gray-100 rounded-full border"><i class="ft ft-star"></i> {{ post.rating }}/{{ post.feedback_count }}</span>
      </div>
      <div class="flex">
        <nuxt-link :to="postUrl" class="bg-primary-600 flex justify-center items-center px-4 h-8 text-sm font-semibold leading-none text-center text-white rounded-full">
          <i :class="type === 'Video' ? 'ft-play' : 'ft-book'" class="ft pr-2"></i>
          {{ type === 'Video' ? 'Tonton' : 'Baca' }}
        </nuxt-link>
      </div>
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
    },
    type: {
      type: String,
      default: 'Video',
    },
    flat: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    postUrl() {
      return `/${this.type.toLowerCase()}s/${this.post.slug}`
    },
  },
}
</script>
