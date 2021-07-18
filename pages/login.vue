<template>
  <div class="pt-5">
    <h1 class="title has-text-centered is-uppercase">Masuk ke akun anda</h1>
    <div v-if="!!errors.message" class="notification is-danger has-text-centered">
      {{ errors.message }}
    </div>
    <form @submit.prevent="submit(form)">
      <b-field label="Email atau Username" label-position="inside" :type="(errors.identity || errors.email || errors.username) && 'is-danger'" :message="errors.identity || errors.email || errors.username">
        <b-input v-model="form.identity" name="identity" />
      </b-field>
      <b-field label="Password" class="mb-1" label-position="inside" :type="errors.password && 'is-danger'" :message="errors.password">
        <b-input v-model="form.password" type="password" password-reveal name="password" />
      </b-field>
      <div class="has-text-right">
        <nuxt-link to="/password/forget">Lupa password?</nuxt-link>
      </div>
      <b-field class="mt-3">
        <b-button native-type="submit" class="is-uppercase" type="is-primary" :loading="loading" expanded>Masuk</b-button>
      </b-field>
    </form>
  </div>
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
