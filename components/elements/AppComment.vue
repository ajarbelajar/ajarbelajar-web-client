<template>
  <div class="panel panel-body p-10 p-md-20">
    <div class="comments">
      <div class="h3 card-title">Komentar {{ commentsCount }}</div>
      <div class="comment-lists">
        <div
          v-for="comment in comments"
          :key="comment.id"
          class="comment media"
        >
          <div class="pr-20">
            <a href="#" class="avatar avatar-lg">
              <v-lazy-image
                :src="comment.user ? comment.user.avatar : null"
                :src-placeholder="Avatar"
                :alt="comment.user ? comment.user.username : null"
              ></v-lazy-image>
            </a>
          </div>
          <div class="media-body">
            <div class="comment-body">
              <a href="#" class="comment-author text-capitalize"
                >{{ comment.user ? comment.user.name : null }}
                <small v-if="comment.minitutor" class="indigo-600"
                  ><i class="icon wb-check-circle"></i
                ></small>
              </a>
              <div class="comment-meta">
                <span class="date">{{
                  comment.created_at | moment('from', 'now')
                }}</span>
              </div>
              <div class="comment-content">
                <p>{{ comment.body }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form
        v-if="$auth"
        class="comments-add mt-35"
        @submit.prevent="submit(form)"
      >
        <h3 class="mb-35">Tulis Komentar</h3>
        <app-input
          v-model="form.body"
          rows="3"
          textarea
          :error="errors.body"
          placeholder="Komentar..."
          :label="false"
        />

        <div class="form-group">
          <button class="btn btn-primary" :disabled="loading">
            {{ loading ? 'Sedang diproses' : 'Komentar' }}
          </button>
        </div>
      </form>
      <div v-else class="comment-add py-4">
        <p class="text-center lead">
          Silahkan Masuk untuk dapat mengirimkan komentar anda.
        </p>
        <div class="text-center">
          <nuxt-link
            :to="`/login?next=${$route.fullPath}`"
            class="btn btn-primary px-4"
            >Masuk
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '@/assets/img/placeholder/avatar.png'
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
      Avatar,
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
        this.$toast.success(
          'Komentar anda telah terkirim dan akan segera ditinjau.'
        )
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
