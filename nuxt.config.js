import colors from 'tailwindcss/colors'

export default {
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL,
    baseApiUrl: process.env.BASE_API_URL,
    pusherKey: process.env.PUSHER_KEY,
    algoliaAppId: process.env.ALGOLIA_APP_ID,
    algoliaApiKey: process.env.ALGOLIA_API_KEY,
    algoliaIndexName: process.env.ALGOLIA_INDEX_NAME,
    analyticsTrackingDd: process.env.ANALYTICS_TRACKING_ID,
    production: process.env.NODE_ENV === 'production',
  },

  loading: {
    color: colors.indigo['600'],
  },

  head: {
    title: 'AjarBelajar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'AjarBelajar',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  serverMiddleware: [],

  css: [
    '~/assets/fonts/feather/style.css',
    'izitoast/dist/css/iziToast.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
  ],

  plugins: [
    { src: '~/plugins/Moment.js', ssr: true },
    { src: '~/plugins/Toast.js', ssr: false },
    { src: '~/plugins/Editorjs', ssr: false },
    { src: '~/plugins/Axios.js', ssr: true },
    { src: '~/plugins/ApiErrorResponse.js', ssr: true },
    { src: '~/plugins/ScreenSize.js', ssr: true },
    { src: '~/plugins/Sidebar.js', ssr: true },
    { src: '~/plugins/Image.js', ssr: true },
    { src: '~/plugins/InfiniteLoading', ssr: false },
    { src: '~/plugins/StarRating', ssr: false },
    { src: '~/plugins/ga', ssr: false },
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', 'nuxt-client-init-module'],

  axios: {
    baseURL: process.env.BASE_API_URL || 'http://localhost/api',
    progress: false,
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {},
}
