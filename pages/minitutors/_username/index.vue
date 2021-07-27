<template>
  <div class="grid grid-cols-1 gap-3 py-3">
    <div class="p-3 rounded-lg border">
      <span class="block mb-2 text-xs font-bold leading-none text-gray-500">Nama Lengkap</span>
      <h3 class="font-semibold">{{ user.name }}</h3>
    </div>
    <div class="p-3 rounded-lg border">
      <span class="block mb-2 text-xs font-bold leading-none text-gray-500">Jurusan</span>
      <h3 class="font-semibold">{{ minitutor.majors }}</h3>
    </div>
    <div class="p-3 rounded-lg border">
      <span class="block mb-2 text-xs font-bold leading-none text-gray-500">Jenjang</span>
      <h3 class="font-semibold">{{ minitutor.last_education }}</h3>
    </div>
    <div class="p-3 rounded-lg border">
      <span class="block mb-2 text-xs font-bold leading-none text-gray-500">Nama Kampus</span>
      <h3 class="font-semibold">{{ minitutor.university }}</h3>
    </div>
    <div class="p-3 rounded-lg border">
      <span class="block mb-2 text-xs font-bold leading-none text-gray-500">Alamat Kampus</span>
      <h3 class="font-semibold">{{ minitutor.city_and_country_of_study }}</h3>
    </div>
    <div v-if="user.about" class="p-3 rounded-lg border">
      <span class="block mb-2 text-xs font-bold leading-none text-gray-500">Tentang</span>
      <p>{{ user.about }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Minitutor',
  props: {
    minitutor: {
      type: Object,
      default: () => ({})
    },
    user: {
      type: Object,
      default: () => ({})
    },
  }
}
</script>
