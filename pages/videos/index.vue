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
  name: 'Videos',
  async asyncData({ $axios, error }) {
    try {
      return await $axios.$get(`/videos`)
    } catch (e) {
      return error(e)
    }
  },
  head: {
    title: 'Video'
  },
  methods: {
    infiniteHandler($state) {
      this.$axios
        .$get(`/videos?page=${this.meta ? this.meta.current_page + 1 : 1}`)
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
