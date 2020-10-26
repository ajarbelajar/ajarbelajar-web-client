<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="category in categories" :key="category.i" class="col-lg-3">
        <nuxt-link
          class="categories-card"
          rel="nofollow"
          :to="`/categories/${category.slug}`"
        >
          <h4 class="info-title text-truncate">{{ category.name }}</h4>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  async asyncData({ store, error }) {
    try {
      await store.dispatch('category/fetch')
      return {}
    } catch (e) {
      error(e)
    }
  },
  computed: {
    ...mapGetters({ categories: 'category/categories' }),
  },
  head() {
    return this.$seo()
  },
}
</script>
<style lang="scss" scoped>
.categories-card {
  display: block;
  padding: 5px;
  box-shadow: $box-shadow-sm;
  background-color: $white;
  overflow: hidden;
  border-radius: 4px;
  transition: $transition-base;
  text-decoration: none !important;
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
</style>
