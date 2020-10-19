<template>
  <minitutor-dashboard-wrap>
    <create-request-post />
    <app-input-search v-model="search" />
    <div v-if="filtered.length" class="container-fluid">
      <request-post-list
        v-for="playlist in filtered"
        :key="playlist.id"
        :post="playlist"
      />
    </div>
    <div v-else-if="playlists.length" class="container-fluid">
      <div class="py-100 panel panel-body">
        <h3 class="text-muted text-center">
          Tidak ada hasil pencarian untuk "{{ search }}"
        </h3>
      </div>
    </div>
    <div v-else class="container-fluid">
      <div class="py-100 panel panel-body text-center">
        <h3 class="text-muted">Belum ada Playlist.</h3>
      </div>
    </div>
  </minitutor-dashboard-wrap>
</template>

<script>
import { mapGetters } from 'vuex'
import Fuse from 'fuse.js'

export default {
  middleware: ['auth', 'activeMinitutor'],
  async asyncData({ store, error }) {
    try {
      await store.dispatch('request_playlist/fetch')
    } catch (e) {
      return error(e)
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
  computed: {
    ...mapGetters({ playlists: 'request_playlist/playlists' }),
    filtered() {
      let results = this.playlists
      if (this.search) {
        const fuse = new Fuse(this.playlists, this.fuseOption)
        results = []
        fuse.search(this.search).forEach((val) => results.push(val.item))
      }
      return results
    },
  },
  head() {
    return this.$seo()
  },
}
</script>
