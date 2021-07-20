<template>
  <form class="border rounded-lg p-5">
    <h3 class="text-xl font-semibold mb-2">Edit Informasi</h3>
    <p class="text-sm text-gray-500">Dibawah ini adalah informasi Anda sebagai MiniTutor.</p>
    <hr class="mt-2 mb-7 md:mb-2">
    <label class="block md:grid md:grid-cols-3 md:gap-3 py-3">
      <div class="text-sm md:text-base">
        Pendidikan terakhir
      </div>
      <div class="md:col-span-2">
        <form-select name="last_education" :options="['D1', 'D2', 'D3', 'S1', 'S2', 'S3']" />
      </div>
    </label>
    <hr class="hidden md:block mb-2">
    <label class="block md:grid md:grid-cols-3 md:gap-3 py-3">
      <div class="text-sm md:text-base">
        Nama Kampus
      </div>
      <div class="md:col-span-2">
        <form-input name="university" />
      </div>
    </label>
    <hr class="hidden md:block mb-2">
    <label class="block md:grid md:grid-cols-3 md:gap-3 py-3">
      <div class="text-sm md:text-base">
        Kota dan Negara Kampus
      </div>
      <div class="md:col-span-2">
        <form-input name="city_and_country_of_study" />
      </div>
    </label>
    <hr class="hidden md:block mb-2">
    <label class="block md:grid md:grid-cols-3 md:gap-3 py-3">
      <div class="text-sm md:text-base">
        Jurusan
      </div>
      <div class="md:col-span-2">
        <form-input name="majors" />
      </div>
    </label>
    <hr class="hidden md:block mb-2">
    <div class="block md:grid md:grid-cols-3 md:gap-3 py-3">
      <div></div>
      <div>
        <form-button class="block">Simpan</form-button>
      </div>
    </div>
  </form>
</template>
