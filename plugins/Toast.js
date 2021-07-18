import iziToast from 'izitoast'
import tcolors from 'tailwindcss/colors'

export default function (contex, inject) {
  const colors = {
    primary: tcolors.indigo[600],
    success: tcolors.green[600],
    danger: tcolors.red[600],
    warning: tcolors.yellow[600],
    grays: tcolors.gray,
  }

  const options = {
    progressBarColor: colors.primary,
    theme: 'light',
    color: colors.grays[200],
    titleColor: colors.grays[700],
    titleSize: '16px',
    messageColor: colors.grays[500],
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
      iconColor: colors.primary,
      progressBarColor: colors.primary,
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

  inject('toast', {
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
  })
}
