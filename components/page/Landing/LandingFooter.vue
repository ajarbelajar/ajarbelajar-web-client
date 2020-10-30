<template>
  <div class="landing-footer">
    <div class="landing-footer__top">
      <div class="container">
        <div class="row">
          <div class="mx-auto col-lg-6 col-md-10">
            <div class="footer-nav">
              <a href="#">Tentang AjarBelajar</a>
              <a href="#">Tentang Konten dan Feedback Konstruktif</a>
              <a href="#">F.A.Q</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="mx-auto col-lg-6 col-md-10 mb-20">
            <h3 class="mt-0 mb-20">Donasi kamu akan sangat membantu!</h3>
            <a href="#" class="btn btn-primary px-30 font-weight-bold"
              >DONASI</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="landing-footer__bottom">
      <div class="container">
        <div class="wrapper">
          <div class="brand">
            <img
              src="@/assets/img/logo/logo.svg"
              height="34px"
              alt="Logo AjarBeajar"
            />
          </div>

          <div class="copyright">
            © 2020 All Right Reserved AjarBelajar -By DedeArd
          </div>

          <div class="socials ml-md-auto">
            <a href="#" class="btn btn-dark btn-sm btn-icon ml-1"
              ><i class="socicon-instagram"></i
            ></a>
            <a href="#" class="btn btn-dark btn-sm btn-icon ml-1"
              ><i class="socicon-youtube"></i
            ></a>
            <a href="#" class="btn btn-dark btn-sm btn-icon ml-1"
              ><i class="socicon-facebook"></i
            ></a>
            <a href="#" class="btn btn-dark btn-sm btn-icon ml-1"
              ><i class="socicon-twitter"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.landing-footer {
  background-color: $gray-800;
  &__top {
    display: flex;
    padding: $spacer 0;
    text-align: center;
    .footer-nav {
      display: block;
      margin: auto;
      padding: $spacer;

      a {
        display: block;
        text-align: center;
        line-height: 26px;
        font-size: 16px;
        margin: 5px 0;
        color: $gray-300;
        font-weight: $font-weight-normal;
        text-decoration: none;

        &:hover {
          color: $primary;
        }
      }
    }

    h3 {
      color: $gray-200;
      text-transform: uppercase;
      font-weight: $font-weight-bold;
      position: relative;
      padding-bottom: 10px;
      margin-bottom: $spacer;
      &::before,
      &::after {
        content: '';
        display: block;
        position: absolute;
        background-color: $white;
        height: 4px;
        width: 30%;
        height: 4px;
        border-radius: 4px;
        z-index: 2;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }

      &::after {
        bottom: -10px;
        width: 15%;
        opacity: 0.5;
      }
    }
  }

  &__bottom {
    background-color: $gray-900;
    padding: $spacer 0;
    .wrapper {
      display: flex;
      width: 100%;
      position: relative;

      @include media-breakpoint-down(md) {
        display: block;
        text-align: center;
      }

      .brand {
        img {
          @include media-breakpoint-down(md) {
            height: 60px;
          }
        }
      }

      .copyright {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 14px;
        color: $gray-400;
        line-height: 34px;
        font-size: 14px;

        @include media-breakpoint-down(md) {
          position: static;
          transform: none;
          text-align: center;
          margin: 20px 0;
        }
      }
    }
  }
}
</style>
