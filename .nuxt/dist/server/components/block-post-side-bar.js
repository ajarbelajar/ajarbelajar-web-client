exports.ids = [7,13];
exports.modules = {

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/PostSideBar.vue?vue&type=template&id=d13513f8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"overflow-hidden mb-3 bg-white rounded shadow\">","</div>",[_vm._ssrNode("<div class=\"p-3\">","</div>",[_vm._ssrNode("<div class=\"flex relative flex-col justify-center items-center pt-6 pb-3\">","</div>",[_vm._ssrNode("<span class=\"text-primary-700 absolute top-0 right-0 px-2 text-xs font-bold bg-gray-100 rounded border\">"+_vm._ssrEscape(_vm._s(_vm.user.points)+" Point")+"</span> "),_c('nuxt-link',{staticClass:"flex relative justify-center items-center p-1 m-auto w-24 bg-gray-100 rounded-full border",attrs:{"to":("/minitutors/" + (_vm.user.username))}},[_c('v-img',{staticClass:"block w-full rounded-full",attrs:{"src":_vm.user.avatar || _vm.$images.avatar,"src-placeholder":_vm.$images.avatar,"alt":_vm.user.username}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<h4 class=\"truncate text-lg font-bold tracking-wider text-center uppercase\">","</h4>",[_c('nuxt-link',{attrs:{"to":("/minitutors/" + (_vm.user.username))}},[_vm._v(_vm._s(_vm.user.name))])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"truncate mb-3 text-sm font-semibold text-center text-gray-500\">","</div>",[_c('nuxt-link',{attrs:{"to":("/minitutors/" + (_vm.user.username))}},[_vm._v("@"+_vm._s(_vm.user.username))])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-center\">","</div>",[(_vm.$store.getters.auth)?_c('elements-follow-toggle',{attrs:{"mid":_vm.minitutor.id}}):_vm._e()],1)],2),_vm._ssrNode(" <div class=\"p-2 bg-gray-100\"><p class=\"text-xs font-semibold text-center\">"+_vm._ssrEscape("Postingan ditulis oleh "+_vm._s(_vm.user.name))+"</p></div>")],2),_vm._ssrNode(" "),(_vm.lates.length)?_vm._ssrNode("<div class=\"mb-3 bg-white rounded shadow\">","</div>",[_vm._ssrNode("<div class=\"py-4 px-3 border-b\"><h4 class=\"text-sm font-semibold leading-none\">"+_vm._ssrEscape("Lainnya dari "+_vm._s(_vm.user.name))+"</h4></div> "),_vm._ssrNode("<div>","</div>",_vm._l((_vm.lates),function(item,i){return _c('nuxt-link',{key:i,staticClass:"first:border-t-0 block py-2 px-3 text-sm border-t hover:bg-gray-100",attrs:{"to":("/" + (item.type.toLowerCase()) + "s/" + (item.slug))}},[_c('span',{staticClass:"block text-xs font-semibold leading-none",class:item.type === 'Article' ? 'text-red-600' : 'text-primary-600'},[_vm._v(_vm._s(item.type === 'article' ? 'Artikel' : 'Video'))]),_vm._v("\n        "+_vm._s(item.title)+"\n      ")])}),1)],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/block/PostSideBar.vue?vue&type=template&id=d13513f8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/PostSideBar.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PostSideBarvue_type_script_lang_js_ = ({
  props: {
    user: {
      type: Object,
      default: () => ({})
    },
    minitutor: {
      type: Object,
      default: () => ({})
    },
    lates: {
      type: Array,
      default: () => []
    }
  }
});
// CONCATENATED MODULE: ./components/block/PostSideBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var block_PostSideBarvue_type_script_lang_js_ = (PostSideBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/block/PostSideBar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  block_PostSideBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ca2ae606"
  
)

/* harmony default export */ var PostSideBar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ElementsFollowToggle: __webpack_require__(82).default})


/***/ }),

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
//# sourceMappingURL=block-post-side-bar.js.map