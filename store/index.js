const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    auth: null,
  }
}

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { req, app }) {
    let auth = null

    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        app.$axios.setToken(parsed['api-token'], 'Bearer')
        auth = await app.$axios.$get('/user')
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setAuth', auth)
  },
}
