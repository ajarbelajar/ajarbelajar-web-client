<template>
  <div class="flex fixed top-0 right-0 left-0 z-40 items-center w-full h-16 bg-white border-b shadow">
    <FadeTransition>
      <modal-search v-if="openSearchModal" @close="openSearchModal = false" />
    </FadeTransition>
    <div class="flex-1" :class="{ container }">
      <div class="flex">
        <div class="flex lg:w-60">
          <nuxt-link to="/" class="flex items-center p-3">
            <svg-brand no-text class="block h-7 lg:hidden" />
            <svg-brand class="hidden h-7 lg:block" />
          </nuxt-link>
        </div>

        <div class="flex flex-1 justify-end md:justify-start">
          <div class="flex py-3 lg:pl-3">
            <button class="flex justify-center items-center p-0 w-9 h-9 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full md:justify-between md:px-4 md:w-40 hover:bg-gray-200" @click="openSearchModal = true">
              <div class="hidden md:block">Cari</div>
              <i class="ft ft-search md:text-lg"></i>
            </button>
            <button v-if="!noSidebar" class="flex justify-center items-center p-0 ml-3 w-9 h-9 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full lg:hidden hover:bg-gray-200" @click="$sidebar.display(!$sidebar.open)">
              <i :class="$sidebar.open ? 'ft ft-x' : 'ft ft-menu'"></i>
            </button>
          </div>

          <div v-if="!auth" class="flex p-3 ml-auto">
            <router-link to="/login" class="flex justify-center items-center px-4 h-9 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200">Masuk</router-link>
            <router-link to="/register" class="hover:bg-primary-600 bg-primary-500 flex justify-center items-center px-4 ml-3 h-9 text-sm font-semibold text-white rounded-full">Buat Akun</router-link>
          </div>

          <div v-if="auth" class="flex p-3 md:ml-auto">
            <nuxt-link to="/notifications" class="flex relative justify-center items-center p-0 w-9 h-9 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200">
              <i class="ft ft-bell"></i>
              <span v-if="unreadNotificationCount" class="min-w-4 block absolute top-0 right-0 px-1 h-4 text-xs leading-4 text-center text-white bg-red-600 rounded-full">{{ unreadNotificationCount }}</span>
            </nuxt-link>

            <div class="avatar-toggle-wrapper relative ml-3 w-9 h-9">
              <button class="block p-0 w-9 h-9 rounded-full">
                <v-img class="block w-full h-full rounded-full" :src="auth.avatar" :src-placeholder="$images.avatar" />
              </button>
              <div class="profile-dropdown absolute right-0 top-full mt-3 w-60">
                <span class="bg-primary-600 absolute right-1 -top-1 w-6 h-6 rounded transform rotate-45"></span>
                <div class="relative z-10 p-3 bg-white rounded shadow-lg">
                  <div class="flex p-3">
                    <figure class="block m-auto w-24 h-24 rounded-full">
                      <v-img class="block w-full h-full rounded-full" :src="auth.avatar" :src-placeholder="$images.avatar" />
                    </figure>
                  </div>
                  <h3 class="text-md capitalized truncate w-full font-semibold text-center">{{ auth.name }}</h3>
                  <p class="truncate w-full text-sm text-center text-gray-500">@{{ auth.username }}</p>
                  <div class="pt-3">
                    <nuxt-link to="/dashboard/me" class="flex justify-center items-center p-0 mb-3 w-full h-9 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200">Dasbor Saya</nuxt-link>
                    <nuxt-link to="/dashboard/me/edit" class="flex justify-center items-center p-0 mb-3 w-full h-9 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200">Edit Profil</nuxt-link>
                    <button class="flex items-center py-0 px-4 h-9 text-sm font-semibold text-white bg-red-600 rounded-full hover:bg-red-700" @click="logout">Keluar</button>
                  </div>
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
import { FadeTransition } from 'vue2-transitions'
export default {
  name: 'Navbar',
  components: {
    FadeTransition
  },
  props: {
    container: {
      type: Boolean,
      default: false
    },
    noSidebar: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      openSearchModal: false
    }
  },
  computed: {
    auth() {
      return this.$store.getters.auth
    },
    unreadNotificationCount() {
      return this.$store.getters.unreadNotifications.length
    }
  },
  methods: {
    logout(e) {
      e.preventDefault();
      this.$toast.confirm.danger(
        async () => {
          try {
            await this.$store.dispatch('auth/logout')
            window.location.reload()
          } catch (e) {
            this.$toast.danger('Logout gagal!')
          }
        },
        null,
        { message: 'Anda yakin ingin keluar?' }
      )
    }
  },
}
</script>

<style lang="css" scoped>
.profile-dropdown {
  opacity: 0;
  visibility: hidden;
  transition: opacity 250ms ease-out, visibility 250ms ease-out;
}

.avatar-toggle-wrapper:hover .profile-dropdown {
  opacity: 1;
  visibility: visible;
}
</style>
