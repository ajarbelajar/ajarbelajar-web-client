<template>
  <div class="py-3">
    <nuxt-link v-for="activity in activities" :key="activity.id" :to="`/${activity.post.type}s/${activity.post.slug}`"  class="flex p-3 mb-3 bg-white rounded shadow hover:shadow-lg">
      <div class="w-16 md:w-24">
        <v-img class="block w-full rounded" :src="activity.post.hero.thumb || $images.hero.thumb" :src-placeholder="$images.hero.thumb" :alt="activity.post.title" />
      </div>
      <div class="flex-1 pl-3 my-auto">
        <p class="text-primary-700 text-xs font-semibold leading-none">
          {{ activity.updated_at | moment('from', 'now') }}
          -
          {{
            activity.post.type === 'article'
              ? 'Kamu membaca artikel'
              : 'Kamu menonton video'
          }}
        </p>
        <h3 class="font-semibold">{{ activity.post.title }}</h3>
      </div>
    </nuxt-link>
    <block-blank v-if="!activities.length" text="Anda belum memiliki Aktifitas." />
  </div>
</template>

<script>
export default {
  name: 'Activities',
  async asyncData({ error, $axios }) {
    try {
      const activities = await $axios.$get('/account/activities')
      return { activities }
    } catch (e) {
      return error(e)
    }
  },
}
</script>
