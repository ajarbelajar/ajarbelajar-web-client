<template>
  <div class="landing-header flex bg-fixed bg-gray-900 bg-top bg-cover" :style="`background-image: url(${require('@/assets/img/background/hero.jpg')})`">
    <div class="flex flex-col flex-1 pt-28 bg-gray-900 bg-opacity-50">
      <div class="flex flex-1 items-center">
        <div class="container px-3 pt-20">
          <div class="text-center lg:max-w-2xl lg:text-left">
            <h1 class="text-4xl font-semibold text-white lg:text-5xl">Mengajar ataupun belajar, semuanya menjadi lebih mudah.</h1>
            <p class="text-sm text-white lg:text-base">Kami adalah nonprofit dengan misi untuk membuat edukasi online yang lebih berkualitas.</p>
            <div class="pt-5">
              <nuxt-link to="/home" class="hover:bg-primary-700 inline-block py-3 px-4 w-40 text-sm font-semibold leading-none text-center text-white bg-white bg-opacity-10 rounded transition-colors hover:bg-opacity-100">MULAI BELAJAR</nuxt-link>
              <nuxt-link to="/register?next=/join-minitutor" class="hover:bg-primary-700 bg-primary-600 inline-block py-3 px-4 w-40 text-sm font-semibold leading-none text-center text-white rounded transition-colors hover:bg-opacity-100">MULAI MENGAJAR</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <svg-curve class="block mt-auto w-full" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css">
  .landing-header {
    min-height: 115vh;
  }
</style>
