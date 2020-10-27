<template>
  <div>
    <section
      class="welcome-header"
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
                  didunia, belajar apapun untuk memuaskan hasrat ingin tahumu.
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
                  pembayaran yang terintegrasi yuk mengajar dengan passion!.
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
                  Diskusi dengan para <i>lifelog lerner</i>.
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
            <li class="testimonial-item col-md-4">
              <div class="testimonial-content">
                <p class="text-dark">
                  Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor
                  neque adipiscing diam, a cursus ipsum ante quis turpis.
                </p>
              </div>
              <div class="testimonial-image">
                <span class="avatar" href="javascript:void(0)">
                  <img src="https://via.placeholder.com/120" alt="image" />
                </span>
              </div>
              <span class="testimonial-author">June Lane</span>
              <span class="testimonial-company">Web Designer</span>
            </li>
            <li class="testimonial-item col-md-4">
              <div class="testimonial-content">
                <p class="text-dark">
                  Suspendisse in justo eu magna luctus suscipit. Sed lectus.
                  Integer euismod lacus luctus magna.
                </p>
              </div>
              <div class="testimonial-image">
                <span class="avatar" href="javascript:void(0)">
                  <img src="https://via.placeholder.com/120" alt="image" />
                </span>
              </div>
              <span class="testimonial-author">Edward Fletcher</span>
              <span class="testimonial-company">Videographer</span>
            </li>
            <li class="testimonial-item col-md-4">
              <div class="testimonial-content">
                <p class="text-dark">
                  Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                  ipsum. Praesent mauris. Fusce nec tellus sed augue semper
                  porta.
                </p>
              </div>
              <div class="testimonial-image">
                <span class="avatar" href="javascript:void(0)">
                  <img src="https://via.placeholder.com/120" alt="image" />
                </span>
              </div>
              <span class="testimonial-author">Crystal Bates</span>
              <span class="testimonial-company">Wordpress Ninja</span>
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
  head() {
    return this.$seo()
  },
}
</script>
