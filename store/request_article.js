export const state = () => {
  return {
    articles: [],
  }
}

export const getters = {
  articles(state) {
    return state.articles
  },
}

export const mutations = {
  set(state, articles) {
    state.fetched = true
    state.articles = articles.sort((a, b) => {
      return new Date(b.updated_at * 1000) - new Date(a.updated_at * 1000)
    })
  },
  push(state, article) {
    const articles = [article, ...state.articles]
    state.articles = articles.sort((a, b) => {
      return new Date(b.updated_at * 1000) - new Date(a.updated_at * 1000)
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
