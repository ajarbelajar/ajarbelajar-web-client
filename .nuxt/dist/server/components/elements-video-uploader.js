exports.ids = [20];
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

/***/ })

};;
//# sourceMappingURL=elements-video-uploader.js.map