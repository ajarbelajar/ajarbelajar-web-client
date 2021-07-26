<template>
  <video ref="videoPlayer" class="video-js w-full" />
</template>

<script>
import videojs from 'video.js'

export default {
  name: 'VideoPlayer',
  props: {
    src: {
      type: String,
      default: '',
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    poster: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      player: null,
    }
  },
  watch: {
    src(val) {
      if(val && this.player) {
        if (!this.player.paused) {
            this.player.pause()
        }
        this.player.load()
      }
    }
  },
  mounted() {
    const options = {
      controls: true,
      autoplay: this.autoplay,
      aspectRatio: '16:9',
      fluid: true,
      preload: 'auto',
      poster: this.poster,
      sources: [{src: this.src}],
      disablePictureInPicture: true
    }
    this.player = videojs(this.$refs.videoPlayer, options)
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>
