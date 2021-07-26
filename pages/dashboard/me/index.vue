<template>
  <div class="py-3">
    <nuxt-link v-for="activity in activities" :key="activity.id" :to="`/${activity.post.type}s/${activity.post.slug}`"  class="mb-3 hover:shadow items-center rounded-lg border p-3 flex">
      <div class="w-16 md:w-24">
        <v-img class="block w-full rounded-lg" :src="activity.post.hero.thumb || $images.hero.thumb" :src-placeholder="$images.hero.thumb" :alt="activity.post.title" />
      </div>
      <div class="pl-3">
        <p class="text-primary-700 text-xs leading-none font-semibold">
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
