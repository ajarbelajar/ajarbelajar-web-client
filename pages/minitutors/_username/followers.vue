<template>
  <div class="py-3">
    <div class="grid grid-cols-2 gap-3 xl:grid-cols-4">
      <elements-user-list v-for="user in followers" :key="user.id" :user="user" />
    </div>
    <block-blank v-if="!followers.length" text="MiniTutor Belum memiliki pengikut." />
  </div>
</template>

<script>
export default {
  name: 'MinitutorFollowers',
  props: {
    followers: {
      type: Array,
      default: () => []
    }
  }
}
</script>
