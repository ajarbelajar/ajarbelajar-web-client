<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <div v-if="videoLists.length" class="panel">
          <div class="panel-heading bg-light">
            <h3 class="panel-title">Daftar Video</h3>
            <div v-if="videoLists.length > 1" class="panel-actions">
              <button
                v-if="videoLists !== playlist.videos"
                class="btn btn-primary btn-sm"
                :disabled="loading"
                @click="reindexPlaylist"
              >
                Simpan Urutan
              </button>
            </div>
          </div>
          <draggable
            v-if="videoLists.length"
            v-model="videoLists"
            class="list-group list-group-bordered video-lists"
            tag="ul"
            handle=".handle"
            v-bind="dragOptions"
            draggable=".list-group-item"
          >
            <li
              v-for="video in videoLists"
              :key="video.index"
              class="list-group-item p-0"
            >
              <video-order-list
                :playlist="playlist"
                :video="video"
                @deleted="updateVideo"
              />
            </li>
          </draggable>
        </div>
        <video-uploader :playlist="playlist" @update="updateVideo" />
      </div>
      <div class="col-md-4">
        <hero-uploader :post="playlist" @onupdate="updateHero" />
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">Informasi</h3>
          </div>
          <div class="panel-body">
            <categories-autocomplete-input
              v-model="form.category"
              :error="errors.category"
            />
            <app-input
              v-model="form.title"
              placeholder="Judul"
              :error="errors.title"
            />
            <app-input
              v-model="form.description"
              placeholder="Deskripsi"
              :error="errors.description"
              textarea
            />
            <div class="form-group">
              <div class="checkbox-custom checkbox-primary">
                <input
                  id="requested"
                  v-model="form.requested"
                  type="checkbox"
                />
                <label for="requested">Publikasikan playlist ini</label>
              </div>
            </div>
            <div class="form-group">
              <button
                :disabled="loading"
                class="btn btn-primary"
                @click="submit(form)"
              >
                {{ loading ? 'Sedang Disimpan' : 'Simpan' }}
              </button>
              <nuxt-link
                to="/dashboard/minitutor/playlists"
                class="btn btn-danger"
                >Kembali</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  async asyncData({ store, error, params }) {
    const playlists = store.getters['request_playlist/playlists']
    try {
      await store.dispatch('category/fetch')
    } catch (e) {
      return error(e)
    }
    const data = {}
    playlists.forEach((playlist) => {
      if (playlist.id === parseInt(params.id)) {
        data.playlist = playlist
        data.videoLists = playlist.videos
        data.form = {
          title: playlist.title,
          description: playlist.description,
          category: playlist.category ? playlist.category.name : '',
          requested: !!playlist.requested_at,
        }
      }
    })
    if (!data.playlist)
      return error({ statusCode: 404, message: 'Playlist tidak tersedia.' })
    return data
  },
  data() {
    return {
      loading: false,
      errors: {
        title: '',
        description: '',
        category: '',
        requested: '',
      },
    }
  },
  computed: {
    index() {
      const index = []
      if (this.videoLists) {
        this.videoLists.forEach((el) => {
          index.push(el.id)
        })
      }
      return index.join('|')
    },
    dragOptions() {
      return {
        animation: 200,
        disabled: false,
        ghostClass: 'ghost',
      }
    },
  },
  methods: {
    updateHero(playlist) {
      this.playlist = {
        ...this.playlist,
        updated_at: playlist.updated_at,
        hero: playlist.hero,
      }
      this.$store.commit('request_playlist/update', playlist)
    },
    updateVideo(playlist) {
      this.playlist = {
        ...this.playlist,
        updated_at: playlist.updated_at,
        videos: playlist.videos,
      }
      this.videoLists = playlist.videos
      this.$store.commit('request_playlist/update', playlist)
    },
    async submit(form) {
      this.loading = true
      this.errors = {
        title: '',
        description: '',
        category: '',
        requested: '',
      }
      try {
        this.playlist = await this.$axios.$put(
          '/minitutor/request-playlists/' + this.playlist.id,
          form
        )
        this.$store.commit('request_playlist/update', this.playlist)
        this.form = {
          title: this.playlist.title,
          description: this.playlist.description,
          category: this.playlist.category ? this.playlist.category.name : '',
          requested: !!this.playlist.requested_at,
        }
        this.$toast.success('Playlist telah diperbarui.')
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
    async reindexPlaylist() {
      this.loading = true
      const url = `/minitutor/request-playlists/${this.playlist.id}/index`
      let index = []
      if (this.videoLists) {
        this.videoLists.forEach((el) => {
          index.push(el.id)
        })
      }
      index = index.join('|')
      try {
        const playlist = await this.$axios.$put(url, { index })
        this.updateVideo(playlist)
        this.$toast.success('Index video telah diperbarui.')
      } catch (e) {
        const { errors, message } = this.$errorResponse(e)
        if (errors.index) {
          this.$toast.danger(errors.index)
        } else if (message) {
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

<style lang="scss">
.video-lists {
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .ghost {
    opacity: 0.5;
  }
}
</style>
