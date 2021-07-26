<template>
  <div class="py-3">
    <div class="grid relative grid-cols-1 gap-4 md:grid-cols-3">
      <div class="md:col-span-2">
        <div class="mb-3 w-full rounded-lg border">
          <article v-if="auth">
            <video :src="videos[index].url" class="block w-full rounded-lg shadow" controls></video>
            <div></div>
            <div class="flex justify-between items-center p-3 bg-gray-100 border-b">
              <div class="flex items-center text-sm text-gray-700">
                <span class="block">{{ playlist.created_at | moment('dddd, Do MMMM YYYY') }}</span>
                <span class="block mx-2 w-px h-3 bg-gray-600"></span>
                <span class="block"><i class="ft ft-eye"></i> {{ playlist.view_count }}</span>
              </div>
              <block-favorite-toggle v-if="auth" :pid="playlist.id" type="Playlist" />
            </div>
            <div class="flex items-center p-3">
              <client-only>
                <star-rating
                  :rating="Number(playlist.rating)"
                  :read-only="true"
                  :increment="0.01"
                  :star-size="14"
                  class="h-3 text-sm leading-none"
                  text-class="mr-1 text-sm h-3 leading-none"
                />
              </client-only>
              <span class="h-3 text-sm leading-none">dari {{ playlist.feedback_count }} Feedback</span>
            </div>
            <div class="p-3">
              <h1 class="text-4xl font-semibold">{{ playlist.title }}</h1>
            </div>
            <div v-if="playlist.category" class="flex px-3">
              <router-link :to="`/categories/${playlist.category.slug}`" class="flex justify-center items-center px-3 h-7 text-xs font-semibold leading-none bg-gray-200 rounded-full border">
                {{ playlist.category.name }}
              </router-link>
            </div>
            <div class="p-3">
              <p>{{ playlist.description }}</p>
            </div>
          </article>
          <block-post-auth-required v-else :post="playlist" />
          <block-feedback
            v-if="auth && !feedback"
            class="p-3 bg-gray-100 border-t"
            :url="`/feedback/playlist/${playlist.id}`"
            @close="feedback = true"
          />
          <block-comment
            class="p-3 border-t"
            :url="`/comments/playlist/${playlist.id}`"
            :comments-count="playlist.comments.length"
            :comments="playlist.comments"
          />
        </div>
      </div>
      <block-post-side-bar
        :user="playlist.user"
        :minitutor="playlist.minitutor"
        :lates="latesPosts"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowPlaylist',
  async asyncData({ store, error, $axios, params, query }) {
    let data = {}
    try {
      data = await $axios.$get(`/playlists/${params.slug}`)
    } catch (e) {
      return error(e)
    }

    data.feedback = false
    if (store.getters.auth) {
      try {
        data.feedback = await $axios.$get(`/feedback/playlist/${data.playlist.id}`)
      } catch (e) {
      }
    }

    data.index = query.index ? Number(query.index) : 0
    return data
  },
  computed: {
    auth() {
      return this.$store.getters.auth
    }
  }
}
</script>
