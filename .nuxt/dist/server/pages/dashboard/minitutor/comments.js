exports.ids = [52,1];
exports.modules = {

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/minitutor/comments.vue?vue&type=template&id=4b275102&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-3"},[_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"flex p-3 mb-3 bg-white rounded shadow\">","</div>",[_vm._ssrNode("<div class=\"w-14\">","</div>",[_c('nuxt-link',{staticClass:"block p-1 bg-white rounded-full border hover:bg-gray-200",attrs:{"to":("/users/" + (comment.user.username))}},[_c('v-img',{staticClass:"block w-full rounded-full",attrs:{"src":comment.user.avatar || _vm.$images.avatar,"src-placeholder":_vm.$images.avatar,"alt":comment.user.username}})],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex-1 pl-3\">","</div>",[_vm._ssrNode("<div class=\"flex items-center mb-3\">","</div>",[_c('nuxt-link',{staticClass:"hover:text-primary-700 text-primary-600 block text-lg font-semibold leading-none capitalize",attrs:{"to":("/users/" + (comment.user.username))}},[_vm._v(_vm._s(comment.user.name))]),_vm._ssrNode(" <span class=\"block pl-2 text-xs leading-none\">"+_vm._ssrEscape(_vm._s(_vm._f("moment")(comment.created_at,'from', 'now')))+"</span>")],2),_vm._ssrNode(" <p class=\"mb-3 text-gray-700\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p> "),_c('nuxt-link',{staticClass:"hover:bg-primary-600 bg-primary-100 text-primary-600 inline-flex justify-center items-center px-3 h-7 text-xs font-semibold leading-none rounded hover:text-white",attrs:{"to":("/" + (comment.post.type) + "s/" + (comment.post.slug))}},[_vm._v("Lihat Postingan")])],2)],2)}),_vm._ssrNode(" "),(!_vm.comments.length)?_c('block-blank',{attrs:{"text":"Belum ada Komentar."}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/minitutor/comments.vue?vue&type=template&id=4b275102&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/minitutor/comments.vue?vue&type=script&lang=js&
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
/* harmony default export */ var commentsvue_type_script_lang_js_ = ({
  name: 'MinitutorComments',

  async asyncData({
    error,
    $axios
  }) {
    try {
      const comments = await $axios.$get('/minitutor/comments');
      return {
        comments
      };
    } catch (e) {
      return error(e);
    }
  }

});
// CONCATENATED MODULE: ./pages/dashboard/minitutor/comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var minitutor_commentsvue_type_script_lang_js_ = (commentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dashboard/minitutor/comments.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  minitutor_commentsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "243ed287"
  
)

/* harmony default export */ var comments = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BlockBlank: __webpack_require__(77).default})


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/Blank.vue?vue&type=template&id=58e2786c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"block py-32 w-full text-center bg-white rounded shadow"},[_vm._ssrNode("<p class=\"mb-2 text-2xl font-semibold text-gray-500\">"+_vm._ssrEscape(_vm._s(_vm.text))+"</p> "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/block/Blank.vue?vue&type=template&id=58e2786c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/Blank.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var Blankvue_type_script_lang_js_ = ({
  name: 'Blank',
  props: {
    text: {
      type: String,
      default: 'Tidak ada kontent'
    }
  }
});
// CONCATENATED MODULE: ./components/block/Blank.vue?vue&type=script&lang=js&
 /* harmony default export */ var block_Blankvue_type_script_lang_js_ = (Blankvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/block/Blank.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  block_Blankvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4aee3695"
  
)

/* harmony default export */ var Blank = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=comments.js.map