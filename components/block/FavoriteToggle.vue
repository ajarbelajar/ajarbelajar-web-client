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
      return this.$store.getters.auth.favorites.includes(this.pid)
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
        let favorites = [ ...this.$store.getters.auth.favorites ]
        if (!this.favorited) {
          await this.$axios.$post(`/favorites/${this.pid}`)
          favorites = [
            ...favorites,
            this.pid,
          ]
          this.$toast.success(`Berhasil menambahkan ke daftar favorite.`)
        } else {
          await this.$axios.$delete(`/favorites/${this.pid}`)
          favorites = favorites.filter((id) => id !== this.pid)
          this.$toast.success(`Berhasil menghapus favorite.`)
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
