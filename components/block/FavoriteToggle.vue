<template>
    <button
    type="button"
    :disabled="loading"
    class="disabled:opacity-50 flex justify-center items-center px-3 h-8 text-sm rounded-full border border-red-600"
    :class="{ 'bg-transparent text-red-600': !favorited, 'text-white bg-red-600': favorited }"
    @click.prevent="handleClick"
  >
    <i class="ft ft-heart"></i>
    <span v-if="!noText" class="ml-2">{{ text }}</span>
  </button>
</template>
<script>
export default {
  name: 'FavoriteToggle',
    props: {
    type: {
      type: String,
      default: 'Playlist',
    },
    pid: {
      type: Number,
      required: true,
      default: 0,
    },
    noText: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    favorited() {
      let exists = false
      if ( this.type === 'Playlist' && this.$store.getters.auth.favorites.playlists.includes(this.pid) ) {
        exists = true
      } else if ( this.type === 'Article' && this.$store.getters.auth.favorites.articles.includes(this.pid) ) {
        exists = true
      }
      return exists
    },
    text() {
      if (this.loading) {
        return 'Sedang diproses'
      }
      if (this.favorited) {
        return 'Hapus favorite'
      }
      return 'Tambah favorite'
    },
  },
  methods: {
    async handleClick() {
      this.loading = true
      try {
        const url = `/favorites/${this.type.toLowerCase()}/${this.pid}`
        const favorites = { ...this.$store.getters.auth.favorites }
        if (!this.favorited) {
          await this.$axios.$post(url)
          favorites[`${this.type.toLowerCase()}s`] = [
            ...favorites[`${this.type.toLowerCase()}s`],
            this.pid,
          ]
          this.$toast.success(`${this.type} telah ditambahkan ke daftar favorite.`)
        } else {
          await this.$axios.$delete(url)
          const data = []
          favorites[`${this.type.toLowerCase()}s`].forEach((id) => {
            if (id !== this.pid) data.push(id)
          })
          favorites[`${this.type.toLowerCase()}s`] = data
          this.$toast.success(`${this.type} telah dihapus dari daftar favorite.`)
        }
        this.$store.commit('auth/setAuth', { ...this.$store.getters.auth, favorites })
      } catch (e) {
        this.$toast.danger(this.$errorMessage(e))
      }
      this.loading = false
    },
  },
}
</script>
