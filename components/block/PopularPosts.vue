<template>
  <VueSlickCarousel :arrows="true" class="relative" autoplay :speed="1000" :autoplay-speed="6000">
    <div v-for="(post, i) in posts" :key="i" class="p-3">
      <div class="flex overflow-hidden relative px-10 bg-white bg-cover rounded shadow"  :style="`background-image: url(${post.hero.large || $images.hero.large}); min-height: 400px`">
        <div class="relative z-10 my-auto max-w-xl">
          <nuxt-link v-if="post.category" to="/home" class="hover:bg-primary-700 bg-primary-600 inline-block py-1 px-3 mb-1 text-xs font-bold tracking-widest text-center text-white uppercase rounded-full shadow">{{ post.category.name }}</nuxt-link>
          <h3 class="text-2xl font-bold tracking-wider text-white uppercase lg:text-3xl">{{post.title}}</h3>
          <p class="text-shadow mb-3 text-white">by {{ post.user.name }} - {{ post.created_at | moment('dddd, Do MMMM YYYY') }} - {{ post.view_count }}x dilihat</p>
          <nuxt-link :to="`/${post.type}s/${post.slug}`" class="inline-block py-2 px-5 font-semibold text-center uppercase bg-white rounded-full shadow hover:text-gray-400">
            <i :class="post.type === 'video' ? 'ft-play' : 'ft-book'" class="ft pr-2"></i>
            {{ post.type === 'video' ? 'Tonton Video' : 'Baca Artikel' }}
          </nuxt-link>
        </div>
        <div class="absolute inset-0 bg-gray-900 opacity-10 select-none"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-70 select-none"></div>
      </div>
    </div>
    <template #prevArrow>
      <span class="flex absolute bottom-4 left-4 z-20 justify-center items-center w-9 h-9 leading-none text-gray-800 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100">
        <i class="ft ft-arrow-left-circle"></i>
      </span>
    </template>
    <template #nextArrow>
      <span class="flex absolute right-4 bottom-4 z-20 justify-center items-center w-9 h-9 leading-none text-gray-800 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100">
        <i class="ft ft-arrow-right-circle"></i>
      </span>
    </template>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  name: 'PopularPosts',
  components: {
    VueSlickCarousel
  },
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
}
</script>
