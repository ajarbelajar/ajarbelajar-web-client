<template>
  <div class="flex flex-col min-h-screen">
    <header class="flex py-5 shadow">
      <nuxt-link to="/home" class="block m-auto">
        <svg-brand no-text class="w-10 h-10" />
      </nuxt-link>
    </header>
    <main class="py-10 px-3 md:px-0">
      <div class="mx-auto max-w-xl border">
        <div class="flex">
          <nuxt-link to="/login" active-class="is-nav-active" class="flex flex-1 justify-center items-center h-14 text-sm font-bold tracking-widest text-gray-500 uppercase bg-gray-100 border-b">
            Masuk
          </nuxt-link>
          <div class="w-px h-14 bg-gray-200"></div>
          <nuxt-link to="/register" active-class="is-nav-active" class="flex flex-1 justify-center items-center h-14 text-sm font-bold tracking-widest text-gray-500 uppercase bg-gray-100 border-b">
            Daftar
          </nuxt-link>
        </div>
        <Nuxt class="px-10 pb-10" />
      </div>
    </main>
    <footer class="pb-10 text-center text-gray-400">
      © AJARBELAJAR {{(new Date()).getFullYear()}}
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style lang="css" scoped>
  .is-nav-active {
    @apply bg-transparent border-b-0 text-gray-600;
  }
</style>
