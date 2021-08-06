exports.ids = [42,10];
exports.modules = {

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/categories/index.vue?vue&type=template&id=190e6b95&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid grid-cols-2 gap-3 p-3 md:grid-cols-4"},_vm._l((_vm.$store.getters.categories),function(item){return _c('elements-category-list',{key:item.id,attrs:{"category":item}})}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/categories/index.vue?vue&type=template&id=190e6b95&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/categories/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var categoriesvue_type_script_lang_js_ = ({
  name: 'Categories',
  head: {
    title: 'Kategori'
  }
});
// CONCATENATED MODULE: ./pages/categories/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_categoriesvue_type_script_lang_js_ = (categoriesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/categories/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_categoriesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3f9913e0"
  
)

/* harmony default export */ var categories = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ElementsCategoryList: __webpack_require__(94).default})


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

/***/ })

};;
//# sourceMappingURL=index.js.map