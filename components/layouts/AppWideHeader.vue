<template>
  <div class="app-wide-header">
    <div class="container">
      <h5>{{ title }}</h5>
      <h6>
        <nuxt-link to="/home">home</nuxt-link>
        / <span>{{ page }}</span>
      </h6>
    </div>
    <img ref="image" src="/images/team-work.jpg" alt="team work" />
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    page: {
      type: String,
      default: '',
    },
  },
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
.app-wide-header {
  display: block;
  widows: 100%;
  padding: ($spacer * 4) 0;
  position: relative;
  text-align: center;
  background-color: $dark;

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

  h5 {
    position: relative;
    z-index: 5;
    color: $white;
    font-size: 24px;
    font-weight: $font-weight-bold;
    float: left;
  }

  h6 {
    position: relative;
    z-index: 5;
    color: $white;
    font-size: 18px;
    font-weight: $font-weight-bold;
    float: right;
  }
}
</style>
