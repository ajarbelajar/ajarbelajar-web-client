export const state = () => {
  return {
    notifications: [],
    fetched: false,
  }
}

export const getters = {
  notifications(state) {
    return state.notifications
  },
  fetched(state) {
    return state.fetched
  },
}

export const actions = {
  fetch({ commit }) {
    return this.$axios.$get('/notifications').then((notifications) => {
      commit('set', notifications)
      return notifications
    })
  },
}

export const mutations = {
  set(state, notifications) {
    state.notifications = notifications
    state.fetched = true
  },
  push(state, notification) {
    if (state.fetched) {
      state.notifications = [
        {
          id: notification.id,
          type: notification.type,
          data: notification,
          created_at: Math.floor(Date.now() / 1000),
          read_at: null,
        },
        ...state.notifications,
      ]
    }
  },
  read(state, id) {
    const notifications = []
    state.notifications.forEach((notif) => {
      if (notif.id === id) {
        notif.read_at = Math.floor(Date.now() / 1000)
      }
      notifications.push(notif)
    })
    state.notifications = notifications
  },
  readAll(state) {
    const notifications = []
    state.notifications.forEach((notif) => {
      notif.read_at = Math.floor(Date.now() / 1000)
      notifications.push(notif)
    })
    state.notifications = notifications
  },
}
