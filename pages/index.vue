<template>
  <div class="landing-layout">
    <landing-navbar />
    <landing-header />
    <landing-counter :counters="counters" />
    <landing-grid-1 />
    <landing-grid-2 />
    <landing-testimoni :testimonials="testimonials" />
    <landing-call-to-action />
    <landing-footer />
  </div>
</template>

<script>
export default {
  layout: 'blank',
  middleware: 'guest',
  computed: {
    testimonials() {
      return [
        {
          name: 'Hanna Christina Uranus',
          avatar: '/mt_hanna.jpeg',
          message:
            'AjarBelajar banyak ngasih kesempatan baru, khususnya biar makin percaya diri dengan bidang keilmuan. Selain itu, bisa dengan mudah sharing dan kolaborasi dengan MiniTutor dari keilmuan lain. Komunitas ini juga sangat suportif, dinamis dan beragam isinya, jadi sangat mengembangkan dirisecara pribadi dan profesional.',
        },
        {
          name: 'Fajar Ryan Akhra',
          avatar: '/mt_ryan.jpeg',
          message:
            'AjarBelajar menjadi tempat untuk aku belajar dari perspektif ilmu lain sekaligus menjadi tempat sharing ilmu - ilmu yang aku simpan sendiri. ',
        },
        {
          name: 'Annisa Ellen Brillyani',
          avatar: '/mt_ellen.jpeg',
          message:
            'Di AjarBelajar bisa dapet ilmu ilmu baru dari berbagai macam bidang yang bener-bener ngebuka jendela pengetahuan banget dan itu gratis tanpa ada biaya apapun. <br />Selain Itu juga adanya AjarBelajar, aku sebagai MiniTutor bisa dengan bebas untuk berbagi  bidang yang sedang aku tekuni dan bisa bermanfaat buat ornag lain.',
        },
      ]
    },
    counters() {
      return {
        article: 20,
        playlist: 120,
        user: 618,
        minitutor: 70,
      }
    },
  },
  head() {
    return this.$seo()
  },
}
</script>

<style lang="scss">
.landing-layout {
  background-color: $white;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;

  .landing-title {
    font-weight: $font-weight-bold;
    color: $primary;
    text-align: center;
  }

  .landing-description {
    font-weight: $font-weight-light;
    letter-spacing: 0.5px;
    color: $gray-400;
    text-align: center;
  }
}
</style>
