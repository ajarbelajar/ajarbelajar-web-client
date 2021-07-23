<template>
  <article>
    <v-img
      :src="post.hero.large || $images.hero.large"
      class="block w-full rounded-lg shadow"
      :src-placeholder="$images.hero.large"
    />
    <div class="flex justify-between items-center p-3 bg-gray-100 border-b">
      <div class="flex items-center text-sm text-gray-700">
        <span class="block">{{ post.created_at | moment('dddd, Do MMMM YYYY') }}</span>
        <span class="block mx-2 w-px h-3 bg-gray-600"></span>
        <span class="block"><i class="ft ft-eye"></i> {{ post.view_count }}</span>
      </div>
      <block-favorite-toggle v-if="auth" :pid="post.id" type="post" />
    </div>
    <div class="flex items-center p-3">
      <client-only>
        <star-rating
          :rating="Number(post.rating)"
          :read-only="true"
          :increment="0.01"
          :star-size="14"
          class="h-3 text-sm leading-none"
          text-class="mr-1 text-sm h-3 leading-none"
        />
      </client-only>
      <span class="h-3 text-sm leading-none">dari {{ post.feedback_count }} Feedback</span>
    </div>
    <div class="p-3">
      <h1 class="text-4xl font-semibold">{{ post.title }}</h1>
    </div>
    <div v-if="post.category" class="flex px-3 pb-4">
      <router-link :to="`/categories/${post.category.slug}`" class="flex justify-center items-center px-3 h-7 text-xs font-semibold leading-none bg-gray-200 rounded-full border">
        {{ post.category.name }}
      </router-link>
    </div>
    <div class="py-10 px-3 bg-gray-100 border-t">
      <p class="mb-3 text-center">
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
  name: 'PostAuthRequired',
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
