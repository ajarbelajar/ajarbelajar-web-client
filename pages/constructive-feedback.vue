<template>
  <div>
    <app-wide-header title="TENTANG" page="constructive-feedback" />

    <div class="about-page-wrapper">
      <div class="container">
        <div class="mb-30">
          <h1 class="page-title text-uppercase">
            Tentang feedback konstruktif
          </h1>
          <div class="panel panel-body pb-30">
            <p class="lead text-dark">
              Salah satu tujuan AjarBelajar dibentuk adalah sebagai sarana
              pengembangan diri kontributor(MiniTutor) yang bergabung ke dalam
              gerakan ini. Selain memiliki sistem peer review untuk evaluasi
              kualitas antar MiniTutor, tim AjarBelajar juga memberikan
              kesempatan kepada pengguna ajarbelajar.com secara umum untuk
              memerikan feedback konstruktif terhadap konten yang dibuat oleh
              MiniTutor.
            </p>
            <p class="lead text-dark">
              Kamu, pengguna ajarbelajar.com, dapat memberikan feedback
              konstruktif kepada setiap konten yang ada di ajarbelajar.com
              dengan mengisi form feedback yang tersedia pada setiap
              konten.&nbsp;Feedback didesain seobjektif mungkin, dimana pada
              form feedback terdapat berbagai aspek penilaian yang harus
              diikuti. Penilaian, kritik, masukan, dan saran yang disampaikan
              melalui form akan diberikan kepada MiniTutor yang bersangkutan
              melalui tim AjarBelajar.
            </p>
            <p class="lead text-dark">
              Kamu juga dapat memberikan feedback kepada tim AjarBelajar agar
              sistem, kinerja, dan kualitas ajarbelajar.com bisa menjadi lebih
              baik dari hari ke hari.
            </p>
          </div>
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
}
</style>
