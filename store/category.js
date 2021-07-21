export const state = () => {
  return {
    categories: [],
  }
}

export const actions = {
  fetch({ commit }) {
    return this.$axios.$get('/categories').then((categories) => {
      commit('set', categories)
    })
  },
}

export const mutations = {
  set(state, categories) {
    state.categories = categories
  },
  push(state, category) {
    state.categories = [...state.categories, category]
  },
}
