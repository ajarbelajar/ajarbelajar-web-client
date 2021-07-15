export default function ({ store, redirect }) {
  console.log("guest", store.state)
  if (store.state.auth) {
    return redirect('/home')
  }
}
