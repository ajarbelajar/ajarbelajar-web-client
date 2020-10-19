import Echo from 'laravel-echo'
const cookieparser = process.server ? require('cookieparser') : undefined

const echo = (token) => {
  require('pusher-js')
  return new Echo({
    broadcaster: 'pusher',
    authEndpoint: 'http://ajarbelajar.site/api/broadcast',
    auth: {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
    key: '9dd48f6db8303f2f8bd6',
    cluster: 'ap1',
    forceTLS: true,
  })
}

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

    await dispatch('category/fetch')
    await dispatch('seo/fetch')
  },
  nuxtClientInit({ dispatch }) {
    dispatch('listenNotification')
  },
  listenNotification({ state, commit }) {
    if (state.token) {
      echo(state.token)
        .private('App.User.' + state.auth.id)
        .notification((notif) => {
          commit('setAuth', {
            ...state.auth,
            notification_count: state.auth.notification_count + 1,
          })
          commit('notification/push', notif)
        })
    }
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
