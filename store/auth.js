const Cookie = process.client ? require('js-cookie') : undefined

export const state = () => ({
  auth: null,
  token: null
})

export const actions = {
  check({ commit }, token) {
    if(token) {
      return this.$axios.$get('account/profile', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(res => {
        commit('setAuth', res.auth)
        commit('setToken', token)
      })
    }
  },
  login({ commit }, payload) {
    return this.$axios.$post('auth/login', payload)
      .then((res) => {
        commit('setAuth', res.auth)
        commit('setToken', res.token)
        return res
      })
  },
  register({ commit }, payload) {
    return this.$axios.$post('auth/register', payload)
      .then((res) => {
        commit('setAuth', res.auth)
        commit('setToken', res.token)
        return res
      })
  },
  logout({ commit }) {
    return this.$axios.$delete('account/logout')
      .then((res) => {
        commit('setAuth', null)
        commit('removeToken')
        return res
      })
  },
  forgetPassword(_, payload) {
    return this.$axios.$post('auth/password', payload)
  },
  resetPassword(_, payload) {
    return this.$axios.$put('auth/password', payload)
  },
  checkResetPasswordToken(_, params) {
    return this.$axios.$get('auth/password', { params })
  }
}

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth || null
  },
  setToken(state, token) {
    if(token && Cookie) {
      Cookie.set('api-token', token, { expires: 7 })
    }
    state.token = token
  },
  removeToken(state) {
    if(Cookie) {
      Cookie.set('api-token', '', { expires: -1 })
    }
    state.token = null
  },
}
