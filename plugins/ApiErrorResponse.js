import Vue from 'vue'

Vue.prototype.$errorResponse = (e) => {
  let errors
  let message

  if (e.response && e.response.data) {
    if (e.response.data.errors) {
      errors = {}
      for (const i in e.response.data.errors) {
        errors[i] = e.response.data.errors[i][0]
      }
    } else if (e.response.data.message) {
      message = e.response.data.message
    }
  }

  if (!errors) errors = {}
  if (!message) message = ''

  return { errors, message }
}
