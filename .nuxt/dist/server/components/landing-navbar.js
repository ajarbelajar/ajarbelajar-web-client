exports.ids = [31];
exports.modules = {

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Navbar.vue?vue&type=template&id=450c2e3c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.onClickOutside),expression:"onClickOutside"}],staticClass:"fixed top-0 right-0 left-0 z-50 w-full transition-all",class:_vm.scrollY > 5 ? 'bg-white shadow-lg py-5' : 'bg-white shadow-lg py-5 lg:py-10 lg:shadow-none lg:bg-transparent'},[_vm._ssrNode("<div class=\"container px-3\">","</div>",[_vm._ssrNode("<div class=\"flex\">","</div>",[_c('nuxt-link',{staticClass:"block mr-3",attrs:{"to":"/home"}},[_c('svg-brand',{attrs:{"width":"36px","no-text":""}})],1),_vm._ssrNode(" <button type=\"button\" class=\"hover:bg-primary-700 bg-primary-600 flex justify-center items-center ml-auto w-9 h-9 text-sm font-bold tracking-wider text-white rounded lg:hidden lg:mt-0 lg:ml-3\"><i class=\"ft ft-menu\"></i></button> "),_vm._ssrNode("<nav"+(_vm._ssrClass("absolute top-0 right-0 left-0 flex-1 p-3 mt-16 w-full bg-white shadow-lg lg:flex lg:static lg:p-0 lg:mt-0 lg:bg-transparent lg:shadow-none",_vm.open ? 'block' : 'hidden'))+">","</nav>",[_c('nuxt-link',{staticClass:"hover:text-primary-600 transition-color flex justify-center items-center px-3 h-9 text-sm font-bold tracking-wider",class:_vm.scrollY > 5 ? 'text-gray-700' : 'text-gray-700 lg:text-white',attrs:{"to":"/videos"}},[_vm._v("VIDEOS")]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"hover:text-primary-600 transition-color flex justify-center items-center px-3 h-9 text-sm font-bold tracking-wider",class:_vm.scrollY > 5 ? 'text-gray-700' : 'text-gray-700 lg:text-white',attrs:{"to":"/articles"}},[_vm._v("ARTIKEL")]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"hover:text-primary-600 transition-color flex justify-center items-center px-3 h-9 text-sm font-bold tracking-wider",class:_vm.scrollY > 5 ? 'text-gray-700' : 'text-gray-700 lg:text-white',attrs:{"to":"/categories"}},[_vm._v("KATEGORI")]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"hover:text-primary-600 transition-color flex justify-center items-center px-3 ml-auto h-9 text-sm font-bold tracking-wider",class:_vm.scrollY > 5 ? 'text-gray-700' : 'text-gray-700 lg:text-white',attrs:{"to":"/login"}},[_vm._v("MASUK")]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"hover:bg-primary-700 transition-color bg-primary-600 flex justify-center items-center px-3 mt-3 h-9 text-sm font-bold tracking-wider text-white rounded lg:mt-0 lg:ml-3",attrs:{"to":"/register"}},[_vm._v("BUAT AKUN BARU")])],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/landing/Navbar.vue?vue&type=template&id=450c2e3c&

// EXTERNAL MODULE: external "v-click-outside"
var external_v_click_outside_ = __webpack_require__(12);
var external_v_click_outside_default = /*#__PURE__*/__webpack_require__.n(external_v_click_outside_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/landing/Navbar.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  name: 'Navbar',
  directives: {
    clickOutside: external_v_click_outside_default.a.directive
  },

  data() {
    return {
      scrollY: 0,
      open: false
    };
  },

  mounted() {
    this.setScrollY();
    window.addEventListener('scroll', this.setScrollY);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.setScrollY);
  },

  methods: {
    setScrollY() {
      this.scrollY = window.scrollY;
    },

    onClickOutside() {
      this.open = false;
    }

  }
});
// CONCATENATED MODULE: ./components/landing/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var landing_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/landing/Navbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  landing_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b3ca3556"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SvgBrand: __webpack_require__(9).default})


/***/ })

};;
//# sourceMappingURL=landing-navbar.js.map