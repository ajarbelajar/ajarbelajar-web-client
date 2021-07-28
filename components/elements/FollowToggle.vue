<template>
  <button
    type="button"
    :disabled="loading"
    class="disabled:opacity-50 inline-flex justify-center items-center font-semibold text-white rounded"
    :class="{ 'bg-primary-600 hover:bg-primary-700': !followed, 'bg-red-600 hover:bg-red-700': followed, 'h-6 text-xs px-2': small, 'h-8 text-sm px-3': !small }"
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
    small: {
      type: Boolean,
      default: false
    }
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
