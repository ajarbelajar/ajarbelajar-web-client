<template>
  <div class="p-3">
    <div class="grid relative grid-cols-1 md:grid-cols-3 md:gap-3">
      <div class="md:col-span-2">
        <block-render-post :post="article" />
        <block-feedback v-if="auth && !feedback" :url="`/feedback/${article.id}`" @close="feedback = true" />
        <block-comment :url="`/comments/${article.id}`" :comments="article.comments" />
      </div>
      <block-post-side-bar :user="article.user" :minitutor="article.minitutor" :lates="latesPosts" />
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
        data.feedback = await $axios.$get(`/feedback/${data.article.id}`)
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
