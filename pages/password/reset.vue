<template>
  <form @submit.prevent="submit(form)">
    <h1 class="mt-14 mb-8 text-4xl font-light text-center text-gray-700">
      Masuk ke akun anda
    </h1>
    <t-alert v-if="!!errors.message" class="mb-5" variant="error" show>{{ errors.message }}</t-alert>
    <auth-input v-model="form.email" placeholder="Email" name="email" :error="errors.email"/>
    <auth-input v-model="form.password" placeholder="Password baru" password name="password" :error="errors.password" />
    <div class="py-3 text-center">
      <auth-button :loading="loading" class="hover:bg-primary-700 btn-action bg-primary-600 block w-6/12 font-bold tracking-widest text-white uppercase">Simpan</auth-button>
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

<style lang="css" scoped>
  .btn-action:disabled {
    @apply bg-primary-600 cursor-wait;
  }
</style>
