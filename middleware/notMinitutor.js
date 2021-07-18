export default function ({ store, error }) {
  const auth = store.getters.auth
  const check = auth && auth.minitutor
  if (check) {
    return error(403)
  }
}
