exports.ids = [70,21,23,37];
exports.modules = {

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/password/reset.vue?vue&type=template&id=1433f1c2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.submit(_vm.form)}}},[_vm._ssrNode("<h1 class=\"mt-14 mb-8 text-4xl font-light text-center text-gray-700\">\n    Masuk ke akun anda\n  </h1> "+((!!_vm.errors.message)?("<div class=\"flex relative items-center p-4 mb-5 bg-red-50 rounded border-l-4 border-red-500 shadow-sm\"><div class=\"flex-grow text-red-700\">"+_vm._ssrEscape(_vm._s(_vm.errors.message))+"</div></div>"):"<!---->")+" "),_c('form-input',{attrs:{"placeholder":"Email","name":"email","error":_vm.errors.email},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}}),_vm._ssrNode(" "),_c('form-input',{attrs:{"placeholder":"Password baru","password":"","name":"password","error":_vm.errors.password},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"py-3 text-center\">","</div>",[_c('form-button',{staticClass:"block w-6/12 uppercase",attrs:{"loading":_vm.loading}},[_vm._v("Simpan")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/password/reset.vue?vue&type=template&id=1433f1c2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/password/reset.vue?vue&type=script&lang=js&
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
const initialError = {
  token: '',
  email: '',
  password: '',
  message: ''
};
/* harmony default export */ var resetvue_type_script_lang_js_ = ({
  name: 'LoginPage',
  layout: 'auth',
  middleware: 'guest',

  async asyncData({
    query,
    app,
    store,
    error
  }) {
    const token = query.token || '';
    const email = query.email || '';

    try {
      await store.dispatch(`auth/checkResetPasswordToken`, {
        token,
        email
      });
    } catch (e) {
      let message = e.message;

      if (e.response && e.response.data && e.response.data.message) {
        message = e.response.data.message;
      }

      return error({
        statusCode: 401,
        message
      });
    }

    return {
      form: {
        token,
        email,
        password: ''
      },
      errors: initialError,
      loading: false
    };
  },

  head: {
    title: 'Reset Password'
  },
  methods: {
    async submit(data) {
      this.loading = true;
      this.errors = initialError;

      try {
        await this.$store.dispatch('auth/resetPassword', data);
        this.redirect();
      } catch (e) {
        data = this.$errorResponse(e);
        this.errors = { ...this.errors,
          ...data.errors,
          message: data.message
        };
      }

      this.loading = false;
    },

    redirect() {
      setTimeout(() => {
        this.$toast.success('Password berhasil diubah, silahkan masuk.');
      }, 200);
      return this.$router.push('/login');
    }

  }
});
// CONCATENATED MODULE: ./pages/password/reset.vue?vue&type=script&lang=js&
 /* harmony default export */ var password_resetvue_type_script_lang_js_ = (resetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/password/reset.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  password_resetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7d71f91c"
  
)

/* harmony default export */ var password_reset = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FormInput: __webpack_require__(78).default,FormButton: __webpack_require__(76).default})


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


/***/ }),

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
//# sourceMappingURL=reset.js.map