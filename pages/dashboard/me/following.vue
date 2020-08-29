<template>
  <my-dashboard-wrap>
    <app-input-search v-model="search" />
    <div class="container-fluid mb-2">
      <app-minitutor-card
        v-for="following in results"
        :key="following.id"
        :user="following.user"
        :minitutor="following.minitutor"
      />
    </div>
  </my-dashboard-wrap>
</template>

<script>
import Fuse from 'fuse.js'
export default {
  middleware: 'auth',
  async asyncData({ $axios, store, error }) {
    try {
      const id = store.state.auth.id
      const followings = await $axios.$get(`/follow/${id}`)
      return { followings, results: followings }
    } catch (e) {
      return error(e)
    }
  },
  data() {
    return {
      search: '',
      fuseOption: {
        keys: ['name', 'username'],
      },
    }
  },
  watch: {
    search: {
      deep: true,
      immediate: true,
      handler(val) {
        let results = null
        if (val) {
          const data = []
          this.followings.forEach((following) => {
            data.push({
              name: following.user.name,
              username: following.user.username,
            })
          })
          const fuse = new Fuse(data, this.fuseOption)
          results = []
          fuse.search(this.search).forEach((val) => {
            this.followings.forEach((following) => {
              if (val.item.username === following.user.username) {
                results.push(following)
              }
            })
          })
        }
        this.results = val ? results : this.followings
      },
    },
  },
}
</script>
