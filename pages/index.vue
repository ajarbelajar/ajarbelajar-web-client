<template>
  <main class="bg-white">
    <landing-navbar />
    <landing-header />
    <landing-counter :count="counter" />
    <landing-info />
    <landing-testimonials :testimonials="[
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
    ]" />
    <landing-call-to-actions />
    <landing-footer />
  </main>
</template>

<script>
export default {
  name: 'LandingPage',
  layout: 'blank',
  async asyncData({$axios, error}) {
    try {
      return await $axios.$get('/nuxt/landing')
    } catch (e) {
      return error(e)
    }
  },
}
</script>
