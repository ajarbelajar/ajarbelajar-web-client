<template>
  <div class="container-fluid">
    <div class="panel">
      <div class="panel-body bg-light py-4">
        <h2 class="text-center">
          Input Sesuai Data Diri Anda.
        </h2>
        <p class="text-center">
          Nama, Alamat Email, Media Sosial dan Foto secara otomatis ikut dalam
          formulir Anda sesuai dengan profil akun Anda.
        </p>
        <center>
          <a
            download
            target="_blank"
            href="https://www.ajarbelajar.com/pdf/SOP-Pembuatan-Konten-AjarBelajar-2020.pdf"
            class="btn btn-primary"
            >Download SOP Pembuatan Konten AjarBelajar</a
          >
        </center>
      </div>
      <div class="panel-body">
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
        />
        <app-input
          v-model="form.majors"
          placeholder="Jurusan"
          :error="errors.majors"
        />
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
        <div class="form-group">
          <label for="inputcv">Curriculum Vitae (CV)</label>
          <label
            for="inputcv"
            class="form-control"
            :class="{ 'is-invalid': !!errors.cv }"
          >
            {{ cvlabel || 'Pilih file : *.pdf' }}
          </label>
          <span class="invalid-feedback"
            ><strong>{{ errors.cv }}</strong></span
          >
          <input
            id="inputcv"
            class="d-none"
            type="file"
            accept=".pdf"
            @change="handleChangeInput"
          />
        </div>
        <div class="form-group mt-4">
          <button
            class="btn btn-primary btn-wide"
            :disabled="loading"
            @click.prevent="submit"
          >
            {{ loading ? 'Mohon tunggu' : 'Kirim data' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormData from 'form-data'
export default {
  middleware: 'authenticatedNext',
  async asyncData({ $axios, error }) {
    try {
      const { allowCreate } = await $axios.$get('/join-minitutor/status')
      if (!allowCreate) {
        return error({
          statusCode: 403,
          message:
            'Anda telah mengajukan permintaan untuk menjadi seorang minitutor',
        })
      }
    } catch (e) {}
    return {}
  },
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
        cv: null,
      },
      cvlabel: '',
      errors: {
        last_education: '',
        university: '',
        city_and_country_of_study: '',
        majors: '',
        interest_talent: '',
        contact: '',
        reason: '',
        expectation: '',
        cv: '',
      },
      loading: false,
    }
  },
  methods: {
    handleChangeInput(e) {
      if (e.target.files.length) {
        this.cvlabel = e.target.files[0].name
        this.form.cv = e.target.files[0]
      } else {
        this.cvlabel = ''
        this.form.cv = null
      }
    },
    generateData() {
      const form = new FormData()
      for (const i in this.form) {
        form.append(i, this.form[i])
      }
      return form
    },
    async submit() {
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
        cv: '',
      }
      try {
        await this.$axios.$post('/join-minitutor', this.generateData())
        this.$toast.success(
          'Permintaan anda untuk menjadi MiniTutor telah dibuat. Jangan lupa kirim konten pertama kamu ke email support@ajarbelajar.com sebagai syarat diterimanya jadi MiniTutor!'
        )
        this.$router.push('/join-minitutor')
      } catch (e) {
        const error = this.$errorResponse(e)
        if (error.message) {
          this.$toast.error(error.message)
        }
        this.errors = {
          ...this.errors,
          ...error.errors,
        }
      }
      this.loading = false
    },
  },
}
</script>
