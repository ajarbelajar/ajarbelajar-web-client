exports.ids = [12];
exports.modules = {

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/FavoriteToggle.vue?vue&type=template&id=2ebd3be3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"disabled:opacity-50 flex justify-center items-center px-3 h-8 text-sm rounded-full border border-red-600",class:{ 'bg-transparent text-red-600': !_vm.favorited, 'text-white bg-red-600': _vm.favorited },attrs:{"type":"button","disabled":_vm.loading},on:{"click":function($event){$event.preventDefault();return _vm.handleClick.apply(null, arguments)}}},[_vm._ssrNode("<i class=\"ft ft-heart\"></i> "+((!_vm.noText)?("<span class=\"ml-2\">"+_vm._ssrEscape(_vm._s(_vm.text))+"</span>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/FavoriteToggle.vue?vue&type=template&id=2ebd3be3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/FavoriteToggle.vue?vue&type=script&lang=js&
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
/* harmony default export */ var FavoriteTogglevue_type_script_lang_js_ = ({
  name: 'FavoriteToggle',
  props: {
    pid: {
      type: Number,
      required: true,
      default: 0
    },
    noText: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      loading: false
    };
  },

  computed: {
    favorited() {
      return this.$store.getters.auth.favorites.includes(this.pid);
    },

    text() {
      if (this.loading) {
        return 'Sedang diproses';
      }

      if (this.favorited) {
        return 'Hapus favorite';
      }

      return 'Tambah favorite';
    }

  },
  methods: {
    async handleClick() {
      this.loading = true;

      try {
        let favorites = [...this.$store.getters.auth.favorites];

        if (!this.favorited) {
          await this.$axios.$post(`/favorites/${this.pid}`);
          favorites = [...favorites, this.pid];
          this.$toast.success(`Berhasil menambahkan ke daftar favorite.`);
        } else {
          await this.$axios.$delete(`/favorites/${this.pid}`);
          favorites = favorites.filter(id => id !== this.pid);
          this.$toast.success(`Berhasil menghapus favorite.`);
        }

        this.$store.commit('auth/setAuth', { ...this.$store.getters.auth,
          favorites
        });
      } catch (e) {
        this.$toast.danger(this.$errorMessage(e));
      }

      this.loading = false;
    }

  }
});
// CONCATENATED MODULE: ./components/elements/FavoriteToggle.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_FavoriteTogglevue_type_script_lang_js_ = (FavoriteTogglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/FavoriteToggle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_FavoriteTogglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "569c6325"
  
)

/* harmony default export */ var FavoriteToggle = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=elements-favorite-toggle.js.map