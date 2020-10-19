<template>
  <div>
    <h3 class="text-uppercase text-center font-weight-bold text-secondary">
      Masuk ke akun anda
    </h3>
    <div
      v-if="!!errors.message"
      class="alert alert-danger dark font-weight-bold text-center"
    >
      {{ errors.message }}
    </div>
    <form method="POST" class="row mt-4" @submit.prevent="login(form)">
      <div class="col-12">
        <app-input
          v-model="form.identity"
          type="text"
          :error="errors.identity || errors.email || errors.username || ''"
          :label="false"
          placeholder="Alamat Email atau Nama Pengguna"
        />
      </div>

      <div class="col-12">
        <app-input
          v-model="form.password"
          type="password"
          :error="errors.password"
          :label="false"
          placeholder="Password"
        />
      </div>

      <div class="col-12 mt-3">
        <div class="form-group">
          <button
            type="submit"
            class="btn btn-primary font-weight-bold btn-block"
            :disabled="loading"
          >
            {{ loading ? 'MOHON TUNGGU' : 'MASUK' }}
          </button>
          <nuxt-link
            to="/password/email"
            class="btn btn-block mt-2 text-primary"
            >Lupa Kata Sandi?</nuxt-link
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  layout: 'auth',
  middleware: 'guest',
  data() {
    return {
      form: {
        identity: '',
        password: '',
      },
      errors: {
        identity: '',
        email: '',
        username: '',
        password: '',
        message: '',
      },
      loading: false,
    }
  },
  methods: {
    async login(data) {
      this.loading = true
      this.errors = {
        identity: '',
        email: '',
        username: '',
        password: '',
        message: '',
      }
      try {
        const { auth, token } = await this.$axios.$post('/login', data)
        this.$store.commit('setToken', token)
        this.$store.commit('setAuth', auth)
        Cookie.set('api-token', token, { expires: 7 })
        this.$store.dispatch('listenNotification')
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
      return this.$router.push('/')
    },
  },
  head() {
    return this.$seo()
  },
}
</script>
