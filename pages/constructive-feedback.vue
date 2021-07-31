<template>
  <div class="pt-16">
    <layout-navbar container no-sidebar />
    <block-wide-header title="TENTANG" page="constructive-feedback" />

    <div class="container mb-3">
      <div class="flex justify-center p-3 mt-20">
        <h1 class="text-4xl font-semibold text-center">
          TENTANG FEEDBACK KONSTRUKTIF
          <div class="flex flex-col items-center py-4 mx-auto w-8/12">
            <span class="bg-primary-600 block mb-2 w-full h-1 rounded-full"></span>
            <span class="bg-primary-600 block w-6/12 h-1 rounded-full opacity-50"></span>
          </div>
        </h1>
      </div>

      <div class="p-3">
        <div class="border-primary-600 p-3 mx-auto text-gray-500 bg-white rounded border-b-4 shadow md:p-5">
          <p class="mb-4 md:text-lg">
            Salah satu tujuan AjarBelajar dibentuk adalah sebagai sarana
            pengembangan diri kontributor(MiniTutor) yang bergabung ke dalam
            gerakan ini. Selain memiliki sistem peer review untuk evaluasi
            kualitas antar MiniTutor, tim AjarBelajar juga memberikan
            kesempatan kepada pengguna ajarbelajar.com secara umum untuk
            memerikan feedback konstruktif terhadap konten yang dibuat oleh
            MiniTutor.
          </p>
          <p class="mb-4 md:text-lg">
            Kamu, pengguna ajarbelajar.com, dapat memberikan feedback
            konstruktif kepada setiap konten yang ada di ajarbelajar.com
            dengan mengisi form feedback yang tersedia pada setiap
            konten. Feedback didesain seobjektif mungkin, dimana pada
            form feedback terdapat berbagai aspek penilaian yang harus
            diikuti. Penilaian, kritik, masukan, dan saran yang disampaikan
            melalui form akan diberikan kepada MiniTutor yang bersangkutan
            melalui tim AjarBelajar.
          </p>
          <p class="mb-4 md:text-lg">
            Kamu juga dapat memberikan feedback kepada tim AjarBelajar agar
            sistem, kinerja, dan kualitas ajarbelajar.com bisa menjadi lebih
            baik dari hari ke hari.
          </p>
        </div>
      </div>
    </div>
    <layout-footer container />
  </div>
</template>

<script>
export default {
  name: 'About',
  layout: 'blank',
  head: {
    title: 'Tentang Feedback Konstruktif'
  }
}
</script>
