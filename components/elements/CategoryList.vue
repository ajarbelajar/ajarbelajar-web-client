<template>
  <nuxt-link :to="`/categories/${category.slug}`" class="border-primary-600 flex justify-center items-center p-3 bg-white rounded border-t-4 shadow hover:shadow-lg">
    <span class="block text-sm font-bold tracking-wide text-center uppercase">{{ category.name }}</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CategoryList',
  props: {
    category: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
