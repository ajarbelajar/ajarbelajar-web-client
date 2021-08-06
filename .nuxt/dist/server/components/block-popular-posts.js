exports.ids = [6];
exports.modules = {

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/PopularPosts.vue?vue&type=template&id=c2ef2630&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueSlickCarousel',{staticClass:"relative",attrs:{"arrows":true,"autoplay":"","speed":1000,"autoplay-speed":6000},scopedSlots:_vm._u([{key:"prevArrow",fn:function(){return [_c('span',{staticClass:"flex absolute bottom-4 left-4 z-20 justify-center items-center w-9 h-9 leading-none text-gray-800 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100"},[_c('i',{staticClass:"ft ft-arrow-left-circle"})])]},proxy:true},{key:"nextArrow",fn:function(){return [_c('span',{staticClass:"flex absolute right-4 bottom-4 z-20 justify-center items-center w-9 h-9 leading-none text-gray-800 bg-white rounded-full shadow-lg cursor-pointer hover:bg-gray-100"},[_c('i',{staticClass:"ft ft-arrow-right-circle"})])]},proxy:true}])},_vm._l((_vm.posts),function(post,i){return _c('div',{key:i,staticClass:"p-3"},[_c('div',{staticClass:"flex overflow-hidden relative px-10 bg-white bg-cover rounded shadow",style:(("background-image: url(" + (post.hero.large || _vm.$images.hero.large) + "); min-height: 400px"))},[_c('div',{staticClass:"relative z-10 my-auto max-w-xl"},[(post.category)?_c('nuxt-link',{staticClass:"hover:bg-primary-700 bg-primary-600 inline-block py-1 px-3 mb-1 text-xs font-bold tracking-widest text-center text-white uppercase rounded-full shadow",attrs:{"to":"/home"}},[_vm._v(_vm._s(post.category.name))]):_vm._e(),_vm._v(" "),_c('h3',{staticClass:"text-2xl font-bold tracking-wider text-white uppercase lg:text-3xl"},[_vm._v(_vm._s(post.title))]),_vm._v(" "),_c('p',{staticClass:"text-shadow mb-3 text-white"},[_vm._v("by "+_vm._s(post.user.name)+" - "+_vm._s(_vm._f("moment")(post.created_at,'dddd, Do MMMM YYYY'))+" - "+_vm._s(post.view_count)+"x dilihat")]),_vm._v(" "),_c('nuxt-link',{staticClass:"inline-block py-2 px-5 font-semibold text-center uppercase bg-white rounded-full shadow hover:text-gray-400",attrs:{"to":("/" + (post.type) + "s/" + (post.slug))}},[_c('i',{staticClass:"ft pr-2",class:post.type === 'video' ? 'ft-play' : 'ft-book'}),_vm._v("\n          "+_vm._s(post.type === 'video' ? 'Tonton Video' : 'Baca Artikel')+"\n        ")])],1),_vm._v(" "),_c('div',{staticClass:"absolute inset-0 bg-gray-900 opacity-10 select-none"}),_vm._v(" "),_c('div',{staticClass:"absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-70 select-none"})])])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/block/PopularPosts.vue?vue&type=template&id=c2ef2630&

// EXTERNAL MODULE: external "vue-slick-carousel"
var external_vue_slick_carousel_ = __webpack_require__(72);
var external_vue_slick_carousel_default = /*#__PURE__*/__webpack_require__.n(external_vue_slick_carousel_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/PopularPosts.vue?vue&type=script&lang=js&
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
//
//
//
//

/* harmony default export */ var PopularPostsvue_type_script_lang_js_ = ({
  name: 'PopularPosts',
  components: {
    VueSlickCarousel: external_vue_slick_carousel_default.a
  },
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
});
// CONCATENATED MODULE: ./components/block/PopularPosts.vue?vue&type=script&lang=js&
 /* harmony default export */ var block_PopularPostsvue_type_script_lang_js_ = (PopularPostsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/block/PopularPosts.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  block_PopularPostsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "58c5c149"
  
)

/* harmony default export */ var PopularPosts = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=block-popular-posts.js.map