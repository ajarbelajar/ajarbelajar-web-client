<template>
  <div class="landing-grid-2">
    <div class="container">
      <div class="card card-body mb-20 py-30">
        <div class="row no-gutters">
          <div class="col-md-5 mb-20 mb-lg-0">
            <img src="/images/1.svg" alt="animation vector" />
          </div>
          <div class="col-lg-5 col-md-7 d-flex">
            <div class="card-wrapper my-auto">
              <h3>Kamu bisa belajar apapun.</h3>
              <p class="lead mb-30">
                Dengan pengajar berkualitas dari lulusan universitas terbaik di
                dunia. Belajar apapun untuk memuaskan hasrat ingin tahumu.
              </p>
              <nuxt-link
                to="/home"
                rel="nofollow"
                class="btn btn-primary px-30 font-weight-bold text-uppercase"
                >Mulai Belajar Online!</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="card card-body mb-20 py-30">
        <div class="row no-gutters">
          <div class="col-md-5 mb-20 mb-lg-0 order-md-2">
            <img src="/images/2.svg" alt="animation vector" />
          </div>
          <div class="col-lg-5 col-md-7 d-flex ml-auto">
            <div class="card-wrapper my-auto">
              <h3>Peroleh pendapatan tambahan.</h3>
              <p class="lead mb-30">
                Buat kelas online dengan mudah, dengan fitur marketing dan
                pembayaran yang terintegrasi. Yuk mengajar dengan passion!.
              </p>
              <nuxt-link
                to="/register"
                rel="nofollow"
                class="btn btn-primary px-30 font-weight-bold text-uppercase"
                >Aku mau mengajar online!</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="card card-body mb-20 py-30">
        <div class="row no-gutters">
          <div class="col-md-5 mb-20 mb-lg-0">
            <img src="/images/3.svg" alt="animation vector" />
          </div>
          <div class="col-lg-5 col-md-7 d-flex">
            <div class="card-wrapper my-auto">
              <h3>Diskusi dengan para <i>lifelong learner</i>.</h3>
              <p class="lead mb-30">
                Bergabung dengan para pembelajar seumur hidup -- dapatkan tips,
                teman baru, dan ilmu baru!
              </p>
              <nuxt-link
                to="/home"
                rel="nofollow"
                class="btn btn-primary px-30 font-weight-bold text-uppercase"
                >Mulai Belajar Online!</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.landing-grid-2 {
  width: 100%;
  background-color: $gray-100;
  padding-bottom: $spacer * 2;

  .card {
    img {
      display: block;
      max-width: 250px;
      margin: auto;
      transform: scale(1.4);
    }
  }

  h3 {
    position: relative;
    margin-top: 0;
    padding-bottom: $spacer/2;
    margin-bottom: $spacer;
    font-size: 30px;
    font-weight: $font-weight-bold;
    color: $gray-600;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      background-color: $primary;
      height: 4px;
      width: 30%;
      height: 4px;
      border-radius: 4px;
      z-index: 2;
      bottom: 0;
    }

    &::after {
      bottom: -10px;
      width: 15%;
      opacity: 0.5;
    }
  }

  p {
    color: $gray-400;
  }
}
</style>
