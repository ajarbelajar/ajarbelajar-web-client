<template>
  <form @submit.prevent="submit(form)">
    <h1 class="mt-14 mb-8 text-4xl font-light text-center text-gray-700">
      Lupa Password
    </h1>
    <t-alert v-if="!!errors.message" class="mb-5" variant="error" show>{{ errors.message }}</t-alert>
    <t-alert v-if="!!success" class="mb-5" show>{{ success }}</t-alert>
    <form-input v-model="form.email" placeholder="Email" name="email" :error="errors.email"/>
    <div class="py-3 text-center">
      <form-button :loading="loading" class="block w-6/12 uppercase">
        Kirim
      </form-button>
    </div>
    <div class="text-center">
      <nuxt-link to="/login" class="hover:text-primary-700 text-primary-600 font-semibold">Masuk</nuxt-link>
    </div>
  </form>
</template>

<script>
const initialError = {
  email: '',
  message: '',
}

export default {
  name: 'ForgetPasswordPage',
  layout: 'auth',
    middleware: 'guest',
    data() {
    return {
      form: {
        email: '',
      },
      errors: initialError,
      success: '',
      loading: false,
    }
  },
  methods: {
    async submit(data) {
      this.loading = true
      this.errors = initialError
      try {
        await this.$store.dispatch('auth/forgetPassword', data)
        this.success = 'Kami telah mengirim Email yang berisi tautan untuk mereset Password Anda!'
      } catch (e) {
        data = this.$errorResponse(e)
        this.errors = { ...this.errors, ...data.errors, message: data.message }
      }
      this.loading = false
    },
  },
}
</script>
