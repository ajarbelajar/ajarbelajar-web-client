<template>
  <div class="p-3">
    <div class="overflow-hidden mb-3 bg-cover rounded shadow" :style="`background-image: url(${require('@/assets/img/background/hero.jpg')})`">
      <div class="from-primary-700 p-4 bg-opacity-30 bg-gradient-to-r to-transparent">
        <div class="flex flex-col justify-center items-center py-16 text-center">
          <h1 class="mb-3 text-2xl font-bold text-white md:text-3xl lg:text-4xl">Belajar, Berbagi, Berkontribusi.</h1>
          <p class="max-w-lg text-gray-100 md:text-lg">Pengembangan kemampuan diri dan kualitas pendidikan Indonesia, dimulai dari sini!</p>
        </div>
      </div>
    </div>
    <div v-if="allowCreate"  class="bg-white rounded shadow">
      <div class="py-5 px-3 text-center border-b">
        <h1 class="mb-2 text-2xl font-semibold">Input Sesuai Data Diri Anda.</h1>
        <p class="mb-3 text-sm text-gray-500">Nama, Alamat Email dan Foto secara otomatis ikut dalam formulir Anda sesuai dengan profil akun Anda.</p>
        <a href="#" class="hover:bg-primary-600 bg-primary-500 inline-block py-2 px-4 text-sm text-white rounded">Download SOP Pembuatan Konten AjarBelajar</a>
      </div>
      <form class="p-5">
        <label class="block py-3 md:grid md:grid-cols-3 md:gap-3">
          <div class="text-sm md:text-base">
            Pendidikan terakhir
          </div>
          <div class="md:col-span-2">
            <form-select v-model="form.last_education" name="last_education" :error="errors.last_education" :options="['D1', 'D2', 'D3', 'S1', 'S2', 'S3']" />
          </div>
        </label>
        <hr class="hidden mb-2 md:block">
        <label class="block py-3 md:grid md:grid-cols-3 md:gap-3">
          <div class="text-sm md:text-base">
            Nama Kampus
          </div>
          <div class="md:col-span-2">
            <form-input v-model="form.university" name="university" :error="errors.university" />
          </div>
        </label>
        <hr class="hidden mb-2 md:block">
        <label class="block py-3 md:grid md:grid-cols-3 md:gap-3">
          <div class="text-sm md:text-base">
            Kota dan Negara Kampus
          </div>
          <div class="md:col-span-2">
            <form-input v-model="form.city_and_country_of_study"  name="city_and_country_of_study" :error="errors.city_and_country_of_study" />
          </div>
        </label>
        <hr class="hidden mb-2 md:block">
        <label class="block py-3 md:grid md:grid-cols-3 md:gap-3">
          <div class="text-sm md:text-base">
            Jurusan
          </div>
          <div class="md:col-span-2">
            <form-input v-model="form.majors"  name="majors" :error="errors.majors"/>
          </div>
        </label>
        <hr class="hidden mb-2 md:block">
        <label class="block py-3 md:grid md:grid-cols-3 md:gap-3">
          <div class="text-sm md:text-base">
            interest_talent
          </div>
          <div class="md:col-span-2">
            <form-input v-model="form.interest_talent"  name="interest_talent" :error="errors.interest_talent"/>
          </div>
        </label>
        <hr class="hidden mb-2 md:block">
        <label class="block py-3 md:grid md:grid-cols-3 md:gap-3">
          <div class="text-sm md:text-base">
            Nomor Whatsapp
          </div>
          <div class="md:col-span-2">
            <form-input v-model="form.contact"  name="contact" :error="errors.contact"/>
          </div>
        </label>
        <hr class="hidden mb-2 md:block">
        <label class="block py-3 md:grid md:grid-cols-3 md:gap-3">
          <div class="text-sm md:text-base">
            Apa motivasi kamu ingin bergabung
          </div>
          <div class="md:col-span-2">
            <form-textarea v-model="form.reason"  name="reason" :error="errors.reason"/>
          </div>
        </label>
        <hr class="hidden mb-2 md:block">
        <label class="block py-3 md:grid md:grid-cols-3 md:gap-3">
          <div class="text-sm md:text-base">
            Ekspektasi kamu terhadap Ajarbelajar
          </div>
          <div class="md:col-span-2">
            <form-textarea v-model="form.expectation"  name="expectation" :error="errors.expectation"/>
          </div>
        </label>
        <hr class="hidden mb-2 md:block">
        <div class="block py-3 md:grid md:grid-cols-3 md:gap-3">
          <label for="inputcv" class="block text-sm md:text-base">
            Curriculum Vitae (CV)
          </label>
          <div class="md:col-span-2">
            <label
              for="inputcv"
              type="text"
              :class="{ 'border-red-600' : errors.cv }"  class="block flex-1 w-full rounded border-gray-300 shadow cursor-pointer"
            >
              {{ cvlabel || 'Pilih file : PDF' }}
            </label>
            <span v-if="errors.cv" class="block text-xs text-red-900">{{ errors.cv }}</span>
            <input
              id="inputcv"
              class="hidden"
              type="file"
              accept=".pdf"
              @change="handleChangeInput"
            />
          </div>
        </div>
      </form>
      <div class="block p-5 border-t md:grid md:grid-cols-3 md:gap-3">
        <div></div>
        <div>
          <form-button class="block w-24" :loading="loading" @click="submit">Kirim</form-button>
        </div>
      </div>
    </div>
    <div v-else  class="py-5 px-3 text-center bg-white rounded shadow">
      <h1 class="mb-4 text-xl font-semibold">PERMINTAAN ANDA UNTUK MENJADI MINITUTOR SEDANG DI TINJAU.</h1>
      <a href="#" class="hover:bg-primary-600 bg-primary-500 inline-block py-2 px-4 text-sm text-white rounded">Download SOP Pembuatan Konten AjarBelajar</a>
    </div>
  </div>
</template>

<script>
import FormData from 'form-data'

const initialData = {
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
export default {
  name: 'JoinMinitutor',
  middleware: ['authNext', 'notMinitutor'],
  async asyncData({ $axios }) {
    let allowCreate = false
    try {
      const res = await $axios.$get('/join-minitutor/status')
      allowCreate = res.allowCreate
    } catch (e) {}
    return {
      allowCreate,
      form: { ...initialData },
      cvlabel: '',
      errors: { ...initialData },
      loading: false,
    }
  },
  head: {
    title: 'Jadi MiniTutor'
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
      this.errors = { ...initialData }
      try {
        await this.$axios.$post('/join-minitutor', this.generateData())
        this.$toast.success('Permintaan anda untuk menjadi MiniTutor telah dibuat. Jangan lupa kirim konten pertama kamu ke email support@ajarbelajar.com sebagai syarat diterimanya jadi MiniTutor!')
        this.allowCreate = false
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
  }
}
</script>
