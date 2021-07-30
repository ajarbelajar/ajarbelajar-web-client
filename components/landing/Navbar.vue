<template>
  <header v-click-outside="onClickOutside" class="fixed top-0 right-0 left-0 z-50 w-full transition-all" :class="scrollY > 5 ? 'bg-white shadow-lg py-5' : 'bg-white shadow-lg py-5 lg:py-10 lg:shadow-none lg:bg-transparent'">
    <div class="container px-3">
      <div class="flex">
        <nuxt-link to="/home" class="block mr-3">
          <svg-brand width="36px" no-text />
        </nuxt-link>
        <button type="button" class="hover:bg-primary-700 bg-primary-600 flex justify-center items-center ml-auto w-9 h-9 text-sm font-bold tracking-wider text-white rounded lg:hidden lg:mt-0 lg:ml-3" @click.prevent="open = !open"><i class="ft ft-menu"></i></button>
        <nav :class="open ? 'block' : 'hidden'" class="absolute top-0 right-0 left-0 flex-1 p-3 mt-16 w-full bg-white shadow-lg lg:flex lg:static lg:p-0 lg:mt-0 lg:bg-transparent lg:shadow-none">
          <nuxt-link to="/videos" :class="scrollY > 5 ? 'text-gray-700' : 'text-gray-700 lg:text-white'" class="hover:text-primary-600 transition-color flex justify-center items-center px-3 h-9 text-sm font-bold tracking-wider">VIDEOS</nuxt-link>
          <nuxt-link to="/articles" :class="scrollY > 5 ? 'text-gray-700' : 'text-gray-700 lg:text-white'" class="hover:text-primary-600 transition-color flex justify-center items-center px-3 h-9 text-sm font-bold tracking-wider">ARTIKEL</nuxt-link>
          <nuxt-link to="/categories" :class="scrollY > 5 ? 'text-gray-700' : 'text-gray-700 lg:text-white'" class="hover:text-primary-600 transition-color flex justify-center items-center px-3 h-9 text-sm font-bold tracking-wider">KATEGORI</nuxt-link>
          <nuxt-link to="/login" :class="scrollY > 5 ? 'text-gray-700' : 'text-gray-700 lg:text-white'" class="hover:text-primary-600 transition-color flex justify-center items-center px-3 ml-auto h-9 text-sm font-bold tracking-wider">MASUK</nuxt-link>
          <nuxt-link to="/register" class="hover:bg-primary-700 transition-color bg-primary-600 flex justify-center items-center px-3 mt-3 h-9 text-sm font-bold tracking-wider text-white rounded lg:mt-0 lg:ml-3">BUAT AKUN BARU</nuxt-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'Navbar',
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      scrollY: 0,
      open: false
    }
  },
  mounted() {
    this.setScrollY()
    window.addEventListener('scroll', this.setScrollY)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.setScrollY)
  },
  methods: {
    setScrollY() {
      this.scrollY = window.scrollY
    },
    onClickOutside() {
      this.open = false
    }
  }
}
</script>
