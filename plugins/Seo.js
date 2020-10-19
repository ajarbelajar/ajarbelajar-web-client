import Vue from 'vue'
import pathMatch from 'path-match'

const route = pathMatch({
  sensitive: false,
  strict: false,
  end: true,
})

Vue.mixin({
  methods: {
    $seo() {
      const seos = this.$store.getters['seo/seos']
      let data
      if (seos.length) {
        seos.forEach((seo) => {
          const match = route(seo.path)
          if (match(this.$route.path) !== false) {
            data = seo
          }
        })
      }
      if (!data) {
        return {}
      }
      return {
        title: data.title || '',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: data.description || '',
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: data.title || '',
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: data.description || '',
          },
        ],
      }
    },
  },
})
