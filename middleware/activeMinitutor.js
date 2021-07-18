export default function ({ store, error }) {
  const minitutor = store.getters.minitutor
  const check = minitutor && minitutor.active
  if (!check) {
    return error(403)
  }
}
