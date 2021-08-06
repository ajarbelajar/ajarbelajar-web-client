exports.ids = [18];
exports.modules = {

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/RequestPostList.vue?vue&type=template&id=6923ec86&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex mb-3 bg-white rounded border-l-4 shadow",class:{ 'border-primary-600': !!_vm.post.requested_at }},[_vm._ssrNode("<div class=\"flex flex-1 p-3\">","</div>",[_vm._ssrNode("<div class=\"w-20 md:w-32 lg:w-40\">","</div>",[_c('v-img',{staticClass:"block w-full rounded",attrs:{"src":_vm.post.hero.thumb || _vm.$images.hero.thumb,"src-placeholder":_vm.$images.hero.thumb,"alt":_vm.post.title}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex-1 pl-3\">","</div>",[_vm._ssrNode("<p class=\"fort-semibold text-xs\">"+_vm._ssrEscape("Diedit "+_vm._s(_vm.updateago))+"</p> <h3 class=\"font-semibold\">"+_vm._ssrEscape(_vm._s(_vm.post.title))+"</h3> "+((_vm.post.category)?("<span class=\"bold bg-primary-100 text-primary-600 inline-block px-1 text-xs font-semibold rounded\">"+_vm._ssrEscape(_vm._s(_vm.post.category.name))+"</span>"):"<!---->")+" <p class=\"mb-3 text-xs\">"+_vm._ssrEscape("Dibuat pada "+_vm._s(_vm._f("moment")(_vm.post.created_at,'dddd, Do MMMM YYYY')))+"</p> "),_vm._ssrNode("<div class=\"flex\">","</div>",[_c('nuxt-link',{staticClass:"hover:bg-primary-600 bg-primary-100 text-primary-600 flex justify-center items-center py-2 w-24 text-sm font-semibold leading-none rounded hover:text-white",attrs:{"to":((_vm.type.toLowerCase()) + "s/" + (_vm.post.id))}},[_vm._v("Edit")]),_vm._ssrNode(" <button type=\"button\""+(_vm._ssrAttr("disabled",_vm.loading))+" class=\"disabled:opacity-60 flex justify-center items-center py-2 ml-3 w-24 text-sm font-semibold leading-none text-white bg-red-600 rounded hover:bg-red-700\">"+_vm._ssrEscape(_vm._s(_vm.loading ? 'Menghapus...' : 'Hapus'))+"</button>")],2)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/RequestPostList.vue?vue&type=template&id=6923ec86&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/RequestPostList.vue?vue&type=script&lang=js&
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
/* harmony default export */ var RequestPostListvue_type_script_lang_js_ = ({
  props: {
    post: {
      type: Object,
      required: true,
      default: () => ({})
    },
    type: {
      type: String,
      default: 'Video'
    }
  },

  data() {
    return {
      updatedAt: '',
      interval: null,
      loading: false
    };
  },

  computed: {
    description() {
      if (this.post.description && this.post.description.length > 255) {
        return this.post.description.substring(0, 255) + '...';
      }

      return this.post.description;
    },

    updateago() {
      if (this.updatedAt) {
        return this.updatedAt;
      }

      return this.$moment(this.post.updated_at).fromNow();
    }

  },

  mounted() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.updatedAt = this.$moment(this.post.updated_at).fromNow();
      }, 1000);
    }
  },

  destroyed() {
    if (this.interval) clearInterval(this.interval);
  },

  methods: {
    handleDelete() {
      this.loading = true;
      this.$toast.confirm.danger(async () => {
        const url = `/minitutor/request-${this.type.toLowerCase()}s/${this.post.id}`;

        try {
          await this.$axios.$delete(url);
          this.$emit('destroyed', this.post.id);
          this.$toast.success(`${this.type} telah dihapus.`);
        } catch (e) {
          this.$toast.danger(this.$errorMessage(e));
        }

        this.loading = false;
      }, () => {
        this.loading = false;
      }, {
        message: `Anda yakin ingin menghapus ${this.type} ini?`
      });
    }

  }
});
// CONCATENATED MODULE: ./components/elements/RequestPostList.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_RequestPostListvue_type_script_lang_js_ = (RequestPostListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/RequestPostList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_RequestPostListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1f2a4c48"
  
)

/* harmony default export */ var RequestPostList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=elements-request-post-list.js.map