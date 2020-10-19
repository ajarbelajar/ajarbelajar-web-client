<template>
  <div v-if="routerAlive" class="container-fluid">
    <app-post-list v-for="item in items" :key="item.id" :post="item" />
    <div class="panel panel-body py-3">
      <b-pagination-nav
        v-model="currentPage"
        use-router
        :number-of-pages="pageCount"
        base-url="?page="
        first-number
        last-number
        :limit="7"
        size="sm"
        align="center"
      ></b-pagination-nav>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  scrollToTop: true,
  async asyncData({ store, error }) {
    try {
      await store.dispatch('public_playlist/fetch')
      return {}
    } catch (e) {
      return error(e)
    }
  },
  data() {
    return {
      parPage: 12,
      currentPage: this.$route.query.page || 1,
      routerAlive: true,
    }
  },
  computed: {
    ...mapGetters({ playlists: 'public_playlist/playlists' }),
    items() {
      const current = Number(this.$route.query.page || 1) * this.parPage
      const start = current - this.parPage
      return this.playlists.slice(start, current)
    },
    pageCount() {
      return Math.ceil(this.playlists.length / this.parPage)
    },
  },
  watch: {
    $route(val) {
      this.currentPage = val.query.page || 1
      if (this.currentPage > this.pageCount) {
        this.currentPage = this.pageCount
      }
      this.routerAlive = false
      setTimeout(() => {
        this.routerAlive = true
      }, 0)
    },
  },
  head() {
    return this.$seo()
  },
}
</script>
