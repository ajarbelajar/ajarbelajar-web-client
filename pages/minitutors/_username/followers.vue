<template>
  <minitutors-dashboard-wrap :user="user" :minitutor="minitutor">
    <app-input-search v-model="search" />
    <div class="container-fluid mb-2">
      <div class="row">
        <div v-for="user in results" :key="user.id" class="col-md-4">
          <app-user-card :user="user" />
        </div>
      </div>
    </div>
  </minitutors-dashboard-wrap>
</template>

<script>
import Fuse from 'fuse.js'
export default {
  async asyncData({ store, error, $axios, params }) {
    let user = null
    let minitutor = null

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
    let followers = null
    try {
      followers = await $axios.$get(`/follow/${minitutor.id}/followers`)
    } catch (e) {
      return error(e)
    }

    return {
      followers,
      results: followers,
      user,
      minitutor,
    }
  },
  data() {
    return {
      search: '',
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
        let results = this.followers
        if (val) {
          const fuse = new Fuse(this.followers, this.fuseOption)
          results = []
          fuse.search(val).forEach((val) => results.push(val.item))
        }
        this.results = results
      },
    },
  },
}
</script>
