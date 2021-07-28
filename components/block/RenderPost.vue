<template>
  <article class="border-primary-600 pb-6 mb-3 w-full bg-white rounded border-b-4 shadow">
    <video v-if="auth && post.type === 'video'" :src="post.video" disablePictureInPicture controlsList="nodownload" :poster="post.hero.large || $images.hero.large" autoplay class="block overflow-hidden w-full rounded-t rounded-b-xl" controls />
    <v-img v-else :src="post.hero.large || $images.hero.large" class="block w-full rounded-t rounded-b-xl" :src-placeholder="$images.hero.large" />
    <div class="flex justify-between items-center p-3 border-b">
      <div class="flex items-center text-xs text-gray-600">
        <span class="block">{{ post.created_at | moment('dddd, Do MMMM YYYY') }}</span>
        <span class="block mx-2 w-px h-3 bg-gray-600"></span>
        <span class="block"><i class="ft ft-eye"></i> {{ post.view_count }}</span>
      </div>
      <elements-favorite-toggle v-if="auth" :pid="post.id" type="post" />
    </div>
    <div class="flex items-center p-3">
      <client-only>
        <star-rating :rating="Number(post.rating)" :read-only="true" :increment="0.01" :star-size="14" class="h-3 text-sm leading-none" text-class="mr-1 text-sm h-3 leading-none" />
      </client-only>
      <span class="h-3 text-sm leading-none">dari {{ post.feedback_count }} Feedback</span>
    </div>
    <div class="p-3">
      <h1 class="text-3xl md:text-4xl">{{ post.title }}</h1>
    </div>
    <div v-if="post.category" class="flex px-3 pb-4">
      <router-link :to="`/categories/${post.category.slug}`" class="border-primary-200 text-primary-600 flex justify-center items-center py-1 px-2 text-xs font-semibold uppercase bg-gray-100 rounded border hover:shadow">
        {{ post.category.name }}
      </router-link>
    </div>
    <div v-if="auth" class="px-3">
      <p v-if="post.type ==='video'">{{ post.description }}</p>
      <block-editorjs-compiler v-else class="md:prose-lg prose w-full max-w-none" :editor="JSON.parse(post.body)" />
    </div>
    <div v-else class="py-10 px-3 border-t">
      <p class="mb-3 text-lg text-center text-gray-500 md:text-xl">
        Anda harus login untuk mengakses postingan ini.
      </p>
      <div class="text-center">
        <form-button tag="nuxt-link" :to="`/login?next=${$route.fullPath}`">
          Masuk
        </form-button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'RenderPost',
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    auth() {
      return this.$store.getters.auth
    }
  }
}
</script>
