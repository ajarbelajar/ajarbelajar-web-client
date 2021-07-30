<template>
  <div class="py-24 bg-white">
    <div class="container px-3">
      <div class="mx-auto mb-10 max-w-3xl">
        <h2 class="text-primary-600 mb-3 text-4xl font-semibold text-center">Beragam dan akan terus bertumbuh!</h2>
        <p class="text-center">AjarBelajar diisi oleh konten dari MiniTutor dengan berbagai macam latar belakang. Ada banyak bidang ilmu dan topik bahasan yang bisa disimak, dan akan terus bertambah.</p>
      </div>
      <div class="grid grid-cols-1 gap-3 md:grid-cols-4 xl:grid-cols-7">
        <div class="flex flex-col justify-center items-center pb-5">
          <div class="p-1 mb-2 w-36 h-36 rounded-full border">
            <div class="bg-primary-600 flex justify-center items-center w-full h-full text-6xl text-white rounded-full">
              <i class="ft ft-user"></i>
            </div>
          </div>
          <span class="block text-5xl font-semibold text-center text-gray-600">{{ count.user }}</span>
          <span class="block text-sm text-center text-gray-500">Pengguna Terdaftar</span>
        </div>
        <div class="hidden flex-col justify-center items-center h-36 xl:flex">
          <span class="bg-primary-600 block mb-2 w-full h-1 rounded-full"></span>
          <span class="bg-primary-600 block mx-auto w-6/12 h-1 rounded-full opacity-50"></span>
        </div>
        <div class="flex flex-col justify-center items-center pb-5">
          <div class="p-1 mb-2 w-36 h-36 rounded-full border">
            <div class="bg-primary-600 flex justify-center items-center w-full h-full text-6xl text-white rounded-full">
              <i class="ft ft-users"></i>
            </div>
          </div>
          <span class="block text-5xl font-semibold text-center text-gray-600">{{ count.minitutor }}</span>
          <span class="block text-sm text-center text-gray-500">MiniTutor Berkontribusi</span>
        </div>
        <div class="hidden flex-col justify-center items-center h-36 xl:flex">
          <span class="bg-primary-600 block mb-2 w-full h-1 rounded-full"></span>
          <span class="bg-primary-600 block mx-auto w-6/12 h-1 rounded-full opacity-50"></span>
        </div>
        <div class="flex flex-col justify-center items-center pb-5">
          <div class="p-1 mb-2 w-36 h-36 rounded-full border">
            <div class="bg-primary-600 flex justify-center items-center w-full h-full text-6xl text-white rounded-full">
              <i class="ft ft-film"></i>
            </div>
          </div>
          <span class="block text-5xl font-semibold text-center text-gray-600">{{ count.video }}</span>
          <span class="block text-sm text-center text-gray-500">Video Terbit</span>
        </div>
        <div class="hidden flex-col justify-center items-center h-36 xl:flex">
          <span class="bg-primary-600 block mb-2 w-full h-1 rounded-full"></span>
          <span class="bg-primary-600 block mx-auto w-6/12 h-1 rounded-full opacity-50"></span>
        </div>
        <div class="flex flex-col justify-center items-center pb-5">
          <div class="p-1 mb-2 w-36 h-36 rounded-full border">
            <div class="bg-primary-600 flex justify-center items-center w-full h-full text-6xl text-white rounded-full">
              <i class="ft ft-book"></i>
            </div>
          </div>
          <span class="block text-5xl font-semibold text-center text-gray-600">{{ count.article }}</span>
          <span class="block text-sm text-center text-gray-500">Artikel Terbit</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    count: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
