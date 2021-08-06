exports.ids = [33];
exports.modules = {

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/MinitutorSidebar.vue?vue&type=template&id=0806bff8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar flex overflow-y-auto flex-col flex-1 p-3"},[_vm._ssrNode("<div class=\"flex flex-col w-full bg-opacity-25 rounded-lg border\">","</div>",[_vm._ssrNode("<div class=\"flex items-center p-3 w-full\">","</div>",[_vm._ssrNode("<div class=\"pr-2\">","</div>",[_vm._ssrNode("<figure class=\"block p-1 m-auto w-12 h-12 rounded-full border\">","</figure>",[_c('v-img',{staticClass:"block w-full h-full rounded-full",attrs:{"src":_vm.auth.avatar,"src-placeholder":_vm.$images.avatar}})],1)]),_vm._ssrNode(" <div class=\"flex-1\"><h3 class=\"capitalized truncate mb-1 font-semibold leading-none\">"+_vm._ssrEscape(_vm._s(_vm.auth.name))+"</h3> <p class=\"truncate text-sm leading-none text-gray-400\">"+_vm._ssrEscape("@"+_vm._s(_vm.auth.username))+"</p></div>")],2),_vm._ssrNode(" <div class=\"text-primary-600 py-2 px-3 text-xs font-bold leading-none text-center border-t\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.auth.points)+" POINT\n    ")+"</div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex-1 py-3\">","</div>",_vm._l((_vm.urls),function(url,i){return _c('nuxt-link',{key:i,staticClass:"flex items-center py-3 px-3 mb-1 w-full text-sm font-semibold leading-none text-gray-600 rounded-lg hover:bg-gray-100",attrs:{"to":url.to,"exact-active-class":i ? '' : 'bg-gray-100',"active-class":i ? 'bg-gray-100' : ''},nativeOn:{"click":function($event){return _vm.onclick.apply(null, arguments)}}},[_c('span',{staticClass:"mr-3 opacity-60"},[_c('i',{class:("ft ft-" + (url.icon))})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(url.text))])])}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/layout/MinitutorSidebar.vue?vue&type=template&id=0806bff8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/layout/MinitutorSidebar.vue?vue&type=script&lang=js&
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
/* harmony default export */ var MinitutorSidebarvue_type_script_lang_js_ = ({
  name: 'Sidebar',
  computed: {
    auth() {
      return this.$store.getters.auth;
    },

    urls() {
      return [{
        text: 'Edit informasi',
        to: '/dashboard/minitutor',
        icon: 'info'
      }, {
        text: 'Artikel',
        to: '/dashboard/minitutor/articles',
        icon: 'book'
      }, {
        text: 'Video',
        to: '/dashboard/minitutor/videos',
        icon: 'film'
      }, {
        text: 'Komentar',
        to: '/dashboard/minitutor/comments',
        icon: 'message-circle'
      }, {
        text: 'Feedback konstruktif',
        to: '/dashboard/minitutor/feedback',
        icon: 'star'
      }];
    }

  },
  methods: {
    onclick() {
      this.$sidebar.display(false);
    }

  }
});
// CONCATENATED MODULE: ./components/layout/MinitutorSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_MinitutorSidebarvue_type_script_lang_js_ = (MinitutorSidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/layout/MinitutorSidebar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layout_MinitutorSidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "19f977c2"
  
)

/* harmony default export */ var MinitutorSidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=layout-minitutor-sidebar.js.map