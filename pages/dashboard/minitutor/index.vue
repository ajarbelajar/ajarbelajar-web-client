<template>
  <form class="p-5 rounded-lg border" method="POST" @submit.prevent="submit(form)">
    <h3 class="mb-2 text-xl font-semibold">Edit Informasi</h3>
    <p class="text-sm text-gray-500">Dibawah ini adalah informasi Anda sebagai MiniTutor.</p>
    <hr class="mt-2 mb-7 md:mb-2">
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
    <div class="block py-3 md:grid md:grid-cols-3 md:gap-3">
      <div></div>
      <div>
        <form-button class="block w-24" :loading="loading">Simpan</form-button>
      </div>
    </div>
  </form>
</template>

<script>
const initialData = { last_education: '', university: '', city_and_country_of_study: '', majors: '' }
export default {
  name: 'EditInformation',
  data() {
    return {
      errors: initialData,
      loading: false,
      form: initialData
    }
  },
  methods: {
    async submit(data) {
      this.loading = true
      try {
        await this.$store.dispatch('auth/updateMinitutorProfile', data)
        this.errors = initialData
        this.$toast.success('Informasi Anda sebagai MiniTutor telah disimpan.')
      } catch (e) {
        this.errors = initialData
        data = this.$errorResponse(e)
        this.errors = { ...this.errors, ...data.errors }
        if(data.message) {
          this.$toast.danger(data.message)
        }
      }
      this.loading = false
    }
  },
  created() {
    const mt = this.$store.getters.auth.minitutor
    this.form = {
      last_education: mt.last_education,
      university: mt.university,
      city_and_country_of_study: mt.city_and_country_of_study,
      majors: mt.majors,
    }
  }
}
</script>
