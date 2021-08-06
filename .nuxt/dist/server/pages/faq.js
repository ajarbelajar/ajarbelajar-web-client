exports.ids = [57,9,11];
exports.modules = {

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/FaqList.vue?vue&type=template&id=728336d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.handleClose),expression:"handleClose"}],staticClass:"mb-3 bg-white rounded",class:{ 'shadow': !_vm.open, 'shadow-lg border-b-4 border-primary-600': _vm.open }},[_vm._ssrNode("<div class=\"flex p-3\"><h4 class=\"flex-1 pr-3 font-semibold text-gray-900\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.faq.q)+"\n    ")+"</h4> <button class=\"text-primary-600 flex justify-center items-center w-7 h-7 bg-gray-100 rounded border hover:shadow\"><i"+(_vm._ssrClass("ft",{ 'ft-plus-circle': !_vm.open, 'ft-minus-circle': _vm.open }))+"></i></button></div> <div"+(_vm._ssrClass("p-3 border-t",{ 'hidden': !_vm.open }))+"><p class=\"text-sm\">"+(_vm._s(_vm.faq.a))+"</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/FaqList.vue?vue&type=template&id=728336d2&

// EXTERNAL MODULE: external "v-click-outside"
var external_v_click_outside_ = __webpack_require__(12);
var external_v_click_outside_default = /*#__PURE__*/__webpack_require__.n(external_v_click_outside_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/FaqList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FaqListvue_type_script_lang_js_ = ({
  name: 'FaqList',
  directives: {
    clickOutside: external_v_click_outside_default.a.directive
  },
  props: {
    faq: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      open: false
    };
  },

  methods: {
    handleClose() {
      this.open = false;
    }

  }
});
// CONCATENATED MODULE: ./components/elements/FaqList.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_FaqListvue_type_script_lang_js_ = (FaqListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/FaqList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_FaqListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6c0958e2"
  
)

/* harmony default export */ var FaqList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/faq.vue?vue&type=template&id=e50cb1c0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pt-16"},[_c('layout-navbar',{attrs:{"container":"","no-sidebar":""}}),_vm._ssrNode(" "),_c('block-wide-header',{attrs:{"title":"F . A . Q","page":"faq"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container mb-3\">","</div>",[_vm._ssrNode("<div class=\"flex justify-center p-3 mt-20\"><h1 class=\"w-44 text-4xl font-semibold text-center\">\n        F . A . Q\n        <div class=\"flex flex-col items-center py-4 mx-auto w-8/12\"><span class=\"bg-primary-600 block mb-2 w-full h-1 rounded-full\"></span> <span class=\"bg-primary-600 block w-6/12 h-1 rounded-full opacity-50\"></span></div></h1></div> "),_vm._ssrNode("<div class=\"p-3\">","</div>",[_vm._ssrNode("<div class=\"mx-auto max-w-3xl\">","</div>",_vm._l((_vm.faq),function(item,i){return _c('elements-faq-list',{key:i,attrs:{"faq":item}})}),1)])],2),_vm._ssrNode(" "),_c('layout-footer',{attrs:{"container":""}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/faq.vue?vue&type=template&id=e50cb1c0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/faq.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var faqvue_type_script_lang_js_ = ({
  name: 'About',
  layout: 'blank',

  data() {
    return {
      faq: [{
        q: 'Mengapa ada ajarbelajar.com?',
        a: "Yuk cek tentang kami <a href='/about'>di sini</a>. Selain itu, AjarBelajar juga berperan sebagai mediator diseminasi ilmu pengetahuan sekaligus wadah untuk para kontributor untuk belajar mengajar. Potensi akademisi dan keilmuwan Indonesia sangatlah besar. Hal ini dapat dilihat dari jumlah penerima beasiswa pendidikan tinggi (S2/S3) ke luar negeri. Dibandingkan menyimpan ilmu untuk diri sendiri, salah satu cara terbaik untuk memaksimalkan manfaat ilmu adalah dengan cara diajarkan. Karena kami yakin dengan menuangkan hal yang dipelajari, terlebih konten akan terbuka untuk feedback, akan terwujud positive learning environment. Konten yang kontributor kirim akan diusahakan menjadi rapi dan layak dikomsumsi oleh publik dengan bantuan tim AjarBelajar."
      }, {
        q: 'Online course sudah menjamur dimana-mana. Kenapa saya harus memilih menonton AjarBelajar dibanding konten online course yang diisi oleh profesional?',
        a: 'Tim AjarBelajar mengedepankan proses pembelajaran para kontributor untuk menjadi menjadi content creator daripada hanya menjadi penonton saja. Yang kami tampilkan adalah karya anak bangsa yang passionate di bidangnya masing-masing dan suka rela berbagi ilmunya. Masalah kredibilitas dan kualitas konten dihadapi dengan pencantuman referensi yang jelas. Jika tertarik silakan tonton, kami cuma ingin berbagi dan belajar kok :)'
      }, {
        q: 'Siapa target pasar ajarbelajar.com?',
        a: 'Target utama ajarbelajar.com ada 2, yaitu akademisi dan pengguna pada umumnya. Akademisi (baik yang masih berkuliah maupun alumni) adalah target AjarBelajar untuk berpartisipasi sebagai kontributor. Kontributor akan terlibat aktif dalam pembuatan konten AjarBelajar. Pengguna pada umumnya dapat berasal dari kalangan manapun, baik dari kalangan akademisi sendiri atau orang-orang yang tertarik dengan bahasan dan konten ajarbelajar.com'
      }, {
        q: 'Apakah ajarbelajar.com mengambil untung?',
        a: 'Tidak, AjarBelajar adalah gerakan non-profit. Biaya sistem, waktu dan tenaga adalah suka rela dari tim maupun kontributor. Namun, seiring dengan pertumbuhan sistem dan jumlah konten AjarBelajar di kemudian hari, kami tidak menutup kemungkinan untuk kamu mendukung kami secara materi dan non-materi, dan hubungi tim AjarBelajar melalui email ajarbelajarcom@gmail.com untuk detail lebih lanjut :)'
      }, {
        q: 'Apa yang saya dapat jika saya menjadi kontributor?',
        a: "Selain manfaat yang tertera <a href='/about'>di sini</a> AjarBelajar tidak memberikan insentif berupa materi. Namun kontribusimu bisa menjadi pengalaman berharga bukan? :) Yuk mari sama-sama belajar, sama-sama ingin membangun bangsa, semua secara suka rela."
      }, {
        q: 'Apa syarat menjadi kontributor?',
        a: "Lihat segala informasi tentang menjadi kontributor <a href='/about'>di sini</a>. Pastinya untuk jadi kontributor kamu semangat dan dapat meluangkan waktu untuk berkontribusi tanpa menunda-nunda (#IndonesiaAntiWacana). Gerak cepat, maju terus."
      }, {
        q: 'Wih mantap, jadi pengen kontribusi nih. Alurnya gimana?',
        a: "Silakan cek cara jadi kontributor <a href='/join-minitutor'>di sini</a>. Alurnya sudah lengkap sekali :)"
      }, {
        q: 'Bentuk konten yang bisa dibuat apa aja tuh?',
        a: "Bentuk konten yang kamu bisa buat ada <a href='/about'>di sini</a>."
      }, {
        q: 'Saya ada koneksi ke organisasi pemuda yang saya nilai seprinsip dengan AjarBelajar dan mungkin bisa jadi partner kerjasama. Bisakah?',
        a: 'Wah terimakasih banyak, untuk tim AjarBelajar mencapai telinga calon-calon kontributor mumpuni memang perlu bantuan kamu! Silakan kontak ajarbelajarcom@gmail.com untuk proses lebih lanjut.'
      }, {
        q: 'Kurang sreg nih sama sistem AjarBelajar sekarang!',
        a: 'Kami terbuka untuk feedback yang konstruktif! Kamu bisa isi form disini. Atau kamu punya ide yang keren dan mau membantu mengimplementasikannya? Kontak ajarbelajarcom@gmail.com apabila tertarik membantu tim AjarBelajar untuk perubahan positif yang lebih dahsyat!'
      }, {
        q: 'Apa prospek dan rencana jangka panjang AjarBelajar?',
        a: 'Perubahan besar menanti Indonesia. Jika jutaan awardee beasiswa luar negeri, mahasiswa universitas luar dan dalam negeri, alumni yang ingatannya masih fresh tentang bidangnya, semua berbagi ilmu dan insight keren yang bisa dipakai dibidang lain, pasti kualitas pendidikan Indonesia meningkat. Anak SMA termotivasi untuk mengedepankan ilmu lebih daripada hanya job-oriented, asisten dosen terbantu mengingat kembali bahan ajarnya, terciptanya kolaborasi lintas bidang... dan masih banyak lagi! Hal-hal besar tersebut bisa dimulai dengan kamu berkontribusi membuat keluarga AjarBelajar semakin keren lagi.'
      }]
    };
  },

  head: {
    title: 'F.A.Q'
  }
});
// CONCATENATED MODULE: ./pages/faq.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_faqvue_type_script_lang_js_ = (faqvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/faq.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_faqvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "70a54bb8"
  
)

/* harmony default export */ var faq = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LayoutNavbar: __webpack_require__(14).default,BlockWideHeader: __webpack_require__(86).default,ElementsFaqList: __webpack_require__(114).default,LayoutFooter: __webpack_require__(28).default})


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hero.7d98f24.jpg";

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/WideHeader.vue?vue&type=template&id=aa1b745a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"overflow-hidden mb-3 bg-fixed bg-cover shadow",style:(("background-image: url(" + (__webpack_require__(80)) + ")"))},[_vm._ssrNode("<div class=\"pt-24 pb-10 bg-gray-800 bg-opacity-40\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"flex justify-between px-3\">","</div>",[_vm._ssrNode("<h5 class=\"text-lg font-bold tracking-widest leading-none text-white md:text-xl\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h5> "),_vm._ssrNode("<div class=\"my-auto font-semibold leading-none text-white md:text-lg\">","</div>",[_c('nuxt-link',{staticClass:"hover:text-primary-700 text-primary-600",attrs:{"to":"/home"}},[_vm._v("home")]),_vm._ssrNode(" <span>/</span> <span>"+_vm._ssrEscape(_vm._s(_vm.page))+"</span>")],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/block/WideHeader.vue?vue&type=template&id=aa1b745a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/WideHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var WideHeadervue_type_script_lang_js_ = ({
  name: 'WideHeader',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    page: {
      type: String,
      default: 'page'
    }
  }
});
// CONCATENATED MODULE: ./components/block/WideHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var block_WideHeadervue_type_script_lang_js_ = (WideHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/block/WideHeader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  block_WideHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f286aa62"
  
)

/* harmony default export */ var WideHeader = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=faq.js.map