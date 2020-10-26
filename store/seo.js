export const state = () => {
  return {
    seos: [],
  }
}

export const getters = {
  seos(state) {
    return state.seos
  },
}

export const actions = {
  fetch({ commit }) {
    return this.$axios.$get('/seos').then(({ data }) => {
      commit('set', data)
    })
  },
}

export const mutations = {
  set(state, seos) {
    state.seos = seos
  },
}
