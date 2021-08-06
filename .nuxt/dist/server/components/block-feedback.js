exports.ids = [4,21,24,25,37];
exports.modules = {

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/Feedback.vue?vue&type=template&id=52265492&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-primary-600 p-3 mb-3 bg-white rounded border-b-4 shadow"},[_vm._ssrNode("<div class=\"mb-2 text-2xl font-semibold\">Feedback konstruktif</div> <div class=\"mb-4 text-sm text-gray-500\">Feedback akan kami teruskan langsung ke MiniTutor, tidak akan ditampilkan ke publik, feedback kamu sangat berharga untuk kemajuan konten MiniTutor kedepannya.</div> "),_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<label class=\"block\">","</label>",[_vm._ssrNode("<div class=\"text-sm\">\n        Tingkat pemahaman kamu\n      </div> "),_c('form-select',{attrs:{"name":"understand","error":_vm.errors.understand,"options":['1', '2', '3', '4', '5']},model:{value:(_vm.form.understand),callback:function ($$v) {_vm.$set(_vm.form, "understand", $$v)},expression:"form.understand"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<label class=\"block\">","</label>",[_vm._ssrNode("<div class=\"text-sm\">\n        Inspiratif\n      </div> "),_c('form-select',{attrs:{"name":"inspiring","error":_vm.errors.inspiring,"options":['1', '2', '3', '4', '5']},model:{value:(_vm.form.inspiring),callback:function ($$v) {_vm.$set(_vm.form, "inspiring", $$v)},expression:"form.inspiring"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<label class=\"block\">","</label>",[_vm._ssrNode("<div class=\"text-sm\">\n        Bahasa dan gaya penyampaian konten\n      </div> "),_c('form-select',{attrs:{"name":"language_style","error":_vm.errors.language_style,"options":['1', '2', '3', '4', '5']},model:{value:(_vm.form.language_style),callback:function ($$v) {_vm.$set(_vm.form, "language_style", $$v)},expression:"form.language_style"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<label class=\"block\">","</label>",[_vm._ssrNode("<div class=\"text-sm\">\n        Alur penyampaian konten\n      </div> "),_c('form-select',{attrs:{"name":"content_flow","error":_vm.errors.content_flow,"options":['1', '2', '3', '4', '5']},model:{value:(_vm.form.content_flow),callback:function ($$v) {_vm.$set(_vm.form, "content_flow", $$v)},expression:"form.content_flow"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<label class=\"block\">","</label>",[_vm._ssrNode("<div class=\"text-sm\">\n        Tuliskan pesan untuk MiniTutor\n      </div> "),_c('form-textarea',{attrs:{"name":"message","error":_vm.errors.message},model:{value:(_vm.form.message),callback:function ($$v) {_vm.$set(_vm.form, "message", $$v)},expression:"form.message"}})],2),_vm._ssrNode(" <div class=\"block\"><label class=\"block py-2 text-sm\"><input type=\"checkbox\" name=\"sync_with_me\""+(_vm._ssrAttr("checked",Array.isArray(_vm.form.sync_with_me)?_vm._i(_vm.form.sync_with_me,null)>-1:(_vm.form.sync_with_me)))+" class=\"rounded border-gray-300 shadow\">\n        Apakah bidangmu berkaitan dengan topik diatas?\n      </label></div> "),_vm._ssrNode("<div class=\"block pt-3\">","</div>",[_c('form-button',{staticClass:"block w-24",attrs:{"loading":_vm.loading}},[_vm._v("Kirim")])],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/block/Feedback.vue?vue&type=template&id=52265492&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/Feedback.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Feedbackvue_type_script_lang_js_ = ({
  name: 'Feedback',
  props: {
    url: {
      type: String,
      required: true,
      default: ''
    }
  },

  data() {
    return {
      loading: false,
      form: {
        understand: '',
        inspiring: '',
        language_style: '',
        content_flow: '',
        message: '',
        sync_with_me: false
      },
      errors: {
        understand: '',
        inspiring: '',
        language_style: '',
        content_flow: '',
        message: '',
        sync_with_me: ''
      }
    };
  },

  methods: {
    async submit(form) {
      this.loading = true;
      this.errors = {
        understand: '',
        inspiring: '',
        language_style: '',
        content_flow: '',
        message: '',
        sync_with_me: ''
      };

      try {
        await this.$axios.$post(this.url, form);
        this.form = {
          body: ''
        };
        this.$toast.success('Feedback anda telah terkirim.');
        this.$emit('close');
      } catch (e) {
        const {
          errors,
          message
        } = this.$errorResponse(e);
        this.errors = { ...this.errors,
          ...errors
        };

        if (message) {
          this.$toast.danger(message);
        }

        if (!Object.keys(errors).length && !message) {
          this.$toast.danger(this.$errorMessage(e));
        }
      }

      this.loading = false;
    }

  }
});
// CONCATENATED MODULE: ./components/block/Feedback.vue?vue&type=script&lang=js&
 /* harmony default export */ var block_Feedbackvue_type_script_lang_js_ = (Feedbackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/block/Feedback.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  block_Feedbackvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d7f82b58"
  
)

/* harmony default export */ var Feedback = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FormSelect: __webpack_require__(83).default,FormTextarea: __webpack_require__(79).default,FormButton: __webpack_require__(76).default})


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

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/Select.vue?vue&type=template&id=91663ef8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative pb-3"},[_vm._ssrNode("<select"+(_vm._ssrAttr("value",_vm.value))+(_vm._ssrAttrs(_vm.$attrs))+(_vm._ssrClass("block flex-1 w-full border-gray-300",{ 'border-red-600' : _vm.error, 'shadow rounded': !_vm.minimal, 'text-sm rounded': _vm.minimal }))+">"+(_vm._ssrList((_vm.options),function(option){return ("<option>"+_vm._ssrEscape(_vm._s(option))+"</option>")}))+"</select> "+((_vm.error)?("<span class=\"block text-xs text-red-900\">"+_vm._ssrEscape(_vm._s(_vm.error))+"</span>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/Select.vue?vue&type=template&id=91663ef8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/Select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Selectvue_type_script_lang_js_ = ({
  name: 'Select',
  props: {
    options: {
      type: Array,
      default: () => []
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
  methods: {
    onChange(e) {
      this.$emit('input', e.target.value);
    }

  }
});
// CONCATENATED MODULE: ./components/form/Select.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_Selectvue_type_script_lang_js_ = (Selectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/form/Select.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_Selectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2720f124"
  
)

/* harmony default export */ var Select = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=block-feedback.js.map