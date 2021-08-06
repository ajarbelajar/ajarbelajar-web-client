exports.ids = [55,5,14,20,21,22,23,25,37];
exports.modules = {

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/VideoUploader.vue?vue&type=template&id=455c0d06&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{ 'border-danger': _vm.error }},[_vm._ssrNode(((_vm.video)?("<video"+(_vm._ssrAttr("src",_vm.video))+" controls=\"controls\" class=\"block w-full\"></video>"):"<!---->")+" <div class=\"relative py-10 px-4\"><div class=\"font-semibold text-center\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.loading ? _vm.uploadMessage : _vm.error || 'Klik atau seret video anda disini untuk mengupload.')+"\n    ")+"</div> <input type=\"file\""+(_vm._ssrAttr("disabled",_vm.loading))+" class=\"block absolute inset-0 z-10 w-full opacity-0 cursor-pointer\"></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/VideoUploader.vue?vue&type=template&id=455c0d06&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/VideoUploader.vue?vue&type=script&lang=js&
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
/* harmony default export */ var VideoUploadervue_type_script_lang_js_ = ({
  props: {
    pid: {
      type: Number,
      required: true,
      default: 0
    },
    video: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      name: '',
      percent: 0,
      loading: false,
      error: ''
    };
  },

  computed: {
    uploadMessage() {
      if (this.percent < 100) {
        return `${this.percent}%`;
      }

      return 'Video anda sedang diproses...';
    }

  },
  methods: {
    onUploadProgress(ev) {
      this.percent = Math.round(ev.loaded * 100 / ev.total);
    },

    async handleChange(ev) {
      this.loading = true;
      const url = `/minitutor/request-videos/${this.pid}/video`;
      const config = {
        onUploadProgress: this.onUploadProgress
      };

      try {
        const file = ev.target.files[0];
        const data = new FormData();
        data.append('file', file);
        const videos = await this.$axios.$post(url, data, config);
        this.$emit('update', videos);
        this.$toast.success('Video telah ditambahkan.');
      } catch (e) {
        const {
          errors
        } = this.$errorResponse(e);

        if (errors.file) {
          this.error = errors.file;
        } else {
          this.$toast.danger(this.$errorMessage(e));
        }
      }

      this.loading = false;
    }

  }
});
// CONCATENATED MODULE: ./components/elements/VideoUploader.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_VideoUploadervue_type_script_lang_js_ = (VideoUploadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/VideoUploader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_VideoUploadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7be2fbf8"
  
)

