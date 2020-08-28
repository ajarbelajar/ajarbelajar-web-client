export const state = () => {
  return {
    articles: [],
    fetched: false,
  }
}

export const getters = {
  articles(state) {
    return state.articles
  },
}

export const actions = {
  fetch({ commit, state }) {
    return new Promise((resolve, reject) => {
      if (!state.fetched) {
        this.$axios
          .$get('/articles')
          .then((articles) => {
            commit('set', articles)
            resolve(articles)
          })
          .catch(reject)
      } else {
        resolve(state.articles)
      }
    })
  },
}

export const mutations = {
  set(state, articles) {
    state.fetched = true
    state.articles = articles.sort((a, b) => {
      return new Date(b.created_at * 1000) - new Date(a.created_at * 1000)
    })
  },
  push(state, article) {
    const articles = [article, ...state.articles]
    state.articles = articles.sort((a, b) => {
      return new Date(b.created_at * 1000) - new Date(a.created_at * 1000)
    })
  },
  update(state, payload) {
    const articles = []
    state.articles.forEach((article) => {
      if (article.id === payload.id) {
        articles.push(payload)
      } else {
        articles.push(article)
      }
    })
    state.articles = articles
  },
  remove(state, id) {
    const articles = []
    state.articles.forEach((article) => {
      if (article.id !== id) {
        articles.push(article)
      }
    })
    state.articles = articles
  },
}
