<template>
  <div>
    <section
      class="welcome-header m-0"
      :style="`background-image: url('${$images.background}')`"
    >
      <div class="container">
        <div class="wrapper">
          <div class="info">
            <h1>Mengajar ataupun belajar, semuanya menjadi lebih mudah.</h1>
            <p>
              Kami adalah nonprofit dengan misi untuk membuat edukasi online
              yang lebih berkualitas.
            </p>
            <nuxt-link rel="nofollow" to="/home" class="btn"
              >MULAI BELAJAR SEKARANG</nuxt-link
            >
            <nuxt-link to="/register" class="btn"
              >MULAI MENGAJAR SEKARANG</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>

    <div class="user-post-count py-30">
      <div class="container">
        <h1 class="user-post-count-title">
          Beragam, dan akan terus bertumbuh!
        </h1>
        <p class="user-post-count-description">
          AjarBelajar diisi oleh konten dari MiniTutor dengan berbagai macam
          latar belakang. Ada banyak bidang ilmu dan topik bahasan yang bisa
          disimak, dan akan terus bertambah.
        </p>
        <div class="row">
          <div class="col-lg-4">
            <div class="card p-30 flex-row justify-content-between">
              <div class="white">
                <i
                  class="icon icon-circle icon-2x wb-user-circle bg-red-600"
                ></i>
              </div>
              <div class="counter counter-md counter text-right">
                <div class="counter-number-group">
                  <span class="counter-number">618</span>
                  <span class="counter-number-related text-capitalize"
                    >Pengguna</span
                  >
                </div>
                <div class="counter-label text-capitalize font-size-16">
                  Terdaftar
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card p-30 flex-row justify-content-between">
              <div class="white">
                <i class="icon icon-circle icon-2x wb-users bg-indigo-600"></i>
              </div>
              <div class="counter counter-md counter text-right">
                <div class="counter-number-group">
                  <span class="counter-number">70</span>
                  <span class="counter-number-related text-capitalize"
                    >MiniTutor</span
                  >
                </div>
                <div class="counter-label text-capitalize font-size-16">
                  Berkontribusi
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card p-30 flex-row justify-content-between">
              <div class="white">
                <i
                  class="icon icon-circle icon-2x wb-clipboard bg-green-600"
                ></i>
              </div>
              <div class="counter counter-md counter text-right">
                <div class="counter-number-group">
                  <span class="counter-number">203</span>
                  <span class="counter-number-related text-capitalize"
                    >Postingan</span
                  >
                </div>
                <div class="counter-label text-capitalize font-size-16">
                  Terbit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="welcome-section-1">
      <div class="container">
        <h2 class="section-title display-3">Dengan ajar belajar kamu dapat.</h2>
        <div class="row">
          <div class="col-md-4 d-flex">
            <div class="card">
              <div class="card-body text-center">
                <div class="px-4 py-3 bg-light mb-3">
                  <img :src="$images.svg.svg1" class="img-fluid" />
                </div>
                <p class="lead">
                  Belajar lebih dari 100+ bidang ilmu, dari sejara seni hingga
                  fisika kuantum!
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex">
            <div class="card">
              <div class="card-body text-center">
                <div class="px-4 py-3 bg-light mb-3">
                  <img :src="$images.svg.svg2" class="img-fluid" />
                </div>
                <p class="lead">
                  Mendapatkan pendapatan tambahan lewat mengajar online
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 d-flex">
            <div class="card">
              <div class="card-body text-center">
                <div class="px-4 py-3 bg-light mb-3">
                  <img :src="$images.svg.svg3" class="img-fluid" />
                </div>
                <p class="lead">
                  Diskusi dengan temen-temen dengan semangat belajar yang sama!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="welcome-section-2 bg-white">
      <div class="container">
        <div class="py-5">
          <div class="row">
            <div class="col-md-4 d-flex">
              <div class="image-wrap my-auto">
                <img :src="$images.svg.svg1" alt="" class="d-block img-fluid" />
              </div>
            </div>
            <div class="col-md-8 pb-4">
              <div class="my-auto px-md-4">
                <h3 class="section-title display-3 text-primary">
                  Kamu bisa belajar apapun.
                </h3>
                <p class="section-paragraph lead mb-4">
                  Dengan pengajar berkualitas dari lulusan universitas terbaik
                  di dunia. Belajar apapun untuk memuaskan hasrat ingin tahumu.
                </p>
                <nuxt-link to="/home" class="btn btn-wide btn-primary"
                  >Aku mau belajar online!</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="py-5">
          <div class="row">
            <div class="col-md-4 d-flex order-md-2">
              <div class="image-wrap my-auto">
                <img :src="$images.svg.svg2" alt="" class="d-block img-fluid" />
              </div>
            </div>
            <div class="col-md-8 pb-4 order-md-1">
              <div class="my-auto px-md-4">
                <h3 class="section-title display-3 text-primary">
                  Peroleh pendapatan tambahan.
                </h3>
                <p class="section-paragraph lead mb-4">
                  Buat kelas online dengan mudah, dengan fitur marketing dan
                  pembayaran yang terintegrasi. Yuk mengajar dengan passion!.
                </p>
                <nuxt-link to="/register" class="btn btn-wide btn-primary"
                  >Aku mau mengajar online!</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="py-5">
          <div class="row">
            <div class="col-md-4 d-flex">
              <div class="image-wrap my-auto">
                <img :src="$images.svg.svg3" alt="" class="d-block img-fluid" />
              </div>
            </div>
            <div class="col-md-8 pb-4">
              <div class="my-auto px-md-4">
                <h3 class="section-title display-3 text-primary">
                  Diskusi dengan para <i>lifelong learner</i>.
                </h3>
                <p class="section-paragraph lead mb-4">
                  Bergabung dengan para pembelajar seumur hidup -- dapatkan
                  tips, teman baru, dan ilmu baru!
                </p>
                <nuxt-link to="/home" class="btn btn-wide btn-primary"
                  >Aku mau belajar online!</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section
      class="welcome-section-3 py-5"
      :style="`background-image: url('${$images.background}')`"
    >
      <div class="container">
        <div class="testimonial testimonial-reverse">
          <ul class="testimonial-ul row">
            <li
              v-for="(item, i) in testimoni"
              :key="i"
              class="testimonial-item col-md-4"
            >
              <div class="testimonial-content">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <p class="text-dark" v-html="item.message"></p>
              </div>
              <div class="testimonial-image">
                <span class="avatar" href="javascript:void(0)">
                  <img :src="item.avatar" :alt="item.name" />
                </span>
              </div>
              <span class="testimonial-author">{{ item.name }}</span>
              <span class="testimonial-company">MiniTutor Ajarbelajar</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- <div class="py-5 bg-dark text-center">
      <h1 class="text-white font-weight-bold">GABUNG SEKARANG!</h1>
      <a href="#" class="btn btn-primary btn-wide font-weight-bold"
        >MULAI BELAJAR ONLINE</a
      >
      <a href="#" class="btn btn-primary btn-wide font-weight-bold"
        >MULAI MENGAJAR ONLINE</a
      >
    </div> -->
  </div>
</template>

<script>
export default {
  layout: 'welcome',
  computed: {
    testimoni() {
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
            'Di AjarBelajar bisa dapet ilmu ilmu baru dari berbagai macam bidang yang bener-bener ngebuka jendela pengetahuan banget dan itu gratis tanpa ada biaya apapun. <br />Selain Itu juga adanya AjarBelajar, aku sebagai minitutor bisa dengan bebas untuk berbagi  bidang yang sedang aku tekuni dan bisa bermanfaat buat ornag lain.',
        },
      ]
    },
  },
  head() {
    return this.$seo()
  },
}
</script>
