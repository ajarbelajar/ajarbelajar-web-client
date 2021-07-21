<template>
  <div class="flex overflow-y-auto fixed inset-0 z-50 justify-center bg-black bg-opacity-50">
    <button type="button" class="flex absolute top-3 right-3 z-10 justify-center items-center p-0 w-8 h-8 text-lg font-semibold text-white bg-red-600 rounded-full hover:bg-red-700">
      <i class="ft-x"></i>
    </button>
    <div class="flex p-3 m-auto w-full max-w-4xl">
      <div v-click-outside="onClickOutside" class="overflow-hidden flex-1 bg-white rounded-lg">
        <video ref="videoPlayer" class="video-js w-full" />
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import videojs from 'video.js'

export default {
  name: 'VideoModal',
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    src: {
      type: String,
      default: '',
    },
    autoplay: {
      type: Boolean,
      default: true
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
  },
  methods: {
    onClickOutside() {
      this.$emit('close')
    },
  },
}
</script>
