<template>
  <div class="py-3">
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
      <elements-post-list v-for="item in articles" :key="item.id" :post="item"/>
    </div>
    <block-blank v-if="!articles.length" text="Belum ada Artikel dari MiniTutor." />
  </div>
</template>

<script>
export default {
  name: 'MinitutorArticles',
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  }
}
</script>
