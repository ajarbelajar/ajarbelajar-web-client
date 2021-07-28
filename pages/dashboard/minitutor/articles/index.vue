<template>
  <div class="p-3">
    <FadeTransition>
      <modal-create-post v-if="openModalCreate" type="Article" @close="openModalCreate = false" />
    </FadeTransition>
    <div class="p-3 mb-3 bg-white rounded shadow lg:p-5">
      <div class="flex items-center pb-3 md:pb-0">
        <div class="flex-1">
          <h3 class="mb-2 text-xl font-semibold leading-none">Artikel</h3>
        </div>
        <div>
          <form-button type="button" @click="openModalCreate = true">
            <span class="block pr-2">
              <i class="ft ft-plus-circle"></i>
            </span>
            Buat Artikel
          </form-button>
        </div>
      </div>
      <p class="mb-2 text-sm text-gray-500">Ini adalah daftar Artikel kamu yang belum di publikasikan.</p>
      <p class="text-sm text-gray-500">Artikel yang di tandai dengan warna <span class="bg-primary-600 inline-block p-1"> </span> adalah Artikel yang telah anda publikasikan dan akan segerah ditinjau.</p>
    </div>
    <elements-request-post-list v-for="post in posts" :key="post.id" :post="post" type="Article" @destroyed="onDestroyed" />
    <block-blank v-if="!posts.length" text="Belum ada Artikel.">
      <form-button type="button" @click="openModalCreate = true">
        <span class="block pr-2">
          <i class="ft ft-plus-circle"></i>
        </span>
        Buat Artikel
      </form-button>
    </block-blank>
  </div>
</template>

<script>
import { FadeTransition } from 'vue2-transitions'
export default {
  name: 'MinitutorArticles',
  components: {
    FadeTransition
  },
  async asyncData({ error, $axios }) {
    try {
      return {
        posts: await $axios.$get('minitutor/request-articles')
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
