<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">Body</h3>
          </div>
          <div class="panel-body">
            <client-only>
              <editorjs v-model="form.body" :upload-url="uploadUrl" />
            </client-only>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <hero-uploader :post="article" type="Article" @onupdate="updateHero" />
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">Informasi</h3>
          </div>
          <div class="panel-body">
            <categories-autocomplete-input
              v-model="form.category"
              :error="errors.category"
            />
            <app-input
              v-model="form.title"
              placeholder="Judul"
              :error="errors.title"
            />
            <app-input
              v-model="form.description"
              placeholder="Deskripsi"
              :error="errors.description"
              textarea
            />
            <div class="form-group">
              <div class="checkbox-custom checkbox-primary">
                <input
                  id="requested"
                  v-model="form.requested"
                  type="checkbox"
                />
                <label for="requested">Publikasikan Article ini</label>
              </div>
            </div>
            <div class="form-group">
              <button
                :disabled="loading"
                class="btn btn-primary"
                @click="submit(form)"
              >
                {{ loading ? 'Sedang Disimpan' : 'Simpan' }}
              </button>
              <nuxt-link
                to="/dashboard/minitutor/articles"
                class="btn btn-danger"
                >Kembali</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store, error, params }) {
    const articles = store.getters('request_article/articles')
    try {
      await store.dispatch('category/fetch')
    } catch (e) {
      return error(e)
    }
    const data = {}
    articles.forEach((article) => {
      if (article.id === parseInt(params.id)) {
        data.article = article
        data.form = {
          title: article.title,
          description: article.description,
          body: article.body,
          category: article.category ? article.category.name : '',
          requested: !!article.requested_at,
        }
      }
    })
    if (!data.article)
      return error({ statusCode: 404, message: 'article tidak tersedia.' })
    return data
  },
  data() {
    return {
      loading: false,
      errors: {
        title: '',
        description: '',
        body: '',
        category: '',
        requested: '',
      },
    }
  },
  computed: {
    uploadUrl() {
      const url = `/minitutor/request-articles/${this.article.id}/image`
      return url
    },
  },
  methods: {
    updateHero(article) {
      this.article = {
        ...this.article,
        updated_at: article.updated_at,
        hero: article.hero,
      }
      this.$store.commit('request_article/update', article)
    },
    async submit(form) {
      this.loading = true
      this.errors = {
        title: '',
        description: '',
        body: '',
        category: '',
        requested: '',
      }
      try {
        this.article = await this.$axios.$put(
          '/minitutor/request-articles/' + this.article.id,
          form
        )
        this.$store.commit('request_article/update', this.article)
        this.form = {
          title: this.article.title,
          description: this.article.description,
          body: this.article.body,
          category: this.article.category ? this.article.category.name : '',
          requested: !!this.article.requested_at,
        }
        this.$toast.success('article telah diperbarui.')
      } catch (e) {
        const { errors, message } = this.$errorResponse(e)
        this.errors = {
          ...this.errors,
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
  },
}
</script>

<style lang="scss">
.video-lists {
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
  }
}
</style>
