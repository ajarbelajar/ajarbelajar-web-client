const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      primary: colors.indigo,
    },
    fill: theme => ({
      'brand': theme('colors.primary.600'),
      'brand-dark': theme('colors.gray.700'),
      'brand-light': theme('colors.gray.100'),
    }),
    stroke: theme => ({
      'brand': theme('colors.primary.600'),
      'brand-dark': theme('colors.gray.700'),
      'brand-light': theme('colors.gray.100'),
    }),
    extend: {
      transitionProperty: {
        'spacing': 'margin, padding',
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
