<template>
  <nuxt-link :to="`/users/${user.username}`" class="group block p-2 bg-white rounded shadow hover:shadow-lg">
    <div class="flex relative items-center">
      <span class="text-2xs bg-primary-100 text-primary-600 block absolute -top-1 -right-1 px-2 font-bold rounded-full">{{ user.points }} POIN</span>
      <div class="flex flex-col justify-center items-center">
        <div class="group-hover:bg-gray-200 p-1 w-14 bg-white rounded-full border">
          <v-img class="w-full rounded-full" :src="user.avatar || $images.avatar" :src-placeholder="$images.avatar" />
        </div>
      </div>
      <div class="truncate flex-1 pl-2">
        <h3 class="truncate mb-1 text-sm font-semibold leading-none capitalize">{{ user.name }}</h3>
        <p class="truncate text-xs leading-none text-gray-600 capitalize" >@{{ user.username }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    user: {
      type: Object,
      default: () => ({})
    },
  }
}
</script>
