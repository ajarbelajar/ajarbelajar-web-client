<template>
  <div class="py-3">
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
      <elements-minitutor-list v-for="item in followings" :key="item.id" :user="item.user" :minitutor="item.minitutor" no-counter/>
    </div>
    <block-blank v-if="!followings.length" text="Belum ada MiniTutor yang diikuti." />
  </div>
</template>

<script>
export default {
  name: 'Followings',
  async asyncData({ error, $axios }) {
    try {
      const followings = await $axios.$get('/account/followings')
      return { followings }
    } catch (e) {
      return error(e)
    }
  },
}
</script>
