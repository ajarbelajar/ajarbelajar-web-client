<template>
<div class="grid grid-cols-2 gap-3 p-3 md:grid-cols-4">
  <elements-category-list v-for="item in $store.getters.categories" :key="item.id" :category="item" />
</div>
</template>

<script>
export default {
  name: 'Categories',
  head: {
    title: 'Kategori'
  },
}
</script>
