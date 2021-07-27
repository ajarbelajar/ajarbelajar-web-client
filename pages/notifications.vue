<template>
  <div class="py-3">
    <div class="flex justify-between items-center mb-3">
      <h3 class="flex-1 text-lg font-bold leading-none uppercase">Notifikasi</h3>
      <button :disabled="loading" class="bg-primary-600 disabled:opacity-60 flex justify-center items-center w-7 h-7 text-sm text-white rounded-full" type="button" @click.prevent="readAll">
        <svg-spinner v-if="loading" width="20px" />
        <i v-else class="ft ft-eye" />
      </button>
      <button :disabled="loading" class="disabled:opacity-60 flex justify-center items-center ml-2 w-7 h-7 text-sm text-white bg-red-600 rounded-full" type="button" @click.prevent="deleteAll">
        <svg-spinner v-if="loading" width="20px" />
        <i v-else class="ft ft-trash" />
      </button>
    </div>
    <div class="grid grid-cols-1 gap-3">
      <block-notification-list v-for="item in $store.getters.notifications" :key="item.id" :notification="item" />
    </div>
    <block-blank v-if="!$store.getters.notifications.length" text="Belum ada Notifikasi." />
  </div>
</template>

<script>
export default {
  name: 'Notifications',
  middleware: 'auth',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    readAll() {
      this.loading = true
      this.$axios
        .$get('account/notifications/read')
        .then(() => {
          this.$store.commit('notification/readAll')
          this.loading = false
        })
        .catch((err) => {
          this.$toast.danger(this.$errorMessage(err))
          this.loading = false
        })
    },
    deleteAll() {
      this.$toast.confirm.danger(
        () => {
          this.loading = true
          this.$axios
            .$delete('account/notifications')
            .then(() => {
              this.$store.commit('notification/set', [])
              this.loading = false
            })
            .catch((err) => {
              this.$toast.danger(this.$errorMessage(err))
              this.loading = false
            })
        },
        null,
        { message: 'Anda yakin ingin menghapus semua notifikasi?' }
      )
    },
  }
}
</script>
