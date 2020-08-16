<template>
  <div>
    <h3 class="text-uppercase text-center font-weight-bold text-secondary">
      Buat akun baru
    </h3>
    <div
      v-if="!!errors.message"
      class="alert alert-danger dark font-weight-bold text-center"
    >
      {{ errors.message }}
    </div>
    <form method="POST" class="row mt-4" @submit.prevent="register(form)">
      <div class="col-12">
        <app-input
          v-model="form.name"
          type="text"
          :error="errors.name"
          :label="false"
          placeholder="Nama"
        />
      </div>

      <div class="col-12">
        <app-input
          v-model="form.username"
          type="text"
          :error="errors.username"
          :label="false"
          placeholder="Username"
        />
      </div>

      <div class="col-12">
        <app-input
          v-model="form.email"
          type="text"
          :error="errors.email"
          :label="false"
          placeholder="Alamat Email"
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
            {{ loading ? 'MOHON TUNGGU' : 'DAFTAR' }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  layout: 'auth',
  middleware: 'notAuthenticated',
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
    async register(data) {
      this.loading = true
      this.errors = {
        name: '',
        username: '',
        email: '',
        password: '',
        message: '',
      }
      try {
        const user = await this.$axios.$post('/register', data)
        this.$store.commit('setAuth', user)
        Cookie.set('api-token', user.apiToken, { expires: 7 })
        this.redirect()
      } catch (e) {
        data = this.$errorResponse(e)
        this.errors = { ...this.errors, ...data.errors, message: data.message }
      }
      this.loading = false
    },
    redirect() {
      setTimeout(() => {
        this.$toast.success(
          'Register berhasil, silahkan cek email verifikasi yang telah kami kirimkan.'
        )
      }, 500)
      if (this.$route.query.next) {
        return this.$router.push(this.$route.query.next)
      }
      return this.$router.push('/')
    },
  },
}
</script>
