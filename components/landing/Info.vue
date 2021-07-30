<template>
  <div class="py-24 bg-gray-100">
    <div class="container px-3">
      <h3 class="text-primary-600 mb-6 text-4xl font-semibold text-center">Dengan AjarBelajar, kamu dapat!</h3>
      <div class="grid grid-cols-1 gap-3 mb-3 lg:grid-cols-3">
        <p class="border-primary-600 p-3 text-center bg-white rounded border-b-4">
          Belajar lebih dari 100+ bidang ilmu, dari sejarah, seni, hingga fisika kuantum!
        </p>
        <p class="border-primary-600 p-3 text-center bg-white rounded border-b-4">
          Mendapatkan pendapatan tambahan lewat mengajar online
        </p>
        <p class="border-primary-600 p-3 text-center bg-white rounded border-b-4">
          Diskusi dengan temen-temen dengan semangat belajar yang sama!
        </p>
      </div>
      <div class="grid grid-cols-1 gap-3">
        <div class="border-primary-600 block py-6 px-3 bg-white rounded border-b-4 lg:flex xl:px-40">
          <div class="w-68 hidden lg:block">
            <img src="@/assets/img/svg/1.svg" class="block w-full transform scale-125" alt="animation vector" />
          </div>
          <div class="flex-1 my-auto">
            <h2 class="mb-3 text-3xl font-semibold text-gray-600">
              Kamu bisa belajar apapun.
              <span class="block pt-2 w-28">
                <span class="bg-primary-600 block mb-2 w-full h-1 rounded-full"></span>
                <span class="bg-primary-600 block w-6/12 h-1 rounded-full opacity-50"></span>
              </span>
            </h2>
            <p class="mb-3 text-gray-600 lg:text-2xl xl:pr-20">Dengan pengajar berkualitas dari lulusan universitas terbaik di dunia. Belajar apapun untuk memuaskan hasrat ingin tahumu.</p>
            <nuxt-link to="/home" class="hover:bg-primary-700 bg-primary-600 inline-block py-3 px-4 text-sm font-semibold leading-none text-center text-white rounded transition-colors hover:bg-opacity-100">MULAI BELAJAR ONLINE!</nuxt-link>
          </div>
        </div>
        <div class="border-primary-600 block flex-row-reverse py-6 px-3 bg-white rounded border-b-4 lg:flex xl:px-40">
          <div class="w-68 hidden lg:block">
            <img src="@/assets/img/svg/2.svg" class="block w-full transform scale-125" alt="animation vector" />
          </div>
          <div class="flex-1 my-auto">
            <h2 class="mb-3 text-3xl font-semibold text-gray-600">
              Peroleh pendapatan tambahan.
              <span class="block pt-2 w-28">
                <span class="bg-primary-600 block mb-2 w-full h-1 rounded-full"></span>
                <span class="bg-primary-600 block w-6/12 h-1 rounded-full opacity-50"></span>
              </span>
            </h2>
            <p class="mb-3 text-gray-600 lg:text-2xl xl:pr-20">Buat kelas online dengan mudah, dengan fitur marketing dan pembayaran yang terintegrasi. Yuk mengajar dengan passion!.</p>
            <nuxt-link to="/register" class="hover:bg-primary-700 bg-primary-600 inline-block py-3 px-4 text-sm font-semibold leading-none text-center text-white rounded transition-colors hover:bg-opacity-100">AKU MAU MENGAJAR ONLINE!</nuxt-link>
          </div>
        </div>
        <div class="border-primary-600 block py-6 px-3 bg-white rounded border-b-4 lg:flex xl:px-40">
          <div class="w-68 hidden lg:block">
            <img src="@/assets/img/svg/3.svg" class="block w-full transform scale-125" alt="animation vector" />
          </div>
          <div class="flex-1 my-auto">
            <h2 class="mb-3 text-3xl font-semibold text-gray-600">
              Diskusi dengan para lifelong learner.
              <span class="block pt-2 w-28">
                <span class="bg-primary-600 block mb-2 w-full h-1 rounded-full"></span>
                <span class="bg-primary-600 block w-6/12 h-1 rounded-full opacity-50"></span>
              </span>
            </h2>
            <p class="mb-3 text-gray-600 lg:text-2xl xl:pr-20">Bergabung dengan para pembelajar seumur hidup -- dapatkan tips, teman baru, dan ilmu baru!.</p>
            <nuxt-link to="/home" class="hover:bg-primary-700 bg-primary-600 inline-block py-3 px-4 text-sm font-semibold leading-none text-center text-white rounded transition-colors hover:bg-opacity-100">MULAI BELAJAR ONLINE!</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
