<template>
  <div class="container-fluid">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="panel panel-body" v-html="body"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params, error }) {
    try {
      return (await $axios.$get('pages/' + params.slug)).data
    } catch (e) {
      return error(e)
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description || '',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title || '',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description || '',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `${process.env.baseUrl}/page/${this.slug}`,
        },
      ],
    }
  },
}
</script>
