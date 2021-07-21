const cookieparser = process.server ? require('cookieparser') : undefined

export const getters = {
  auth(state) {
    return state.auth && state.auth.auth
  },
  minitutor(state) {
    return state.auth && state.auth.auth.minitutor
  },
}

export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    try {
      await dispatch('category/fetch')
      if (req.headers.cookie) {
        const parsed = cookieparser.parse(req.headers.cookie)
        await dispatch('auth/check', parsed['api-token'])
      }
    } catch (err) {
      console.log(err)
      // No valid cookie found
    }
  },
}
