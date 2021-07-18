export default function ({ store, route, redirect }) {
  if (!store.getters.auth) {
    return redirect('/login?next=' + route.fullPath)
  }
}
