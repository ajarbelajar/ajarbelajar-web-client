<template>
  <div>
    <h3 class="text-uppercase text-center font-weight-bold text-secondary">
      Atur ulang kata sandi
    </h3>
    <div
      v-if="errors.token || errors.message"
      class="alert alert-danger dark font-weight-bold text-center"
    >
      {{ errors.token || errors.message }}
    </div>
    <form method="POST" class="row mt-4" @submit.prevent="reset(form)">
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
          placeholder="Password Baru"
        />
      </div>

      <div class="col-12">
        <div class="form-group">
          <button
            type="submit"
            class="btn btn-primary font-weight-bold btn-block"
            :disabled="loading"
          >
            {{ loading ? 'MOHON TUNGGU' : 'UBAH PASSWORD' }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  middleware: 'guest',
  async asyncData({ query, $axios, error, app }) {
    const token = query.token || ''
    const email = query.email || ''
    try {
      await $axios.$get(`password/reset?token=${token}&email=${email}`)
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
    async reset(data) {
      this.loading = true
      this.errors = {
        token: '',
        email: '',
        password: '',
        message: '',
      }
      try {
        await this.$axios.$put('/password/reset', data)
        this.redirect()
      } catch (e) {
        data = this.$errorResponse(e)
        this.errors = { ...this.errors, ...data.errors, message: data.message }
      }
      this.loading = false
    },
    redirect() {
      setTimeout(() => {
        this.$toast.success('Password berhasil diubah, silahkan login.')
      }, 200)
      return this.$router.push('/login')
    },
  },
  head() {
    return this.$seo()
  },
}
</script>
