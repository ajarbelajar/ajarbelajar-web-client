<template>
  <minitutor-dashboard-wrap>
    <div class="container-fluid">
      <div class="panel">
        <div class="panel-body">
          <h5 class="h4">Informasi Pendidikan</h5>
          <app-input
            v-model="form.last_education"
            :select="['D1', 'D2', 'D3', 'S1', 'S2', 'S3']"
            placeholder="Pendidikan terakhir"
            :error="errors.last_education"
          />
          <app-input
            v-model="form.university"
            placeholder="Nama Kampus"
            :error="errors.university"
          />
          <app-input
            v-model="form.city_and_country_of_study"
            placeholder="Kota dan Negara Kampus"
            :error="errors.city_and_country_of_study"
            help="Contoh: Jakatarta, Indonesia"
          />
          <app-input
            v-model="form.majors"
            placeholder="Jurusan"
            :error="errors.majors"
          />

          <hr class="my-4" />
          <h5 class="h4">Tentang anda</h5>
          <p>
            <strong>Semua data dibawah, tidak ditampilkan ke publik.</strong>
          </p>
          <app-input
            v-model="form.interest_talent"
            placeholder="Spesialisasi atau minat bakat"
            :error="errors.interest_talent"
          />
          <app-input
            v-model="form.contact"
            placeholder="No.HP (whatsapp only)"
            :error="errors.contact"
          />
          <app-input
            v-model="form.reason"
            placeholder="Apa motivasi kamu ingin bergabung?"
            :error="errors.reason"
            :textarea="true"
          />
          <app-input
            v-model="form.expectation"
            placeholder="Ekspektasi kamu terhadap Ajarbelajar."
            :error="errors.expectation"
            :textarea="true"
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
  </minitutor-dashboard-wrap>
</template>

<script>
export default {
  middleware: ['auth', 'activeMinitutor'],
  data() {
    return {
      form: {
        last_education: '',
        university: '',
        city_and_country_of_study: '',
        majors: '',
        interest_talent: '',
        contact: '',
        reason: '',
        expectation: '',
      },
      errors: {
        last_education: '',
        university: '',
        city_and_country_of_study: '',
        majors: '',
        interest_talent: '',
        contact: '',
        reason: '',
        expectation: '',
      },
      loading: false,
    }
  },

  created() {
    this.form = {
      last_education: this.$auth.minitutor.last_education,
      university: this.$auth.minitutor.university,
      city_and_country_of_study: this.$auth.minitutor.city_and_country_of_study,
      majors: this.$auth.minitutor.majors,
      interest_talent: this.$auth.minitutor.interest_talent,
      contact: this.$auth.minitutor.contact,
      reason: this.$auth.minitutor.reason,
      expectation: this.$auth.minitutor.expectation,
    }
  },

  methods: {
    async handleSubmit(form) {
      this.loading = true
      this.errors = {
        last_education: '',
        university: '',
        city_and_country_of_study: '',
        majors: '',
        interest_talent: '',
        contact: '',
        reason: '',
        expectation: '',
      }
      try {
        const user = await this.$axios.$put('/user/minitutor', form)
        this.$store.commit('setAuth', user)
        this.$toast.success('Profile Anda sebagai MiniTutor telah diupdate.')
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
      this.loading = false
    },
  },
}
</script>
