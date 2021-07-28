<template>
  <form @submit.prevent="submit(form)">
    <h1 class="mt-14 mb-8 text-4xl font-light text-center text-gray-700">
      Masuk ke akun anda
    </h1>
    <div v-if="!!errors.message" class="flex relative items-center p-4 mb-5 bg-red-50 rounded border-l-4 border-red-500 shadow-sm">
      <div class="flex-grow text-red-700">{{ errors.message }}</div>
    </div>
    <form-input v-model="form.email" placeholder="Email" name="email" :error="errors.email"/>
    <form-input v-model="form.password" placeholder="Password baru" password name="password" :error="errors.password" />
    <div class="py-3 text-center">
      <form-button :loading="loading" class="block w-6/12 uppercase">Simpan</form-button>
    </div>
  </form>
</template>

<script>
const initialError = {
  token: '',
  email: '',
  password: '',
  message: '',
}

export default {
  name: 'LoginPage',
  layout: 'auth',
  middleware: 'guest',
  async asyncData({ query, app, store, error }) {
    const token = query.token || ''
    const email = query.email || ''
    try {
      await store.dispatch(`auth/checkResetPasswordToken`, { token, email })
    } catch (e) {
      let message = e.message
      if (e.response && e.response.data && e.response.data.message) {
        message = e.response.data.message
      }
      return error({ statusCode: 401, message })
    }
    return {
      form: {
        token,
        email,
        password: '',
      },
      errors: initialError,
      loading: false,
    }
  },
  methods: {
    async submit(data) {
      this.loading = true
      this.errors = initialError
      try {
        await this.$store.dispatch('auth/resetPassword', data)
        this.redirect()
      } catch (e) {
        data = this.$errorResponse(e)
        this.errors = { ...this.errors, ...data.errors, message: data.message }
      }
      this.loading = false
    },
    redirect() {
      setTimeout(() => {
        this.$toast.success('Password berhasil diubah, silahkan masuk.')
      }, 200)
      return this.$router.push('/login')
    },
  },
}
</script>
