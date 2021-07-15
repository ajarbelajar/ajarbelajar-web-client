export default function ({ $axios, store }) {
  $axios.onRequest(({ headers }) => {
    if (store.state.auth) {
      const token = store.state.token
      headers.common.Authorization = 'Bearer ' + token
    }
  })
}
