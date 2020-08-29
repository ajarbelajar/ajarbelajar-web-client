<template>
  <div class="avatar" :class="{ loading }">
    <v-lazy-image
      class="animate__infinite"
      :class="{ 'animate__heartBeat animate__animated': loading }"
      :src="$auth.avatar"
      :src-placeholder="avatar"
      :alt="$auth.username"
    ></v-lazy-image>
    <button
      class="btn btn-light btn-sm btn-floating"
      :disabled="loading"
      @click="handleClick"
    >
      <span class="icon wb-image"></span>
    </button>
    <input ref="input" type="file" class="d-none" @change="handleChange" />
  </div>
</template>

<script>
import avatarPlaceholder from '@/assets/img/placeholder/avatar.png'
import FormData from 'form-data'

export default {
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    avatar() {
      return avatarPlaceholder
    },
  },
  methods: {
    handleClick(e) {
      e.preventDefault()
      this.$refs.input.click()
    },
    async handleChange(ev) {
      this.loading = true
      try {
        const file = ev.target.files[0]
        const data = new FormData()
        data.append('avatar', file)
        const { url } = await this.$axios.$post('/user/avatar', data)
        this.$store.commit('setAuth', { ...this.$auth, avatar: url })
        this.$toast.success('Foto anda telah diupdate.')
      } catch (e) {
        this.$toast.danger(this.$errorMessage(e))
      }
      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  display: block;
  width: 120px;
  height: 120px;
  border: 3px solid $primary;
  margin: 0;
  margin-right: 15px;
  overflow: hidden;
  img {
    border: 3px solid $white;
  }

  .btn {
    position: absolute;
    left: 50%;
    bottom: 4px;
    transform: translateX(-50%);
    opacity: 0.5;
  }

  &:hover {
    .btn {
      opacity: 1;
    }
  }

  @include media-breakpoint-down(md) {
    margin: 15px auto;
    width: 100px;
    height: 100px;
    border-width: 2px;
    img {
      border-width: 2px;
    }
  }
}
</style>
