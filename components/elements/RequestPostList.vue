<template>
  <div :class="{ 'border-primary-600': !!post.requested_at }" class="flex mb-3 bg-white rounded border-l-4 shadow">
    <div class="flex flex-1 p-3">
      <div class="w-20 md:w-32 lg:w-40">
        <v-img class="block w-full rounded" :src="post.hero.thumb || $images.hero.thumb" :src-placeholder="$images.hero.thumb" :alt="post.title" />
      </div>
      <div class="flex-1 pl-3">
        <p class="fort-semibold text-xs">Diedit {{ updateago }}</p>
        <h3 class="font-semibold">{{ post.title }}</h3>
        <span v-if="post.category" class="bold bg-primary-100 text-primary-600 inline-block px-1 text-xs font-semibold rounded">{{ post.category.name }}</span>
        <p class="mb-3 text-xs">Dibuat pada {{ post.created_at | moment('dddd, Do MMMM YYYY') }}</p>

        <div class="flex">
          <nuxt-link :to="`${type.toLowerCase()}s/${post.id}`"  class="hover:bg-primary-600 bg-primary-100 text-primary-600 flex justify-center items-center py-2 w-24 text-sm font-semibold leading-none rounded hover:text-white">Edit</nuxt-link>
          <button type="button" :disabled="loading" class="disabled:opacity-60 flex justify-center items-center py-2 ml-3 w-24 text-sm font-semibold leading-none text-white bg-red-600 rounded hover:bg-red-700" @click.prevent="handleDelete">{{loading ? 'Menghapus...' : 'Hapus' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    type: {
      type: String,
      default: 'Video',
    },
  },
  data() {
    return {
      updatedAt: '',
      interval: null,
      loading: false,
    }
  },
  computed: {
    description() {
      if (this.post.description && this.post.description.length > 255) {
        return this.post.description.substring(0, 255) + '...'
      }
      return this.post.description
    },
    updateago() {
      if (this.updatedAt) {
        return this.updatedAt
      }
      return this.$moment(this.post.updated_at).fromNow()
    },
  },
  mounted() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.updatedAt = this.$moment(this.post.updated_at).fromNow()
      }, 1000)
    }
  },
  destroyed() {
    if (this.interval) clearInterval(this.interval)
  },
  methods: {
    handleDelete() {
      this.loading = true
      this.$toast.confirm.danger(
        async () => {
          const url = `/minitutor/request-${this.type.toLowerCase()}s/${this.post.id}`
          try {
            await this.$axios.$delete(url)
            this.$emit('destroyed', this.post.id)
            this.$toast.success(`${this.type} telah dihapus.`)
          } catch (e) {
            this.$toast.danger(this.$errorMessage(e))
          }
          this.loading = false
        },
        () => {
          this.loading = false
        },
        { message: `Anda yakin ingin menghapus ${this.type} ini?` }
      )
    },
  },
}
</script>
