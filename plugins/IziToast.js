import Vue from 'vue'
import iziToast from 'izitoast'

Vue.mixin({
  computed: {
    $toast() {
      const colors = {
        primary: '#677ae4',
        success: '#11c26d',
        danger: '#ff4c52',
        warning: '#ffcd17',
        grays: {
          _1: '#f3f7f9',
          _2: '#e4eaec',
          _3: '#ccd5db',
          _4: '#a3afb7',
          _5: '#76838f',
          _6: '#526069',
          _7: '#37474f',
          _8: '#263238',
          _9: '#212529',
        },
      }

      const options = {
        progressBarColor: colors.primary,
        theme: 'light',
        color: '#FFFFFF',
        titleColor: colors.grays._7,
        titleSize: '16px',
        messageColor: colors.grays._5,
        messageSize: '14px',
        icon: 'wb-bell',
        message: 'Hello World!',
        iconColor: colors.primary,
        position: 'bottomCenter',
        transitionIn: 'fadeInUp',
        transitionInMobile: 'fadeInUp',
        transitionOut: 'fadeOutDown',
        transitionOutMobile: 'fadeOutDown',
        zindex: 9999,
      }

      const stateOption = {
        success: () => ({
          iconColor: colors.success,
          progressBarColor: colors.success,
          icon: 'ion-md-checkmark-circle-outline',
          title: 'Success',
        }),
        warning: () => ({
          iconColor: colors.warning,
          progressBarColor: colors.warning,
          icon: 'ion-md-warning',
          title: 'Warning',
        }),
        danger: () => ({
          iconColor: colors.danger,
          progressBarColor: colors.danger,
          icon: 'ion-md-close-circle-outline',
          title: 'Error',
        }),
        confirm: (resolve, reject) => ({
          icon: 'ion-md-help-circle-outline',
          close: false,
          overlay: true,
          progressBar: false,
          timeout: false,
          drag: false,
          displayMode: 'once',
          title: 'Hey',
          message: 'Are you sure about that?',
          position: 'center',
          buttons: [
            [
              '<button><b>YES</b></button>',
              function (instance, toast) {
                if (resolve) resolve(instance, toast)
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
              },
              true,
            ],
            [
              '<button>NO</button>',
              function (instance, toast) {
                if (reject) reject(instance, toast)
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
              },
            ],
          ],
        }),
      }

      return {
        show(msg = 'Welcome!', customOptions = {}) {
          iziToast.show({
            ...options,
            message: msg,
            ...customOptions,
          })
        },
        success(msg = 'Success', customOptions = {}) {
          iziToast.success({
            ...options,
            ...stateOption.success(),
            message: msg,
            ...customOptions,
          })
        },
        warning(msg = 'Warning', customOptions = {}) {
          iziToast.warning({
            ...options,
            ...stateOption.warning(),
            message: msg,
            ...customOptions,
          })
        },
        danger(msg = 'Someting wrong', customOptions = {}) {
          iziToast.error({
            ...options,
            ...stateOption.danger(),
            message: msg,
            ...customOptions,
          })
        },
        confirm: {
          show(resolve = null, reject = null, customOptions = {}) {
            iziToast.question({
              ...options,
              ...stateOption.confirm(resolve, reject),
              ...customOptions,
            })
          },
          success(resolve = null, reject = null, customOptions = {}) {
            iziToast.question({
              ...options,
              ...stateOption.success(),
              ...stateOption.confirm(resolve, reject),
              ...customOptions,
            })
          },
          warning(resolve = null, reject = null, customOptions = {}) {
            iziToast.question({
              ...options,
              ...stateOption.warning(),
              ...stateOption.confirm(resolve, reject),
              ...customOptions,
            })
          },
          danger(resolve = null, reject = null, customOptions = {}) {
            iziToast.question({
              ...options,
              ...stateOption.danger(),
              ...stateOption.confirm(resolve, reject),
              ...customOptions,
            })
          },
        },
      }
    },
  },
})
