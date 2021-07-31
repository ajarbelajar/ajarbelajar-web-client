<template>
  <div class="p-3">
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
      <elements-post-list v-for="item in data" :key="item.id" :post="item" />
    </div>
    <client-only>
      <infinite-loading @infinite="infiniteHandler" />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'ShowCategory',
  async asyncData({ $axios, error, params }) {
    try {
      return await $axios.$get(`/categories/${params.slug}`)
    } catch (e) {
      return error(e)
    }
  },
  head() {
    return {
      title: this.category.name || 'Detail Kategori'
    }
  },
  computed: {
    category() {
      const temp = this.$store.getters.categories.filter(el => el.slug === this.$route.params.slug)
      if(temp.length) return temp[0]
      return {}
    }
  },
  methods: {
    infiniteHandler($state) {
      this.$axios
        .$get(`/categories/${this.$route.params.slug}?page=${this.meta ? this.meta.current_page + 1 : 1}`)
        .then(({ data, meta, links }) => {
          this.data = [...this.data, ...data]
          this.meta = meta
          this.links = links
          $state.loaded()
          if(links.next === null) {
            $state.complete()
          }
        })
        .catch((e) => {
          $state.error()
        })
    },
  },
}
</script>
