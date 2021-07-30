<template>
<div class="bg-fixed bg-gray-900 bg-top bg-cover" :style="`background-image: url(${require('@/assets/img/background/hero.jpg')})`">
  <div class="bg-primary-600 py-24 bg-opacity-30">
    <div class="container px-3">
      <div class="flex flex-col justify-center items-center">
        <h2 class="text-4xl font-semibold text-center text-white lg:text-7xl">
          GABUNG SEKARANG
          <div class="flex flex-col items-center py-4 mx-auto w-8/12">
            <span class="block mb-2 w-full h-1 bg-white rounded-full"></span>
            <span class="block w-6/12 h-1 bg-white rounded-full opacity-50"></span>
          </div>
        </h2>
        <nuxt-link to="/register" class="hover:bg-primary-600 text-primary-600 inline-block py-4 px-5 text-lg font-bold leading-none text-center bg-white rounded transition-colors hover:text-white">BUAT AKUN BARU</nuxt-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CallToActions'
}
</script>
