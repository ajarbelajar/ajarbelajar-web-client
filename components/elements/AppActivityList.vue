<template>
  <nuxt-link
    v-if="activity.post.type"
    class="activity-card"
    :to="`/${activity.post.type.toLowerCase()}s/${activity.post.slug}`"
  >
    <div class="left">
      <v-lazy-image
        :src="activity.post.hero.thumb || $images.hero.thumb"
        :src-placeholder="$images.hero.thumb"
        :alt="activity.post.title"
      ></v-lazy-image>
    </div>
    <div class="right">
      <div class="info-action">
        {{ activity.updated_at | moment('from', 'now') }}
        -
        {{
          activity.post.type === 'Article'
            ? 'Kamu membaca artikel'
            : 'Kamu menonton video'
        }}
      </div>
      <h3 class="info-title">
        {{ activity.post.title }}
      </h3>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss">
.activity-card {
  display: flex;
  background-color: $white;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: $spacer/2;
  box-shadow: $box-shadow-sm;
  transition: $transition-base;
  border-left: 3px solid $primary;
  &:hover {
    text-decoration: none;
    box-shadow: $box-shadow;
  }

  .left {
    padding-right: 15px;
    img {
      display: block;
      width: 100px;
      border-radius: 2px;
      @include media-breakpoint-down(md) {
        width: 70px;
      }
    }
  }
  .right {
    margin: auto 0;
    .info-action {
      margin: 0;
      font-size: 11px;
      color: $danger;
      @include media-breakpoint-down(md) {
        font-size: 9px;
      }
    }
    .info-title {
      margin: 0;
      line-height: 1.1;
      font-size: 16px;
      font-weight: $font-weight-light;
      @include media-breakpoint-down(md) {
        font-size: 14px;
      }
    }
  }
}
</style>
