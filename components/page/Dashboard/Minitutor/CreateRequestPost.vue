<template>
  <div class="container-fluid">
    <div v-if="open" class="panel">
      <div class="panel-heading">
        <h3 class="panel-title">Buat {{ type }}</h3>
        <div class="panel-actions">
          <button class="btn btn-danger btn-sm" @click="open = false">
            Batal
          </button>
        </div>
      </div>
      <div class="panel-body">
        <app-input
          v-model="form.title"
          :error="errors.title"
          placeholder="Judul"
        />
        <app-input
          v-model="form.description"
          :error="errors.description"
          placeholder="Deskripsi"
          textarea
        />
      </div>
      <div class="panel-footer py-3 bg-light">
        <button
          class="btn btn-primary"
          :disabled="loading"
          @click.prevent="handleSubmit(form)"
        >
          {{ loading ? 'Sedang diproses...' : 'Buat ' + type }}
        </button>
      </div>
    </div>
    <div v-else class="panel panel-body">
      <button class="btn btn-primary btn-block" @click="open = true">
        Buat {{ type }} Baru
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'Playlist',
    },
  },
  data() {
    return {
      open: false,
      loading: false,
      form: {
        title: '',
        description: '',
      },
      errors: {
        title: '',
        description: '',
      },
    }
  },
  methods: {
    async handleSubmit(form) {
      this.loading = true
      this.errors = {
        title: '',
        description: '',
      }
      const url = `/minitutor/request-${this.type.toLowerCase()}s`
      try {
        const post = await this.$axios.$post(url, form)
        this.$store.commit(`request_${this.type.toLowerCase()}/push`, post)

        this.$toast.success(`Berhasil membuat ${this.type}.`)
        this.$router.push(
          `/dashboard/minitutor/${this.type.toLowerCase()}s/${post.id}`
        )
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
