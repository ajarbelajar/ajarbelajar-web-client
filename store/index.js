const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    auth: null,
    token: null,
  }
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { req, app }) {
    let auth = null
    let token = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        app.$axios.setToken(parsed['api-token'], 'Bearer')
        auth = await app.$axios.$get('account/profile')
        token = parsed['api-token']
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setAuth', auth)
    commit('setToken', token)
  }
}

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  },
  setToken(state, token) {
    state.token = token
  },
}
