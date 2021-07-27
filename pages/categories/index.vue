<template>
<div class="py-3">
  <h3 class="mb-3 text-lg font-bold leading-none uppercase">Daftar Kategori</h3>
  <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
    <nuxt-link v-for="item in $store.getters.categories" :key="item.id" :to="`/categories/${item.slug}`" class="flex justify-center items-center p-3 rounded-lg border hover:shadow">
      <span class="block text-sm font-bold tracking-wide text-center uppercase">{{ item.name }}</span>
    </nuxt-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Categories'
}
</script>
