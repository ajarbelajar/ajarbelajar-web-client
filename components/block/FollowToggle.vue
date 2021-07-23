<template>
  <button
    type="button"
    :disabled="loading"
    class="disabled:opacity-50 inline-flex justify-center items-center px-3 h-8 text-sm rounded-full border border-red-600"
    :class="{ 'bg-transparent text-red-600': !followed, 'text-white bg-red-600': followed }"
    @click.prevent="handleClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'FollowToggle',
  props: {
    mid: {
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
    followed() {
      return this.$store.getters.auth.followings.includes(this.mid)
    },
    text() {
      if (this.loading) {
        return 'Sedang diproses'
      }
      if (this.followed) {
        return 'Berhenti Mengikuti'
      }
      return 'Ikuti MiniTutor'
    },
  },
  methods: {
    async handleClick() {
      this.loading = true
      try {
        const url = `/follow/${this.mid}`
        let followings = [...this.$store.getters.auth.followings]
        if (!this.followed) {
          await this.$axios.$post(url)
          followings = [...followings, this.mid]
          this.$toast.success(`Berhasil mengikuti MiniTutor.`)
        } else {
          await this.$axios.$delete(url)
          const data = []
          followings.forEach((id) => {
            if (id !== this.mid) data.push(id)
          })
          followings = data
          this.$toast.success(`Berhasil berhenti mengikuti MiniTutor.`)
        }
        this.$store.commit('auth/setAuth', { ...this.$store.getters.auth, followings })
      } catch (e) {
        this.$toast.danger(this.$errorMessage(e))
      }
      this.loading = false
    },
  },
}
</script>
