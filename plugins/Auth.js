import Vue from 'vue'

Vue.mixin({
  computed: {
    $auth() {
      return this.$store.state.auth
    },
  },
})
