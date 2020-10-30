<template>
  <div class="container-fluid">
    <div class="row">
      <div
        v-for="item in data"
        :key="item.id"
        class="col-lg-3 col-md-4 col-sm-6 pb-3"
      >
        <app-post-list :post="item" :type="item.type" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios, error }) {
    try {
      return await $axios.$get(`/categories/${params.slug}`)
    } catch (e) {
      return error(e)
    }
  },
  head() {
    return {
      title: 'Kategori ' + this.name,
    }
  },
}
</script>
