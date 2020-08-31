<template>
  <users-dashboard-wrap :user="user">
    <app-input-search v-model="search" />
    <div class="container-fluid mb-2">
      <app-post-list
        v-for="favorite in results"
        :key="favorite.favorite_id"
        :post="favorite"
        :type="favorite.type"
      />
    </div>
  </users-dashboard-wrap>
</template>

<script>
import Fuse from 'fuse.js'
export default {
  async asyncData({ params, store, $axios, error }) {
    const data = store.state.remember.remember
    let user = null

    if (data && data.type === `users/${params.username}`) {
      user = data.data
    } else {
      try {
        user = await $axios.$get(`/users/${params.username}`)
        store.commit('remember/set', {
          type: `users/${params.username}`,
          data: user,
        })
      } catch (e) {
        return error(e)
      }
    }

    let favorites = []
    try {
      favorites = await $axios.$get(`/favorites/${user.id}`)
    } catch (e) {
      return error(e)
    }

    return { user, results: favorites, favorites }
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
}
</script>
