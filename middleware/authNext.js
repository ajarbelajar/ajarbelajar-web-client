export default function ({ store, route, redirect }) {
  if (!store.state.auth) {
    return redirect('/login?next=' + route.fullPath)
  }
}
