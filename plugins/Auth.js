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
          this.$store.commit('setAuth', null)
          this.$toast.success('Berhasil keluar.')
        },
        null,
        { message: 'Anda yakin ingin keluar?' }
      )
    },
  },
})
