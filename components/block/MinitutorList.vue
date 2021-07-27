<template>
  <nuxt-link :to="`/minitutors/${user.username}`" class="border p-2 hover:shadow bg-white rounded-lg">
    <div class="flex relative items-center">
      <span class="absolute -right-1 -top-1 block font-bold text-2xs bg-primary-100 text-primary-600 px-2 rounded-full">{{ user.points }} POIN</span>
      <div class="flex flex-col justify-center items-center">
        <div class="w-14 p-1 border bg-white rounded-full">
          <v-img class="w-full rounded-full" :src="user.avatar || $images.avatar" :src-placeholder="$images.avatar" />
        </div>
      </div>
      <div class="flex-1 pl-2">
        <h3 class="text-sm font-semibold truncate leading-none mb-1 capitalize">{{ user.name }}</h3>
        <p class="text-xs text-gray-600 capitalize leading-none" >{{ minitutor.city_and_country_of_study }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'MinitutorList',
  props: {
    user: {
      type: Object,
      default: () => ({})
    },
    minitutor: {
      type: Object,
      default: () => ({})
    },
  }
}
</script>
