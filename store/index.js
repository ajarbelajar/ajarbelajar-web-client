const cookieparser = process.server ? require('cookieparser') : undefined

export const getters = {
  auth(state) {
    return state.auth && state.auth.auth
  },
  minitutor(state) {
    return state.auth && state.auth.auth.minitutor
  }
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req, app }) {
    try {
      if (req.headers.cookie) {
        const parsed = cookieparser.parse(req.headers.cookie)
        await dispatch('auth/check', parsed['api-token'])
      }
    } catch (err) {
      // No valid cookie found
    }
  },
}
