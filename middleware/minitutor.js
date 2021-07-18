export default function ({ store, error }) {
  if (!store.getters.minitutor) {
    return error(403)
  }
}
