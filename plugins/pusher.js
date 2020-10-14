import Pusher from 'pusher-js'
export default ({ store }) => {
  const socket = new Pusher('9dd48f6db8303f2f8bd6', {
    cluster: 'ap1',
    forceTLS: true,
  })
  socket.subscribe('nama-channel').bind('nama-event', (data) => {
    // data dari pusher dimasukan ke dalam state di vuex melalu mutation setNotif
    store.commit('setNotif', data)
  })
}
