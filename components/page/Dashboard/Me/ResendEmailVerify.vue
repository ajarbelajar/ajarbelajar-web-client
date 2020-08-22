<template>
  <div v-if="!$auth.email_verified_at" class="container-fluid">
    <div class="alert alert-warning text-center shadow-sm mb-2">
      Alamat Email Anda belum di Verifikasi. silahkan cek email anda kemudian
      klik link Verifikasinya, <br />
      Jika anda belum menerima email Verifikasinya silahkan klik
      <button
        class="btn btn-link p-0"
        :disabled="loading"
        @click.prevent="resend"
      >
        {{ loading ? 'Sedang diproses' : 'Disini' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    async resend() {
      this.loading = true
      try {
        await this.$axios.$get('/email/resend')
        this.$toast.success(
          'Tautan verifikasi baru telah dikirim ke Alamat Email Anda. Silahkan cek email anda.'
        )
      } catch (e) {
        this.$toast.danger(this.$errorMessage(e))
      }
      this.loading = false
    },
  },
}
</script>
