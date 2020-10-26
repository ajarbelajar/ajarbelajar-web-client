<template>
  <div>
    <app-input-search v-model="search" />
    <div v-if="minitutor.playlists.length" class="container-fluid mb-2">
      <div class="row">
        <div
          v-for="item in results"
          :key="item.id"
          class="col-lg-3 col-md-4 col-sm-6 pb-3"
        >
          <app-post-list-2 :post="item" :type="item.type" />
        </div>
      </div>
    </div>
    <div v-else class="container-fluid">
      <div class="py-100 panel panel-body">
        <h3 class="text-muted text-center">
          MiniTutor belum memiliki playlist.
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
    minitutor: {
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
            name: 'title',
            weight: 0.5,
          },
          {
            name: 'description',
            weight: 0.4,
          },
        ],
      },
    }
  },
  watch: {
    search: {
      deep: true,
      immediate: true,
      handler(val) {
        let results = this.minitutor.playlists || []
        if (val) {
          const fuse = new Fuse(this.minitutor.playlists, this.fuseOption)
          results = []
          fuse.search(val).forEach((val) => results.push(val.item))
        }
        this.results = results
      },
    },
  },
}
</script>
