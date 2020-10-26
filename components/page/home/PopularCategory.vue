<template>
  <div class="popular-categories">
    <h3 class="popular-categories-title">Kategori populer</h3>
    <div class="row">
      <div v-for="(category, i) in categories" :key="i" class="col-lg-3">
        <nuxt-link
          class="popular-categories-card"
          rel="nofollow"
          :to="`/categories/${category.slug}`"
        >
          <h4 class="info-title text-truncate">{{ category.name }}</h4>
        </nuxt-link>
      </div>
    </div>
    <div class="text-center py-2">
      <nuxt-link class="btn btn-primary font-weight-bold" to="/categories"
        >Tampilkan lebih banyak</nuxt-link
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style lang="scss">
.popular-categories {
  padding: 15px 0;
  .popular-categories-title {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: $font-weight-bold;
    margin: 0;
    margin-bottom: 10px;
    line-height: 1;
  }

  .popular-categories-card {
    display: block;
    padding: 5px;
    box-shadow: $box-shadow-sm;
    background-color: $white;
    overflow: hidden;
    border-radius: 4px;
    transition: $transition-base;
    text-decoration: none;
    margin-bottom: 15px;
    border-top: 4px solid $primary;

    &:hover {
      box-shadow: $box-shadow;
    }

    .info-title {
      display: block;
      margin: 0;
      padding: 10px;
      font-size: 14px;
      font-weight: $font-weight-bold;
      color: $dark;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
}
</style>
