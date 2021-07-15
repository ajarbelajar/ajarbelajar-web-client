<template>
  <div class="pt-5">
    <h1 class="title has-text-centered is-uppercase">Lupa Password</h1>
    <div v-if="!!success" class="notification is-primary has-text-centered">
      {{ success }}
    </div>
    <div v-if="!!errors.message" class="notification is-danger has-text-centered">
      {{ errors.message }}
    </div>
    <form @submit.prevent="submit(form)">
      <b-field label="Alamat Email" label-position="inside" :type="errors.email && 'is-danger'" :message="errors.email">
        <b-input v-model="form.email" name="email" />
      </b-field>
      <b-field>
        <b-button native-type="submit" class="is-uppercase" type="is-primary" :loading="loading" expanded>Kirim tautan pengaturan ulang password</b-button>
      </b-field>
    </form>
  </div>
</template>
<script>

export default {
  name: 'ForgetPasswordPage',
  layout: 'auth',
  middleware: 'guest',
    data() {
    return {
      form: {
        email: '',
      },
      success: '',
      errors: {
        email: '',
        message: '',
      },
      loading: false,
    }
  },
  methods: {
    async submit(data) {
      this.loading = true
      this.success = ''
      this.errors = {
        email: '',
        message: '',
      }
      try {
        await this.$axios.$post('auth/password', data)
        this.success = 'Kami telah mengirim Email yang berisi tautan untuk mereset Password Anda!'
      } catch (e) {
        data = this.$errorResponse(e)
        this.errors = { ...this.errors, ...data.errors, message: data.message }
      }
      this.loading = false
    },
  },
}
</script>
