<template>
  <footer class="bg-gray-800">
    <div class="py-16">
      <div class="container px-3">
        <div class="mb-10 text-center">
          <div class="mb-2"><nuxt-link to="/about-minitutor" class="hover:text-primary-600 text-lg tracking-wider text-gray-400">Tantang MiniTutor</nuxt-link></div>
          <div class="mb-2"><nuxt-link to="/constructive-feedback" class="hover:text-primary-600 text-lg tracking-wider text-gray-400">Feedback Konstruktif</nuxt-link></div>
          <div><nuxt-link to="/faq" class="hover:text-primary-600 text-lg tracking-wider text-gray-400">F . A . Q</nuxt-link></div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <h2 class="text-xl font-semibold text-center text-white md:text-2xl">
            DONASI KAMU AKAN SANGAT MEMBANTU!
            <div class="flex flex-col items-center py-4 mx-auto w-8/12">
              <span class="block mb-2 w-full h-1 bg-white rounded-full"></span>
              <span class="block w-6/12 h-1 bg-white rounded-full opacity-50"></span>
            </div>
          </h2>
          <a href="#" class="hover:bg-primary-500 bg-primary-600 inline-block py-3 px-5 font-bold leading-none text-center text-white rounded transition-colors">DONASI</a>
        </div>
      </div>
    </div>
    <div class="py-8 bg-gray-900">
      <p class="text-sm leading-none text-center text-gray-400">
        © 2020 All Right Reserved AjarBelajar - By
        <a href="https://www.ajarbelajar.com" class="hover:text-primary-500 text-primary-600">Tim AjarBelajar</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
