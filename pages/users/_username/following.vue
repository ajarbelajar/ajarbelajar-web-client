<template>
  <users-dashboard-wrap :user="user">
    <app-input-search v-model="search" />
    <div class="container-fluid mb-2">
      <app-minitutor-card
        v-for="following in results"
        :key="following.id"
        :user="following.user"
        :minitutor="following.minitutor"
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

    let followings = []
    try {
      followings = await $axios.$get(`/follow/${user.id}`)
    } catch (e) {
      return error(e)
    }

    return { user, followings, results: followings }
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
