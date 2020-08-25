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
    '@/assets/fonts/feather/style.css',
    '@/assets/fonts/roboto/style.css',
    '@/assets/scss/theme.scss',
    'izitoast/dist/css/iziToast.css',
    'video.js/dist/video-js.css',
  ],

  plugins: [
    { src: '~/plugins/Axios.js', ssr: true },
    { src: '~/plugins/Auth.js', ssr: true },
    { src: '~/plugins/ApiErrorResponse.js', ssr: true },
    { src: '~/plugins/Sidebar.js', ssr: true },
    { src: '~/plugins/IziToast.js', ssr: false },
    { src: '~/plugins/LazyImage.js', ssr: true },
    { src: '~/plugins/Sticky.js', ssr: false },
    { src: '~/plugins/Moment.js', ssr: true },
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/style-resources'],

  axios: {
    baseURL: process.env.BASE_API_URL || 'http://127.0.0.1:8000/api',
  },

  styleResources: {
    scss: ['@/assets/scss/_vars.scss'],
  },

  build: {
    vendor: [
      'axios',
      'cookieparser',
      'form-data',
      'fuse.js',
      'moment',
      'moment/locale/id',
      'vue-moment',
    ],
  },
}
