<template>
  <div class="app-notif">
    <div class="app-notif__head">
      <div class="app-notif__title">
        <i class="wb-bell"></i>
        Notifikasi
        <span class="badge">{{ $auth.notification_count || '' }}</span>
      </div>
      <div class="app-notif__actions">
        <button
          class="btn btn-default btn-outline btn-sm"
          @click="$emit('close')"
        >
          X
        </button>
      </div>
    </div>
    <div v-if="clicked" class="click-loading">
      <div class="loader-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#ccd5db"
            stroke-width="12"
            fill="none"
          ></circle>
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#677ae4"
            stroke-width="12"
            stroke-linecap="round"
            fill="none"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;180 50 50;720 50 50"
              keyTimes="0;0.5;1"
            ></animateTransform>
            <animate
              attributeName="stroke-dasharray"
              repeatCount="indefinite"
              dur="1s"
              values="25.132741228718345 226.1946710584651;170.90264035528475 80.4247719318987;25.132741228718345 226.1946710584651"
              keyTimes="0;0.5;1"
            ></animate>
          </circle>
        </svg>
      </div>
    </div>
    <div v-if="!loading && notifications.length" class="app-notif__action">
      <button
        class="btn btn-default btn-sm btn-outline btn-block"
        @click="readAll"
      >
        Tandai semua telah dibaca.
      </button>
    </div>
    <div class="app-notif__body">
      <div
        ref="elSideScroll"
        class="app-notif__body-scroll"
        :class="{ loading }"
      >
        <div v-if="loading" class="app-notif__loading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#ccd5db"
              stroke-width="12"
              fill="none"
            ></circle>
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#677ae4"
              stroke-width="12"
              stroke-linecap="round"
              fill="none"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;180 50 50;720 50 50"
                keyTimes="0;0.5;1"
              ></animateTransform>
              <animate
                attributeName="stroke-dasharray"
                repeatCount="indefinite"
                dur="1s"
                values="25.132741228718345 226.1946710584651;170.90264035528475 80.4247719318987;25.132741228718345 226.1946710584651"
                keyTimes="0;0.5;1"
              ></animate>
            </circle>
          </svg>
        </div>
        <ul v-else class="list-group app-notif__list">
          <app-notification-list
            v-for="notif in notifications"
            :key="notif.id"
            :notification="notif"
            @loading="handleClick"
            @close="$emit('close')"
          >
          </app-notification-list>
        </ul>
        <div v-if="!loading && !notifications.length" class="empty-notif">
          <span class="icon"><i class="wb-bell"></i></span>
          <span class="text">Belum ada notifikasi!</span>
        </div>
      </div>
    </div>
    <div v-if="!loading && notifications.length" class="app-notif__foot">
      <button
        class="btn btn-danger btn-block btn-label btn-sm btn-outline"
        @click="deleteAll"
      >
        Hapus semua notifikasi.
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
const Ps = process.client ? require('perfect-scrollbar').default : undefined
export default {
  data() {
    return {
      elSideScroll: null,
      elSideScrollStyle: null,
      sidePs: null,
      loading: true,
      clicked: false,
    }
  },
  computed: {
    ...mapGetters({
      fetched: 'notification/fetched',
      notifications: 'notification/notifications',
    }),
  },
  beforeDestroy() {
    this.destroyScroll()
  },
  mounted() {
    if (this.fetched) {
      this.loading = false
      setTimeout(this.initScroll, 100)
    } else {
      this.$store
        .dispatch('notification/fetch')
        .then(() => {
          this.loading = false
          setTimeout(this.initScroll, 100)
        })
        .catch((e) => {
          this.$emit('close')
        })
    }
  },
  methods: {
    readAll() {
      this.clicked = true
      this.$axios
        .$get('notifications/read')
        .then(() => {
          this.$store.commit('notification/readAll')
          this.$store.commit('setAuth', {
            ...this.$auth,
            notification_count: 0,
          })
          this.clicked = false
        })
        .catch((err) => {
          this.$toast.danger(this.$errorMessage(err))
          this.clicked = false
        })
    },
    deleteAll() {
      this.$toast.confirm.danger(
        () => {
          this.clicked = true
          this.$axios
            .$delete('notifications')
            .then(() => {
              this.$store.commit('notification/set', [])
              this.$store.commit('setAuth', {
                ...this.$auth,
                notification_count: 0,
              })
              this.clicked = false
            })
            .catch((err) => {
              this.$toast.danger(this.$errorMessage(err))
              this.clicked = false
            })
        },
        null,
        { message: 'Anda yakin ingin menghapus semua notifikasi?' }
      )
    },
    handleClick(bool) {
      this.clicked = bool
    },
    initScroll() {
      this.elSideScroll = this.$refs.elSideScroll
      this.elSideScrollStyle = window.getComputedStyle(this.elSideScroll)
      this.sidebarScroll()
      window.addEventListener('resize', this.sidebarScroll)
    },
    destroyScroll() {
      if (this.sidePs) {
        this.sidePs.destroy()
        this.sidePs = null
        window.removeEventListener('resize', this.sidebarScroll)
      }
    },
    sidebarScroll() {
      if (this.elSideScrollStyle.getPropertyValue('overflow-y') !== 'auto') {
        if (!this.sidePs) {
          this.sidePs = new Ps(this.elSideScroll)
        }
      } else if (this.sidePs) {
        this.sidePs.destroy()
        this.sidePs = null
      }
    },
  },
}
</script>
<style lang="scss">
.action-toggle {
  cursor: pointer;
}
.click-loading {
  display: block;
  position: absolute;
  z-index: 5;
  background-color: rgba($white, 0.5);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  .loader-wrap {
    display: block;
    margin: auto;
    svg {
      width: 60px;
    }
  }
}
.app-notif {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 320px;
  height: 100vh;
  z-index: $zindex-fixed;
  background-color: $gray-100;
  box-shadow: $box-shadow;
  overflow: hidden;
  @include media-breakpoint-down(sm) {
    width: 100%;
  }

  &__head {
    width: 100%;
    height: 60px;
    background-color: $white;
    box-shadow: $box-shadow-sm;
    display: flex;
    padding: 0 $spacer/2;
  }
  &__title {
    font-size: 18px;
    line-height: 18px;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
    vertical-align: middle;
    margin: auto 0;
    i {
      color: $primary;
    }

    .badge {
      display: inline-block;
      padding: 0;
      min-width: 16px;
      height: 16px;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      background-color: $danger;
      color: $white;
      vertical-align: middle;
      &:empty {
        display: none;
      }
    }
  }

  &__actions {
    margin: auto;
    margin-right: 0;
  }

  &__action {
    padding: $spacer/2;
    height: 52px;
  }
  &__foot {
    padding: $spacer/2;
    height: 52px;
  }

  &__body {
    height: calc(100% - 52px - 52px - 60px);
    display: flex;
    flex-direction: column;
    position: relative;
    @include perfect-scrollbar-ver-size(4px);
    @include perfect-scrollbar-skin($gray-400);
    .ps__rail-y {
      left: 0 !important;
      right: auto !important;
      z-index: 20;
    }
    .ps__scrollbar-x-rail {
      display: none;
    }
    &-scroll {
      position: relative;
      height: 100%;
      width: 100%;
      overflow: hidden;
      @include media-breakpoint-down(sm) {
        overflow-y: auto !important;
      }
      &.loading {
        display: flex;
        flex-direction: column;
      }
    }
  }
  &__loading {
    margin: auto;
    svg {
      width: 60px;
    }
  }

  &__list {
    margin: 0;
    padding: 0;
    background-color: transparent;
  }
}

.empty-notif {
  display: block;
  padding: $spacer/2 0;
  padding-top: 25vh;
  text-align: center;
  line-height: 1;
  .icon {
    display: block;
    font-size: 56px;
    color: $gray-400;
    margin-bottom: $spacer/2;
  }
  .text {
    display: block;
    font-size: 18px;
    font-weight: $font-weight-bold;
    color: $gray-300;
    text-transform: uppercase;
  }
}
</style>
