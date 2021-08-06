exports.ids = [21,37];
exports.modules = {

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/Spinner.vue?vue&type=template&id=df4f7eb6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","viewBox":"0 0 100 100","preserveAspectRatio":"xMidYMid"}},[_vm._ssrNode("<circle cx=\"50\" cy=\"50\" r=\"40\" stroke-width=\"12\" fill=\"none\" class=\"dark:stroke-brand-dark stroke-brand-light\"></circle> "),_vm._ssrNode("<circle cx=\"50\" cy=\"50\" r=\"40\" stroke-width=\"12\" stroke-linecap=\"round\" fill=\"none\""+(_vm._ssrClass(null,_vm.stroke))+">","</circle>",[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","repeatCount":"indefinite","dur":"1s","values":"0 50 50;180 50 50;720 50 50","keyTimes":"0;0.5;1"}}),_vm._ssrNode(" <animate attributeName=\"stroke-dasharray\" repeatCount=\"indefinite\" dur=\"1s\" values=\"25.132741228718345 226.1946710584651;170.90264035528475 80.4247719318987;25.132741228718345 226.1946710584651\" keyTimes=\"0;0.5;1\"></animate>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/svg/Spinner.vue?vue&type=template&id=df4f7eb6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/Spinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Spinnervue_type_script_lang_js_ = ({
  name: 'SvgSpinner',
  props: {
    stroke: {
      type: String,
      default: 'stroke-brand'
    }
  }
});
// CONCATENATED MODULE: ./components/svg/Spinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var svg_Spinnervue_type_script_lang_js_ = (Spinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/svg/Spinner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  svg_Spinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "db2c681e"
  
)

/* harmony default export */ var Spinner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/Button.vue?vue&type=template&id=60b36a6a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,_vm._b({tag:"component",staticClass:"disabled:opacity-70 inline-flex justify-center items-center py-0 px-4 h-10 text-sm font-medium leading-none text-center rounded cursor-pointer select-none",class:_vm.light ? 'hover:bg-gray-200 bg-gray-100' : 'hover:bg-primary-700 bg-primary-600 text-white',attrs:{"disabled":_vm.loading},on:{"click":function($event){return _vm.$emit('click')}}},'component',_vm.$attrs,false),[(_vm.loading)?_c('svg-spinner',{staticClass:"w-6 h-6",attrs:{"light":""}}):_vm._t("default",function(){return [_vm._v("Button")]})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/Button.vue?vue&type=template&id=60b36a6a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/Button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
  name: 'Button',
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    loading: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/form/Button.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/form/Button.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_Buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c1984f4c"
  
)

/* harmony default export */ var Button = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SvgSpinner: __webpack_require__(75).default})


/***/ })

};;
//# sourceMappingURL=form-button.js.map