<template>
  <div>
    <app-input-search v-model="search" />
    <div v-if="minitutor.followers.length" class="container-fluid mb-2">
      <div class="row">
        <div
          v-for="result in results"
          :key="result.id"
          class="col-lg-3 col-md-4 col-sm-6 pb-3"
        >
          <app-user-card :user="result" />
        </div>
      </div>
    </div>
    <div v-else class="container-fluid">
      <div class="py-100 panel panel-body">
        <h3 class="text-muted text-center">
          MiniTutor belum memiliki pengikut.
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
            name: 'name',
            weight: 0.5,
          },
          {
            name: 'username',
            weight: 0.5,
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
        let results = this.minitutor.followers
        if (val) {
          const fuse = new Fuse(this.minitutor.followers, this.fuseOption)
          results = []
          fuse.search(val).forEach((val) => results.push(val.item))
        }
        this.results = results
      },
    },
  },
}
</script>
