exports.ids = [45,21,23,25,37];
exports.modules = {

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/me/edit.vue?vue&type=template&id=2b3cb563&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"py-3"},[_vm._ssrNode("<form method=\"POST\" class=\"p-5 bg-white rounded shadow\">","</form>",[_vm._ssrNode("<label class=\"block py-3 md:grid md:grid-cols-3 md:gap-3\">","</label>",[_vm._ssrNode("<div class=\"text-sm md:text-base\">\n        Username\n      </div> "),_vm._ssrNode("<div class=\"md:col-span-2\">","</div>",[_c('form-input',{attrs:{"name":"username","error":_vm.errors.username},model:{value:(_vm.form.username),callback:function ($$v) {_vm.$set(_vm.form, "username", $$v)},expression:"form.username"}})],1)],2),_vm._ssrNode(" <hr class=\"hidden mb-2 md:block\"> "),_vm._ssrNode("<div class=\"block py-3 md:grid md:grid-cols-3 md:gap-3\">","</div>",[_vm._ssrNode("<div class=\"text-sm md:text-base\">\n        Password\n        <p class=\"mb-1 text-xs\">Kosongkan jika tidak ingin diubah.</p></div> "),_vm._ssrNode("<div class=\"md:col-span-2\">","</div>",[_c('form-input',{attrs:{"placeholder":"Password Baru","name":"new_password","error":_vm.errors.new_password},model:{value:(_vm.form.new_password),callback:function ($$v) {_vm.$set(_vm.form, "new_password", $$v)},expression:"form.new_password"}}),_vm._ssrNode(" "),_c('form-input',{attrs:{"placeholder":"Password Lama","name":"password","error":_vm.errors.password},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})],2)],2),_vm._ssrNode(" <hr class=\"hidden mb-2 md:block\"> "),_vm._ssrNode("<label class=\"block py-3 md:grid md:grid-cols-3 md:gap-3\">","</label>",[_vm._ssrNode("<div class=\"text-sm md:text-base\">\n        Nama\n      </div> "),_vm._ssrNode("<div class=\"md:col-span-2\">","</div>",[_c('form-input',{attrs:{"name":"name","error":_vm.errors.name},model:{value:(_vm.form.name),callback:function ($$v) {_vm.$set(_vm.form, "name", $$v)},expression:"form.name"}})],1)],2),_vm._ssrNode(" <hr class=\"hidden mb-2 md:block\"> "),_vm._ssrNode("<label class=\"block py-3 md:grid md:grid-cols-3 md:gap-3\">","</label>",[_vm._ssrNode("<div class=\"text-sm md:text-base\">\n        Tentang\n      </div> "),_vm._ssrNode("<div class=\"md:col-span-2\">","</div>",[_c('form-textarea',{attrs:{"name":"about","error":_vm.errors.about},model:{value:(_vm.form.about),callback:function ($$v) {_vm.$set(_vm.form, "about", $$v)},expression:"form.about"}})],1)],2),_vm._ssrNode(" <hr class=\"hidden mb-2 md:block\"> "),_vm._ssrNode("<label class=\"block py-3 md:grid md:grid-cols-3 md:gap-3\">","</label>",[_vm._ssrNode("<div class=\"text-sm md:text-base\">\n        Website\n      </div> "),_vm._ssrNode("<div class=\"md:col-span-2\">","</div>",[_c('form-input',{attrs:{"placeholder":"https://www.ajarbeajar.com","name":"website","error":_vm.errors.website},model:{value:(_vm.form.website),callback:function ($$v) {_vm.$set(_vm.form, "website", $$v)},expression:"form.website"}})],1)],2),_vm._ssrNode(" <hr class=\"hidden mb-2 md:block\"> <label class=\"block py-3 md:grid md:grid-cols-3 md:gap-3\"><div class=\"text-sm md:text-base\">\n        Email Notifikasi\n      </div> <div class=\"pb-3 md:col-span-2\"><input type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.form.email_notification)?_vm._i(_vm.form.email_notification,null)>-1:(_vm.form.email_notification)))+" class=\"rounded border-gray-300\"></div></label> <hr class=\"hidden mb-2 md:block\"> "),_vm._ssrNode("<div class=\"block py-3 md:grid md:grid-cols-3 md:gap-3\">","</div>",[_vm._ssrNode("<div></div> "),_vm._ssrNode("<div>","</div>",[_c('form-button',{staticClass:"block w-24",attrs:{"loading":_vm.loading}},[_vm._v("Simpan")])],1)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/me/edit.vue?vue&type=template&id=2b3cb563&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/me/edit.vue?vue&type=script&lang=js&
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
const initialData = {
  username: '',
  new_password: '',
  password: '',
  name: '',
  about: '',
  website: '',
  email_notification: ''
};
/* harmony default export */ var editvue_type_script_lang_js_ = ({
  name: 'EditInformation',

  data() {
    return {
      errors: { ...initialData
      },
      loading: false,
      form: { ...initialData
      }
    };
  },

  created() {
    const auth = this.$store.getters.auth;
    this.form = { ...initialData,
      username: auth.username,
      name: auth.name,
      about: auth.about,
      website: auth.website,
      email_notification: auth.email_notification
    };
  },

  methods: {
    async submit(data) {
      this.loading = true;

      try {
        await this.$store.dispatch('auth/updateProfile', data);
        this.errors = { ...initialData
        };
        this.$toast.success('Informasi Anda sebagai MiniTutor telah disimpan.');
      } catch (e) {
        this.errors = { ...initialData
        };
        data = this.$errorResponse(e);
        this.errors = { ...this.errors,
          ...data.errors
        };

        if (data.message) {
          this.$toast.danger(data.message);
        }
      }

      this.loading = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/dashboard/me/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var me_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dashboard/me/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  me_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6e1890b0"
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FormInput: __webpack_require__(78).default,FormTextarea: __webpack_require__(79).default,FormButton: __webpack_require__(76).default})


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

/***/ }),

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
//# sourceMappingURL=edit.js.map