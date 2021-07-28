<template>
  <div class="p-3">
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
      <elements-minitutor-list v-for="item in data" :key="item.minitutor.id" :minitutor="item.minitutor" :user="item.user"/>
    </div>
    <client-only>
      <infinite-loading @infinite="infiniteHandler" />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Minitutors',
  async asyncData({ $axios, error }) {
    try {
      return await $axios.$get(`/minitutors`)
    } catch (e) {
      return error(e)
    }
  },
  methods: {
    infiniteHandler($state) {
      /* eslint-disable camelcase */
      this.$axios
        .$get(`/minitutors?page=${this.current_page ? this.current_page + 1 : 1}`)
        .then(({ data, next_page_url, current_page }) => {
          this.data = [...this.data, ...data]
          this.next_page_url = next_page_url
          this.current_page = current_page
          $state.loaded()
          if(this.next_page_url === null) {
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
