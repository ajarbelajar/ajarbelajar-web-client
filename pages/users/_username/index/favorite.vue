<template>
  <div>
    <app-input-search v-model="search" />
    <div v-if="favorites.length" class="container-fluid mb-2">
      <div class="row">
        <div
          v-for="item in results"
          :key="item.id"
          class="col-lg-3 col-md-4 col-sm-6 pb-3"
        >
          <app-post-list-2 :post="item.post" :type="item.post.type" />
        </div>
      </div>
    </div>
    <div v-else class="container-fluid">
      <div class="py-100 panel panel-body">
        <h3 class="text-muted text-center">
          Belum ada Playlist atau Artikel yang difavoritkan.
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import Fuse from 'fuse.js'
export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      search: '',
      results: [],
      fuseOption: {
        keys: [
          {
            name: 'post.title',
            weight: 0.5,
          },
          {
            name: 'post.description',
            weight: 0.4,
          },
        ],
      },
    }
  },
  computed: {
    favorites() {
      return this.user.favorites || []
    },
  },
  watch: {
    search: {
      deep: true,
      immediate: true,
      handler(val) {
        let results = this.favorites
        if (val) {
          const fuse = new Fuse(this.favorites, this.fuseOption)
          results = []
          fuse.search(val).forEach((val) => results.push(val.item))
        }
        this.results = results
      },
    },
  },
  head() {
    return this.$seo()
  },
}
</script>
