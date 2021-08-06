exports.ids = [25];
exports.modules = {

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/Textarea.vue?vue&type=template&id=7a1ba2a1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative pb-3"},[_vm._ssrNode("<textarea"+(_vm._ssrAttr("value",_vm.value))+(_vm._ssrAttrs(_vm.$attrs))+(_vm._ssrClass("block w-full border-gray-300",{ 'border-red-600' : _vm.error, 'shadow rounded': !_vm.minimal, 'text-sm rounded': _vm.minimal }))+"></textarea> "+((_vm.error)?("<span class=\"block text-xs text-red-900\">"+_vm._ssrEscape(_vm._s(_vm.error))+"</span>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/Textarea.vue?vue&type=template&id=7a1ba2a1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/Textarea.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var Textareavue_type_script_lang_js_ = ({
  name: 'Input',
  props: {
    minimal: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  },
  methods: {
    onChange(e) {
      this.$emit('input', e.target.value);
    }

  }
});
// CONCATENATED MODULE: ./components/form/Textarea.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_Textareavue_type_script_lang_js_ = (Textareavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/form/Textarea.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_Textareavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "30d28062"
  
)

/* harmony default export */ var Textarea = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=form-textarea.js.map