<template>
  <div class="container-fluid">
    <div
      class="join-minitutor-card mb-2"
      :style="`background-image: url(${$images.background})`"
    >
      <div class="join-minitutor-card_filter">
        <div class="join-minitutor-card_content">
          <h1 class="display-4 text-white text-shadow">
            Belajar, Berbagi, Berkontribusi.
          </h1>
          <p class="lead text-white text-shadow">
            Pengembangan kemampuan diri dan kualitas pendidikan Indonesia,
            dimulai dari sini!
          </p>
          <span
            v-if="!allowCreate"
            class="bg-indigo-600 text-light font-weight-bold d-inline-block p-15 rounded"
          >
            PERMINTAAN ANDA UNTUK MENJADI MINITUTOR SEDANG DI TINJAU
          </span>
          <nuxt-link
            v-else
            rel="nofollow"
            to="/join-minitutor/create"
            class="btn btn-primary"
          >
            GABUNG SEKARANG
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="panel panel-body text-center">
      <a
        download
        target="_blank"
        href="https://www.ajarbelajar.com/pdf/SOP-Pembuatan-Konten-AjarBelajar-2020.pdf"
        class="btn btn-primary"
        >Download SOP Pembuatan Konten AjarBelajar</a
      >
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'authNext',
  async asyncData({ $axios }) {
    let allowCreate = false
    try {
      const res = await $axios.$get('/join-minitutor/status')
      allowCreate = res.allowCreate
    } catch (e) {}
    return { allowCreate }
  },
  head() {
    return this.$seo()
  },
}
</script>

<style lang="scss">
.join-minitutor-card {
  display: block;
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
  overflow: hidden;
  border-radius: 4px;
  &_filter {
    display: flex;
    min-height: 320px;
    background-color: rgba($black, 0.4);
  }
  &_content {
    display: block;
    padding: 40px 20px;
    margin: auto;
    width: 100%;
    text-align: center;
    .text-shadow {
      text-shadow: 2px 2px 2px rgba($black, 0.4);
    }
  }
}
</style>
