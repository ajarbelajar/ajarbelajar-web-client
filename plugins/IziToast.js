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
        color: colors.grays_2,
        titleColor: colors.grays._7,
        titleSize: '16px',
        messageColor: colors.grays._5,
        messageSize: '14px',
        icon: 'ft-bell',
        message: 'Hello World!',
        iconColor: colors.primary,
        position: 'topRight',
        transitionIn: 'fadeInLeft',
        transitionInMobile: 'fadeInDown',
        transitionOut: 'fadeOutRight',
        transitionOutMobile: 'fadeOutUp',
        zindex: 99999,
      }

      const stateOption = {
        success: () => ({
          iconColor: colors.success,
          progressBarColor: colors.success,
          icon: 'ft-check-circle',
          title: 'Berhasil',
        }),
        warning: () => ({
          iconColor: colors.warning,
          progressBarColor: colors.warning,
          icon: 'ft-alert-triangle',
          title: 'Warning',
        }),
        danger: () => ({
          iconColor: colors.danger,
          progressBarColor: colors.danger,
          icon: 'ft-x-circle',
          title: 'Error',
        }),
        confirm: (resolve, reject) => ({
          icon: 'ft-help-circle',
          close: false,
          overlay: true,
          progressBar: false,
          timeout: false,
          drag: false,
          displayMode: 'once',
          title: 'Hei',
          message: 'Apa kamu yakin akan hal itu?',
          position: 'center',
          transitionIn: 'fadeInUp',
          transitionInMobile: 'fadeInUp',
          transitionOut: 'fadeOutDown',
          transitionOutMobile: 'fadeOutDown',
          buttons: [
            [
              '<button><b>YA</b></button>',
              function (instance, toast) {
                if (resolve) resolve(instance, toast)
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
              },
              true,
            ],
            [
              '<button>TIDAK</button>',
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
        success(msg = 'Berhasil', customOptions = {}) {
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
        danger(msg = 'Tampaknya ada yang salah', customOptions = {}) {
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
