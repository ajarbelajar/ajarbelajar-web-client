<template>
  <div class="request-post-list" :class="{ requested: post.requested_at }">
    <div class="request-post-list-top">
      <div class="request-post-list-left">
        <div class="request-post-list-thumb">
          <v-lazy-image
            :src="post.hero.thumb"
            :src-placeholder="post.hero.blur"
            :alt="post.title"
          ></v-lazy-image>
          <span v-if="post.requested_at" class="post-status">
            Menunggu Persetujuan Admin
          </span>
        </div>
      </div>
      <div class="request-post-list-right">
        <span class="info-time">Diedit {{ updateago }}</span>
        <h3 class="info-title">{{ post.title }}</h3>
        <p v-if="description" class="info-description">
          {{ description }}
        </p>
        <span v-if="post.category" class="category-info">{{
          post.category.name
        }}</span>
        <div class="more-info">
          <span
            >Dibuat pada
            {{ post.created_at | moment('dddd, Do MMMM YYYY') }}</span
          >
        </div>
      </div>
    </div>
    <div class="request-post-list-bottom">
      <div class="row">
        <div class="col">
          <nuxt-link
            :disabled="loading"
            :to="`/dashboard/minitutor/${type.toLowerCase()}s/${post.id}`"
            class="btn btn-sm btn-primary btn-block"
          >
            Edit
          </nuxt-link>
        </div>
        <div class="col">
          <button
            :disabled="loading"
            class="btn btn-sm btn-danger btn-block"
            @click="handleDelete"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    type: {
      type: String,
      default: 'Playlist',
    },
  },

  data() {
    return {
      updatedAt: '',
      interval: null,
      loading: false,
    }
  },

  computed: {
    description() {
      if (this.post.description && this.post.description.length > 255) {
        return this.post.description.substring(0, 255) + '...'
      }
      return this.post.description
    },
    updateago() {
      if (this.updatedAt) {
        return this.updatedAt
      }
      return this.$moment.unix(this.post.updated_at).fromNow()
    },
  },

  mounted() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.updatedAt = this.$moment.unix(this.post.updated_at).fromNow()
      }, 1000)
    }
  },

  destroyed() {
    if (this.interval) clearInterval(this.interval)
  },

  methods: {
    handleDelete() {
      this.loading = true
      this.$toast.confirm.danger(
        async () => {
          const url = `/minitutor/request-${this.type.toLowerCase()}s/${
            this.post.id
          }`
          try {
            await this.$axios.$delete(url)
            this.$store.commit(
              `request_${this.type.toLowerCase()}/remove`,
              this.post.id
            )
            this.$toast.success(`${this.type} telah dihapus.`)
          } catch (e) {
            this.$toast.danger(this.$errorMessage(e))
          }
          this.loading = false
        },
        () => {
          this.loading = false
        },
        { message: `Anda yakin ingin menghapus ${this.type} ini?` }
      )
    },
  },
}
</script>

<style lang="scss">
.request-post-list {
  display: block;
  background-color: $white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: $box-shadow-sm;
  margin-bottom: $spacer / 2;
  border-bottom: 4px solid $primary;

  .v-lazy-image {
    filter: blur(10px);
  }
  .v-lazy-image-loaded {
    filter: blur(0);
  }

  &.requested {
    border-color: $danger;
  }

  &-top {
    display: flex;
    @include media-breakpoint-down(md) {
      flex-direction: column;
    }
  }
  &-bottom {
    padding: $spacer;
    padding-top: 0;
    @include media-breakpoint-down(md) {
      padding: $spacer / 2;
      border-top: 1px solid $border-color;
    }
  }

  &-left {
    display: block;
    padding: $spacer;
    @include media-breakpoint-down(md) {
      padding: 0;
    }
  }
  &-thumb {
    width: 240px;
    position: relative;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      border-radius: 3px;
    }
    .post-status {
      display: block;
      position: absolute;
      top: 3px;
      left: 50%;
      white-space: nowrap;
      transform: translateX(-50%);
      line-height: 18px;
      padding: 0 6px;
      background-color: $white;
      font-size: 10px;
      font-weight: $font-weight-bold;
      letter-spacing: 1px;
      text-transform: uppercase;
      box-shadow: $box-shadow;
      border-radius: 2px;
      color: $primary;
    }
    @include media-breakpoint-down(md) {
      width: 100%;
      img {
        border-radius: 0;
      }
    }
  }

  &-right {
    padding: $spacer;
    padding-left: 0;
    width: 100%;
    @include media-breakpoint-down(md) {
      padding: 10px;
    }

    .info-time {
      display: block;
      font-size: 10px;
      font-weight: $font-weight-bold;
      color: $gray-600;
      margin-bottom: 5px;
    }

    .info-title {
      display: block;
      margin: 0;
      font-size: 18px;
      font-weight: $font-weight-normal;
      letter-spacing: 1px;
      margin-bottom: 10px;
      color: $gray-500;
    }

    .category-info {
      display: inline-block;
      line-height: $spacer;
      padding: 0 6px;
      background-color: $primary;
      color: $white;
      font-size: 12px;
      font-weight: $font-weight-light;
      text-transform: uppercase;
      box-shadow: $box-shadow;
      border-radius: 4px;
      margin-bottom: 10px;
    }

    .more-info {
      span {
        display: block;
        color: $gray-600;
        font-size: 14px;
        i {
          display: inline-block;
          width: 15px;
          color: $gray-400;
        }
      }
    }
  }
}
</style>
