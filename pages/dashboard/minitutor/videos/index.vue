<template>
  <div>
    <FadeTransition>
      <modal-create-post v-if="openModalCreate" type="Video" @close="openModalCreate = false" />
    </FadeTransition>
    <div class="p-3 mb-3 rounded-lg border lg:p-5">
      <div class="flex items-center pb-3 md:pb-0">
        <div class="flex-1">
          <h3 class="mb-2 text-xl font-semibold leading-none">Video</h3>
        </div>
        <div>
          <button class="hover:bg-primary-600 bg-primary-500 flex justify-center items-center px-4 h-9 text-sm font-semibold leading-none text-white rounded-full" @click="openModalCreate = true">
            <span class="block pr-2">
              <i class="ft ft-plus-circle"></i>
            </span>
            <span class="block">Buat Video</span>
          </button>
        </div>
      </div>
      <p class="mb-2 text-sm text-gray-500">Ini adalah daftar Video kamu yang belum di publikasikan.</p>
      <p class="text-sm text-gray-500">Video yang di tandai dengan warna <span class="bg-primary-600 inline-block p-1"> </span> adalah Video yang telah anda publikasikan dan akan segerah ditinjau.</p>
    </div>
    <block-request-post-list v-for="post in posts" :key="post.id" :post="post" type="Video" @destroyed="onDestroyed" />
    <block-blank v-if="!posts.length" text="Belum ada Video.">
      <form-button type="button" @click="openModalCreate = true">Buat Video</form-button>
    </block-blank>
  </div>
</template>

<script>
import { FadeTransition } from 'vue2-transitions'
export default {
  name: 'MinitutorVideos',
  components: {
    FadeTransition
  },
  async asyncData({ error, $axios }) {
    try {
      return {
        posts: await $axios.$get('minitutor/request-videos')
      }
    } catch(e) {
      error(e)
    }
  },
  data() {
    return {
      openModalCreate: false
    }
  },
  methods: {
    onDestroyed(id) {
      const temp = [...this.posts]
      this.posts = temp.filter(el => el.id !== id)
    }
  }
}
</script>
