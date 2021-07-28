<template>
<div class="p-3">
  <form class="grid relative md:grid-cols-3 md:gap-4" @submit.prevent="submit(form)">
    <div class="order-last md:order-1 md:col-span-2">
      <div class="bg-white rounded shadow" style="min-height: 300px">
        <div class="py-4 px-3 border-b">
          <h3 class="font-semibold leading-none">Kontent</h3>
        </div>
        <div class="p-3">
          <client-only>
            <editorjs v-model="form.body" :upload-url="`/minitutor/request-articles/${post.id}/image`" />
          </client-only>
        </div>
      </div>
    </div>
    <div class="order-2">
      <div class="mb-3 bg-white rounded shadow">
        <div class="py-4 px-3 border-b">
          <h3 class="font-semibold leading-none">Cover</h3>
        </div>
        <elements-hero-uploader :hero="post.hero" :pid="post.id" type="Article" @updated="onHeroUpdated"  />
      </div>
      <div class="mb-3 bg-white rounded shadow">
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
              Publikasikan artikel ini
            </label>
          </div>
        </div>
        <div class="flex p-3 border-t">
          <form-button class="block w-24" :loading="loading">Simpan</form-button>
          <form-button light tag="nuxt-link" to="." class="block ml-3 w-24">Kembali</form-button>
        </div>
      </div>
    </div>
  </form>
</div>
</template>

<script>
const initialError = {
  title: '',
  description: '',
  body: '',
  category: '',
  requested: '',
}

export default {
  name: 'EditArticle',
  beforeRouteLeave (to, from, next) {
    this.$toast.confirm.danger(
      () => next(),
      null,
      { message: 'Anda yakin ingin meniggalkan halaman ini?' }
    )
  },
  async asyncData({ params, error, $axios }) {
    try {
      const post = await $axios.$get('minitutor/request-articles/' + params.id)
      return {
        post,
        form: {
          title: post.title,
          description: post.description,
          body: post.body,
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
  mounted() {
    window.addEventListener("beforeunload", this.beforeUnload)
  },
  destroyed() {
    window.removeEventListener("beforeunload", this.beforeUnload)
  },
  methods: {
    onHeroUpdated(hero) {
      this.post = {
        ...this.post,
        hero
      }
    },
    async submit(data) {
      this.loading = true
      try {
        this.post = await this.$axios.$put(`/minitutor/request-articles/${this.post.id}`, data)
        this.form = {
          title: this.post.title,
          description: this.post.description,
          body: this.post.body,
          category: this.post.category ? this.post.category.name : '',
          requested: !!this.post.requested_at,
        }
        this.$toast.success('article telah diperbarui.')
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
