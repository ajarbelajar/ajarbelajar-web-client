<template>
  <div class="py-3">
    <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
      <nuxt-link v-for="user in followers" :key="user.id" :to="`/users/${user.username}`" class="block p-3 rounded-lg border hover:shadow">
        <div class="flex relative items-center">
          <span class="text-2xs bg-primary-100 text-primary-600 block absolute -top-1 -right-1 px-2 font-bold rounded-full">{{ user.points }} POIN</span>
          <div class="flex flex-col justify-center items-center">
            <div class="p-1 w-14 bg-white rounded-full border">
              <v-img class="w-full rounded-full" :src="user.avatar || $images.avatar" :src-placeholder="$images.avatar" />
            </div>
          </div>
          <div class="flex-1 pl-2">
            <h3 class="truncate mb-1 text-sm font-semibold leading-none capitalize">{{ user.name }}</h3>
            <p class="text-xs leading-none text-gray-600 capitalize" >@{{ user.username }}</p>
          </div>
        </div>
      </nuxt-link>
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
