import Echo from 'laravel-echo'

export const state = () => {
  return {
    notifications: [],
  }
}

export const getters = {
  notifications(state) {
    return state.notifications
  },
  unreadNotifications(state) {
    return state.notifications.filter((notification) => {
      return !!notification.read_at
    })
  },
}

export const actions = {
  listen({ commit, rootState }) {
    if (rootState.token) {
      require('pusher-js')
      return new Echo({
        broadcaster: 'pusher',
        authEndpoint: process.env.baseApiUrl + process.env.pusherAuthEndpoint,
        auth: {
          headers: {
            Authorization: 'Bearer ' + rootState.token,
          },
        },
        key: process.env.pusherKey,
        cluster: 'ap1',
        forceTLS: true,
      })
        .private('App.User.' + rootState.auth.id)
        .notification((notification) => {
          commit('push', notification)
        })
    }
  },
}

export const mutations = {
  set(state, notifications) {
    state.notifications = notifications
  },
  push(state, notification) {
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
