export default function (ctx, inject) {
  const errorResponse = (e) => {
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
  const errorMessage = (e) => {
    let message

    if (e.response && e.response.data && e.response.data.message) {
      message = e.response.data.message
    } else if (e.response && e.response.message) {
      message = e.response.message
    } else {
      message = e.message
    }

    return message
  }

  inject('errorResponse', errorResponse)
  inject('errorMessage', errorMessage)
}
