<template>
  <div class="py-3">
    <div class="flex justify-between items-center mb-3">
      <h3 class="flex-1 font-bold uppercase leading-none text-lg">Daftar Minitutor</h3>
    </div>
    <div class="grid gap-3 grid-cols-2 md:grid-cols-4">
      <block-minitutor-list v-for="item in data" :key="item.minitutor.id" :minitutor="item.minitutor" :user="item.user"/>
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
  data() {
    return {
      flat: false
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
