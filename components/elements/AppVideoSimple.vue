<template>
  <video ref="videoPlayer" class="video-js"></video>
</template>

<script>
import videojs from 'video.js'

export default {
  props: {
    options: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      player: null,
    }
  },
  mounted() {
    const options = {
      controls: true,
      autoplay: true,
      aspectRatio: '16:9',
      fluid: true,
      preload: 'auto',
      ...this.options,
    }
    this.player = videojs(this.$refs.videoPlayer, options)
  },
  beforeDestroy() {
    this.$refs.videoPlayer.pause()
    if (this.player) {
      this.player.dispose()
    }
  },
}
</script>
