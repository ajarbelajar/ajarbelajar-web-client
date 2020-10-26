export const state = () => {
  return {
    playlists: [],
  }
}

export const getters = {
  playlists(state) {
    return state.playlists
  },
}

export const mutations = {
  set(state, playlists) {
    state.fetched = true
    state.playlists = playlists.sort((a, b) => {
      return new Date(b.updated_at * 1000) - new Date(a.updated_at * 1000)
    })
  },
  push(state, playlist) {
    const playlists = [playlist, ...state.playlists]
    state.playlists = playlists.sort((a, b) => {
      return new Date(b.updated_at * 1000) - new Date(a.updated_at * 1000)
    })
  },
  update(state, payload) {
    const playlists = []
    state.playlists.forEach((playlist) => {
      if (playlist.id === payload.id) {
        playlists.push(payload)
      } else {
        playlists.push(playlist)
      }
    })
    state.playlists = playlists.sort((a, b) => {
      return new Date(b.updated_at * 1000) - new Date(a.updated_at * 1000)
    })
  },
  remove(state, id) {
    const playlists = []
    state.playlists.forEach((playlist) => {
      if (playlist.id !== id) {
        playlists.push(playlist)
      }
    })
    state.playlists = playlists
  },
}
