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
        auth = await app.$axios.$get('/user')
        token = parsed['api-token']
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setAuth', auth)
    commit('setToken', token)

    if (auth) {
      commit('notification/set', auth.notifications)
      if (auth.minitutor) {
        commit('request_playlist/set', auth.minitutor.request_playlists)
        commit('request_article/set', auth.minitutor.request_articles)
      }
    }

    await dispatch('seo/fetch')
  },
  nuxtClientInit({ dispatch }) {
    dispatch('notification/listen')
  },
}

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth
  },
  setToken(state, token) {
    state.token = token
  },
}
