<template>
  <div class="py-3">
    <div class="text-center">
      <p class="mb-3 text-lg text-gray-500">Terjadi kesalahan saat memuat!</p>
      <button
        class="bg-primary-600 inline-flex justify-center items-center px-4 h-8 text-sm font-semibold leading-none text-center text-white rounded-full"
        @click="$attrs.trigger"
      >
        Muat Ulang
      </button>
    </div>
  </div>
</template>
