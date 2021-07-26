const cookieparser = process.server ? require('cookieparser') : undefined

export const getters = {
  auth(state) {
    return state.auth && state.auth.auth
  },
  minitutor(state) {
    return state.auth && state.auth.auth && state.auth.auth.minitutor
  },
  notifications(state) {
    return state.notification.notifications
  },
  unreadNotifications(state) {
    return state.notification.notifications.filter((el) => !el.read_at)
  },
  categories(state) {
    return state.category.categories
  },
}

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { req }) {
    try {
      await dispatch('category/fetch')
      if (req.headers.cookie) {
        const parsed = cookieparser.parse(req.headers.cookie)
        const auth = await dispatch('auth/check', parsed['api-token'])
        if (auth && auth.notifications) {
          commit('notification/set', auth.notifications)
        }
      }
    } catch (err) {
      console.log(err)
      // No valid cookie found
    }
  },
  nuxtClientInit({ dispatch }) {
    dispatch('notification/listen')
  },
}
