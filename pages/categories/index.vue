<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="category in categories" :key="category.id" class="col-lg-4">
        <div class="card text-center">
          <div class="card-block">
            <h3 class="card-title text-uppercase mb-4">{{ category.name }}</h3>
            <ul class="nav-quick nav-quick-bordered row">
              <li class="nav-item col-6">
                <span class="nav-link">
                  <i class="icon wb-video" aria-hidden="true"></i>
                  {{ category.playlists_count }} Playlist
                </span>
              </li>
              <li class="nav-item col-6">
                <span class="nav-link">
                  <i class="icon wb-order" aria-hidden="true"></i>
                  {{ category.articles_count }} Artikel
                </span>
              </li>
            </ul>
            <nuxt-link
              :to="`/categories/${category.slug}`"
              class="btn btn-primary btn-sm btn-block"
              >Telusuri</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      categories: [],
    }
  },
  computed: {
    ...mapGetters({ all_categories: 'category/categories' }),
  },
  created() {
    const categories = []
    this.all_categories.forEach((category) => {
      if (category.playlists_count || category.articles_count) {
        categories.push(category)
      }
    })
    this.categories = categories
  },
}
</script>
