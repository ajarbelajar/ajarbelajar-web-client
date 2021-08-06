exports.ids = [64,1,19];
exports.modules = {

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/minitutors/_username/followers.vue?vue&type=template&id=47a0ef5f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"py-3"},[_vm._ssrNode("<div class=\"grid grid-cols-2 gap-3 xl:grid-cols-4\">","</div>",_vm._l((_vm.followers),function(user){return _c('elements-user-list',{key:user.id,attrs:{"user":user}})}),1),_vm._ssrNode(" "),(!_vm.followers.length)?_c('block-blank',{attrs:{"text":"MiniTutor Belum memiliki pengikut."}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/minitutors/_username/followers.vue?vue&type=template&id=47a0ef5f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/minitutors/_username/followers.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var followersvue_type_script_lang_js_ = ({
  name: 'MinitutorFollowers',
  props: {
    followers: {
      type: Array,
      default: () => []
    }
  }
});
// CONCATENATED MODULE: ./pages/minitutors/_username/followers.vue?vue&type=script&lang=js&
 /* harmony default export */ var _username_followersvue_type_script_lang_js_ = (followersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/minitutors/_username/followers.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _username_followersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "009e46b4"
  
)

/* harmony default export */ var followers = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ElementsUserList: __webpack_require__(95).default,BlockBlank: __webpack_require__(77).default})


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

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/UserList.vue?vue&type=template&id=0fc8c48a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nuxt-link',{staticClass:"group p-2 bg-white rounded shadow hover:shadow-lg",attrs:{"to":("/users/" + (_vm.user.username))}},[_c('div',{staticClass:"flex relative items-center"},[_c('span',{staticClass:"text-2xs bg-primary-100 text-primary-600 block absolute -top-1 -right-1 px-2 font-bold rounded-full"},[_vm._v(_vm._s(_vm.user.points)+" POIN")]),_vm._v(" "),_c('div',{staticClass:"flex flex-col justify-center items-center"},[_c('div',{staticClass:"group-hover:bg-gray-200 p-1 w-14 bg-white rounded-full border"},[_c('v-img',{staticClass:"w-full rounded-full",attrs:{"src":_vm.user.avatar || _vm.$images.avatar,"src-placeholder":_vm.$images.avatar}})],1)]),_vm._v(" "),_c('div',{staticClass:"flex-1 pl-2"},[_c('h3',{staticClass:"truncate mb-1 text-sm font-semibold leading-none capitalize"},[_vm._v(_vm._s(_vm.user.name))]),_vm._v(" "),_c('p',{staticClass:"text-xs leading-none text-gray-600 capitalize"},[_vm._v("@"+_vm._s(_vm.user.username))])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/UserList.vue?vue&type=template&id=0fc8c48a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/UserList.vue?vue&type=script&lang=js&
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
/* harmony default export */ var UserListvue_type_script_lang_js_ = ({
  name: 'UserList',
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  }
});
// CONCATENATED MODULE: ./components/elements/UserList.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_UserListvue_type_script_lang_js_ = (UserListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/UserList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_UserListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1c28075e"
  
)

/* harmony default export */ var UserList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=followers.js.map