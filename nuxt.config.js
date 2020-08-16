export default {
  mode: 'universal',

  target: 'server',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    '@/assets/fonts/web-icons/style.css',
    '@/assets/fonts/socicon/style.css',
    '@/assets/fonts/roboto/style.css',
    '@/assets/scss/theme.scss',
  ],

  plugins: [{ src: '~/plugins/ApiErrorResponse.js', ssr: true }],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/style-resources'],

  axios: {
    baseURL: process.env.BASE_API_URL || 'http://127.0.0.1:8000/api',
  },

  styleResources: {
    scss: ['@/assets/scss/_vars.scss'],
  },

  build: {},
}
