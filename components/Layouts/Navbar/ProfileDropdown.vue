<template>
  <div class="app-navbar-profile-dropdown box p-0">
    <span class="caret"></span>
    <div class="app-navbar-profile-dropdown__wrapper box is-shadowless">
      <div class="p-3">
        <figure class="image is-96x96 m-auto">
          <img class="is-rounded" :src="auth.avatar">
        </figure>
      </div>
      <div class="has-text-centered mb-3">
        <h3 class="is-size-5 is-capitalized">{{ auth.name }}</h3>
        <p class="is-size-6 has-text-grey">@{{ auth.username }}</p>
      </div>
      <div class="pt-5">
        <b-button expanded type="is-rounded mb-2">Dasbor Saya</b-button>
        <b-button expanded type="is-rounded mb-5">Edit Profil</b-button>
        <b-button type="is-rounded is-danger">Keluar</b-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfileDropdown',
  computed: {
    auth() {
      return this.$store.getters.auth
    }
  }
}
</script>
<style lang="scss">
.app-navbar-profile-dropdown {
  opacity: 1;
  visibility: visible;
  display: block;
  transition: opacity 250ms ease-out, visibility 250ms ease-out;
  position: absolute;
  width: 280px;
  background-color: $white;
  right: 0;
  margin-top: 15px;
  z-index: 20;
  text-align: left;

  .caret {
    position: absolute;
    z-index: -1;
    background-color: $primary;
    width: 20px;
    height: 20px;
    right: 8px;
    top: -5px;
    transform: rotate(45deg);
    border-radius: 3px;
  }

  &__wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 200px;
    background-color: $white;
  }
}
</style>
