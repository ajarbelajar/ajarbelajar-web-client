<template>
  <div class="py-3">
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
      <elements-post-list v-for="item in videos" :key="item.id" :post="item"/>
    </div>
    <block-blank v-if="!videos.length" text="Belum ada Video dari MiniTutor." />
  </div>
</template>

<script>
export default {
  name: 'MinitutorVideos',
  props: {
    videos: {
      type: Array,
      default: () => []
    }
  }
}
</script>
