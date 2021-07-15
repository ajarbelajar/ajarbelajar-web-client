export default {
  head: {
    title: 'ab-nuxt-v2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@fontsource/roboto',
    '~/assets/scss/app.scss'
  ],

  plugins: [
    { src: '~/plugins/Axios.js', ssr: true },
    { src: '~/plugins/ApiErrorResponse.js', ssr: true }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  modules: [
    ['nuxt-buefy', { css: false, materialDesignIcons: true }],
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/toast'
  ],

  axios: {
    baseURL: process.env.BASE_API_URL || 'http://localhost/api',
    progress: false,
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  styleResources: {
    sass: ['@/assets/scss/vars.scss'],
    scss: ['@/assets/scss/vars.scss'],
  },

  build: {
  }
}
