<template>
  <div class="b-navbar-lg">
    <div class="container">
      <div class="is-flex px-3">

        <div class="brand-wrap brand-lg is-flex-desktop">
          <nuxt-link to="/home" class="brand">
            <img src="@/assets/logo/logo-text.svg" alt="Logo ajarbelajar" />
          </nuxt-link>
        </div>
        <div class="brand-wrap brand-sm is-hidden-desktop">
          <nuxt-link to="/home" class="brand">
            <img src="@/assets/logo/logo.svg" alt="Logo ajarbelajar" />
          </nuxt-link>
        </div>

        <div class="menu-wrap">
          <b-button icon-right="magnify" type="is-rounded" class="has-text-dark search-button mr-auto is-flex-desktop" @click="showSearchModal = true">Apa yang anda cari?</b-button>

          <div class="icon-toggle-wrap is-hidden-desktop ml-3">
            <b-button icon-left="menu" type="is-primary is-light" class="icon-toggle"></b-button>
          </div>
          <div class="icon-toggle-wrap is-hidden-desktop">
            <b-button icon-left="magnify" type="is-primary is-light" class="icon-toggle" @click="showSearchModal = true"></b-button>
          </div>

          <div v-if="$store.getters.auth" class="icon-toggle-wrap">
            <b-button icon-left="bell" type="is-primary is-light" class="icon-toggle">3</b-button>
          </div>

          <div v-if="$store.getters.auth" class="avatar-toggle-wrap">
            <button class="button is-primary is-outlined avatar-toggle">
              <img :src="$store.getters.auth.avatar" />
            </button>
            <ProfileDropdown class="app-navbar-profile-dropdown" />
          </div>

          <b-button v-if="!$store.getters.auth" tag="nuxt-link" to="/login" type="is-rounded"  class="ml-2 has-text-weight-bold ml-auto action-button">Masuk</b-button>
          <b-button v-if="!$store.getters.auth" tag="nuxt-link" to="/register" type="is-primary is-rounded" class="ml-2 has-text-weight-bold action-button">Daftar</b-button>
        </div>
      </div>
    </div>

    <b-modal v-model="showSearchModal" :width="768">
      <ModalSearch />
    </b-modal>
  </div>
</template>

<script>
import ProfileDropdown from './ProfileDropdown'
import ModalSearch from './ModalSearch'
export default {
  name: 'Navbar',
  components: {
    ProfileDropdown,
    ModalSearch
  },
  data() {
    return {
      showSearchModal: false
    }
  }
}
</script>

<style lang="scss">
  .b-navbar-lg  {
    position: fixed;
    display: flex;
    z-index: 35;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: $white;
    padding: 0;

    .brand-wrap {
      padding: 10px 0;
      &.brand-lg {
        width: 240px;
        display: none;
        img {
          height: 28px;
        }
      }
      &.brand-sm{
        display: flex;
        img {
          height: 34px;
        }
      }
      .brand {
        display: flex;
        img {
          display: block;
          margin: auto 0;
        }
      }
    }

    .menu-wrap {
      flex: 1;
      padding: 10px 0;
      display: flex;
      justify-content: flex-end;

      .search-button {
        width: 240px;
        height: 36px;
        justify-content: space-between;
        display: none;
        .icon {
          font-size: 1.5em;
        }
      }

      .icon-toggle-wrap {
        padding: 3px;
        .icon-toggle {
          display: flex;
          padding: 0;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          position: relative;
          span:not(.icon) {
            display: block;
            position: absolute;
            top: -4px;
            right: -4px;
            height: 16px;
            min-width: 16px;
            font-size: 10px;
            padding: 2px;
            font-weight: bold;
            line-height: 12px;
            background-color: $danger;
            border-radius: 9px;
            color: $white;
            &:empty {
              display: none;
            }
          }
          .icon {
            display: block;
            margin: auto !important;
            font-size: 16px;
          }
        }
      }

      .avatar-toggle-wrap {
        margin-left: 10px;
        position: relative;
        .avatar-toggle {
          padding: 2px;
          width: 36px;
          height: 36px;
          border-radius: 36px;
          img {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 100%;
          }
        }

        &:hover {
          .app-navbar-profile-dropdown {
            opacity: 1;
            visibility: visible;
          }
        }
        .app-navbar-profile-dropdown {
          opacity: 0;
          visibility: hidden;
        }
      }

      .action-button {
        height: 36px;
      }
    }
  }
</style>
