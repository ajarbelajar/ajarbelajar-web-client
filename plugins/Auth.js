import Vue from 'vue'
const Cookie = process.client ? require('js-cookie') : undefined

Vue.mixin({
  computed: {
    $auth() {
      return this.$store.state.auth
    },
  },
  methods: {
    $logout() {
      this.$toast.confirm.danger(
        () => {
          Cookie.remove('api-token')
          window.location.reload()
        },
        null,
        { message: 'Anda yakin ingin keluar?' }
      )
    },
  },
})
