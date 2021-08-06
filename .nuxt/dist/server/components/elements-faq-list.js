exports.ids = [11];
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

/***/ })

};;
//# sourceMappingURL=elements-faq-list.js.map