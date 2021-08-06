exports.ids = [48,1];
exports.modules = {

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/me/index.vue?vue&type=template&id=2800ce72&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"py-3"},[_vm._l((_vm.activities),function(activity){return _c('nuxt-link',{key:activity.id,staticClass:"flex p-3 mb-3 bg-white rounded shadow hover:shadow-lg",attrs:{"to":("/" + (activity.post.type) + "s/" + (activity.post.slug))}},[_c('div',{staticClass:"w-16 md:w-24"},[_c('v-img',{staticClass:"block w-full rounded",attrs:{"src":activity.post.hero.thumb || _vm.$images.hero.thumb,"src-placeholder":_vm.$images.hero.thumb,"alt":activity.post.title}})],1),_vm._v(" "),_c('div',{staticClass:"flex-1 pl-3 my-auto"},[_c('p',{staticClass:"text-primary-700 text-xs font-semibold leading-none"},[_vm._v("\n        "+_vm._s(_vm._f("moment")(activity.updated_at,'from', 'now'))+"\n        -\n        "+_vm._s(activity.post.type === 'article'
            ? 'Kamu membaca artikel'
            : 'Kamu menonton video')+"\n      ")]),_vm._v(" "),_c('h3',{staticClass:"font-semibold"},[_vm._v(_vm._s(activity.post.title))])])])}),_vm._ssrNode(" "),(!_vm.activities.length)?_c('block-blank',{attrs:{"text":"Anda belum memiliki Aktifitas."}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/me/index.vue?vue&type=template&id=2800ce72&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/me/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var mevue_type_script_lang_js_ = ({
  name: 'Activities',

  async asyncData({
    error,
    $axios
  }) {
    try {
      const activities = await $axios.$get('/account/activities');
      return {
        activities
      };
    } catch (e) {
      return error(e);
    }
  }

});
// CONCATENATED MODULE: ./pages/dashboard/me/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_mevue_type_script_lang_js_ = (mevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dashboard/me/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_mevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d18a11b8"
  
)

/* harmony default export */ var me = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=index.js.map