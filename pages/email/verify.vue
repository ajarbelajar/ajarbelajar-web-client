<template>
  <div v-if="!success">
    <h3 class="text-uppercase text-center font-weight-bold text-secondary">
      Verifikasi Alamat Email
    </h3>
    <div
      v-if="!!message"
      class="alert alert-danger dark font-weight-bold text-center"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  async asyncData({ query, $axios, store, redirect, route }) {
    if (!store.state.auth) {
      return redirect(`/login?next=${route.fullPath}`)
    }
    try {
      const user = await $axios.$get(query.queryURL)
      store.commit('setAuth', user)
      return {
        success: true,
        message: '',
      }
    } catch (e) {}
    return {
      success: false,
      message: 'Tidak dapat memverifikasi Alamat Email anda.',
    }
  },
  mounted() {
    if (this.success) {
      this.$toast.success('Alamat Email anda berhasil di verifikasi.')
      return this.$router.push('/dashboard/me')
    }
  },
  head() {
    return this.$seo()
  },
}
</script>
