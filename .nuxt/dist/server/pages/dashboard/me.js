exports.ids = [44,37];
exports.modules = {

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/me.vue?vue&type=template&id=7c9a5e30&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-3"},[_vm._ssrNode("<div class=\"overflow-hidden bg-white rounded shadow\">","</div>",[_vm._ssrNode("<div class=\"flex py-5 px-4\">","</div>",[_vm._ssrNode("<div class=\"relative p-1 w-16 rounded-full border\">","</div>",[_c('v-img',{staticClass:"block w-full rounded-full",attrs:{"src":_vm.auth.avatar,"src-placeholder":_vm.$images.avatar}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex absolute bottom-0 left-0 justify-center w-full transform translate-y-2/4\">","</div>",[_vm._ssrNode("<button type=\"button\""+(_vm._ssrAttr("disabled",_vm.loading))+" class=\"text-primary-600 flex justify-center items-center w-7 h-7 bg-white rounded-full border hover:bg-gray-200\">","</button>",[(_vm.loading)?_c('svg-spinner',{staticClass:"w-4"}):_c('i',{staticClass:"ft ft-image"})],1),_vm._ssrNode(" <input type=\"file\" accept=\"image/*\" class=\"hidden\">")],2)],2),_vm._ssrNode(" <div class=\"flex-1 pl-4 my-auto\"><h2 class=\"truncate text-lg font-semibold leading-none\">"+_vm._ssrEscape(_vm._s(_vm.auth.name))+"</h2> <p class=\"truncate text-sm leading-none\">"+_vm._ssrEscape("@"+_vm._s(_vm.auth.username))+"</p></div> <div class=\"pl-4 my-auto\"><span class=\"bg-primary-100 flex justify-center items-center px-5 h-9 rounded-full\"><span class=\"text-primary-600 block text-sm font-bold md:text-base\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.auth.points)+" Poin\n          ")+"</span></span></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"border-top flex border-t\">","</div>",_vm._l((_vm.links),function(link,i){return _vm._ssrNode("<div class=\"first:border-l-0 flex flex-1 border-l\">","</div>",[_c('nuxt-link',{staticClass:"border-b-transparent border-primary-600 flex flex-1 justify-center items-center py-3 text-center hover:bg-gray-100",attrs:{"to":link.to,"exact-active-class":"border-b-4 pb-2 bg-gray-100"}},[_c('span',{staticClass:"block md:pr-3 md:text-xl"},[_c('i',{class:'ft ft-' + link.icon})]),_vm._v(" "),_c('span',{staticClass:"hidden font-semibold md:block"},[_vm._v("\n            "+_vm._s(link.text)+"\n          ")])])],1)}),0)],2),_vm._ssrNode(" "),_c('nuxt-child')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/me.vue?vue&type=template&id=7c9a5e30&

// EXTERNAL MODULE: external "form-data"
var external_form_data_ = __webpack_require__(74);
var external_form_data_default = /*#__PURE__*/__webpack_require__.n(external_form_data_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/me.vue?vue&type=script&lang=js&
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
  name: "MyDashboard",
  middleware: 'auth',

  data() {
    return {
      loading: false
    };
  },

  head() {
    return {
      title: 'Dasbor'
    };
  },

  computed: {
    auth() {
      return this.$store.getters.auth;
    },

    links() {
      return [{
        text: 'Aktifitas',
        icon: 'activity',
        to: '/dashboard/me'
      }, {
        text: 'Edit Profil',
        icon: 'settings',
        to: '/dashboard/me/edit'
      }, {
        text: 'Diikuti',
        icon: 'user-check',
        to: '/dashboard/me/followings'
      }, {
        text: 'Favorit',
        icon: 'heart',
        to: '/dashboard/me/favorites'
      }];
    }

  },
  methods: {
    handleClick() {
      this.$refs.input.click();
    },

    async handleChange(ev) {
      this.loading = true;

      try {
        const file = ev.target.files[0];
        const data = new external_form_data_default.a();
        data.append('avatar', file);
        const {
          url
        } = await this.$axios.$post('/account/avatar', data);
        this.$store.commit('auth/setAuth', { ...this.auth,
          avatar: url
        });
        this.$toast.success('Foto anda telah diupdate.');
      } catch (e) {
        this.$toast.danger(this.$errorMessage(e));
      }

      this.loading = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/dashboard/me.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_mevue_type_script_lang_js_ = (mevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dashboard/me.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_mevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "109f48ae"
  
)

/* harmony default export */ var me = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SvgSpinner: __webpack_require__(75).default})


/***/ }),

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

/***/ })

};;
//# sourceMappingURL=me.js.map