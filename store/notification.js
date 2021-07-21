import Echo from 'laravel-echo'

export const state = () => {
  return {
    notifications: [],
  }
}

export const actions = {
  listen({ commit, rootState }) {
    if (rootState.auth && rootState.auth.token) {
      require('pusher-js')
      return new Echo({
        broadcaster: 'pusher',
        authEndpoint: this.$config.baseApiUrl + '/account/broadcast',
        auth: {
          headers: {
            Authorization: 'Bearer ' + rootState.auth.token,
          },
        },
        key: this.$config.pusherKey,
        cluster: 'ap1',
        forceTLS: true,
      })
        .private('App.User.' + rootState.auth.auth.id)
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
        created_at: Date.now(),
        read_at: null,
      },
      ...state.notifications,
    ]
  },
  read(state, id) {
    const notifications = []
    state.notifications.forEach((notif) => {
      if (notif.id === id) {
        notif.read_at = Date.now()
      }
      notifications.push(notif)
    })
    state.notifications = notifications
  },
  readAll(state) {
    const notifications = []
    state.notifications.forEach((notif) => {
      notif.read_at = Date.now()
      notifications.push(notif)
    })
    state.notifications = notifications
  },
}
