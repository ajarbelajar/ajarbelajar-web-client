exports.ids = [53,1];
exports.modules = {

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/minitutor/feedback.vue?vue&type=template&id=13d7cf94&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-3"},[_vm._l((_vm.feedback),function(item){return _vm._ssrNode("<div class=\"flex p-3 mb-3 bg-white rounded shadow\">","</div>",[_vm._ssrNode("<div class=\"w-14\">","</div>",[_c('nuxt-link',{staticClass:"block p-1 bg-white rounded-full border hover:bg-gray-200",attrs:{"to":("/users/" + (item.user.username))}},[_c('v-img',{staticClass:"block w-full rounded-full",attrs:{"src":item.user.avatar || _vm.$images.avatar,"src-placeholder":_vm.$images.avatar,"alt":item.user.username}})],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex-1 pl-3\">","</div>",[_vm._ssrNode("<div class=\"flex items-center mb-3\">","</div>",[_c('nuxt-link',{staticClass:"hover:text-primary-700 text-primary-600 block text-lg font-semibold leading-none capitalize",attrs:{"to":("/users/" + (item.user.username))}},[_vm._v(_vm._s(item.user.name))]),_vm._ssrNode(" <span class=\"block pl-2 text-xs leading-none\">"+_vm._ssrEscape(_vm._s(_vm._f("moment")(item.created_at,'from', 'now')))+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mb-3\">","</div>",[_c('client-only',[_c('star-rating',{staticClass:"h-3 text-sm leading-none",attrs:{"rating":Number(item.rating),"read-only":true,"increment":0.01,"star-size":16,"text-class":"mr-1 text-sm h-3 leading-none"}})],1)],1),_vm._ssrNode(" <p class=\"mb-3 text-gray-700\">"+_vm._ssrEscape(_vm._s(item.message))+"</p> "),_c('nuxt-link',{staticClass:"hover:bg-primary-600 bg-primary-100 text-primary-600 inline-flex justify-center items-center px-3 h-7 text-xs font-semibold leading-none rounded hover:text-white",attrs:{"to":("/" + (item.post.type) + "s/" + (item.post.slug))}},[_vm._v("Lihat Postingan")])],2)],2)}),_vm._ssrNode(" "),(!_vm.feedback.length)?_c('block-blank',{attrs:{"text":"Belum ada Feedback Konstruktif."}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/minitutor/feedback.vue?vue&type=template&id=13d7cf94&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/minitutor/feedback.vue?vue&type=script&lang=js&
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
/* harmony default export */ var feedbackvue_type_script_lang_js_ = ({
  name: 'MinitutorFeedback',

  async asyncData({
    error,
    $axios
  }) {
    try {
      const feedback = await $axios.$get('/minitutor/feedback');
      return {
        feedback
      };
    } catch (e) {
      return error(e);
    }
  }

});
// CONCATENATED MODULE: ./pages/dashboard/minitutor/feedback.vue?vue&type=script&lang=js&
 /* harmony default export */ var minitutor_feedbackvue_type_script_lang_js_ = (feedbackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dashboard/minitutor/feedback.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  minitutor_feedbackvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e62ca0d0"
  
)

/* harmony default export */ var feedback = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=feedback.js.map