<template>
  <form @submit.prevent="submit(form)">
    <h1 class="mt-14 mb-8 text-4xl font-light text-center text-gray-700">
      Masuk ke akun anda
    </h1>
    <t-alert v-if="!!errors.message" class="mb-5" variant="error" show>{{ errors.message }}</t-alert>
    <form-input v-model="form.identity" placeholder="Email atau Username" name="identity" :error="errors.identity || errors.email || errors.username"/>
    <form-input v-model="form.password" placeholder="Password" password name="password" :error="errors.password" />
    <div class="py-3 text-center">
      <form-button :loading="loading" class="block w-6/12 uppercase">Masuk</form-button>
    </div>
    <div class="text-center">
      <nuxt-link to="/password/forget" class="hover:text-primary-700 text-primary-600 font-semibold">Lupa Password?</nuxt-link>
    </div>
  </form>
</template>

<script>
const initialError = {
  identity: '',
  email: '',
  username: '',
  password: '',
  message: ''
}

export default {
  name: 'LoginPage',
  layout: 'auth',
    middleware: 'guest',
    data() {
    return {
      form: {
        identity: '',
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
        await this.$store.dispatch('auth/login', data)
        this.redirect()
      } catch (e) {
        data = this.$errorResponse(e)
        this.errors = { ...this.errors, ...data.errors, message: data.message }
      }
      this.loading = false
    },
    redirect() {
      if (this.$route.query.next) {
        return this.$router.push(this.$route.query.next)
      }
      return this.$router.push('/home')
    },
  },
}
</script>
