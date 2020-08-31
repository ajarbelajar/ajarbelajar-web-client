<template>
  <minitutors-dashboard-wrap :user="user" :minitutor="minitutor">
    <app-input-search v-model="search" />
    <div class="container-fluid mb-2">
      <app-post-list
        v-for="playlist in results"
        :key="playlist.id"
        :post="playlist"
      />
    </div>
  </minitutors-dashboard-wrap>
</template>

<script>
import Fuse from 'fuse.js'
export default {
  async asyncData({ store, error, params, $axios }) {
    let user = null
    let minitutor = null
    let playlists = null

    try {
      const minitutors = await store.dispatch('minitutor/fetch')
      minitutors.forEach((data) => {
        if (data.user.username === params.username) {
          user = data.user
          minitutor = data.minitutor
        }
      })
    } catch (e) {
      return error(e)
    }

    if (!user && !minitutor) return error({ statusCode: 404 })

    try {
      playlists = await $axios.$get(`/minitutors/${params.username}/playlists`)
    } catch (e) {
      return error(e)
    }
    return {
      minitutor,
      user,
      playlists,
      results: playlists,
    }
  },
  data() {
    return {
      search: '',
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
        let results = this.playlists
        if (val) {
          const fuse = new Fuse(this.playlists, this.fuseOption)
          results = []
          fuse.search(val).forEach((val) => results.push(val.item))
        }
        this.results = results
      },
    },
  },
}
</script>
