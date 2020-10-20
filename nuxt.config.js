export default {
  mode: 'universal',

  target: 'server',

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    baseApiUrl: process.env.BASE_API_URL || 'http://127.0.0.1:8000/api',
    pusherKey: process.env.PUSHER_KEY || '',
    pusherAuthEndpoint: process.env.PUSHER_AUTH_ENDPOINT || '/broadcast',
  },

  loading: {
    color: '#677ae4',
  },

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
      {
        hid: 'og:title',
        name: 'og:title',
        content: process.env.npm_package_name || '',
      },
      {
        hid: 'og:description',
        name: 'og:description',
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
    'izitoast/dist/css/iziToast.css',
    'swiper/css/swiper.css',
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
    { src: '~/plugins/Editorjs', ssr: false },
    { src: '~/plugins/Editorjs/compiler', ssr: true },
    { src: '~/plugins/ClickOutside', ssr: false },
    { src: '~/plugins/Seo', ssr: true },
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
    'nuxt-client-init-module',
  ],

  axios: {
    baseURL: process.env.BASE_API_URL || 'http://127.0.0.1:8000/api',
    progress: false,
  },

  styleResources: {
    scss: ['@/assets/scss/_vars.scss'],
  },

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    components: ['b-pagination-nav', 'b-sidebar'],
    directives: ['v-b-toggle'],
    componentPlugins: [],
    directivePlugins: [],
  },

  // build: {
  //   vendor: [
  //     'axios',
  //     'cookieparser',
  //     'form-data',
  //     'fuse.js',
  //     'moment',
  //     'moment/locale/id',
  //     'vue-moment',
  //   ],
  // },
}
