<template>
  <my-dashboard-wrap>
    <div class="container-fluid mb-2">
      <div class="panel">
        <div class="panel-body">
          <h5 class="h4">Informasi akun</h5>
          <app-input
            v-model="form.username"
            placeholder="Username"
            :error="errors.username"
          />
          <app-input
            v-model="form.email"
            placeholder="Alamat Email"
            :error="errors.email"
          />
          <hr class="my-4" />
          <h5 class="h4">Ubah Password</h5>
          <p>Kosongkan jika tidak ingin diubah.</p>
          <app-input
            v-model="form.new_password"
            placeholder="Password baru"
            :error="errors.new_password"
            type="password"
          />
          <app-input
            v-model="form.password"
            placeholder="Password lama"
            :error="errors.password"
            type="password"
          />
          <hr class="my-4" />
          <h5 class="h4">Profile</h5>
          <app-input
            v-model="form.name"
            placeholder="Nama"
            :error="errors.name"
          />
          <app-input
            v-model="form.about"
            placeholder="Tenatng"
            :error="errors.about"
            textarea
          />
          <app-input
            v-model="form.website_url"
            placeholder="Website"
            :error="errors.website_url"
            help="Contoh: https://ajarbelajar.com"
          />
          <hr class="my-4" />
          <h5 class="h4">Media Sosial</h5>
          <app-input
            v-model="form.facebook_url"
            placeholder="Facebook"
            :error="errors.facebook_url"
            help="Contoh: https://facebook.com/username"
          />
          <app-input
            v-model="form.instagram_url"
            placeholder="Instagram"
            :error="errors.instagram_url"
            help="Contoh: https://instagram.com/username"
          />
          <app-input
            v-model="form.twitter_url"
            placeholder="Twitter"
            :error="errors.twitter_url"
            help="Contoh: https://twitter.com/username"
          />
          <app-input
            v-model="form.youtube_url"
            placeholder="Youtube"
            :error="errors.youtube_url"
            help="Contoh: https://youtube.com/channel/channel_id"
          />
        </div>
        <div class="panel-footer py-3 bg-light">
          <button
            class="btn btn-primary"
            :disabled="loading"
            @click.prevent="handleSubmit(form)"
          >
            {{ loading ? 'Sedang diproses...' : 'Simpan' }}
          </button>
        </div>
      </div>
    </div>
  </my-dashboard-wrap>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      form: {
        username: '',
        email: '',
        new_password: '',
        password: '',
        name: '',
        about: '',
        website_url: '',
        facebook_url: '',
        instagram_url: '',
        twitter_url: '',
        youtube_url: '',
      },
      errors: {
        username: '',
        email: '',
        password: '',
        old_password: '',
        name: '',
        about: '',
        website_url: '',
        facebook_url: '',
        instagram_url: '',
        twitter_url: '',
        youtube_url: '',
      },
      loading: false,
    }
  },

  created() {
    this.form = {
      ...this.form,
      username: this.$auth.username || '',
      email: this.$auth.email || '',
      name: this.$auth.name || '',
      about: this.$auth.about || '',
      website_url: this.$auth.website_url || '',
      facebook_url: this.$auth.facebook_url || '',
      instagram_url: this.$auth.instagram_url || '',
      twitter_url: this.$auth.twitter_url || '',
      youtube_url: this.$auth.youtube_url || '',
    }
  },

  methods: {
    async handleSubmit(form) {
      this.loading = true
      this.errors = {
        username: '',
        email: '',
        password: '',
        old_password: '',
        name: '',
        about: '',
        website_url: '',
        facebook_url: '',
        instagram_url: '',
        twitter_url: '',
        youtube_url: '',
      }
      try {
        await this.$axios.$put('/user', form)
        delete form.password
        delete form.old_password
        const auth = {
          ...this.$auth,
          ...form,
        }
        this.$store.commit('setAuth', auth)
        this.$toast.success('Profile anda telah diupdate.')
      } catch (e) {
        const { errors, message } = this.$errorResponse(e)
        this.errors = {
          ...this.errors,
          ...errors,
        }
        if (message) {
          this.$toast.danger(message)
        }
        if (!Object.keys(errors).length && !message) {
          this.$toast.danger(this.$errorMessage(e))
        }
      }
      this.form = {
        ...this.form,
        password: '',
        new_password: '',
      }
      this.loading = false
    },
  },
  head() {
    return this.$seo()
  },
}
</script>
