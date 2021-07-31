<template>
  <div class="p-3">
    <div class="grid relative grid-cols-1 gap-4 md:grid-cols-3">
      <div class="md:col-span-2">
        <block-render-post :post="video" />
        <block-feedback v-if="auth && !feedback" :url="`/feedback/${video.id}`" @close="feedback = true" />
        <block-comment :url="`/comments/${video.id}`" :comments="video.comments" />
      </div>
      <block-post-side-bar
        :user="video.user"
        :minitutor="video.minitutor"
        :lates="latesPosts"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowVideo',
  async asyncData({ store, error, $axios, params, query }) {
    let data = {}
    try {
      data = await $axios.$get(`/videos/${params.slug}`)
    } catch (e) {
      return error(e)
    }

    data.feedback = false
    if (store.getters.auth) {
      try {
        data.feedback = await $axios.$get(`/feedback/${data.video.id}`)
      } catch (e) {
      }
    }

    return data
  },
  head() {
    return {
      title: this.video.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.video.description || '',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.video.title || '',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.video.description || '',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `${this.$config.baseUrl}/videos/${this.video.slug}`,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.video.hero.large,
        },
      ],
    }
  },
  computed: {
    auth() {
      return this.$store.getters.auth
    }
  },
}
</script>
