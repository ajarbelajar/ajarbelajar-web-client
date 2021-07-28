<template>
  <div class="overflow-hidden relative rounded-b-lg">
    <FadeTransition>
      <block-loading v-if="loading" class="z-10">
        <p class="text-sm font-semibold text-white">{{ uploadMessage }}</p>
      </block-loading>
    </FadeTransition>
    <v-img :src="preview" :src-placeholder="$images.hero.thumb" class="block w-full" />
    <div class="p-3">
      <label light tag="label" class="block overflow-hidden relative py-3 w-full text-sm font-semibold leading-none text-center bg-gray-200 rounded hover:bg-gray-300">
        Ganti Gambar
        <input v-if="!loading" ref="input" type="file" class="block absolute inset-0 w-full bg-black opacity-0 cursor-pointer" @change="onChange" />
      </label>
    </div>
  </div>
</template>

<script>
import { FadeTransition } from 'vue2-transitions'
export default {
  name: 'HeroUploader',
  components: {
    FadeTransition
  },
  props: {
    pid: {
      type: Number,
      require: true,
      default: 0
    },
    type: {
      type: String,
      default: 'Video',
    },
    hero: {
      type: Object,
      default: () => ({
        large: null,
        thumb: null,
        small: null,
        blur: null,
      }),
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
    preview() {
      let thumb = this.$images.hero.thumb
      if(this.hero) {
        thumb = this.hero.thumb || thumb
      }
      return thumb
    },
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
    async onChange(ev) {
      this.loading = true
      const url = `/minitutor/request-${this.type.toLowerCase()}s/${this.pid}/hero`
      try {
        const file = ev.target.files[0]
        const data = new FormData()
        data.append('hero', file)
        const hero = await this.$axios.$post(url, data, { onUploadProgress: this.onUploadProgress })
        this.$emit('updated', hero)
        this.$toast.success('Gambar cover berhasil diubah.')
      } catch (e) {
        this.$toast.danger(this.$errorMessage(e))
      }
      this.loading = false
    },
  }
}
</script>
