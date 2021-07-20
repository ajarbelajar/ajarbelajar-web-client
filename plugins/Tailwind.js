import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import { TAlert } from 'vue-tailwind/dist/components'

const settings = {
  't-alert': {
    component: TAlert,
    props: {
      fixedClasses: {
        wrapper: 'relative flex items-center p-4 border-l-4  shadow-sm',
        body: 'flex-grow',
        close:
          'absolute relative flex items-center justify-center ml-4 flex-shrink-0 w-6 h-6 transition duration-100 ease-in-out rounded  focus:ring-2 focus:ring-primary-500 focus:outline-none focus:ring-opacity-50',
        closeIcon: 'fill-current h-4 w-4',
      },
      classes: {
        wrapper: 'bg-primary-50 border-primary-500',
        body: 'text-primary-700',
        close: 'text-primary-500 hover:bg-primary-200',
      },
      variants: {
        error: {
          wrapper: 'bg-red-50 border-red-500',
          body: 'text-red-700',
          close: 'text-red-500 hover:bg-red-200',
        },
      },
    },
  },
  // 't-button': {
  //   component: TButton,
  //   props: {
  //     fixedClasses: 'leading-none focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
  //     classes: 'inline-flex bg-gray-100 hover:bg-gray-200 text-gray-700 rounded',
  //     variants: {}
  //   }
  // }
}

Vue.use(VueTailwind, settings)
