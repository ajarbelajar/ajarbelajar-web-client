<template>
  <div :class="{ 'border-danger': error }">
    <video v-if="video" :src="video" controls class="block w-full" />
    <div class="relative py-10 px-4">
      <div class="font-semibold text-center">
        {{ loading ? uploadMessage : error || 'Klik atau seret video anda disini untuk mengupload.' }}
      </div>
      <input ref="input" type="file" class="block absolute inset-0 z-10 w-full opacity-0 cursor-pointer" :disabled="loading" @change="handleChange" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pid: {
      type: Number,
      required: true,
      default: 0,
    },
    video: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      name: '',
      percent: 0,
      loading: false,
      error: '',
    }
  },
  computed: {
    uploadMessage() {
      if (this.percent < 100) {
        return `${this.percent}%`
      }
      return 'Video anda sedang diproses...'
    },
  },
  methods: {
    onUploadProgress(ev) {
      this.percent = Math.round((ev.loaded * 100) / ev.total)
    },
    async handleChange(ev) {
      this.loading = true
      const url = `/minitutor/request-videos/${this.pid}/video`
      const config = {
        onUploadProgress: this.onUploadProgress,
      }
      try {
        const file = ev.target.files[0]
        const data = new FormData()
        data.append('file', file)
        const videos = await this.$axios.$post(url, data, config)
        this.$emit('update', videos)
        this.$toast.success('Video telah ditambahkan.')
      } catch (e) {
        const { errors } = this.$errorResponse(e)
        if (errors.file) {
          this.error = errors.file
        } else {
          this.$toast.danger(this.$errorMessage(e))
        }
      }
      this.loading = false
    },
  },
}
</script>
