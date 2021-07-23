<template>
  <div class="py-3">
    <div class="grid relative grid-cols-1 gap-4 md:grid-cols-3">
      <div class="md:col-span-2">
        <div class="mb-3 w-full rounded-lg border">
          <article v-if="auth">
            <v-img
              :src="article.hero.large || $images.hero.large"
              class="block w-full rounded-lg shadow"
              :src-placeholder="$images.hero.large"
            />
            <div class="flex justify-between items-center p-3 bg-gray-100 border-b">
              <div class="flex items-center text-sm text-gray-700">
                <span class="block">{{ article.created_at | moment('dddd, Do MMMM YYYY') }}</span>
                <span class="block mx-2 w-px h-3 bg-gray-600"></span>
                <span class="block"><i class="ft ft-eye"></i> {{ article.view_count }}</span>
              </div>
              <block-favorite-toggle v-if="auth" :pid="article.id" type="Article" />
            </div>
            <div class="flex items-center p-3">
              <client-only>
                <star-rating
                  :rating="Number(article.rating)"
                  :read-only="true"
                  :increment="0.01"
                  :star-size="14"
                  class="h-3 text-sm leading-none"
                  text-class="mr-1 text-sm h-3 leading-none"
                />
              </client-only>
              <span class="h-3 text-sm leading-none">dari {{ article.feedback_count }} Feedback</span>
            </div>
            <div class="p-3">
              <h1 class="text-4xl font-semibold">{{ article.title }}</h1>
            </div>
            <div v-if="article.category" class="flex px-3">
              <router-link :to="`/categories/${article.category.slug}`" class="flex justify-center items-center px-3 h-7 text-xs font-semibold leading-none bg-gray-200 rounded-full border">
                {{ article.category.name }}
              </router-link>
            </div>
            <div class="px-3 w-full">
              <block-editorjs-compiler class="md:prose-lg prose w-full max-w-none" :editor="JSON.parse(article.body)" />
            </div>
          </article>
          <block-post-auth-required v-else :post="article" />
          <block-feedback
            v-if="auth && !feedback"
            class="p-3 bg-gray-100 border-t"
            :url="`/feedback/article/${article.id}`"
            @close="feedback = true"
          />
          <block-comment
            class="p-3 border-t"
            :url="`/comments/article/${article.id}`"
            :comments-count="article.comments.length"
            :comments="article.comments"
          />
        </div>
      </div>
      <block-post-side-bar
        :user="article.user"
        :minitutor="article.minitutor"
        :lates="latesPosts"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowArticle',
  async asyncData({ store, error, $axios, params }) {
    let data = {}
    try {
      data = await $axios.$get(`/articles/${params.slug}`)
    } catch (e) {
      return error(e)
    }
    data.feedback = false
    if (store.getters.auth) {
      try {
        data.feedback = await $axios.$get(`/feedback/article/${data.article.id}`)
      } catch (e) {
      }
    }
    return data
  },
  computed: {
    auth() {
      return this.$store.getters.auth
    }
  }
}
</script>
