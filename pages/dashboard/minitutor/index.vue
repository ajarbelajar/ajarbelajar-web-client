<template>
  <div></div>
</template>

<script>
export default {
  middleware: ['auth', 'activeMinitutor'],
  beforeCreate() {
    this.$router.push('/dashboard/minitutor/edit')
  },
}
</script>
