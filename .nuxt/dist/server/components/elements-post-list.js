exports.ids = [17];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=elements-post-list.js.map