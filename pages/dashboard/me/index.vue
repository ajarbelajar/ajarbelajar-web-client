<template>
  <div></div>
</template>

<script>
export default {
  middleware: 'auth',
  beforeCreate() {
    this.$router.push('/dashboard/me/activity')
  },
}
</script>
