<template>
  <div class="pt-5">
    <h1 class="title has-text-centered is-uppercase">Atur ulang password</h1>
    <div v-if="errors.token || errors.message" class="notification is-danger has-text-centered">
      {{ errors.token || errors.message}}
    </div>
    <form @submit.prevent="submit(form)">
      <b-field label="Email" label-position="inside" :type="errors.email && 'is-danger'" :message="errors.email">
        <b-input v-model="form.email" name="identity" />
      </b-field>
      <b-field label="Password baru" label-position="inside" :type="errors.password && 'is-danger'" :message="errors.password">
        <b-input v-model="form.password" type="password" password-reveal name="password" />
      </b-field>
      <b-field>
        <b-button native-type="submit" class="is-uppercase" type="is-primary" :loading="loading" expanded>Ubah password</b-button>
      </b-field>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ResetPasswordPage',
  layout: 'auth',
  middleware: 'guest',
  async asyncData({ query, $axios, error, app }) {
    const token = query.token || ''
    const email = query.email || ''
    try {
      await $axios.$get(`auth/password?token=${token}&email=${email}`)
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
      errors: {
        token: '',
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
        token: '',
        email: '',
        password: '',
        message: '',
      }
      try {
        await this.$axios.$put('auth/password', data)
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
