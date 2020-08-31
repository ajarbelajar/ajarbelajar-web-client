<template>
  <minitutors-dashboard-wrap :user="user" :minitutor="minitutor">
  </minitutors-dashboard-wrap>
</template>

<script>
export default {
  async asyncData({ store, error, params, redirect }) {
    let user = null
    let minitutor = null

    try {
      const minitutors = await store.dispatch('minitutor/fetch')
      minitutors.forEach((data) => {
        if (data.user.username === params.username) {
          user = data.user
          minitutor = data.minitutor
        }
      })
    } catch (e) {
      return error(e)
    }

    if (!user && !minitutor) return error({ statusCode: 404 })

    return redirect(`/minitutors/${params.username}/info`)
  },
}
</script>
