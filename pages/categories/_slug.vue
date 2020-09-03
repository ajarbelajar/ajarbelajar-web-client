<template>
  <div class="container-fluid mb-2">
    <app-post-list
      v-for="(post, i) in posts"
      :key="i"
      :post="post"
      :type="post.type"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ params, store, $axios, error }) {
    let category = null

    store.state.category.categories.forEach((item) => {
      if (item.slug === params.slug) {
        category = item
      }
    })

    if (!category) return error({ statusCode: 404 })

    let posts = []
    try {
      posts = await $axios.$get(`/categories/${category.id}`)
    } catch (e) {
      return error(e)
    }

    return { posts }
  },
}
</script>
