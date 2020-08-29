<template>
  <button
    type="button"
    :disabled="loading"
    class="btn btn-sm btn-danger"
    :class="{ 'btn-outline': !favorited }"
    @click.prevent="handleClick"
  >
    <i class="icon wb-heart"></i>
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
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
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    favorited() {
      let exists = false
      if (
        this.type === 'Playlist' &&
        this.$auth.favorites.playlists.includes(this.pid)
      ) {
        exists = true
      } else if (
        this.type === 'Article' &&
        this.$auth.favorites.articles.includes(this.pid)
      ) {
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
        const favorites = { ...this.$auth.favorites }
        if (!this.favorited) {
          await this.$axios.$post(url)
          favorites[`${this.type.toLowerCase()}s`] = [
            ...favorites[`${this.type.toLowerCase()}s`],
            this.pid,
          ]
          this.$toast.success(
            `${this.type} telah ditambahkan ke daftar favorite.`
          )
        } else {
          await this.$axios.$delete(url)
          const data = []
          favorites[`${this.type.toLowerCase()}s`].forEach((id) => {
            if (id !== this.pid) data.push(id)
          })
          favorites[`${this.type.toLowerCase()}s`] = data
          this.$toast.success(
            `${this.type} telah dihapus dari daftar favorite.`
          )
        }
        this.$store.commit('setAuth', { ...this.$auth, favorites })
      } catch (e) {
        this.$toast.danger(this.$errorMessage(e))
      }

      this.loading = false
    },
  },
}
</script>
