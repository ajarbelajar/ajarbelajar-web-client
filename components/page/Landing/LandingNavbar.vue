<template>
  <div class="landing-navbar" :class="{ appear }">
    <div class="container">
      <div class="landing-navbar-wrapper">
        <nuxt-link to="/home" class="navbar-brand">
          <img src="@/assets/img/logo/logo.svg" alt="Logo Ajarbelajar" />
        </nuxt-link>
        <button
          class="btn btn-default btn-outline d-lg-none btn-icon ml-auto"
          @click.prevent="close = !close"
        >
          <i class="icon wb-menu"></i>
        </button>
        <div class="nav-wrapper" :class="{ 'close-menu': close }">
          <div class="nav nav-left mr-lg-auto pl-lg-30">
            <nuxt-link to="/playlists">PLAYLIST</nuxt-link>
            <nuxt-link to="/articles">ARTIKEL</nuxt-link>
            <nuxt-link to="/categories">KATEGORI</nuxt-link>
          </div>
          <div class="nav nav-right">
            <nuxt-link to="/login">MASUK</nuxt-link>
            <nuxt-link to="/register" class="nav-btn">BUAT AKUN BARU</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      close: true,
      appear: false,
    }
  },
  mounted() {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onScroll)
  },
  methods: {
    onScroll() {
      if (window.scrollY > 50) {
        this.appear = true
      } else {
        this.appear = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.landing-navbar {
  display: block;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgba($white, 0);
  z-index: $zindex-header;
  padding: 50px 0;
  transition: padding 200ms ease-in-out, background-color 200ms ease-in-out,
    box-shadow 200ms ease-in-out;

  &-wrapper {
    display: flex;
    width: 100%;

    .navbar-brand {
      display: block;
      height: 36px;
      img {
        display: block;
        height: 36px;
      }
    }

    .nav-wrapper {
      display: flex;
      width: 100%;

      .nav {
        display: flex;
        a {
          display: block;
          font-size: 14px;
          font-weight: $font-weight-bold;
          color: $white;
          text-decoration: none;
          line-height: 36px;
          padding: 0 10px;
          border-radius: $border-radius;
          transition: $btn-transition;

          &:hover {
            color: $primary;
          }

          &.nav-btn {
            background-color: $primary;
            margin-left: 10px;
            padding: 0 20px;
            &:hover {
              color: $white;
              background-color: lighten($primary, 10);
            }
          }
        }
      }
    }
  }

  @include media-breakpoint-down(md) {
    padding: 20px 0;
    background-color: rgba($white, 1);
    .landing-navbar-wrapper {
      .nav-wrapper {
        position: fixed;
        top: 76px;
        left: 0;
        background-color: $white;
        display: block;
        border-top: 1px solid $border-color;
        box-shadow: $box-shadow;

        .nav {
          display: block;
          text-align: center;
          a {
            margin: 10px $spacer;
          }
          a:not(.nav-btn) {
            color: $gray-700;
            &:hover {
              color: $primary;
            }
          }
        }

        &.close-menu {
          display: none;
        }
      }
    }
  }
}

.appear {
  padding: 20px 0;
  background-color: rgba($white, 1);
  box-shadow: 0 6px 15px rgba($black, 0.1);
  .landing-navbar-wrapper {
    .nav-wrapper {
      .nav {
        a:not(.nav-btn) {
          color: $gray-700;
          &:hover {
            color: $primary;
          }
        }
      }
    }
  }
}
</style>
