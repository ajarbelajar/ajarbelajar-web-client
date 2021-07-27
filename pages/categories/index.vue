<template>
<div class="py-3">
  <h3 class="mb-3 font-bold uppercase leading-none text-lg">Daftar Kategori</h3>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
    <nuxt-link v-for="item in $store.getters.categories" :key="item.id" :to="`/categories/${item.slug}`" class="flex justify-center items-center p-3 border rounded-lg hover:shadow">
      <span class="block text-center tracking-wide font-bold uppercase text-sm">{{ item.name }}</span>
    </nuxt-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'Categories'
}
</script>
