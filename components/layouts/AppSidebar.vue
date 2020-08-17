<template>
  <div
    class="app-sidebar-wrapper"
    :class="{ 'app-sidebar-close': $sidebar.closeSidebar }"
  >
    <div class="app-sidebar-backdrop" @click="$sidebar.display(false)"></div>
    <aside class="app-sidebar">
      <div class="app-sidebar__header">
        <div class="container-fluid">
          <div class="app-sidebar__header-wrapper">
            <a href="/" class="app-sidebar__brand">
              <img
                src="@/assets/img/logo/logo-text.svg"
                alt="Logo ajarbelajar"
              />
            </a>
            <a
              href="#"
              class="app-sidebar__sidebar-toggle"
              @click.prevent="$sidebar.display(false)"
            >
              <i class="wb-menu icon"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="app-sidebar__scroll">
        <div ref="elSidebarScroll" class="app-sidebar__scroll-wrapper">
          <div class="app-sidebar__scroll-content">
            <div class="list-group">
              <nuxt-link
                class="list-group-item"
                to="/"
                active-class=""
                exact-active-class="active"
                @click.native="$sidebar.display(false)"
              >
                <i class="icon wb-home"></i>Home
              </nuxt-link>
              <a class="list-group-item" href="#">
                <i class="icon wb-order"></i>Artikel
              </a>
              <a class="list-group-item" href="#">
                <i class="icon wb-video"></i>Video
              </a>
              <a class="list-group-item" href="#">
                <i class="icon wb-grid-4"></i>Kategori
              </a>
              <a class="list-group-item" href="#">
                <i class="icon wb-users"></i>Minitutor
              </a>
            </div>
            <div
              v-if="($auth && !$auth.minitutor) || !$auth"
              class="list-group"
            >
              <nuxt-link
                class="list-group-item"
                to="/join-minitutor"
                active-class="active"
                @click.native="$sidebar.display(false)"
              >
                <i class="icon wb-dashboard"></i>Jadi Minitutor
              </nuxt-link>
            </div>
            <div v-if="!$auth" class="list-group">
              <nuxt-link
                class="list-group-item"
                to="/register"
                @click.native="$sidebar.display(false)"
              >
                <i class="icon wb-user-circle"></i>Daftar
              </nuxt-link>
              <nuxt-link
                class="list-group-item"
                to="/login"
                @click.native="$sidebar.display(false)"
              >
                <i class="icon wb-user-circle"></i>Masuk
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
const Ps = process.client ? require('perfect-scrollbar').default : undefined

export default {
  data() {
    return {
      elSidebarScroll: null,
      elSidebarScrollStyle: null,
      sidebarPs: null,
    }
  },
  beforeDestroy() {
    if (this.sidebarPs) {
      this.sidebarPs.destroy()
      this.sidebarPs = null
    }
  },
  mounted() {
    this.elSidebarScroll = this.$refs.elSidebarScroll
    this.elSidebarScrollStyle = window.getComputedStyle(this.elSidebarScroll)
    this.sidebarScroll()
    window.onresize = this.sidebarScroll
  },
  methods: {
    sidebarScroll() {
      if (this.elSidebarScrollStyle.getPropertyValue('overflow-y') !== 'auto') {
        if (!this.sidebarPs) {
          this.sidebarPs = new Ps(this.elSidebarScroll)
        }
      } else if (this.sidebarPs) {
        this.sidebarPs.destroy()
        this.sidebarPs = null
      }
    },
  },
}
</script>

<style lang="scss">
.app-sidebar-close {
  .app-sidebar {
    @include media-breakpoint-down(md) {
      transform: translateX(-100%);
    }
  }
  .app-sidebar-backdrop {
    opacity: 0;
    visibility: hidden;
  }
}

.app-sidebar-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba($gray-900, 0.5);
  z-index: $zindex-navbar-fixed + 10;
  transition: opacity 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86),
    visibility 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  @include media-breakpoint-up(lg) {
    opacity: 0;
    visibility: hidden;
  }
}

.app-sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  bottom: 0;
  padding-top: 60px;
  width: 240px;
  max-height: 100%;
  background-color: $white;
  box-shadow: $box-shadow;
  transition: transform 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: $zindex-navbar-fixed - 20;
  @include media-breakpoint-down(md) {
    z-index: $zindex-navbar-fixed + 20;
  }

  &__header {
    display: none;
    position: absolute;
    top: 0;
    z-index: 20;
    background-color: $white;
    @include media-breakpoint-down(md) {
      display: flex;
      width: 100%;
    }
    width: 240px;
    height: 60px;
    padding: 10px 0;
    box-shadow: $box-shadow-sm;
    &-wrapper {
      display: flex;
      height: 40px;
    }
  }

  &__brand {
    display: block;
    height: 40px;
    padding: 6px 0;
    img {
      height: 28px;
    }
  }

  &__sidebar-toggle {
    display: block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin: auto;
    margin-right: 0;
    border-radius: 50%;
    transition: 150ms ease-in-out;
    &:hover {
      background-color: $gray-100;
    }
  }
  &__scroll {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    @include perfect-scrollbar-ver-size(4px);
    @include perfect-scrollbar-skin($gray-400);
    .ps__rail-y {
      left: auto !important;
      right: 0 !important;
      z-index: 20;
    }
    .ps__scrollbar-x-rail {
      display: none;
    }
    &-wrapper {
      position: relative;
      height: 100%;
      width: 100%;
      overflow: hidden;
      @include media-breakpoint-down(md) {
        overflow-y: auto !important;
      }
    }
  }

  .list-group-item {
    border-radius: 0;
    border: 0;
    position: relative;
    font-weight: $font-weight-bold;
    &::before {
      content: ' ';
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: -6px;
      height: 22px;
      width: 5px;
      border-radius: 5px;
      background-color: $primary;
      transition: left 150ms ease-in-out;
    }

    &:hover,
    &.active {
      background-color: $gray-100 !important;
      color: $primary !important;
      &::before {
        left: 0;
      }
    }
  }
}
</style>
