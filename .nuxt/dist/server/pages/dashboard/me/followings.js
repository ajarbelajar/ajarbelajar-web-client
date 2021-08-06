exports.ids = [47,1,13,15];
exports.modules = {

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/me/followings.vue?vue&type=template&id=3feb278b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"py-3"},[_vm._ssrNode("<div class=\"grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4\">","</div>",_vm._l((_vm.followings),function(item){return _c('elements-minitutor-list',{key:item.id,attrs:{"user":item.user,"minitutor":item.minitutor,"no-counter":""}})}),1),_vm._ssrNode(" "),(!_vm.followings.length)?_c('block-blank',{attrs:{"text":"Belum ada MiniTutor yang diikuti."}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard/me/followings.vue?vue&type=template&id=3feb278b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard/me/followings.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var followingsvue_type_script_lang_js_ = ({
  name: 'Followings',

  async asyncData({
    error,
    $axios
  }) {
    try {
      const followings = await $axios.$get('/account/followings');
      return {
        followings
      };
    } catch (e) {
      return error(e);
    }
  }

});
// CONCATENATED MODULE: ./pages/dashboard/me/followings.vue?vue&type=script&lang=js&
 /* harmony default export */ var me_followingsvue_type_script_lang_js_ = (followingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dashboard/me/followings.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  me_followingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "32365120"
  
)

/* harmony default export */ var followings = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ElementsMinitutorList: __webpack_require__(87).default,BlockBlank: __webpack_require__(77).default})


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/Blank.vue?vue&type=template&id=58e2786c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"block py-32 w-full text-center bg-white rounded shadow"},[_vm._ssrNode("<p class=\"mb-2 text-2xl font-semibold text-gray-500\">"+_vm._ssrEscape(_vm._s(_vm.text))+"</p> "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/block/Blank.vue?vue&type=template&id=58e2786c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/Blank.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var Blankvue_type_script_lang_js_ = ({
  name: 'Blank',
  props: {
    text: {
      type: String,
      default: 'Tidak ada kontent'
    }
  }
});
// CONCATENATED MODULE: ./components/block/Blank.vue?vue&type=script&lang=js&
 /* harmony default export */ var block_Blankvue_type_script_lang_js_ = (Blankvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/block/Blank.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  block_Blankvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4aee3695"
  
)

/* harmony default export */ var Blank = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/MinitutorList.vue?vue&type=template&id=0753eeae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-primary-600 overflow-hidden relative bg-white rounded border-t-4 shadow"},[_vm._ssrNode(((_vm.user.website)?("<div class=\"absolute top-0 right-0 p-3 text-center\"><a"+(_vm._ssrAttr("href",_vm.user.website))+" target=\"_blank\" class=\"text-primary-600 flex justify-center items-center w-7 h-7 font-bold tracking-wider leading-none bg-gray-100 rounded border hover:shadow\"><i class=\"ft ft-globe\"></i></a></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"p-3 pt-6\">","</div>",[_vm._ssrNode("<div class=\"flex flex-col justify-center items-center mb-2\">","</div>",[_vm._ssrNode("<div class=\"p-1 mb-1 w-20 bg-white rounded-full border\">","</div>",[_c('v-img',{staticClass:"w-full rounded-full",attrs:{"src":_vm.user.avatar || _vm.$images.avatar,"src-placeholder":_vm.$images.avatar}})],1),_vm._ssrNode(" <span class=\"text-primary-600 block p-1 text-xs font-bold leading-none bg-gray-100 rounded border\">"+_vm._ssrEscape(_vm._s(_vm.user.points)+" POIN")+"</span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<h4 class=\"truncate font-bold leading-none text-center capitalize\">","</h4>",[_c('nuxt-link',{attrs:{"to":("/minitutors/" + (_vm.user.username))}},[_vm._v(_vm._s(_vm.user.name))])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"truncate mb-3 text-sm font-semibold text-center text-gray-500\">","</div>",[_c('nuxt-link',{attrs:{"to":("/minitutors/" + (_vm.user.username))}},[_vm._v("@"+_vm._s(_vm.user.username))])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mb-3 text-center\">","</div>",[(_vm.$store.getters.auth)?_c('elements-follow-toggle',{attrs:{"mid":_vm.minitutor.id,"small":""}}):_vm._e()],1),_vm._ssrNode(" "+((!_vm.noCounter)?("<div class=\"grid grid-cols-3\"><div class=\"text-center\"><span class=\"block text-lg font-bold\">"+_vm._ssrEscape(_vm._s(_vm.minitutor.article_count))+"</span> <span class=\"block text-xs font-semibold text-gray-500 uppercase\">Pengikut</span></div> <div class=\"text-center\"><span class=\"block text-lg font-bold\">"+_vm._ssrEscape(_vm._s(_vm.minitutor.article_count))+"</span> <span class=\"block text-xs font-semibold text-gray-500 uppercase\">Artikel</span></div> <div class=\"text-center\"><span class=\"block text-lg font-bold\">"+_vm._ssrEscape(_vm._s(_vm.minitutor.video_count))+"</span> <span class=\"block text-xs font-semibold text-gray-500 uppercase\">Video</span></div></div>"):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"p-3 bg-gray-100\">","</div>",[_c('nuxt-link',{staticClass:"hover:bg-primary-700 bg-primary-600 flex justify-center items-center px-4 h-8 text-sm font-semibold leading-none text-center text-white rounded",attrs:{"to":("/minitutors/" + (_vm.user.username))}},[_vm._v("Lihat MiniTutor")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/MinitutorList.vue?vue&type=template&id=0753eeae&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/MinitutorList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MinitutorListvue_type_script_lang_js_ = ({
  name: 'MinitutorList',
  props: {
    user: {
      type: Object,
      default: () => ({})
    },
    minitutor: {
      type: Object,
      default: () => ({})
    },
    noCounter: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/elements/MinitutorList.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_MinitutorListvue_type_script_lang_js_ = (MinitutorListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/MinitutorList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_MinitutorListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1d25ba78"
  
)

/* harmony default export */ var MinitutorList = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ElementsFollowToggle: __webpack_require__(82).default})


/***/ })

};;
//# sourceMappingURL=followings.js.map