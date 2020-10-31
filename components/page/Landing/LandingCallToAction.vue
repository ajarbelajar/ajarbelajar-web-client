<template>
  <div class="landing-call-to-actions">
    <div class="container">
      <div class="wrapper">
        <h2>GABUNG SEKARANG</h2>
        <nuxt-link class="btn btn-primary btn-lg px-30" to="/register"
          >BUAT AKUN BARU</nuxt-link
        >
      </div>
    </div>
    <img ref="image" src="/images/team-work.jpg" alt="team work" />
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
.landing-call-to-actions {
  margin-top: $spacer;
  position: relative;
  z-index: 3;
  padding: 120px 0;
  background-color: $primary;

  .container {
    position: relative;
    z-index: 4;
  }

  .wrapper {
    text-align: center;
    h2 {
      font-size: 64px;
      font-weight: $font-weight-bold;
      color: $white;
      margin: 0 0 30px;
      padding-bottom: 20px;
      position: relative;

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

    .btn {
      background-color: $white;
      border-color: transparent;
      font-weight: $font-weight-bold;
      color: $primary;

      &:hover {
        background-color: $primary;
        color: $white;
      }
    }
  }

  .simpleParallax {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    img {
      opacity: 0.5;
    }
  }
}
</style>
