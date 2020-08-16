<template>
  <div>
    <h3 class="text-uppercase text-center font-weight-bold text-secondary">
      Lupa Password
    </h3>
    <div
      v-if="!!success"
      class="alert alert-success dark font-weight-bold text-center"
    >
      {{ success }}
    </div>
    <div
      v-if="!!errors.message"
      class="alert alert-danger dark font-weight-bold text-center"
    >
      {{ errors.message }}
    </div>
    <form method="POST" class="row mt-4" @submit.prevent="register(form)">
      <div class="col-12">
        <app-input
          v-model="form.email"
          type="text"
          :error="errors.email"
          :label="false"
          placeholder="Alamat Email"
        />
      </div>

      <div class="col-12">
        <div class="form-group">
          <button
            type="submit"
            class="btn btn-primary font-weight-bold btn-block"
            :disabled="loading"
          >
            {{
              loading
                ? 'MOHON TUNGGU'
                : 'KIRIM TAUTAN PENGATURAN ULANG PASSWORD'
            }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  middleware: 'notAuthenticated',
  data() {
    return {
      form: {
        email: '',
      },
      success: '',
      errors: {
        email: '',
        message: '',
      },
      loading: false,
    }
  },
  methods: {
    async register(data) {
      this.loading = true
      this.success = ''
      this.errors = {
        email: '',
        message: '',
      }
      try {
        await this.$axios.$post('/password/reset', data)
        this.success =
          'Kami sudah mengirim Email yang berisi tautan untuk mereset Password Anda!'
      } catch (e) {
        data = this.$errorResponse(e)
        this.errors = { ...this.errors, ...data.errors, message: data.message }
      }
      this.loading = false
    },
  },
}
</script>
