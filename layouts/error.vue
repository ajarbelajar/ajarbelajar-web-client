<template>
  <div class="error-layout">
    <div class="container">
      <div v-if="error.statusCode === 404" class="error-wrapper">
        <div class="m-auto text-center">
          <h1 class="display-1 font-weight-bold text-primary">404</h1>
          <h4 class="text-uppercase text-light mb-3">
            Halaman tidak ditemukan.
          </h4>
          <NuxtLink to="/home" class="btn btn-light px-3 font-weight-bold"
            >KEMBALI KE HOME</NuxtLink
          >
        </div>
      </div>
      <div v-else class="error-wrapper">
        <div class="m-auto text-center">
          <h1 class="display-1 font-weight-bold text-primary">500</h1>
          <h4 class="text-uppercase text-light mb-3">Terjadi kesalahan.</h4>
          <button class="btn btn-light px-3 font-weight-bold" @click="reload">
            MUAT ULANG HALAMAN
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
  layout: 'blank',
  methods: {
    reload() {
      window.location.reload()
    },
  },
  head: {
    title: 'Terjadi kesalahan.',
  },
}
</script>

<style lang="scss" scoped>
.error-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: $dark;
}

.error-wrapper {
  display: flex;
  min-height: 100vh;
  width: 100%;
}
</style>
