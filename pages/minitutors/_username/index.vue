<template>
  <minitutors-dashboard-wrap :user="user" :minitutor="minitutor">
    <nuxt-child :user="user" :minitutor="minitutor" />
  </minitutors-dashboard-wrap>
</template>

<script>
export default {
  async asyncData({ $axios, error, params }) {
    try {
      return await $axios.$get(`minitutors/${params.username}`)
    } catch (e) {
      return error(e)
    }
  },
  head() {
    return {
      title: 'MiniTutor ' + this.user.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.user.about || '',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'MiniTutor ' + this.user.name,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.user.about || '',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: process.env.baseUrl + this.$route.path,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.user.avatar || this.$images.avatar,
        },
      ],
    }
  },
}
</script>
