exports.ids = [58,6,10,17,19];
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

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home.vue?vue&type=template&id=642038d0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('block-popular-posts',{attrs:{"posts":_vm.popularPosts}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-3\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-2 gap-3 py-3 md:grid-cols-4\">","</div>",_vm._l((_vm.popularCategories),function(item){return _c('elements-category-list',{key:item.id,attrs:{"category":item}})}),1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"py-3 text-center\">","</div>",[_c('nuxt-link',{staticClass:"hover:bg-primary-700 bg-primary-600 inline-block py-2 px-4 text-sm font-semibold text-white rounded",attrs:{"to":"/categories"}},[_vm._v("Muat lebih banyak Kategori")])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-3\">","</div>",[_vm._ssrNode("<h4 class=\"pt-3 text-xl font-bold tracking-wider\">VIDEO TERBARU</h4> "),_vm._ssrNode("<div class=\"grid grid-cols-1 gap-3 py-3 md:grid-cols-2 xl:grid-cols-4\">","</div>",_vm._l((_vm.newVideos),function(item){return _c('elements-post-list',{key:item.id,attrs:{"post":item}})}),1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"py-3 text-center\">","</div>",[_c('nuxt-link',{staticClass:"hover:bg-primary-700 bg-primary-600 inline-block py-2 px-4 text-sm font-semibold text-white rounded",attrs:{"to":"/videos"}},[_vm._v("Muat lebih banyak Video")])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-3\">","</div>",[_vm._ssrNode("<h4 class=\"pt-3 text-xl font-bold tracking-wider\">ARTIKEL TERBARU</h4> "),_vm._ssrNode("<div class=\"grid grid-cols-1 gap-3 py-3 md:grid-cols-2 xl:grid-cols-4\">","</div>",_vm._l((_vm.newArticles),function(item){return _c('elements-post-list',{key:item.id,attrs:{"post":item}})}),1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"py-3 text-center\">","</div>",[_c('nuxt-link',{staticClass:"hover:bg-primary-700 bg-primary-600 inline-block py-2 px-4 text-sm font-semibold text-white rounded",attrs:{"to":"/articles"}},[_vm._v("Muat lebih banyak Artikel")])],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-3\">","</div>",[_vm._ssrNode("<h4 class=\"pt-3 text-xl font-bold tracking-wider\">POIN TERBANYAK</h4> "),_vm._ssrNode("<div class=\"grid grid-cols-2 gap-3 py-3 xl:grid-cols-4\">","</div>",_vm._l((_vm.mostUserPoints),function(user){return _c('elements-user-list',{key:user.id,attrs:{"user":user}})}),1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home.vue?vue&type=template&id=642038d0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home.vue?vue&type=script&lang=js&
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
/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'HomePage',

  async asyncData({
    $axios,
    error
  }) {
    try {
      return await $axios.$get('/nuxt/home');
    } catch (e) {
      return error(e);
    }
  },

  head: {
    title: 'Home'
  }
});
// CONCATENATED MODULE: ./pages/home.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5470b82d"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BlockPopularPosts: __webpack_require__(115).default,ElementsCategoryList: __webpack_require__(94).default,ElementsPostList: __webpack_require__(81).default,ElementsUserList: __webpack_require__(95).default})


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/PostList.vue?vue&type=template&id=2ba4c2ae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex overflow-hidden flex-col bg-white rounded shadow"},[_vm._ssrNode("<div class=\"block p-2 w-full\">","</div>",[_vm._ssrNode("<div class=\"relative\">","</div>",[(_vm.post.category)?_c('nuxt-link',{staticClass:"hover:bg-primary-700 bg-primary-600 leading-0 text-2xs block absolute top-1 left-1 py-1 px-2 font-semibold leading-none text-white uppercase rounded-sm shadow",attrs:{"to":("/categories/" + (_vm.post.category.slug))}},[_vm._v("\n        "+_vm._s(_vm.post.category.name)+"\n      ")]):_vm._e(),_vm._ssrNode(" "),_c('v-img',{staticClass:"block w-full rounded shadow",attrs:{"src":_vm.post.hero.thumb || _vm.$images.hero.thumb,"src-placeholder":_vm.$images.hero.thumb,"alt":_vm.post.title}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"absolute right-1 -bottom-4 p-px w-9 h-9 bg-white rounded-full shadow-lg\">","</div>",[_c('v-img',{staticClass:"block w-full rounded-full border border-white",attrs:{"src":_vm.post.user.avatar || _vm.$images.avatar,"src-placeholder":_vm.$images.avatar,"alt":_vm.post.user.username}})],1)],2)]),_vm._ssrNode(" <div class=\"flex flex-col flex-1 p-2\"><div class=\"flex-1 mb-3 w-full\"><div class=\"text-2xs font-semibold text-gray-600\"><span>"+_vm._ssrEscape(_vm._s(_vm._f("moment")(_vm.post.created_at,'dddd, Do MMMM YYYY')))+"</span></div> <h4 class=\"mb-1 font-bold leading-5\">"+_vm._ssrEscape(_vm._s(_vm.post.title))+"</h4> <div class=\"text-xs font-semibold text-gray-400\">\n        Dari <span class=\"text-gray-900\">"+_vm._ssrEscape(_vm._s(_vm.post.user.name))+"</span></div></div> <div class=\"flex w-full\"><span class=\"text-2xs block px-1 mr-1 font-bold text-gray-500 bg-gray-100 rounded-sm border\"><i class=\"ft ft-eye\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.post.view_count))+"</span> <span class=\"text-2xs block px-1 mr-1 font-bold text-gray-500 bg-gray-100 rounded-sm border\"><i class=\"ft ft-message-circle\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.post.comments_count))+"</span> <span class=\"text-2xs block px-1 mr-1 font-bold text-gray-500 bg-gray-100 rounded-sm border\"><i class=\"ft ft-star\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.post.rating)+"/"+_vm._s(_vm.post.feedback_count))+"</span></div></div> "),_vm._ssrNode("<div class=\"p-2 bg-gray-100\">","</div>",[_c('nuxt-link',{staticClass:"hover:bg-primary-700 bg-primary-600 flex justify-center items-center px-4 h-8 text-sm font-semibold leading-none text-center text-white rounded",attrs:{"to":_vm.postUrl}},[_c('i',{staticClass:"ft pr-2",class:_vm.post.type === 'video' ? 'ft-play' : 'ft-book'}),_vm._v("\n      "+_vm._s(_vm.post.type === 'video' ? 'Tonton Video' : 'Baca Artikel')+"\n    ")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/PostList.vue?vue&type=template&id=2ba4c2ae&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/PostList.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PostListvue_type_script_lang_js_ = ({
  props: {
    post: {
      type: Object,
      required: true,

      default() {
        return {};
      }

    }
  },
  computed: {
    postUrl() {
      return `/${this.post.type}s/${this.post.slug}`;
    }

  }
});
// CONCATENATED MODULE: ./components/elements/PostList.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_PostListvue_type_script_lang_js_ = (PostListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/PostList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_PostListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "26aa0f33"
  
)

/* harmony default export */ var PostList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/CategoryList.vue?vue&type=template&id=c928f5a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nuxt-link',{staticClass:"border-primary-600 flex justify-center items-center p-3 bg-white rounded border-t-4 shadow hover:shadow-lg",attrs:{"to":("/categories/" + (_vm.category.slug))}},[_c('span',{staticClass:"block text-sm font-bold tracking-wide text-center uppercase"},[_vm._v(_vm._s(_vm.category.name))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/CategoryList.vue?vue&type=template&id=c928f5a6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/CategoryList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var CategoryListvue_type_script_lang_js_ = ({
  name: 'CategoryList',
  props: {
    category: {
      type: Object,
      default: () => ({})
    }
  }
});
// CONCATENATED MODULE: ./components/elements/CategoryList.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_CategoryListvue_type_script_lang_js_ = (CategoryListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/CategoryList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_CategoryListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4c0ce1de"
  
)

/* harmony default export */ var CategoryList = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/UserList.vue?vue&type=template&id=0fc8c48a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nuxt-link',{staticClass:"group p-2 bg-white rounded shadow hover:shadow-lg",attrs:{"to":("/users/" + (_vm.user.username))}},[_c('div',{staticClass:"flex relative items-center"},[_c('span',{staticClass:"text-2xs bg-primary-100 text-primary-600 block absolute -top-1 -right-1 px-2 font-bold rounded-full"},[_vm._v(_vm._s(_vm.user.points)+" POIN")]),_vm._v(" "),_c('div',{staticClass:"flex flex-col justify-center items-center"},[_c('div',{staticClass:"group-hover:bg-gray-200 p-1 w-14 bg-white rounded-full border"},[_c('v-img',{staticClass:"w-full rounded-full",attrs:{"src":_vm.user.avatar || _vm.$images.avatar,"src-placeholder":_vm.$images.avatar}})],1)]),_vm._v(" "),_c('div',{staticClass:"flex-1 pl-2"},[_c('h3',{staticClass:"truncate mb-1 text-sm font-semibold leading-none capitalize"},[_vm._v(_vm._s(_vm.user.name))]),_vm._v(" "),_c('p',{staticClass:"text-xs leading-none text-gray-600 capitalize"},[_vm._v("@"+_vm._s(_vm.user.username))])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/UserList.vue?vue&type=template&id=0fc8c48a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/UserList.vue?vue&type=script&lang=js&
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
/* harmony default export */ var UserListvue_type_script_lang_js_ = ({
  name: 'UserList',
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  }
});
// CONCATENATED MODULE: ./components/elements/UserList.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_UserListvue_type_script_lang_js_ = (UserListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/UserList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_UserListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1c28075e"
  
)

/* harmony default export */ var UserList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home.js.map