<template>
  <div class="pt-16">
    <layout-navbar container no-sidebar />
    <block-wide-header title="TENTANG" page="about-minitutor" />

    <div class="container mb-3">
      <div class="flex justify-center p-3 mt-20">
        <h1 class="text-4xl font-semibold text-center">
          TENTANG MINITUTOR
          <div class="flex flex-col items-center py-4 mx-auto w-8/12">
            <span class="bg-primary-600 block mb-2 w-full h-1 rounded-full"></span>
            <span class="bg-primary-600 block w-6/12 h-1 rounded-full opacity-50"></span>
          </div>
        </h1>
      </div>
      <p class="px-3 pb-5 mx-auto max-w-5xl text-center md:text-lg">AjarBelajar adalah online platform gerakan berbagi ilmu spesifik jenjang D3/S1/S2/S3 dalam bahasa Indonesia guna mempopulerkan ilmu ke masyarakat luas. AjarBelajar bergerak dengan kesukarelaan dan digerakkan oleh para mahasiswa dan alumni di dalam maupun luar negeri sebagai kontributor (MiniTutor).</p>

      <div class="p-3">
        <div class="border-primary-600 p-3 mx-auto text-gray-500 bg-white rounded border-b-4 shadow md:p-5">
          <h3>Syarat Kontribusi</h3>
          <ul>
            <li>Mahasiswa/i D3/S1/S2/S3 atau alumni</li>
            <li>Passionate di bidang ilmunya</li>
            <li>
              Semangat berkontribusi dengan AjarBelajar dengan mengikuti semua
              alur kontribusi
            </li>
            <li><strong>Membuat konten pertama</strong></li>
          </ul>
          <h3>Alur Kontribusi</h3>
          <ul>
            <li>
              <strong>Daftar</strong> menjadi akun pengguna
              <a href="https://www.ajarbelajar.com/register">https://www.ajarbelajar.com/register</a>
            </li>
            <li>
              <strong>Akun pengguna menjadi akun MiniTutor</strong> dengan isi lengkap :
              <a href="https://www.ajarbelajar.com/join-minitutor">https://www.ajarbelajar.com/join-minitutor</a>
            </li>
            <li>
              <strong>Membaca dan menaati Standard of Operation</strong> pembuatan konten AjarBelajar
              <a download href="https://www.ajarbelajar.com/pdf/SOP-Pembuatan-Konten-AjarBelajar-2020.pdf" >SOP Pembuatan Konten AjarBelajar 2020</a>
            </li>
            <li>
              Mengirimkan <strong>konten pertama ke ajarbelajarcom@gmail + screenshot sudah follow IG</strong> AjarBelajar @ajarbelajar dan <strong>share informasi rekrutmen MiniTutor</strong> ke 5 grup Line/WA/Telegram dll
            </li>
          </ul>
          <h3>Bentuk Konten</h3>
          <p><strong>Konten akademis yang dikemas menarik!</strong></p>
          <ul>
            <li>
              <strong>Video</strong> (ideal: max 5 menit, bisa bentuk vlog, presentasi, dll)
            </li>
            <li><strong>PPT + voice over di setiap slide</strong></li>
            <li><strong>Podcast</strong> (bentuk mp3)</li>
            <li><strong>Artikel</strong> (bentuk tulisan)</li>
          </ul>
          <h3>Manfaat</h3>
          <ul>
            <li><strong>Penyebaran ilmu yang bermanfaat</strong></li>
            <li>
              <strong>Networking</strong> bersama MiniTutor lainnya dari
              berbagai bidang ilmu
            </li>
            <li>
              <strong>E-sertifikat</strong> untuk setiap konten yang
              dikontribusikan ke platform AjarBelajar
            </li>
          </ul>
          <h3>MiniTutor Lembaga</h3>
          <p>
            Selain registrasi sebagai individu,
            <strong> kamu juga bisa mendaftarkan lembaga kamu menjadi MiniTutor.</strong>
            <br />
            Konten yang diupload
            <strong>MiniTutor yang bersifat lembaga akan dipublikasikan oleh AjarBelajar dan lembaga</strong>
            dengan menyertai atribut keduanya (logo, informasi sosial media,
            website dll) <br />
            Untuk informasi lebih lengkap, email ke
            <a href="mailto:ajarbelajarcom@gmail.com">ajarbelajarcom@gmail.com.</a>
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
    title: 'Tantang MiniTutor'
  }
}
</script>

<style lang="css" scoped>
  h3 {
    @apply text-2xl font-semibold mt-4 relative pb-5;
  }
  h3::after {
    content: "";
    @apply w-24 h-1 rounded-full bg-primary-600 block bottom-3 absolute;
  }
  h3::before {
    content: "";
    @apply w-16 h-1 opacity-50 rounded-full bg-primary-600 block bottom-1 absolute;
  }

  ul {
    @apply pl-6 mb-3;
  }
  li {
    @apply list-disc;
  }
  p {
    @apply mb-3;
  }
  a {
    @apply text-primary-600 hover:text-primary-700;
  }
</style>