/* harmony default export */ var VideoUploader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/minitutor/videos/_id.vue?vue&type=template&id=fdf4ba74&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-3"},[_vm._ssrNode("<form class=\"grid relative md:grid-cols-3 md:gap-4\">","</form>",[_vm._ssrNode("<div class=\"order-last md:order-1 md:col-span-2\">","</div>",[_vm._ssrNode("<div class=\"mb-3 bg-white rounded shadow\">","</div>",[_vm._ssrNode("<div class=\"py-4 px-3 border-b\"><h3 class=\"font-semibold leading-none\">Video</h3></div> "),_c('elements-video-uploader',{attrs:{"video":_vm.post.video,"pid":_vm.post.id},on:{"update":_vm.onVideoUpdate}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"order-2\">","</div>",[_vm._ssrNode("<div class=\"mb-3 bg-white rounded shadow\">","</div>",[_vm._ssrNode("<div class=\"py-4 px-3 border-b\"><h3 class=\"font-semibold leading-none\">Cover</h3></div> "),_c('elements-hero-uploader',{attrs:{"hero":_vm.post.hero,"pid":_vm.post.id,"type":"Video"},on:{"updated":_vm.onHeroUpdated}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mb-3 bg-white rounded shadow\">","</div>",[_vm._ssrNode("<div class=\"py-4 px-3 border-b\"><h3 class=\"font-semibold leading-none\">Informasi</h3></div> "),_vm._ssrNode("<div class=\"p-3\">","</div>",[_vm._ssrNode("<div class=\"block\">","</div>",[_vm._ssrNode("<p class=\"text-sm\">Kategori</p> "),_c('form-category-suggest',{attrs:{"minimal":"","error":_vm.errors.category},model:{value:(_vm.form.category),callback:function ($$v) {_vm.$set(_vm.form, "category", $$v)},expression:"form.category"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"block\">","</div>",[_vm._ssrNode("<p class=\"text-sm\">Judul</p> "),_c('form-input',{attrs:{"minimal":"","error":_vm.errors.title},model:{value:(_vm.form.title),callback:function ($$v) {_vm.$set(_vm.form, "title", $$v)},expression:"form.title"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"block\">","</div>",[_vm._ssrNode("<p class=\"text-sm\">Deskripsi</p> "),_c('form-textarea',{attrs:{"minimal":"","error":_vm.errors.description},model:{value:(_vm.form.description),callback:function ($$v) {_vm.$set(_vm.form, "description", $$v)},expression:"form.description"}})],2),_vm._ssrNode(" <div class=\"block\"><label class=\"block py-2 text-sm text-gray-600\"><input type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.form.requested)?_vm._i(_vm.form.requested,null)>-1:(_vm.form.requested)))+" class=\"rounded border-gray-300\">\n              Publikasikan video ini\n            </label></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex p-3 border-t\">","</div>",[_c('form-button',{staticClass:"block w-24",attrs:{"type":"button","loading":_vm.loading},on:{"click":function($event){return _vm.submit(_vm.form)}}},[_vm._v("Simpan")]),_vm._ssrNode(" "),_c('form-button',{staticClass:"block ml-3 w-24",attrs:{"light":"","tag":"nuxt-link","to":"."}},[_vm._v("Kembali")])],2)],2)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/minitutor/videos/_id.vue?vue&type=template&id=fdf4ba74&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/minitutor/videos/_id.vue?vue&type=script&lang=js&
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
const initialError = {
  title: '',
  description: '',
  category: '',
  requested: ''
};
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: 'EditVideo',

  beforeRouteLeave(to, from, next) {
    this.$toast.confirm.danger(() => next(), null, {
      message: 'Anda yakin ingin meniggalkan halaman ini?'
    });
  },

  async asyncData({
    params,
    error,
    $axios
  }) {
    try {
      const post = await $axios.$get('minitutor/request-videos/' + params.id);
      return {
        post,
        form: {
          title: post.title,
          description: post.description,
          category: post.category ? post.category.name : '',
          requested: !!post.requested_at
        },
        errors: initialError,
        loading: false
      };
    } catch (e) {
      error(e);
    }
  },

  computed: {
    index() {
      const index = [];

      if (this.videos) {
        this.videos.forEach(el => {
          index.push(el.id);
        });
      }

      return index.join('|');
    },

    dragOptions() {
      return {
        animation: 200,
        disabled: false,
        ghostClass: 'ghost'
      };
    }

  },
  // mounted() {
  //   window.addEventListener("beforeunload", this.beforeUnload)
  // },
  // destroyed() {
  //   window.removeEventListener("beforeunload", this.beforeUnload)
  // },
  methods: {
    onHeroUpdated(hero) {
      this.post = { ...this.post,
        hero
      };
    },

    onVideoUpdate(video) {
      this.post = { ...this.post,
        video
      };
    },

    async submit(data) {
      this.loading = true;

      try {
        this.post = await this.$axios.$put(`/minitutor/request-videos/${this.post.id}`, data);
        this.form = {
          title: this.post.title,
          description: this.post.description,
          category: this.post.category ? this.post.category.name : '',
          requested: !!this.post.requested_at
        };
        this.$toast.success('Video telah diperbarui.');
        this.errors = { ...initialError
        };
      } catch (e) {
        const {
          errors,
          message
        } = this.$errorResponse(e);
        this.errors = { ...initialError,
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
    },

    beforeUnload(e) {
      const confirmationMessage = 'It looks like you have been editing something. ' + 'If you leave before saving, your changes will be lost.';
      (e || window.event).returnValue = confirmationMessage;
      return confirmationMessage;
    }

  }
});
// CONCATENATED MODULE: ./pages/dashboard/minitutor/videos/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var videos_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dashboard/minitutor/videos/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  videos_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "447fc409"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ElementsVideoUploader: __webpack_require__(118).default,ElementsHeroUploader: __webpack_require__(98).default,FormCategorySuggest: __webpack_require__(99).default,FormInput: __webpack_require__(78).default,FormTextarea: __webpack_require__(79).default,FormButton: __webpack_require__(76).default})


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

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/Loading.vue?vue&type=template&id=7c069364&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex absolute inset-0 flex-col justify-center items-center",class:_vm.variant},[_c('svg-spinner',{staticClass:"block",attrs:{"width":_vm.size + 'px',"height":_vm.size + 'px'}}),_vm._ssrNode(" "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/block/Loading.vue?vue&type=template&id=7c069364&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/Loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Loadingvue_type_script_lang_js_ = ({
  name: 'Loading',
  props: {
    size: {
      type: Number,
      default: 46
    },
    variant: {
      type: String,
      default: 'bg-gray-900 bg-opacity-50'
    }
  }
});
// CONCATENATED MODULE: ./components/block/Loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var block_Loadingvue_type_script_lang_js_ = (Loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/block/Loading.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  block_Loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2c9e6786"
  
)

/* harmony default export */ var Loading = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SvgSpinner: __webpack_require__(75).default})


/***/ }),

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

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/HeroUploader.vue?vue&type=template&id=5cb829a0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"overflow-hidden relative rounded-b-lg"},[_c('FadeTransition',[(_vm.loading)?_c('block-loading',{staticClass:"z-10"},[_c('p',{staticClass:"text-sm font-semibold text-white"},[_vm._v(_vm._s(_vm.uploadMessage))])]):_vm._e()],1),_vm._ssrNode(" "),_c('v-img',{staticClass:"block w-full",attrs:{"src":_vm.preview,"src-placeholder":_vm.$images.hero.thumb}}),_vm._ssrNode(" <div class=\"p-3\"><label light tag=\"label\" class=\"block overflow-hidden relative py-3 w-full text-sm font-semibold leading-none text-center bg-gray-200 rounded hover:bg-gray-300\">\n      Ganti Gambar\n      "+((!_vm.loading)?("<input type=\"file\" class=\"block absolute inset-0 w-full bg-black opacity-0 cursor-pointer\">"):"<!---->")+"</label></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/HeroUploader.vue?vue&type=template&id=5cb829a0&

// EXTERNAL MODULE: external "vue2-transitions"
var external_vue2_transitions_ = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/HeroUploader.vue?vue&type=script&lang=js&
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

/* harmony default export */ var HeroUploadervue_type_script_lang_js_ = ({
  name: 'HeroUploader',
  components: {
    FadeTransition: external_vue2_transitions_["FadeTransition"]
  },
  props: {
    pid: {
      type: Number,
      require: true,
      default: 0
    },
    type: {
      type: String,
      default: 'Video'
    },
    hero: {
      type: Object,
      default: () => ({
        large: null,
        thumb: null,
        small: null,
        blur: null
      })
    }
  },

  data() {
    return {
      file: null,
      error: '',
      loading: false,
      percent: 0
    };
  },

  computed: {
    preview() {
      let thumb = this.$images.hero.thumb;

      if (this.hero) {
        thumb = this.hero.thumb || thumb;
      }

      return thumb;
    },

    uploadMessage() {
      if (this.percent < 100) {
        return `${this.percent}%`;
      }

      return 'DIPROSES';
    }

  },
  methods: {
    onUploadProgress(progressEvent) {
      this.percent = Math.round(progressEvent.loaded * 100 / progressEvent.total);
    },

    async onChange(ev) {
      this.loading = true;
      const url = `/minitutor/request-${this.type.toLowerCase()}s/${this.pid}/hero`;

      try {
        const file = ev.target.files[0];
        const data = new FormData();
        data.append('hero', file);
        const hero = await this.$axios.$post(url, data, {
          onUploadProgress: this.onUploadProgress
        });
        this.$emit('updated', hero);
        this.$toast.success('Gambar cover berhasil diubah.');
      } catch (e) {
        this.$toast.danger(this.$errorMessage(e));
      }

      this.loading = false;
    }

  }
});
// CONCATENATED MODULE: ./components/elements/HeroUploader.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_HeroUploadervue_type_script_lang_js_ = (HeroUploadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/HeroUploader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_HeroUploadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "219ecedd"
  
)

/* harmony default export */ var HeroUploader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BlockLoading: __webpack_require__(84).default})


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
//# sourceMappingURL=_id.js.map