<template>
  <button
    type="button"
    :disabled="loading"
    class="btn btn-sm"
    :class="{ 'btn-primary': !followed, 'btn-danger': followed }"
    @click.prevent="handleClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
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
      return this.$auth.followings.includes(this.mid)
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
        let followings = [...this.$auth.followings]
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
        this.$store.commit('setAuth', { ...this.$auth, followings })
      } catch (e) {
        this.$toast.danger(this.$errorMessage(e))
      }

      this.loading = false
    },
  },
}
</script>
