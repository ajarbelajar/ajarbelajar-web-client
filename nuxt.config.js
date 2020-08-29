export default {
  mode: 'universal',

  target: 'server',

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
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    '@/assets/fonts/web-icons/style.css',
    '@/assets/fonts/feather/style.css',
    '@/assets/fonts/roboto/style.css',
    '@/assets/scss/theme.scss',
    'izitoast/dist/css/iziToast.css',
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
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
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
    components: ['b-pagination-nav'],
    directives: [],
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
