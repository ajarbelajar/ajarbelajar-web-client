<template>
  <div class="first:border-t-0 border-t">
    <FadeTransition>
      <modal-video v-if="open" :src="video.url" :poster="playlist.hero ? playlist.hero.large : $images.hero.large" @close="open = false" />
    </FadeTransition>
    <div class="flex items-center py-2 select-none">
      <span class="handle flex px-4 h-full cursor-move">
        <span class="flex items-center m-auto font-bold leading-none text-gray-500">
          <i class="ft ft-grid ml-1"></i>
        </span>
      </span>
      <div class="truncate flex flex-1 items-center text-sm">
        <span class="block pr-3 font-bold leading-none">
          {{ video.index }}.
        </span>
        <span class="truncate block flex-1 pr-3 leading-none">
          {{ video.original_name }}
        </span>
      </div>
      <div class="flex pr-3 my-auto ml-auto">
        <button
          class="hover:bg-primary-700 bg-primary-100 text-primary-700 flex justify-center items-center p-0 w-12 h-7 text-sm rounded-full hover:text-white"
          :disabled="loading"
          @click="open = !open"
        >
          <i class="ft ft-play"></i>
        </button>
        <button
          class="flex justify-center items-center p-0 ml-1 w-12 h-7 text-sm text-white bg-red-600 rounded-full hover:bg-red-700"
          :disabled="loading"
          @click="handleDelete"
        >
          <svg-spinner v-if="loading" width="1em" stroke="stroke-red" />
          <i v-else class="ft ft-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { FadeTransition } from 'vue2-transitions'
export default {
  components: {
FadeTransition
  },
  props: {
    playlist: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    video: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data() {
    return {
      open: false,
      loading: false,
    }
  },
  methods: {
    handleDelete() {
      this.loading = true
      this.$toast.confirm.danger(
        async () => {
          const url = `/minitutor/request-playlists/${this.playlist.id}/video/${this.video.id}`
          try {
            const playlist = await this.$axios.$delete(url)
            this.$emit('deleted', playlist)
            this.$toast.success('Video telah dihapus.')
          } catch (e) {
            this.$toast.danger(this.$errorMessage(e))
          }
          this.loading = false
        },
        () => {
          this.loading = false
        },
        { message: 'Anda yakin ingin menghapus video ini?' }
      )
    },
  },
}
</script>
// <style lang="scss">
// // .handle {
// //     // cursor: grab;
// //     display: block;
// //     width: 40px;
// //     min-width: 40px;
// //     height: 60px;
// //     text-align: center;
// //     line-height: 60px;
// //     font-size: 20px;
// //     letter-spacing: 1px;
// //     // color: $gray-700;
// //     // font-weight: $font-weight-bold;
// //     margin: auto 0;
// // }

// // .video-order-list {
// //   padding: 0 !important;
// //   user-select: none;

// //   .wrapper {
// //     display: flex;
// //   }

// //   .handle {
// //     cursor: grab;
// //     display: block;
// //     width: 40px;
// //     min-width: 40px;
// //     height: 60px;
// //     text-align: center;
// //     line-height: 60px;
// //     font-size: 20px;
// //     letter-spacing: 1px;
// //     // color: $gray-700;
// //     // font-weight: $font-weight-bold;
// //     margin: auto 0;
// //   }
// //   .sortable-chosen {
// //     .handle {
// //       cursor: grabbing;
// //     }
// //   }

// //   .thumb {
// //     // padding-right: $spacer/2;
// //     img {
// //       display: block;
// //       height: 40px;
// //       border-radius: 3px;
// //     }
// //   }

// //   .actions {
// //     // padding: $spacer/2;
// //     white-space: nowrap;
// //   }

// //   .title {
// //     // padding: $spacer/2 0;
// //   }
// // }
// </style>
