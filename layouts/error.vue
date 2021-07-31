<template>
  <div class="flex justify-start items-center p-3 min-h-screen bg-gray-900">
    <div v-if="error.statusCode === 404" class="flex flex-1 justify-center items-center">
      <div class="text-center">
        <h1 class="text-primary-600 text-8xl font-bold">404</h1>
        <h4 class="mb-3 text-lg font-semibold tracking-wider text-white uppercase">Halaman tidak ditemukan</h4>
        <NuxtLink to="/home" class="hover:bg-primary-700 bg-primary-600 inline-block py-2 px-4 font-semibold tracking-wider text-white rounded">KEMBALI KE HOME</NuxtLink>
      </div>
    </div>
    <div v-else class="flex flex-1 justify-center items-center">
      <div class="text-center">
        <h1 class="text-primary-600 text-8xl font-bold">500</h1>
        <h4 class="mb-3 text-lg font-semibold tracking-wider text-white uppercase">Terjadi kesalahan</h4>
        <button class="hover:bg-primary-700 bg-primary-600 inline-block py-2 px-4 font-semibold tracking-wider text-white rounded" @click="reload">MUAT ULANG HALAMAN</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
  head: {
    title: 'Terjadi kesalahan',
  },
  methods: {
    reload() {
      window.location.reload()
    },
  },
}
</script>
