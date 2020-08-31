export const state = () => {
  return {
    remember: null,
  }
}

export const getters = {
  remember(state) {
    return state.remember
  },
}

export const mutations = {
  set(state, remember) {
    state.remember = remember
  },
  clean(state) {
    state.remember = null
  },
}
