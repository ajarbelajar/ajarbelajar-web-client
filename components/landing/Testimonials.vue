<template>
  <div class="py-24">
    <div class="container px-3">
      <h2 class="text-primary-600 mb-6 text-4xl font-semibold text-center">Testimonials</h2>
      <VueSlickCarousel :dots="true" :arrows="false" class="testimonial-carousel">
        <div v-for="(item, i) in testimonials" :key="i" class="py-3">
          <div class="mb-4 text-center">
            <svg-quote class="block mx-auto w-10 opacity-30" />
          </div>
          <p class="mx-auto mb-4 max-w-3xl text-2xl italic text-center text-gray-500" v-html="item.message" />
          <div class="flex flex-col justify-center items-center py-3">
            <v-img :src="item.avatar || $images.avatar" :src-placeholder="$images.avatar" :alt="item.name" class="block mb-3 w-32 h-32 rounded-full" />
            <span class="block font-bold tracking-widest uppercase">{{ item.name }}</span>
            <span class="block text-gray-500">MiniTutor</span>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  name: 'Testimonials',
  components: {
    VueSlickCarousel
  },
  props: {
    testimonials: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="css">
  .testimonial-carousel .slick-dots {
    @apply text-center;
  }
  .testimonial-carousel .slick-dots li {
    @apply inline-block mx-1 w-4 h-4 bg-gray-300 rounded-full relative overflow-hidden transition-colors;
  }
  .testimonial-carousel .slick-dots li.slick-active {
    @apply bg-primary-600;
  }
  .testimonial-carousel .slick-dots button {
    @apply opacity-0 absolute inset-0 w-4 h-4 p-0 m-0 block;
  }
</style>
