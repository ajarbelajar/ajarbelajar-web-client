<template>
  <div>
    <div class="overflow-hidden mb-3 rounded-lg border">
      <div class="p-3">
        <div class="flex flex-col justify-center items-center pt-10 pb-3">
          <nuxt-link :to="`/minitutors/${user.username}`" class="flex relative justify-center items-center p-2 m-auto w-32 bg-gray-100 rounded-full border">
            <v-img
              class="block w-full rounded-full"
              :src="user.avatar || $images.avatar"
              :src-placeholder="$images.avatar"
              :alt="user.username"
            />
          </nuxt-link>
          <span class="text-primary-700 px-2 mt-2 text-sm font-bold bg-gray-100 rounded-full border">{{ user.points }} Point</span>
        </div>
        <h4 class="truncate text-lg font-semibold text-center">
          <nuxt-link :to="`/minitutors/${user.username}`">{{ user.name }}</nuxt-link>
        </h4>
        <div class="truncate mb-3 text-sm font-semibold text-center">
          <span class="info-username"
            ><nuxt-link :to="`/minitutors/${user.username}`"
              >@{{ user.username }}</nuxt-link
            ></span
          >
        </div>
        <div class="text-center">
          <block-follow-toggle v-if="$store.getters.auth" :mid="minitutor.id" />
        </div>
      </div>
      <div class="p-2 bg-gray-100">
        <p class="text-xs font-semibold text-center">Postingan ditulis oleh {{ user.name }}</p>
      </div>
    </div>

    <div v-if="lates.length" class="rounded-lg border">
      <div class="py-4 px-3 border-b">
        <h4 class="text-sm font-semibold leading-none">Lainnya dari {{ user.name }}</h4>
      </div>
      <div>
        <nuxt-link
          v-for="(item, i) in lates"
          :key="i"
          :to="`/${item.type.toLowerCase()}s/${item.slug}`"
          class="first:border-t-0 block py-2 px-3 text-sm border-t hover:bg-gray-100"
        >
          <span class="block text-xs font-semibold leading-none" :class="item.type === 'Article' ? 'text-red-600' : 'text-primary-600'">{{ item.type === 'article' ? 'Artikel' : 'Video' }}</span>
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
    minitutor: {
      type: Object,
      default: () => ({}),
    },
    lates: {
      type: Array,
      default: () => [],
    },
  }
}
</script>
