exports.ids = [72];
exports.modules = {

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/users/_username.vue?vue&type=template&id=c5c70ede&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-3"},[_vm._ssrNode("<div class=\"overflow-hidden bg-white rounded shadow\">","</div>",[_vm._ssrNode("<div class=\"flex py-5 px-4\">","</div>",[_vm._ssrNode("<div class=\"p-1 w-16 rounded-full border\">","</div>",[_c('v-img',{staticClass:"block w-full rounded-full",attrs:{"src":_vm.user.avatar,"src-placeholder":_vm.$images.avatar}})],1),_vm._ssrNode(" <div class=\"relative flex-1 pl-4 my-auto\"><h2 class=\"truncate text-lg font-semibold leading-none capitalize\">"+_vm._ssrEscape(_vm._s(_vm.user.name)+" ")+"<span class=\"text-sm\">😄</span></h2> <p class=\"truncate text-sm leading-none\">"+_vm._ssrEscape("@"+_vm._s(_vm.user.username))+"</p> <span class=\"text-2xs bg-primary-100 text-primary-600 inline-block absolute bottom-0 px-2 font-bold rounded-full border transform translate-y-5\">"+_vm._ssrEscape(_vm._s(_vm.user.points)+" Poin")+"</span></div> <div class=\"pl-4\">"+((_vm.user.website)?("<a"+(_vm._ssrAttr("href",_vm.user.website))+" target=\"_blank\" class=\"hover:bg-primary-600 text-primary-600 bg-primary-100 inline-flex justify-center items-center w-8 h-8 text-sm font-semibold leading-none rounded-full hover:text-white\"><i class=\"ft ft-globe\"></i></a>"):"<!---->")+"</div>")],2),_vm._ssrNode(" "+((_vm.user.about)?("<p class=\"py-3 px-4 text-sm text-center border-t\">"+_vm._ssrEscape(_vm._s(_vm.user.about))+"</p>"):"<!---->")+" "),_vm._ssrNode("<div class=\"border-top flex border-t\">","</div>",_vm._l((_vm.links),function(link,i){return _vm._ssrNode("<div class=\"first:border-l-0 flex flex-1 border-l\">","</div>",[_c('nuxt-link',{staticClass:"border-b-transparent border-primary-600 flex flex-1 justify-center items-center py-3 text-center hover:bg-gray-100",attrs:{"to":link.to,"exact-active-class":"border-b-4 pb-2 bg-gray-100"}},[_c('span',{staticClass:"block md:pr-3 md:text-xl"},[_c('i',{class:'ft ft-' + link.icon})]),_vm._v(" "),_c('span',{staticClass:"hidden font-semibold md:block"},[_vm._v("\n            "+_vm._s(link.text)+"\n          ")])])],1)}),0)],2),_vm._ssrNode(" "),_c('nuxt-child',{attrs:{"user":_vm.user,"followings":_vm.followings,"favorites":_vm.favorites}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/users/_username.vue?vue&type=template&id=c5c70ede&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/users/_username.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'UserWrapper',

  async asyncData({
    $axios,
    params,
    error
  }) {
    const {
      username
    } = params;

    try {
      return await $axios.$get(`/users/${username}`);
    } catch (e) {
      return error(e);
    }
  },

  head() {
    return {
      title: this.user.username
    };
  },

  computed: {
    links() {
      return [{
        text: 'Favorit',
        icon: 'heart',
        to: `/users/${this.$route.params.username}`
      }, {
        text: 'Diikuti',
        icon: 'users',
        to: `/users/${this.$route.params.username}/followings`
      }];
    }

  }
});
// CONCATENATED MODULE: ./pages/users/_username.vue?vue&type=script&lang=js&
 /* harmony default export */ var users_usernamevue_type_script_lang_js_ = (_usernamevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/users/_username.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  users_usernamevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "06132cfa"
  
)

/* harmony default export */ var _username = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_username.js.map