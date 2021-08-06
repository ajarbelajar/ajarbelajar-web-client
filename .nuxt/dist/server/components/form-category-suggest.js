exports.ids = [22];
exports.modules = {

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6b8a2916", content, true, context)
};

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySuggest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySuggest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySuggest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySuggest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategorySuggest_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".auto-suggest{\n  position:relative\n}\n.auto-suggest:not(.minimal) input{\n  display:block;\n  width:100%;\n  flex:1 1 0%;\n  border-radius:0.25rem;\n  --tw-border-opacity:1;\n  border-color:rgba(212, 212, 216, var(--tw-border-opacity));\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.auto-suggest.minimal input{\n  display:block;\n  width:100%;\n  flex:1 1 0%;\n  border-radius:0.25rem;\n  --tw-border-opacity:1;\n  border-color:rgba(212, 212, 216, var(--tw-border-opacity));\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n.error.auto-suggest input{\n  --tw-border-opacity:1;\n  border-color:rgba(220, 38, 38, var(--tw-border-opacity))\n}\n.auto-suggest .suggestions{\n  top:calc(100% + 1px);\n  position:absolute;\n  right:0px;\n  left:0px;\n  z-index:10;\n  overflow:hidden;\n  border-radius:0.25rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n  opacity:1;\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.auto-suggest .suggestions .suggest-item{\n  cursor:pointer;\n  -webkit-user-select:none;\n     -moz-user-select:none;\n      -ms-user-select:none;\n          user-select:none\n}\n.auto-suggest .suggestions .misc-item, .auto-suggest .suggestions .suggest-item{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  font-size:0.75rem;\n  line-height:1rem;\n  line-height:1\n}\n.auto-suggest .suggestions .suggest-item.hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(224, 231, 255, var(--tw-bg-opacity))\n}\n.auto-suggest .suggestions .suggest-item.selected{\n  --tw-bg-opacity:1;\n  background-color:rgba(79, 70, 229, var(--tw-bg-opacity));\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/CategorySuggest.vue?vue&type=template&id=95375ad6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative pb-3"},[_c('vue-simple-suggest',{staticClass:"auto-suggest",class:{ error: !!_vm.error, minimal: _vm.minimal },attrs:{"type":"text","value":_vm.value || '',"list":_vm.categories,"filter-by-query":true,"max-suggestions":5},on:{"input":_vm.onChange}}),_vm._ssrNode(" "+((_vm.error)?("<span class=\"block text-xs text-red-900\">"+_vm._ssrEscape(_vm._s(_vm.error))+"</span>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/CategorySuggest.vue?vue&type=template&id=95375ad6&

// EXTERNAL MODULE: external "vue-simple-suggest"
var external_vue_simple_suggest_ = __webpack_require__(73);
var external_vue_simple_suggest_default = /*#__PURE__*/__webpack_require__.n(external_vue_simple_suggest_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/CategorySuggest.vue?vue&type=script&lang=js&
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

/* harmony default export */ var CategorySuggestvue_type_script_lang_js_ = ({
  name: 'CategorySuggest',
  components: {
    VueSimpleSuggest: external_vue_simple_suggest_default.a
  },
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
  computed: {
    categories() {
      return this.$store.getters.categories.map(el => el.name);
    }

  },
  methods: {
    onChange(e) {
      this.$emit('input', e);
    }

  }
});
// CONCATENATED MODULE: ./components/form/CategorySuggest.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_CategorySuggestvue_type_script_lang_js_ = (CategorySuggestvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/form/CategorySuggest.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(90)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_CategorySuggestvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "04184aa4"
  
)

/* harmony default export */ var CategorySuggest = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=form-category-suggest.js.map