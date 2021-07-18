<template>
  <form @submit.prevent="submit(form)">
    <h1 class="mt-14 mb-8 text-4xl font-light text-center text-gray-700">
      Buat akun baru
    </h1>
    <t-alert v-if="!!errors.message" class="mb-5" variant="error" show>{{ errors.message }}</t-alert>
    <auth-input v-model="form.name" placeholder="Nama" name="name" :error="errors.name"/>
    <auth-input v-model="form.username" placeholder="Username" name="username" :error="errors.username"/>
    <auth-input v-model="form.email" placeholder="Email" name="email" :error="errors.email"/>
    <auth-input v-model="form.password" placeholder="Password" password name="password" :error="errors.password" />
    <div class="py-3 text-center">
      <auth-button :loading="loading" class="hover:bg-primary-700 btn-action bg-primary-600 block w-6/12 font-bold tracking-widest text-white uppercase">Daftar</auth-button>
    </div>
  </form>
</template>

<script>
const initialError = {
  name: '',
  username: '',
  email: '',
  password: '',
  message: '',
}

export default {
  name: 'RegisterPage',
  layout: 'auth',
    middleware: 'guest',
    data() {
    return {
      form: {
        name: '',
        username: '',
        email: '',
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
        await this.$store.dispatch('auth/register', data)
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

<style lang="css" scoped>
  .btn-action:disabled {
    @apply bg-primary-600 cursor-wait;
  }
</style>
