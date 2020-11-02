<template>
  <footer class="app-footer mt-auto">
    <div class="container">
      <div class="app-footer__top py-30">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 py-30">
              <nuxt-link to="/home" class="app-footer__brand">
                <img
                  src="@/assets/img/logo/logo-text.svg"
                  alt="Logo ajarbelajar"
                />
              </nuxt-link>
              <p class="mb-0 mt-10">BELAJAR, BERBAGI, BERKONTRIBUSI</p>
            </div>

            <div class="col-lg-5">
              <div class="row">
                <div class="col-lg-6 py-30">
                  <nav class="app-footer__nav">
                    <nuxt-link to="/about">Tentang Minitutor</nuxt-link>
                    <nuxt-link to="/constructive-feedback">
                      Tentang Feedback Konstruktif
                    </nuxt-link>
                    <nuxt-link to="/faq">F . A . Q</nuxt-link>
                  </nav>
                </div>
                <div class="col-lg-6 py-30">
                  <nav class="app-footer__nav">
                    <!-- <a href="#">Tentang Kami</a>
                    <a href="#">Visi & Misi</a> -->
                  </nav>
                </div>
              </div>
            </div>

            <div class="col-lg-3 py-30">
              <nav class="app-footer__socials">
                <a
                  href="https://www.instagram.com/ajarbelajar"
                  aria-label="instagram"
                  rel="noreferrer"
                  target="_blank"
                  class="btn btn-icon social-instagram"
                >
                  <i class="icon socicon-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC_RqkZkVSmRIKNnj_5QPv5Q"
                  aria-label="youtube"
                  rel="noreferrer"
                  target="_blank"
                  class="btn btn-icon social-youtube"
                >
                  <i class="icon socicon-youtube"></i>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <div class="app-footer__bottom py-4 bg-light border-top">
      <div class="container">
        <div class="text-gray-700 text-center font-weight-bold small mb-2">
          © 2020 All Right Reserved AjarBelajar - By
          <a href="#">Tim AjarBelajar</a>
        </div>
        <div class="text-gray-600 small text-center">
          <!-- Built by <a href="#">Dedeardh</a> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.app-footer {
  display: block;
  background-color: $white;
  box-shadow: $box-shadow;
  @include media-breakpoint-down(md) {
    text-align: center;
  }

  &__brand {
    img {
      height: 40px;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    @include media-breakpoint-down(md) {
      text-align: center;
    }

    a {
      display: block;
      line-height: 1.2;
      margin-bottom: 10px;
      text-decoration: none;
      color: $gray-400;
      &:hover {
        color: $gray-600;
      }
    }
  }

  &__socials {
    text-align: right;
    @include media-breakpoint-down(md) {
      text-align: center;
    }
  }
}
</style>
