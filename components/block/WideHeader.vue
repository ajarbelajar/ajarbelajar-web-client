<template>
  <div class="overflow-hidden mb-3 bg-fixed bg-cover shadow" :style="`background-image: url(${require('@/assets/img/background/hero.jpg')})`">
    <div class="pt-24 pb-10 bg-gray-800 bg-opacity-40">
      <div class="container">
        <div class="flex justify-between px-3">
          <h5 class="text-lg font-bold tracking-widest leading-none text-white md:text-xl">{{ title }}</h5>
          <div class="my-auto font-semibold leading-none text-white md:text-lg">
            <nuxt-link to="/home" class="hover:text-primary-700 text-primary-600">home</nuxt-link>
            <span>/</span>
            <span>{{ page }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WideHeader',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    page: {
      type: String,
      default: 'page'
    },
  }
}
</script>
