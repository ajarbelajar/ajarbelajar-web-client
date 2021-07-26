<template>
  <form class="grid relative md:grid-cols-3 md:gap-4" @submit.prevent>
    <div class="order-last md:order-1 md:col-span-2">
      <div class="mb-3 rounded-lg border">
        <div class="py-4 px-3 border-b">
          <h3 class="font-semibold leading-none">Video</h3>
        </div>
        <block-video-uploader :video="post.video" :pid="post.id" @update="onVideoUpdate" />
      </div>
    </div>
    <div class="order-2">
      <div class="mb-3 rounded-lg border">
        <div class="py-4 px-3 border-b">
          <h3 class="font-semibold leading-none">Cover</h3>
        </div>
        <block-hero-uploader :hero="post.hero" :pid="post.id" type="Video" @updated="onHeroUpdated"  />
      </div>
      <div class="mb-3 rounded-lg border">
        <div class="py-4 px-3 border-b">
          <h3 class="font-semibold leading-none">Informasi</h3>
        </div>
        <div class="p-3">
          <div class="block">
            <p class="text-sm">Kategori</p>
            <form-category-suggest v-model="form.category" minimal :error="errors.category"  />
          </div>
          <div class="block">
            <p class="text-sm">Judul</p>
            <form-input v-model="form.title" minimal :error="errors.title"/>
          </div>
          <div class="block">
            <p class="text-sm">Deskripsi</p>
            <form-textarea v-model="form.description" minimal :error="errors.description" />
          </div>
          <div class="block">
            <label class="block py-2 text-sm text-gray-600">
              <input v-model="form.requested" type="checkbox" class="rounded border-gray-300" />
              Publikasikan video ini
            </label>
          </div>
        </div>
        <div class="flex p-3 border-t">
          <form-button class="block w-24" type="button" :loading="loading" @click="submit(form)">Simpan</form-button>
          <form-button light tag="nuxt-link" to="." class="block ml-3 w-24">Kembali</form-button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>

const initialError = {
  title: '',
  description: '',
  category: '',
  requested: '',
}

export default {
  name: 'EditVideo',
  beforeRouteLeave (to, from, next) {
    this.$toast.confirm.danger(
      () => next(),
      null,
      { message: 'Anda yakin ingin meniggalkan halaman ini?' }
    )
  },
  async asyncData({ params, error, $axios }) {
    try {
      const post = await $axios.$get('minitutor/request-videos/' + params.id)
      return {
        post,
        form: {
          title: post.title,
          description: post.description,
          category: post.category ? post.category.name : '',
          requested: !!post.requested_at,
        },
        errors: initialError,
        loading: false
      }
    } catch (e) {
      error(e)
    }
  },
  computed: {
    index() {
      const index = []
      if (this.videos) {
        this.videos.forEach((el) => {
          index.push(el.id)
        })
      }
      return index.join('|')
    },
    dragOptions() {
      return {
        animation: 200,
        disabled: false,
        ghostClass: 'ghost',
      }
    },
  },
  // mounted() {
  //   window.addEventListener("beforeunload", this.beforeUnload)
  // },
  // destroyed() {
  //   window.removeEventListener("beforeunload", this.beforeUnload)
  // },
  methods: {
    onHeroUpdated(hero) {
      this.post = {
        ...this.post,
        hero
      }
    },
    onVideoUpdate(video) {
      this.post = {
        ...this.post,
        video
      }
    },
    async submit(data) {
      this.loading = true
      try {
        this.post = await this.$axios.$put(`/minitutor/request-videos/${this.post.id}`, data)
        this.form = {
          title: this.post.title,
          description: this.post.description,
          category: this.post.category ? this.post.category.name : '',
          requested: !!this.post.requested_at,
        }
        this.$toast.success('Video telah diperbarui.')
        this.errors = { ...initialError }
      } catch (e) {
        const { errors, message } = this.$errorResponse(e)
        this.errors = {
          ...initialError,
          ...errors,
        }
        if (message) {
          this.$toast.danger(message)
        }
        if (!Object.keys(errors).length && !message) {
          this.$toast.danger(this.$errorMessage(e))
        }
      }
      this.loading = false
    },

    beforeUnload(e) {
        const confirmationMessage = 'It looks like you have been editing something. ' + 'If you leave before saving, your changes will be lost.';
        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage
    }
  }
}
</script>
