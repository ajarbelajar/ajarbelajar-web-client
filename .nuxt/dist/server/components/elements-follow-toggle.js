exports.ids = [13];
exports.modules = {

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/FollowToggle.vue?vue&type=template&id=76085b49&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"disabled:opacity-50 inline-flex justify-center items-center font-semibold text-white rounded",class:{ 'bg-primary-600 hover:bg-primary-700': !_vm.followed, 'bg-red-600 hover:bg-red-700': _vm.followed, 'h-6 text-xs px-2': _vm.small, 'h-8 text-sm px-3': !_vm.small },attrs:{"type":"button","disabled":_vm.loading},on:{"click":function($event){$event.preventDefault();return _vm.handleClick.apply(null, arguments)}}},[_vm._ssrNode(_vm._ssrEscape("\n  "+_vm._s(_vm.text)+"\n"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/FollowToggle.vue?vue&type=template&id=76085b49&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/FollowToggle.vue?vue&type=script&lang=js&
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
/* harmony default export */ var FollowTogglevue_type_script_lang_js_ = ({
  name: 'FollowToggle',
  props: {
    mid: {
      type: Number,
      required: true,
      default: 0
    },
    small: {
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
    followed() {
      return this.$store.getters.auth.followings.includes(this.mid);
    },

    text() {
      if (this.followed) {
        return 'Berhenti Mengikuti';
      }

      return 'Ikuti MiniTutor';
    }

  },
  methods: {
    async handleClick() {
      this.loading = true;

      try {
        const url = `/follow/${this.mid}`;
        let followings = [...this.$store.getters.auth.followings];

        if (!this.followed) {
          await this.$axios.$post(url);
          followings = [...followings, this.mid];
          this.$toast.success(`Berhasil mengikuti MiniTutor.`);
        } else {
          await this.$axios.$delete(url);
          const data = [];
          followings.forEach(id => {
            if (id !== this.mid) data.push(id);
          });
          followings = data;
          this.$toast.success(`Berhasil berhenti mengikuti MiniTutor.`);
        }

        this.$store.commit('auth/setAuth', { ...this.$store.getters.auth,
          followings
        });
      } catch (e) {
        this.$toast.danger(this.$errorMessage(e));
      }

      this.loading = false;
    }

  }
});
// CONCATENATED MODULE: ./components/elements/FollowToggle.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_FollowTogglevue_type_script_lang_js_ = (FollowTogglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/FollowToggle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_FollowTogglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "52220b8c"
  
)

/* harmony default export */ var FollowToggle = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=elements-follow-toggle.js.map