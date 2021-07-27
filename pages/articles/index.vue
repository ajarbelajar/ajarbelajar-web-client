<template>
  <div class="py-3">
    <div class="flex justify-between items-center mb-3">
      <h3 class="flex-1 text-lg font-bold leading-none uppercase">Daftar Artikel</h3>
      <button @click.prevent="flat = !flat">
        <i class="ft" :class="flat? 'ft-list' : 'ft-grid'"></i>
      </button>
    </div>
    <div class="grid gap-3" :class="flat? 'md:grid-cols-3' : 'grid-cols-1'">
      <block-post-list v-for="item in data" :key="item.id" :post="item" type="Article" :flat="flat" />
    </div>
    <client-only>
      <infinite-loading @infinite="infiniteHandler" />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Articles',
  async asyncData({ $axios, error }) {
    try {
      return await $axios.$get(`/articles`)
    } catch (e) {
      return error(e)
    }
  },
  data() {
    return {
      flat: false
    }
  },
  methods: {
    infiniteHandler($state) {
      this.$axios
        .$get(`/articles?page=${this.meta ? this.meta.current_page + 1 : 1}`)
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
