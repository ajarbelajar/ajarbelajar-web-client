<template>
  <div class="py-3">
    <form class="p-5 rounded-lg border" method="POST" @submit.prevent="submit(form)">
      <label class="block py-3 md:grid md:grid-cols-3 md:gap-3">
        <div class="text-sm md:text-base">
          Username
        </div>
        <div class="md:col-span-2">
          <form-input v-model="form.username" name="username" :error="errors.username" />
        </div>
      </label>
      <hr class="hidden mb-2 md:block">
      <div class="block py-3 md:grid md:grid-cols-3 md:gap-3">
        <div class="text-sm md:text-base">
          Password
          <p class="mb-1 text-xs">Kosongkan jika tidak ingin diubah.</p>
        </div>
        <div class="md:col-span-2">
          <form-input v-model="form.new_password" placeholder="Password Baru" name="new_password" :error="errors.new_password" />
          <form-input v-model="form.password" placeholder="Password Lama" name="password" :error="errors.password" />
        </div>
      </div>
      <hr class="hidden mb-2 md:block">
      <label class="block py-3 md:grid md:grid-cols-3 md:gap-3">
        <div class="text-sm md:text-base">
          Nama
        </div>
        <div class="md:col-span-2">
          <form-input v-model="form.name" name="name" :error="errors.name" />
        </div>
      </label>
      <hr class="hidden mb-2 md:block">
      <label class="block py-3 md:grid md:grid-cols-3 md:gap-3">
        <div class="text-sm md:text-base">
          Tentang
        </div>
        <div class="md:col-span-2">
          <form-textarea v-model="form.about"  name="about" :error="errors.about" />
        </div>
      </label>
      <hr class="hidden mb-2 md:block">
      <label class="block py-3 md:grid md:grid-cols-3 md:gap-3">
        <div class="text-sm md:text-base">
          Website
        </div>
        <div class="md:col-span-2">
          <form-input v-model="form.website" placeholder="https://www.ajarbeajar.com"  name="website" :error="errors.website"/>
        </div>
      </label>
      <hr class="hidden mb-2 md:block">
      <label class="block py-3 md:grid md:grid-cols-3 md:gap-3">
        <div class="text-sm md:text-base">
          Email Notifikasi
        </div>
        <div class="pb-3 md:col-span-2">
          <input v-model="form.email_notification" type="checkbox" class="rounded border-gray-300" />
        </div>
      </label>
      <hr class="hidden mb-2 md:block">
      <div class="block py-3 md:grid md:grid-cols-3 md:gap-3">
        <div></div>
        <div>
          <form-button class="block w-24" :loading="loading">Simpan</form-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
const initialData = { username: '', new_password: '', password: '', name: '', about: '', website: '', email_notification: '' }
export default {
  name: 'EditInformation',
  data() {
    return {
      errors: { ...initialData },
      loading: false,
      form: { ...initialData }
    }
  },
  created() {
    const auth = this.$store.getters.auth
    this.form = {
      ...initialData,
      username: auth.username,
      name: auth.name,
      about: auth.about,
      website: auth.website,
      email_notification: auth.email_notification,
    }
  },
  methods: {
    async submit(data) {
      this.loading = true
      try {
        await this.$store.dispatch('auth/updateProfile', data)
        this.errors = {...initialData}
        this.$toast.success('Informasi Anda sebagai MiniTutor telah disimpan.')
      } catch (e) {
        this.errors = {...initialData}
        data = this.$errorResponse(e)
        this.errors = { ...this.errors, ...data.errors }
        if(data.message) {
          this.$toast.danger(data.message)
        }
      }
      this.loading = false
    }
  }
}
</script>
