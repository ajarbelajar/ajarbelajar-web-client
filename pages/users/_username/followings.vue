<template>
  <div class="py-3">
    <div class="grid grid-cols-1 gap-3 md:grid-cols-4">
      <block-minitutor-list v-for="item in followings" :key="item.id" :user="item.user" :minitutor="item.minitutor"/>
    </div>
    <block-blank v-if="!followings.length" text="Belum ada MiniTutor yang diikuti." />
  </div>
</template>

<script>
export default {
  name: 'UserFollowings',
  props: {
    followings: {
      type: Array,
      default: () => []
    }
  }
}
</script>
