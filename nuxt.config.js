import axios from 'axios'

const baseApiUrl = process.env.BASE_API_URL || 'http://127.0.0.1:8000/api'

export default {
  // mode: 'universal',

  target: 'server',

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    baseApiUrl: process.env.BASE_API_URL || 'http://127.0.0.1:8000/api',
    pusherKey: process.env.PUSHER_KEY || '',
    pusherAuthEndpoint: process.env.PUSHER_AUTH_ENDPOINT || '/broadcast',
    analytics_tracking_id: process.env.ANALYTICS_TRACKING_ID || 'UA-XXXXXXXX-X',
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
    { src: '~/plugins/Image', ssr: true },
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
    { src: '~/plugins/InfiniteLoading', ssr: false },
    { src: '~/plugins/ga', ssr: false },
    { src: '~/plugins/StarRating', ssr: false },
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-client-init-module',
  ],

  axios: {
    baseURL: process.env.BASE_API_URL || 'http://127.0.0.1:8000/api',
    progress: false,
  },

  styleResources: {
    scss: ['@/assets/scss/_vars.scss'],
  },

  robots: [
    {
      UserAgent: '*',
      Allow: '/',
      Disallow: ['/users', '/images'],
    },
    {
      Sitemap: process.env.BASE_URL + '/sitemap.xml',
    },
  ],

  sitemap: {
    hostname: process.env.BASE_URL || 'http://localhost:3000',
    path: '/sitemap.xml',
    sitemaps: [
      {
        path: '/sitemap-static.xml',
        routes: [
          { url: '/', priority: 1.0 },
          { url: '/home', priority: 0.95 },
          { url: '/playlists', priority: 0.9 },
          { url: '/articles', priority: 0.9 },
          { url: '/categories', priority: 0.85 },
          { url: '/minitutors', priority: 0.85 },
          { url: '/join-minitutor', priority: 0.8 },
          { url: '/login', priority: 0.8 },
          { url: '/register', priority: 0.8 },
        ],
        exclude: ['/**'],
      },
      {
        path: '/sitemap-page.xml',
        routes: async () => {
          try {
            const { data } = await axios.get(`${baseApiUrl}/sitemap/pages`)
            return data.map((item) => {
              return {
                url: `/pages/${item.slug}`,
                priority: 0.6,
              }
            })
          } catch (e) {}
          return []
        },
        exclude: ['/**'],
      },
      {
        path: '/sitemap-playlist.xml',
        routes: async () => {
          try {
            const { data } = await axios.get(`${baseApiUrl}/sitemap/playlists`)
            return data.map((item) => {
              return {
                url: `/playlists/${item.slug}`,
                priority: 0.55,
              }
            })
          } catch (e) {}
          return []
        },
        exclude: ['/**'],
      },
      {
        path: '/sitemap-article.xml',
        routes: async () => {
          try {
            const { data } = await axios.get(`${baseApiUrl}/sitemap/articles`)
            return data.map((item) => {
              return {
                url: `/articles/${item.slug}`,
                priority: 0.55,
              }
            })
          } catch (e) {}
          return []
        },
        exclude: ['/**'],
      },
      {
        path: '/sitemap-minitutor.xml',
        routes: async () => {
          try {
            const { data } = await axios.get(`${baseApiUrl}/sitemap/minitutors`)
            return data.map((item) => {
              return {
                url: `/minitutors/${item.username}`,
                priority: 0.5,
              }
            })
          } catch (e) {}
          return []
        },
        exclude: ['/**'],
      },
      {
        path: '/sitemap-category.xml',
        routes: async () => {
          try {
            const { data } = await axios.get(`${baseApiUrl}/sitemap/categories`)
            return data.map((item) => {
              return {
                url: `/categories/${item.slug}`,
                priority: 0.45,
              }
            })
          } catch (e) {}
          return []
        },
        exclude: ['/**'],
      },
    ],
  },

  build: {
    extractCSS: false,
  },
}
