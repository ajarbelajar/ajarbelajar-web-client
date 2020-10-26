<template>
  <div class="panel">
    <div class="panel-heading">
      <h3 class="panel-title">Hero</h3>
    </div>
    <div class="panel-body">
      <div class="hero-chooser">
        <div class="image-wrap">
          <v-lazy-image
            :src="post.hero.thumb"
            :src-placeholder="$images.hero.thumb"
          />
        </div>
        <div class="chooser text-center pt-2">
          <label for="hero-chooser" class="btn btn-default btn-block m-0">{{
            'Pilih Gambar'
          }}</label>
          <input
            id="hero-chooser"
            type="file"
            class="d-none"
            :disabled="loading"
            @change="handleChange"
          />
        </div>
        <div v-if="loading" class="upload-progress">
          <div class="loading-icon">
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
              <defs>
                <clipPath
                  id="ldio-0tgvvv7mdczp-cp"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                >
                  <rect x="0" y="0" width="0" height="100">
                    <animate
                      attributeName="width"
                      repeatCount="indefinite"
                      dur="1s"
                      values="0;100;100"
                      keyTimes="0;0.5;1"
                    ></animate>
                    <animate
                      attributeName="x"
                      repeatCount="indefinite"
                      dur="1s"
                      values="0;0;100"
                      keyTimes="0;0.5;1"
                    ></animate>
                  </rect>
                </clipPath>
              </defs>
              <path
                fill="none"
                stroke="#677ae4"
                stroke-width="2.7928"
                d="M82 63H18c-7.2 0-13-5.8-13-13v0c0-7.2 5.8-13 13-13h64c7.2 0 13 5.8 13 13v0C95 57.2 89.2 63 82 63z"
              ></path>
              <path
                fill="#677ae4"
                clip-path="url(#ldio-0tgvvv7mdczp-cp)"
                d="M81.3 58.7H18.7c-4.8 0-8.7-3.9-8.7-8.7v0c0-4.8 3.9-8.7 8.7-8.7h62.7c4.8 0 8.7 3.9 8.7 8.7v0C90 54.8 86.1 58.7 81.3 58.7z"
              ></path>
            </svg>
          </div>
          <span class="loading-message">{{ uploadMessage }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'Playlist',
    },
    post: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data() {
    return {
      file: null,
      error: '',
      loading: false,
      percent: 0,
    }
  },
  computed: {
    uploadMessage() {
      if (this.percent < 100) {
        return `${this.percent}%`
      }
      return 'DIPROSES'
    },
  },
  methods: {
    onUploadProgress(progressEvent) {
      this.percent = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      )
    },
    async handleChange(ev) {
      this.loading = true
      const url = `/minitutor/request-${this.type.toLowerCase()}s/${
        this.post.id
      }/hero`
      const config = {
        onUploadProgress: this.onUploadProgress,
      }
      try {
        const file = ev.target.files[0]
        const data = new FormData()
        data.append('hero', file)
        const post = await this.$axios.$post(url, data, config)
        this.$emit('onupdate', post)
        this.$toast.success('Hero telah diupdate.')
      } catch (e) {
        this.$toast.danger(this.$errorMessage(e))
      }
      this.loading = false
    },
  },
}
</script>

<style lang="scss">
.hero-chooser {
  position: relative;
  display: block;
  width: 100%;
  padding: 5px;
  border: 1px dashed $border-color;
  .image-wrap {
    overflow: hidden;
    img {
      display: block;
      width: 100%;
    }
  }

  .upload-progress {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($white, 0.5);
    flex-direction: column;

    .loading-icon {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      width: 160px;
    }

    .loading-message {
      display: block;
      z-index: 3;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      padding: $spacer;
      text-align: center;
      color: $white;
      text-shadow: 1px 1px 1px rgba($black, 0.75);
      line-height: 14px;
      font-size: 14px;
      font-weight: $font-weight-bold;
    }
  }
}
</style>
