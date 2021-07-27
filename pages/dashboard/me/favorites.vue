<template>
  <div class="py-3">
    <div class="grid grid-cols-1 gap-3">
      <block-post-list v-for="item in favorites" :key="item.id" :post="item.post"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Favorites',
  async asyncData({ error, $axios }) {
    try {
      const favorites = await $axios.$get('/account/favorites')
      return { favorites }
    } catch (e) {
      return error(e)
    }
  },
}
</script>
