<template>
  <div class="app-header">
    <div class="app-header-root">
      <div class="container">
        <div class="app-header-wrapper">
          <div class="left">
            <div class="container-fluid pl-0">
              <div class="left-wrapper">
                <nuxt-link to="/home" class="brand">
                  <img
                    class="logo-text"
                    src="@/assets/img/logo/logo-text.svg"
                    alt="Logo ajarbelajar"
                  />
                  <img
                    class="logo-only"
                    src="@/assets/img/logo/logo.svg"
                    alt="Logo ajarbelajar"
                  />
                </nuxt-link>
              </div>
            </div>
          </div>
          <app-header-form-search
            :open="searchOpen"
            @close-form="searchOpen = false"
          />
          <div class="right" :class="{ auth: $auth }">
            <div class="container-fluid pr-0">
              <div class="right-wrapper">
                <div class="right-actions">
                  <a
                    href="#"
                    class="action-toggle d-block d-lg-none"
                    @click.prevent="searchOpen = true"
                  >
                    <i class="wb-search"></i>
                    <span class="label"></span>
                  </a>
                  <app-header-notification v-if="$auth" />
                </div>
                <div v-if="$auth" class="right-avatar">
                  <span class="avatar">
                    <v-lazy-image
                      :src="$auth.avatar"
                      :src-placeholder="$images.avatar"
                      :alt="$auth.username"
                    />
                  </span>
                  <app-header-profile-dropdown
                    class="app-header-profile-dropdown"
                  />
                </div>
                <div v-else class="right-auth-buttons">
                  <nuxt-link
                    to="/login"
                    class="btn btn-outline btn-default mr-10 d-none d-md-block"
                    >Masuk</nuxt-link
                  >
                  <nuxt-link to="/register" class="btn btn-primary"
                    >Daftar</nuxt-link
                  >
                </div>
              </div>
            </div>
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
      searchOpen: false,
    }
  },
}
</script>
<style lang="scss">
.app-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: $zindex-navbar-fixed;

  .app-header-root {
    width: 100%;
    padding: 10px 0;
    background-color: $white;
    box-shadow: $box-shadow-sm;

    .app-header-wrapper {
      width: 100%;
      height: 40px;
      display: flex;
    }

    .left {
      width: 240px;
      min-width: 240px;

      @include media-breakpoint-down(md) {
        width: 190px;
        min-width: 190px;
      }
      @include media-breakpoint-down(sm) {
        width: 56px;
        min-width: 56px;
      }

      .left-wrapper {
        display: flex;
        height: 40px;

        .brand {
          display: block;
          margin: auto 0;
          img {
            display: block;
            height: 28px;
            &.logo-only {
              display: none;
              height: 36px;
            }
            @include media-breakpoint-down(sm) {
              display: none;
              &.logo-only {
                display: block;
              }
            }
          }
        }
      }
    }

    .right {
      display: flex;
      margin-left: auto;
      @include media-breakpoint-down(md) {
        &:not(.auth) {
          width: 100%;
          margin-left: 0;
        }
      }

      .right-wrapper {
        display: flex;
      }

      .right-avatar {
        display: block;
        position: relative;
        > .avatar {
          display: block;
          width: 40px;
          height: 40px;
          padding: 2px;
          border: 1px solid $border-color;
          background-color: $white;
          cursor: pointer;

          img {
            display: block;
            width: 100%;
          }
        }

        &:hover {
          color: $white;
          .app-header-profile-dropdown {
            opacity: 1;
            visibility: visible;
          }
        }

        .app-header-profile-dropdown {
          opacity: 0;
          visibility: hidden;
        }
      }

      .right-actions {
        display: flex;
        padding: 5px 0;

        .action-toggle {
          display: block;
          position: relative;
          margin-right: 10px;
          width: 30px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          background-color: $gray-100;
          border-radius: 50%;
          color: $primary;
          transition: 150ms ease-in-out;

          &:hover {
            background-color: $primary;
            color: $white;
          }

          .label {
            display: block;
            position: absolute;
            top: -2px;
            right: -2px;
            height: 16px;
            min-width: 16px;
            font-size: 10px;
            padding: 2px;
            font-weight: $font-weight-bold;
            line-height: 12px;
            background-color: $danger;
            border-radius: 9px;
            color: $white;
            &:empty {
              display: none;
            }
          }
        }
      }

      .right-auth-buttons {
        white-space: nowrap;
        height: 36px;
        padding: 2px 0;
        display: flex;
        @include media-breakpoint-down(md) {
          margin-left: auto;
        }
        .btn {
          font-weight: $font-weight-bold;
          text-transform: uppercase;
          padding: 0;
          line-height: 34px;
          height: 36px;
          width: 100px;
          display: block;
        }
      }
    }
  }
}
</style>
