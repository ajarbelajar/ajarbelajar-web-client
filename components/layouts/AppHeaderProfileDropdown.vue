<template>
  <div class="app-profile-dropdown">
    <span class="caret"></span>
    <div class="app-profile-dropdown__wrapper">
      <div class="card m-0">
        <div class="card-header card-header-transparent py-30 text-center">
          <nuxt-link
            class="avatar avatar-100 bg-white mb-10 m-xs-0 img-bordered"
            to="/dashboard/me/activity"
          >
            <v-lazy-image
              :src="$auth.avatar"
              :src-placeholder="$images.avatar"
              :alt="$auth.username"
            />
          </nuxt-link>
          <div class="font-size-20 text-capitalize">{{ $auth.name }}</div>
          <div class="font-size-14 grey-400 text-lowercase">
            {{ '@' + $auth.username }}
          </div>
        </div>
        <div class="card-body">
          <nuxt-link
            to="/dashboard/me/activity"
            class="btn btn-inverse btn-block"
            >Dashboard</nuxt-link
          >
          <nuxt-link to="/dashboard/me/edit" class="btn btn-inverse btn-block"
            >Edit profile</nuxt-link
          >
        </div>
        <div class="card-footer card-footer-transparent">
          <button
            class="btn btn-wide btn-sm btn-danger"
            @click.prevent="$logout"
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app-profile-dropdown {
  opacity: 1;
  visibility: visible;
  display: block;
  transition: opacity 250ms ease-out, visibility 250ms ease-out;
  position: absolute;
  width: 300px;
  background-color: $white;
  box-shadow: $box-shadow;
  right: 0;
  margin-top: 15px;
  z-index: 20;
  border-radius: $border-radius-lg;
  color: $text-color;
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
    border-radius: $border-radius;
  }
  &__wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: $white;
    border-radius: $border-radius;
  }
}
</style>
