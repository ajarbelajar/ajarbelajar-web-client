<template>
  <div class="video-order-list">
    <div class="wrapper">
      <span class="handle">:::</span>
      <div class="thumb my-auto">
        <img :src="playlist.hero.small" />
      </div>
      <div class="title my-auto">
        <strong>{{ video.index }}. </strong>{{ video.original_name }}
      </div>
      <div class="actions ml-auto my-auto">
        <button
          class="btn btn-sm btn-outline-default"
          :disabled="loading"
          @click="open = !open"
        >
          {{ open ? 'Tutup Player' : 'Play' }}
        </button>
        <button
          v-if="!open"
          class="btn btn-sm btn-danger"
          :disabled="loading"
          @click="handleDelete"
        >
          {{ loading ? 'Sedang Menghapus' : 'Hapus Video' }}
        </button>
      </div>
    </div>
    <div v-if="open" class="player-wrapper">
      <app-video-simple :options="playerOptions" />
      <div class="p-2 bg-light">
        <button
          class="btn btn-danger btn-block"
          :disabled="loading"
          @click="handleDelete"
        >
          {{ loading ? 'Sedang Menghapus' : 'Hapus Video' }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
  computed: {
    playerOptions() {
      return {
        autoplay: false,
        sources: [{ src: this.video.url }],
        poster: this.playlist.hero.large,
      }
    },
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
<style lang="scss">
.video-order-list {
  padding: 0 !important;
  user-select: none;

  .wrapper {
    display: flex;
  }

  .handle {
    cursor: grab;
    display: block;
    width: 40px;
    min-width: 40px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    letter-spacing: 1px;
    color: $gray-700;
    font-weight: $font-weight-bold;
    margin: auto 0;
  }
  .sortable-chosen {
    .handle {
      cursor: grabbing;
    }
  }

  .thumb {
    padding-right: $spacer/2;
    img {
      display: block;
      height: 40px;
      border-radius: 3px;
    }
  }

  .actions {
    padding: $spacer/2;
    white-space: nowrap;
  }

  .title {
    padding: $spacer/2 0;
  }
}
</style>
