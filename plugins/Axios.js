export default function ({ $axios, store }) {
  $axios.onRequest(({ headers }) => {
    if (store.state.auth) {
      const token = store.state.auth.apiToken
      headers.common.Authorization = 'Bearer ' + token
    }
  })
}
