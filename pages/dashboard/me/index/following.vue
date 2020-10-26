<template>
  <div>
    <app-input-search v-model="search" />
    <div v-if="user.followings.length" class="container-fluid mb-2">
      <div class="row">
        <div
          v-for="following in results"
          :key="following.id"
          class="col-md-3 pb-3"
        >
          <app-minitutor-card-2
            :user="following.user"
            :minitutor="following.minitutor"
          />
        </div>
      </div>
    </div>
    <div v-else class="container-fluid">
      <div class="py-100 panel panel-body">
        <h3 class="text-muted text-center">
          Belum ada MiniTutor yang diikuti.
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import Fuse from 'fuse.js'
export default {
  middleware: 'auth',
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
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
          this.user.followings.forEach((following) => {
            data.push({
              name: following.user.name,
              username: following.user.username,
            })
          })
          const fuse = new Fuse(data, this.fuseOption)
          results = []
          fuse.search(this.search).forEach((val) => {
            this.user.followings.forEach((following) => {
              if (val.item.username === following.user.username) {
                results.push(following)
              }
            })
          })
        }
        this.results = val ? results : this.user.followings
      },
    },
  },
  head() {
    return this.$seo()
  },
}
</script>
