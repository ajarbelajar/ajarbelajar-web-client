<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="(result, i) in data" :key="i" class="col-md-3 pb-3">
        <app-minitutor-card
          :user="result.user"
          :minitutor="result.minitutor"
        />
      </div>
    </div>
    <client-only>
      <infinite-loading @infinite="infiniteHandler" />
    </client-only>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  async asyncData({ $axios, error }) {
    try {
      return await $axios.$get(`/minitutors`)
    } catch (e) {
      return error(e)
    }
  },
  methods: {
    infiniteHandler($state) {
      this.$axios
        .$get(`/minitutors?page=${this.current_page + 1}`)
        .then((res) => {
          const data = res.data
          const currentPage = res.current_page
          if (currentPage < this.last_page) {
            this.current_page = currentPage
            this.data = [...this.data, ...data]
            $state.loaded()
          } else {
            this.current_page = currentPage
            this.data = [...this.data, ...data]
            $state.loaded()
            $state.complete()
          }
        })
        .catch((e) => {
          $state.error()
        })
    },
  },
  head() {
    return this.$seo()
  },
}
</script>
