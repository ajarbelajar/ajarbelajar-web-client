export default function ({ store, error }) {
  const auth = store.state.auth
  const check = auth && auth.minitutor && auth.minitutor.active
  if (!check) {
    return error(403)
  }
}
