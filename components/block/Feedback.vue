<template>
  <div class="border-primary-600 p-3 mb-3 bg-white rounded border-b-4 shadow">
    <div class="mb-2 text-2xl font-semibold">Feedback konstruktif</div>
    <div class="mb-4 text-sm text-gray-500">Feedback akan kami teruskan langsung ke MiniTutor, tidak akan ditampilkan ke publik, feedback kamu sangat berharga untuk kemajuan konten MiniTutor kedepannya.</div>
    <form @submit.prevent="submit(form)">
      <label class="block">
        <div class="text-sm">
          Tingkat pemahaman kamu
        </div>
        <form-select v-model="form.understand" name="understand" :error="errors.understand" :options="['1', '2', '3', '4', '5']" />
      </label>
      <label class="block">
        <div class="text-sm">
          Inspiratif
        </div>
        <form-select v-model="form.inspiring" name="inspiring" :error="errors.inspiring" :options="['1', '2', '3', '4', '5']" />
      </label>
      <label class="block">
        <div class="text-sm">
          Bahasa dan gaya penyampaian konten
        </div>
        <form-select v-model="form.language_style" name="language_style" :error="errors.language_style" :options="['1', '2', '3', '4', '5']" />
      </label>
      <label class="block">
        <div class="text-sm">
          Alur penyampaian konten
        </div>
        <form-select v-model="form.content_flow" name="content_flow" :error="errors.content_flow" :options="['1', '2', '3', '4', '5']" />
      </label>
      <label class="block">
        <div class="text-sm">
          Tuliskan pesan untuk MiniTutor
        </div>
        <form-textarea v-model="form.message" name="message" :error="errors.message"  />
      </label>
      <div class="block">
        <label class="block py-2 text-sm">
          <input v-model="form.sync_with_me" type="checkbox" name="sync_with_me" class="rounded border-gray-300 shadow" />
          Apakah bidangmu berkaitan dengan topik diatas?
        </label>
      </div>
      <div class="block pt-3">
        <form-button class="block w-24" :loading="loading">Kirim</form-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Feedback',
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
