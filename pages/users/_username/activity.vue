<template>
  <users-dashboard-wrap :user="user">
    <div class="container-fluid mb-2">
      <app-activity-list
        v-for="(activity, i) in activities"
        :key="i"
        :activity="activity"
      />
    </div>
  </users-dashboard-wrap>
</template>

<script>
export default {
  async asyncData({ params, store, $axios, error }) {
    const data = store.state.remember.remember
    let user = null

    if (data && data.type === `users/${params.username}`) {
      user = data.data
    } else {
      try {
        user = await $axios.$get(`/users/${params.username}`)
        store.commit('remember/set', {
          type: `users/${params.username}`,
          data: user,
        })
      } catch (e) {
        return error(e)
      }
    }

    let activities = null
    try {
      activities = await $axios.$get(`/activities/${user.id}`)
    } catch (e) {
      return error(e)
    }

    return { user, activities }
  },
}
</script>
