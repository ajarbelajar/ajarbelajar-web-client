<template>
  <div class="panel">
    <form class="panel-body" @submit.prevent="submit(form)">
      <h3 class="mt-10 mt-md-0">Feedback konstruktif</h3>
      <p class="mb-35">
        Feedback akan kami teruskan langsung ke MiniTutor, tidak akan
        ditampilkan ke publik, feedback kamu sangat berharga untuk kemajuan
        konten MiniTutor kedepannya.
      </p>
      <div class="row">
        <div class="col-lg-6">
          <app-input
            v-model="form.understand"
            :select="['1', '2', '3', '4', '5']"
            placeholder="Tingkat pemahaman kamu"
            :error="errors.understand"
          />
        </div>
        <div class="col-lg-6">
          <app-input
            v-model="form.inspiring"
            :select="['1', '2', '3', '4', '5']"
            placeholder="Inspiratif"
            :error="errors.inspiring"
          />
        </div>
        <div class="col-lg-6">
          <app-input
            v-model="form.language_style"
            :select="['1', '2', '3', '4', '5']"
            placeholder="Bahasa dan gaya penyampaian konten"
            :error="errors.language_style"
          />
        </div>
        <div class="col-lg-6">
          <app-input
            v-model="form.content_flow"
            :select="['1', '2', '3', '4', '5']"
            placeholder="Alur penyampaian konten"
            :error="errors.content_flow"
          />
        </div>
      </div>
      <app-input
        v-model="form.message"
        textarea
        placeholder="Tuliskan pesan untuk MiniTutor"
        :error="errors.message"
      />

      <div class="form-group">
        <div class="checkbox-custom checkbox-primary">
          <input
            id="sync_with_me-check"
            v-model="form.sync_with_me"
            type="checkbox"
          />
          <label for="sync_with_me-check"
            >Apakah bidangmu berkaitan dengan topik diatas?</label
          >
        </div>
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-primary">Kirim</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      loading: false,
      form: {
        understand: '',
        inspiring: '',
        language_style: '',
        content_flow: '',
        message: '',
        sync_with_me: false,
      },
      errors: {
        understand: '',
        inspiring: '',
        language_style: '',
        content_flow: '',
        message: '',
        sync_with_me: '',
      },
    }
  },

  methods: {
    async submit(form) {
      this.loading = true
      this.errors = {
        understand: '',
        inspiring: '',
        language_style: '',
        content_flow: '',
        message: '',
        sync_with_me: '',
      }
      try {
        await this.$axios.$post(this.url, form)
        this.form = { body: '' }
        this.$toast.success('Feedback anda telah terkirim.')
        this.$emit('close')
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
