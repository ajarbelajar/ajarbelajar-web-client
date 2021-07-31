<template>
  <form @submit.prevent="submit(form)">
    <h1 class="mt-14 mb-8 text-4xl font-light text-center text-gray-700">
      Lupa Password
    </h1>
    <div v-if="!!errors.message" class="flex relative items-center p-4 mb-5 bg-red-50 rounded border-l-4 border-red-500 shadow-sm">
      <div class="flex-grow text-red-700">{{ errors.message }}</div>
    </div>
    <div v-if="!!success" class="bg-primary-50 border-primary-500 flex relative items-center p-4 mb-5 rounded border-l-4 shadow-sm">
      <div class="text-primary-700 flex-grow">{{ success }}</div>
    </div>
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
  head: {
    title: 'Lupa Password'
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
