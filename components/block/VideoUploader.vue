<template>
  <div class="panel" :class="{ 'border-danger': error }">
    <div class="panel-body">
      <div class="video-uploader-wrapper">
        <div class="upload-message">
          {{ loading ? uploadMessage : error || 'Klik atau seret video anda disini.' }}
        </div>
        <input ref="input" type="file" :disabled="loading" @change="handleChange" />
      </div>
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
      const url = `/minitutor/request-playlists/${this.pid}/video`
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

<style lang="scss">
.video-uploader-wrapper {
  display: flex;
  position: relative;
  height: 180px;
  // border: 1px solid $gray-200;
  // background-color: $gray-100;
  input {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    // background-color: $primary;
    opacity: 0;
    z-index: 5;
  }
  .upload-message {
    margin: auto;
    // padding: $spacer;
    text-align: center;
    font-size: 16px;
    // font-weight: $font-weight-bold;
    // color: $gray-400;
  }
}
</style>
