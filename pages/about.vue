<template>
  <div>
    <app-wide-header title="TENTANG" page="about" />

    <div class="about-page-wrapper">
      <div class="container">
        <div class="mb-30">
          <h1 class="page-title text-uppercase">TENTANG AJARBELAJAR</h1>
          <p class="lead text-center text-dark">
            AjarBelajar adalah online platform gerakan berbagi ilmu spesifik
            jenjang D3/S1/S2/S3 dalam bahasa Indonesia guna mempopulerkan ilmu
            ke masyarakat luas. AjarBelajar bergerak dengan kesukarelaan dan
            digerakkan oleh para mahasiswa dan alumni di dalam maupun luar
            negeri sebagai kontributor (MiniTutor).
          </p>
        </div>
        <div class="panel panel-body">
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
              <a href="https://www.ajarbelajar.com/register"
                >https://www.ajarbelajar.com/register</a
              >
            </li>
            <li>
              <strong>Akun pengguna menjadi akun MiniTutor</strong> dengan isi
              lengkap :
              <a href="https://www.ajarbelajar.com/join-minitutor"
                >https://www.ajarbelajar.com/join-minitutor</a
              >
            </li>
            <li>
              <strong>Membaca dan menaati Standard of Operation</strong>
              pembuatan konten AjarBelajar
              <a
                download=""
                href="https://www.ajarbelajar.com/pdf/SOP-Pembuatan-Konten-AjarBelajar-2020.pdf"
                >SOP Pembuatan Konten AjarBelajar 2020</a
              >
            </li>
            <li>
              Mengirimkan
              <strong
                >konten pertama ke ajarbelajarcom@gmail + screenshot sudah
                follow IG</strong
              >
              AjarBelajar @ajarbelajar dan
              <strong>share informasi rekrutmen MiniTutor</strong> ke 5 grup
              Line/WA/Telegram dll
            </li>
          </ul>
          <h3>Bentuk Konten</h3>
          <p><strong>Konten akademis yang dikemas menarik!</strong></p>
          <ul>
            <li>
              <strong>Video</strong> (ideal: max 5 menit, bisa bentuk vlog,
              presentasi, dll)
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
            <strong>
              kamu juga bisa mendaftarkan lembaga kamu menjadi
              MiniTutor.</strong
            >
            <br />
            Konten yang diupload
            <strong
              >MiniTutor yang bersifat lembaga akan dipublikasikan oleh
              AjarBelajar dan lembaga</strong
            >
            dengan menyertai atribut keduanya (logo, informasi sosial media,
            website dll) <br />
            Untuk informasi lebih lengkap, email ke
            <a href="mailto:ajarbelajarcom@gmail.com"
              >ajarbelajarcom@gmail.com.</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'no-sidebar',
  head() {
    return this.$seo()
  },
}
</script>
<style lang="scss">
.about-page-wrapper {
  padding-top: 80px;
  .page-title {
    font-weight: $font-weight-bold;
    text-align: center;
    position: relative;
    margin: 0 0 60px;
    padding-bottom: 20px;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      background-color: $primary;
      height: 4px;
      width: 20%;
      height: 4px;
      border-radius: 4px;
      z-index: 2;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    &::after {
      bottom: -10px;
      width: 10%;
      opacity: 0.5;
    }
  }

  h3 {
    position: relative;
    margin-top: 0;
    padding: $spacer 0 $spacer/4;
    margin-bottom: $spacer;
    font-size: 26px;
    font-weight: $font-weight-bold;
    color: $gray-600;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      background-color: $primary;
      height: 3px;
      width: 10%;
      border-radius: 4px;
      z-index: 2;
      bottom: 0;
    }

    &::after {
      bottom: -8px;
      width: 5%;
      opacity: 0.5;
    }
  }
}
</style>
