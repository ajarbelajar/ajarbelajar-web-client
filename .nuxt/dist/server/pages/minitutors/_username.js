exports.ids = [62,13];
exports.modules = {

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/minitutors/_username.vue?vue&type=template&id=84ec9486&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-3"},[_vm._ssrNode("<div class=\"overflow-hidden bg-white rounded shadow\">","</div>",[_vm._ssrNode("<div class=\"flex p-3\">","</div>",[_vm._ssrNode("<div class=\"p-1 my-auto w-20 h-20 rounded-full border\">","</div>",[_c('v-img',{staticClass:"block w-full rounded-full",attrs:{"src":_vm.user.avatar,"src-placeholder":_vm.$images.avatar}})],1),_vm._ssrNode(" <div class=\"relative flex-1 pl-4 my-auto\"><h2 class=\"truncate text-lg font-semibold leading-none capitalize\">"+_vm._ssrEscape(_vm._s(_vm.user.name)+" ")+"<span class=\"text-sm\">😄</span></h2> <p class=\"truncate text-sm leading-none\">"+_vm._ssrEscape("@"+_vm._s(_vm.user.username))+"</p> "+((_vm.user.website)?("<a"+(_vm._ssrAttr("href",_vm.user.website))+" target=\"_blank\" class=\"hover:text-primary-700 text-primary-600 text-xs\">"+_vm._ssrEscape(_vm._s(_vm.user.website))+"</a>"):"<!---->")+"</div> "),_vm._ssrNode("<div class=\"pl-4\">","</div>",[_c('elements-follow-toggle',{attrs:{"mid":_vm.minitutor.id}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"border-top flex border-t\">","</div>",_vm._l((_vm.links),function(link,i){return _vm._ssrNode("<div class=\"first:border-l-0 flex flex-1 border-l\">","</div>",[_c('nuxt-link',{staticClass:"border-b-transparent border-primary-600 flex flex-1 justify-center items-center py-3 text-center hover:bg-gray-100",attrs:{"to":link.to,"exact-active-class":"border-b-4 pb-2 bg-gray-100"}},[_c('span',{staticClass:"block md:pr-3 md:text-xl"},[_c('i',{class:'ft ft-' + link.icon})]),_vm._v(" "),_c('span',{staticClass:"hidden font-semibold md:block"},[_vm._v("\n            "+_vm._s(link.text)+"\n          ")])])],1)}),0)],2),_vm._ssrNode(" "),_c('nuxt-child',{attrs:{"minitutor":_vm.minitutor,"user":_vm.user,"articles":_vm.articles,"videos":_vm.videos,"followers":_vm.followers}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/minitutors/_username.vue?vue&type=template&id=84ec9486&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/minitutors/_username.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _usernamevue_type_script_lang_js_ = ({
  name: 'MinitutorWrapper',

  async asyncData({
    $axios,
    params,
    error
  }) {
    const {
      username
    } = params;

    try {
      return await $axios.$get(`/minitutors/${username}`);
    } catch (e) {
      return error(e);
    }
  },

  head() {
    return {
      title: 'MT ' + this.user.username
    };
  },

  computed: {
    links() {
      return [{
        text: 'Info',
        icon: 'info',
        to: `/minitutors/${this.$route.params.username}`
      }, {
        text: 'Video',
        icon: 'play',
        to: `/minitutors/${this.$route.params.username}/videos`
      }, {
        text: 'Artikel',
        icon: 'book',
        to: `/minitutors/${this.$route.params.username}/articles`
      }, {
        text: 'Pengikut',
        icon: 'users',
        to: `/minitutors/${this.$route.params.username}/followers`
      }, {
        text: 'Profil',
        icon: 'user',
        to: `/users/${this.$route.params.username}`
      }];
    }

  }
});
// CONCATENATED MODULE: ./pages/minitutors/_username.vue?vue&type=script&lang=js&
 /* harmony default export */ var minitutors_usernamevue_type_script_lang_js_ = (_usernamevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/minitutors/_username.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  minitutors_usernamevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4728cfbb"
  
)

/* harmony default export */ var _username = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=_username.js.map