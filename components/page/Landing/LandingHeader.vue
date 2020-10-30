<template>
  <div class="landing-header">
    <div class="landing-header-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10">
            <h1>
              Mengajar ataupun belajar, semuanya menjadi lebih mudah.
            </h1>
            <p class="mb-30">
              Kami adalah nonprofit dengan misi untuk membuat edukasi online
              yang lebih berkualitas.
            </p>
            <nuxt-link class="btn btn-primary btn-custom" to="/home"
              >MULAI BELAJAR</nuxt-link
            >
            <nuxt-link
              class="btn btn-primary"
              to="/register?next=/join-minitutor"
              >MULAI MENGAJAR</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <img ref="image" :src="$images.background" />
    <img :src="$images.svg.curve" class="curve" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      paralax: null,
    }
  },
  mounted() {
    const SimpleParallax = require('simple-parallax-js')
    this.paralax = new SimpleParallax(this.$refs.image)
  },
  beforeDestroy() {
    if (this.paralax) {
      this.paralax.destroy()
    }
  },
}
</script>

<style lang="scss">
.landing-header {
  display: flex;
  width: 100%;
  position: relative;
  background-color: $dark;
  min-height: 115vh;
  .simpleParallax {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    img {
      opacity: 0.5;
    }
  }
  .curve {
    position: absolute;
    z-index: 3;
    bottom: 0;
    width: 100%;
  }
  @include media-breakpoint-down(md) {
    min-height: 100vh;
    .curve {
      display: none;
    }
  }

  &-wrapper {
    width: 100%;
    padding: ($spacer * 6) 0;
    margin: auto;
    position: relative;
    z-index: 5;

    h1 {
      font-size: 55px;
      font-weight: $font-weight-bold;
      color: $white;
      margin: 0;
      line-height: 1;
    }

    p {
      color: $gray-100;
      font-weight: $font-weight-light;
      letter-spacing: 1px;
    }

    .btn {
      width: 170px;
      font-weight: $font-weight-bold;
    }

    .btn-custom {
      background-color: rgba($white, 0.15);
      border-color: transparent;
      margin-right: 5px;
      color: $white;

      &:hover {
        background-color: $primary;
      }
    }
  }
}
</style>
