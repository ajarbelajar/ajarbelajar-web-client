<template>
  <div class="mt-auto bg-white shadow">
    <div :class="{ container }">
      <div class="grid grid-cols-1 gap-3 py-14 border-b md:grid-cols-3">
        <div class="p-3 text-center md:text-left">
          <svg-brand class="mx-auto h-10 md:mx-0" />
          <p class="py-3 text-sm tracking-wider leading-none text-gray-500">BELAJAR, BERBAGI, BERKONTRIBUSI</p>
        </div>
        <div class="p-3 text-center md:text-left">
          <div class="mb-2"><nuxt-link to="/about-minitutor" class="hover:text-primary-600 text-sm text-gray-500">Tantang MiniTutor</nuxt-link></div>
          <div class="mb-2"><nuxt-link to="/constructive-feedback" class="hover:text-primary-600 text-sm text-gray-500">Feedback Konstruktif</nuxt-link></div>
          <div><nuxt-link to="/faq" class="hover:text-primary-600 text-sm text-gray-500">F . A . Q</nuxt-link></div>
        </div>
        <div class="p-3 text-center md:text-right">
          <a href="https://www.instagram.com/ajarbelajar" target="_blank" rel="noreferrer" class="hover:bg-primary-600 text-primary-600 inline-flex justify-center items-center w-8 h-8 bg-gray-100 rounded border hover:text-white"><i class="ft ft-instagram"></i></a>
          <a href="https://www.youtube.com/channel/UC_RqkZkVSmRIKNnj_5QPv5Q" target="_blank" rel="noreferrer" class="hover:bg-primary-600 text-primary-600 inline-flex justify-center items-center w-8 h-8 bg-gray-100 rounded border hover:text-white"><i class="ft ft-youtube"></i></a>
        </div>
      </div>
    </div>
    <div class="py-6 bg-gray-100">
      <p class="text-xs text-center">© 2021 All Right Reserved AjarBelajar - By <a href="https://www.ajarbelajar.com" class="text-primary-600">Tim AjarBelajar</a></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  props: {
    container: {
      type: Boolean,
      default: false
    },
  },
}
</script>
