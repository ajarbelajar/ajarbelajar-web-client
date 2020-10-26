export const state = () => {
  return {
    categories: [],
    fetched: false,
  }
}

export const getters = {
  categories(state) {
    return state.categories
  },
}

export const actions = {
  fetch({ commit, state }) {
    if (state.fetched) {
      return true
    }
    return this.$axios.$get('/categories').then((categories) => {
      commit('set', categories.data)
    })
  },
}

export const mutations = {
  set(state, categories) {
    state.categories = categories
    state.fetched = true
  },
  push(state, category) {
    state.categories = [...state.categories, category]
  },
}
