export default function ({ $axios, store }) {
  $axios.onRequest(({ headers }) => {
    if (store.getters.auth) {
      const token = store.getters.auth.token
      headers.common.Authorization = 'Bearer ' + token
    }
  })
}
