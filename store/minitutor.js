export const state = () => {
  return {
    minitutors: [],
    fetched: false,
  }
}

export const getters = {
  minitutors(state) {
    return state.minitutors
  },
}

export const actions = {
  fetch({ commit, state }) {
    return new Promise((resolve, reject) => {
      if (!state.fetched) {
        this.$axios
          .$get('/minitutors')
          .then((minitutors) => {
            commit('set', minitutors)
            resolve(minitutors)
          })
          .catch(reject)
      } else {
        resolve(state.minitutors)
      }
    })
  },
}

export const mutations = {
  set(state, minitutors) {
    state.fetched = true
    state.minitutors = minitutors.sort((a, b) => {
      const c = a.minitutor.playlists_count + a.minitutor.articles_count
      const d = b.minitutor.playlists_count + b.minitutor.articles_count
      return d - c
    })
  },
  push(state, minitutor) {
    const minitutors = [minitutor, ...state.minitutors]
    state.minitutors = minitutors.sort((a, b) => {
      const c = a.minitutor.playlists_count + a.minitutor.articles_count
      const d = b.minitutor.playlists_count + b.minitutor.articles_count
      return d - c
    })
  },
}
