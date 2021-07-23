<template>
  <div>
    <div class="text-2xl font-semibold">Komentar {{ commentsCount }}</div>
    <div class="py-3">
      <div v-for="comment in comments" :key="comment.id" class="flex mb-3">
        <div class="pr-3">
          <nuxt-link :to="`/users/${comment.user.username}`" class="block w-10 rounded-full border">
            <v-img
              :src="comment.user ? comment.user.avatar : $images.avatar"
              :src-placeholder="$images.avatar"
              :alt="comment.user ? comment.user.username : null"
              class="block w-full rounded-full"
            />
          </nuxt-link>
        </div>
        <div class="flex-1 pb-3 border-b">
          <div class="flex items-center mb-3">
            <nuxt-link :to="`/users/${comment.user.username}`" class="text-primary-600 block text-sm font-semibold leading-none capitalize">
              {{ comment.user.name }}
            </nuxt-link>
            <span class="block pl-1 text-xs leading-none">
              {{ comment.created_at | moment('from', 'now') }}
            </span>
          </div>
          <p class="text-sm">
            {{ comment.body }}
          </p>
        </div>
      </div>
    </div>
    <form v-if="$store.getters.auth" class="pt-4" @submit.prevent="submit(form)">
      <h3 class="mb-3 text-lg font-semibold">Tulis Komentar</h3>
      <form-textarea
        v-model="form.body"
        :error="errors.body"
        placeholder="Komentar..."
      />
      <form-button :loading="loading" class="w-24">Komantar</form-button>
    </form>
    <div v-else class="py-4">
      <p class="mb-3 text-center">
        Silahkan Masuk untuk dapat mengirimkan komentar anda.
      </p>
      <div class="text-center">
        <form-button tag="nuxt-link" :to="`/login?next=${$route.fullPath}`">
          Masuk
        </form-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
      default: '',
    },
    commentsCount: {
      type: Number,
      required: true,
      default: 0,
    },
    comments: {
      type: Array,
      deep: false,
      immediate: false,
      default: () => [],
    },
  },
  data() {
    return {
      loading: false,
      form: {
        body: '',
      },
      errors: {
        body: '',
      },
    }
  },
  methods: {
    async submit(form) {
      this.loading = true
      this.errors = {
        body: '',
      }
      try {
        await this.$axios.$post(this.url, form)
        this.form = { body: '' }
        this.$toast.success('Komentar anda telah terkirim dan akan segera ditinjau.')
      } catch (e) {
        const { errors, message } = this.$errorResponse(e)
        this.errors = {
          ...this.errors,
          ...errors,
        }
        if (message) {
          this.$toast.danger(message)
        }
        if (!Object.keys(errors).length && !message) {
          this.$toast.danger(this.$errorMessage(e))
        }
      }
      this.loading = false
    },
  },
}
</script>
