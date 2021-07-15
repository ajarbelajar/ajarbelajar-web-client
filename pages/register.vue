<template>
  <div class="pt-5">
    <h1 class="title has-text-centered is-uppercase">Buat akun baru</h1>
    <div v-if="!!errors.message" class="notification is-danger has-text-centered">
      {{ errors.message }}
    </div>
    <form @submit.prevent="submit(form)">
      <b-field label="Nama" label-position="inside" :type="errors.name && 'is-danger'" :message="errors.name">
        <b-input v-model="form.name" name="name" />
      </b-field>
      <b-field label="Username" label-position="inside" :type="errors.username && 'is-danger'" :message="errors.username">
        <b-input v-model="form.username" name="username" />
      </b-field>
      <b-field label="Email" label-position="inside" :type="errors.email && 'is-danger'" :message="errors.email">
        <b-input v-model="form.email" name="email" />
      </b-field>
      <b-field label="Password" label-position="inside" :type="errors.password && 'is-danger'" :message="errors.password">
        <b-input v-model="form.password" type="password" password-reveal name="password" />
      </b-field>
      <b-field>
        <b-button native-type="submit" class="is-uppercase" type="is-primary" :loading="loading" expanded>Daftar</b-button>
      </b-field>
    </form>
  </div>
</template>
<script>
const Cookie = process.client ? require('js-cookie') : undefined

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
      errors: {
        name: '',
        username: '',
        email: '',
        password: '',
        message: '',
      },
      loading: false,
    }
  },
  methods: {
    async submit(data) {
      this.loading = true
      this.errors = {
        name: '',
        username: '',
        email: '',
        password: '',
        message: '',
      }
      try {
        const { auth, token } = await this.$axios.$post('auth/register', data)
        this.$store.commit('setToken', token)
        this.$store.commit('setAuth', auth)
        Cookie.set('api-token', token, { expires: 7 })
        // this.$store.dispatch('notification/listen')
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
