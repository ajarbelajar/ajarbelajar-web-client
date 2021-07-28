<template>
  <div class="pt-16">
    <layout-navbar container no-sidebar />
    <block-wide-header title="F . A . Q" page="faq" />

    <div class="container mb-3">
      <div class="flex justify-center p-3 mt-20">
        <h1 class="w-44 text-4xl font-semibold text-center">
          F . A . Q
          <div class="flex flex-col items-center py-4 mx-auto w-8/12">
            <span class="bg-primary-600 block mb-2 w-full h-1 rounded-full"></span>
            <span class="bg-primary-600 block w-6/12 h-1 rounded-full opacity-50"></span>
          </div>
        </h1>
      </div>

      <div class="p-3">
        <div class="mx-auto max-w-3xl">
          <elements-faq-list v-for="(item, i) in faq" :key="i" :faq="item" />
        </div>
      </div>
    </div>
    <layout-footer container />
  </div>
</template>

<script>
export default {
  name: 'About',
  layout: 'blank',
  data() {
    return {
      faq: [
        {
          q: 'Mengapa ada ajarbelajar.com?',
          a:
            "Yuk cek tentang kami <a href='/about'>di sini</a>. Selain itu, AjarBelajar juga berperan sebagai mediator diseminasi ilmu pengetahuan sekaligus wadah untuk para kontributor untuk belajar mengajar. Potensi akademisi dan keilmuwan Indonesia sangatlah besar. Hal ini dapat dilihat dari jumlah penerima beasiswa pendidikan tinggi (S2/S3) ke luar negeri. Dibandingkan menyimpan ilmu untuk diri sendiri, salah satu cara terbaik untuk memaksimalkan manfaat ilmu adalah dengan cara diajarkan. Karena kami yakin dengan menuangkan hal yang dipelajari, terlebih konten akan terbuka untuk feedback, akan terwujud positive learning environment. Konten yang kontributor kirim akan diusahakan menjadi rapi dan layak dikomsumsi oleh publik dengan bantuan tim AjarBelajar.",
        },
        {
          q:
            'Online course sudah menjamur dimana-mana. Kenapa saya harus memilih menonton AjarBelajar dibanding konten online course yang diisi oleh profesional?',
          a:
            'Tim AjarBelajar mengedepankan proses pembelajaran para kontributor untuk menjadi menjadi content creator daripada hanya menjadi penonton saja. Yang kami tampilkan adalah karya anak bangsa yang passionate di bidangnya masing-masing dan suka rela berbagi ilmunya. Masalah kredibilitas dan kualitas konten dihadapi dengan pencantuman referensi yang jelas. Jika tertarik silakan tonton, kami cuma ingin berbagi dan belajar kok :)',
        },
        {
          q: 'Siapa target pasar ajarbelajar.com?',
          a:
            'Target utama ajarbelajar.com ada 2, yaitu akademisi dan pengguna pada umumnya. Akademisi (baik yang masih berkuliah maupun alumni) adalah target AjarBelajar untuk berpartisipasi sebagai kontributor. Kontributor akan terlibat aktif dalam pembuatan konten AjarBelajar. Pengguna pada umumnya dapat berasal dari kalangan manapun, baik dari kalangan akademisi sendiri atau orang-orang yang tertarik dengan bahasan dan konten ajarbelajar.com',
        },
        {
          q: 'Apakah ajarbelajar.com mengambil untung?',
          a:
            'Tidak, AjarBelajar adalah gerakan non-profit. Biaya sistem, waktu dan tenaga adalah suka rela dari tim maupun kontributor. Namun, seiring dengan pertumbuhan sistem dan jumlah konten AjarBelajar di kemudian hari, kami tidak menutup kemungkinan untuk kamu mendukung kami secara materi dan non-materi, dan hubungi tim AjarBelajar melalui email ajarbelajarcom@gmail.com untuk detail lebih lanjut :)',
        },
        {
          q: 'Apa yang saya dapat jika saya menjadi kontributor?',
          a:
            "Selain manfaat yang tertera <a href='/about'>di sini</a> AjarBelajar tidak memberikan insentif berupa materi. Namun kontribusimu bisa menjadi pengalaman berharga bukan? :) Yuk mari sama-sama belajar, sama-sama ingin membangun bangsa, semua secara suka rela.",
        },
        {
          q: 'Apa syarat menjadi kontributor?',
          a:
            "Lihat segala informasi tentang menjadi kontributor <a href='/about'>di sini</a>. Pastinya untuk jadi kontributor kamu semangat dan dapat meluangkan waktu untuk berkontribusi tanpa menunda-nunda (#IndonesiaAntiWacana). Gerak cepat, maju terus.",
        },
        {
          q: 'Wih mantap, jadi pengen kontribusi nih. Alurnya gimana?',
          a:
            "Silakan cek cara jadi kontributor <a href='/join-minitutor'>di sini</a>. Alurnya sudah lengkap sekali :)",
        },
        {
          q: 'Bentuk konten yang bisa dibuat apa aja tuh?',
          a:
            "Bentuk konten yang kamu bisa buat ada <a href='/about'>di sini</a>.",
        },
        {
          q:
            'Saya ada koneksi ke organisasi pemuda yang saya nilai seprinsip dengan AjarBelajar dan mungkin bisa jadi partner kerjasama. Bisakah?',
          a:
            'Wah terimakasih banyak, untuk tim AjarBelajar mencapai telinga calon-calon kontributor mumpuni memang perlu bantuan kamu! Silakan kontak ajarbelajarcom@gmail.com untuk proses lebih lanjut.',
        },
        {
          q: 'Kurang sreg nih sama sistem AjarBelajar sekarang!',
          a:
            'Kami terbuka untuk feedback yang konstruktif! Kamu bisa isi form disini. Atau kamu punya ide yang keren dan mau membantu mengimplementasikannya? Kontak ajarbelajarcom@gmail.com apabila tertarik membantu tim AjarBelajar untuk perubahan positif yang lebih dahsyat!',
        },
        {
          q: 'Apa prospek dan rencana jangka panjang AjarBelajar?',
          a:
            'Perubahan besar menanti Indonesia. Jika jutaan awardee beasiswa luar negeri, mahasiswa universitas luar dan dalam negeri, alumni yang ingatannya masih fresh tentang bidangnya, semua berbagi ilmu dan insight keren yang bisa dipakai dibidang lain, pasti kualitas pendidikan Indonesia meningkat. Anak SMA termotivasi untuk mengedepankan ilmu lebih daripada hanya job-oriented, asisten dosen terbantu mengingat kembali bahan ajarnya, terciptanya kolaborasi lintas bidang... dan masih banyak lagi! Hal-hal besar tersebut bisa dimulai dengan kamu berkontribusi membuat keluarga AjarBelajar semakin keren lagi.',
        },
      ],
    }
  },
}
</script>
