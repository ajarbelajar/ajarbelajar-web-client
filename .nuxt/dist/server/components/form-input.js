exports.ids = [23];
exports.modules = {

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/Input.vue?vue&type=template&id=a35d01c8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative pb-3"},[_vm._ssrNode("<input"+(_vm._ssrAttr("type",_vm.type))+(_vm._ssrAttr("value",_vm.value))+(_vm._ssrAttrs(_vm.$attrs))+(_vm._ssrClass("block flex-1 w-full border-gray-300",{ 'border-red-600' : _vm.error, 'shadow rounded': !_vm.minimal, 'text-sm rounded': _vm.minimal }))+"> "+((_vm.password)?("<button type=\"button\" class=\"flex absolute top-0 right-0 justify-center items-center w-10 h-10 cursor-pointer\"><i"+(_vm._ssrClass("ft",_vm.showPassword ? 'ft-eye-off' : 'ft-eye'))+"></i></button>"):"<!---->")+" "+((_vm.error)?("<span class=\"block text-xs text-red-900\">"+_vm._ssrEscape(_vm._s(_vm.error))+"</span>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/Input.vue?vue&type=template&id=a35d01c8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/Input.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Inputvue_type_script_lang_js_ = ({
  name: 'Input',
  props: {
    password: {
      type: Boolean,
      default: false
    },
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

  data() {
    return {
      showPassword: false
    };
  },

  computed: {
    type() {
      if (this.showPassword && this.password) {
        return 'text';
      }

      if (this.password) {
        return 'password';
      }

      return 'text';
    }

  },
  methods: {
    onChange(e) {
      this.$emit('input', e.target.value);
    }

  }
});
// CONCATENATED MODULE: ./components/form/Input.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_Inputvue_type_script_lang_js_ = (Inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/form/Input.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_Inputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7aa3fbd2"
  
)

/* harmony default export */ var Input = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=form-input.js.map