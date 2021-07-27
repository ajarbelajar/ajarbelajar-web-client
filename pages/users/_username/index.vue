<template>
  <div class="py-3">
    <div class="grid grid-cols-1 gap-3">
      <block-post-list v-for="item in favorites" :key="item.id" :post="item.post"/>
    </div>
    <block-blank v-if="!favorites.length" text="Belum ada Postingan yang difavoritkan." />
  </div>
</template>

<script>
export default {
  name: 'UserFavorites',
  props: {
    favorites: {
      type: Array,
      default: () => []
    }
  }
}
</script>
