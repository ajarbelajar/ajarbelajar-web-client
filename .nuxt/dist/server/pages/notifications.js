exports.ids = [68,1,5,16,37];
exports.modules = {

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/NotificationList.vue?vue&type=template&id=7e9e2618&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"overflow-hidden relative bg-white rounded shadow hover:shadow-lg"},[_vm._ssrNode("<div"+(_vm._ssrClass("overflow-hidden relative p-3 rounded border-l-4 cursor-pointer",_vm.notification.read_at ? 'border-primary-600' : 'border-red-600'))+"><p class=\"font-semibold\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.notification.data.message)+"\n    ")+"</p> <p class=\"text-sm text-gray-700\">"+_vm._ssrEscape("\n      "+_vm._s(_vm._f("moment")(_vm.notification.created_at,'from', 'now'))+"\n    ")+"</p> "+((!_vm.notification.read_at)?("<span class=\"text-2xs absolute top-0 right-0 px-1 font-bold text-red-700 bg-red-100 rounded\">BARU</span>"):"<!---->")+"</div> "),(_vm.loading)?_c('block-loading'):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/NotificationList.vue?vue&type=template&id=7e9e2618&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/NotificationList.vue?vue&type=script&lang=js&
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
/* harmony default export */ var NotificationListvue_type_script_lang_js_ = ({
  name: 'NotificationList',
  props: {
    notification: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      loading: false
    };
  },

  methods: {
    handleClick(id) {
      this.loading = true;
      this.$axios.$get('account/notifications/read/' + id).then(data => {
        switch (data.type) {
          case 'article':
            this.$router.push('/articles/' + data.slug);
            break;

          case 'video':
            this.$router.push('/videos/' + data.slug);
            break;

          case 'join.minitutor':
            this.$router.push('/join-minitutor');
            break;

          case 'dashboard.minitutor':
            this.$router.push('/dashboard/minitutor/edit');
            break;

          case 'feedback':
            this.$router.push('/dashboard/minitutor/feedback');
            break;
        }

        this.$store.commit('notification/read', id);
      }).catch(err => {
        this.$toast.danger(this.$errorMessage(err));
        this.loading = false;
      });
    }

  }
});
// CONCATENATED MODULE: ./components/elements/NotificationList.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_NotificationListvue_type_script_lang_js_ = (NotificationListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/NotificationList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_NotificationListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "59acf77e"
  
)

/* harmony default export */ var NotificationList = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BlockLoading: __webpack_require__(84).default})


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/notifications.vue?vue&type=template&id=4b8abee0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-3"},[_vm._ssrNode("<div class=\"flex justify-between items-center mb-3\">","</div>",[_vm._ssrNode("<h3 class=\"flex-1 text-lg font-bold leading-none uppercase\">Notifikasi</h3> "),_vm._ssrNode("<button"+(_vm._ssrAttr("disabled",_vm.loading))+" type=\"button\" class=\"bg-primary-600 disabled:opacity-60 flex justify-center items-center w-7 h-7 text-sm text-white rounded-full\">","</button>",[(_vm.loading)?_c('svg-spinner',{attrs:{"width":"20px"}}):_c('i',{staticClass:"ft ft-eye"})],1),_vm._ssrNode(" "),_vm._ssrNode("<button"+(_vm._ssrAttr("disabled",_vm.loading))+" type=\"button\" class=\"disabled:opacity-60 flex justify-center items-center ml-2 w-7 h-7 text-sm text-white bg-red-600 rounded-full\">","</button>",[(_vm.loading)?_c('svg-spinner',{attrs:{"width":"20px"}}):_c('i',{staticClass:"ft ft-trash"})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grid grid-cols-1 gap-3\">","</div>",_vm._l((_vm.$store.getters.notifications),function(item){return _c('elements-notification-list',{key:item.id,attrs:{"notification":item}})}),1),_vm._ssrNode(" "),(!_vm.$store.getters.notifications.length)?_c('block-blank',{attrs:{"text":"Belum ada Notifikasi."}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/notifications.vue?vue&type=template&id=4b8abee0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/notifications.vue?vue&type=script&lang=js&
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
/* harmony default export */ var notificationsvue_type_script_lang_js_ = ({
  name: 'Notifications',
  middleware: 'auth',

  data() {
    return {
      loading: false
    };
  },

  head: {
    title: 'Notifikasi'
  },
  methods: {
    readAll() {
      this.loading = true;
      this.$axios.$get('account/notifications/read').then(() => {
        this.$store.commit('notification/readAll');
        this.loading = false;
      }).catch(err => {
        this.$toast.danger(this.$errorMessage(err));
        this.loading = false;
      });
    },

    deleteAll() {
      this.$toast.confirm.danger(() => {
        this.loading = true;
        this.$axios.$delete('account/notifications').then(() => {
          this.$store.commit('notification/set', []);
          this.loading = false;
        }).catch(err => {
          this.$toast.danger(this.$errorMessage(err));
          this.loading = false;
        });
      }, null, {
        message: 'Anda yakin ingin menghapus semua notifikasi?'
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/notifications.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_notificationsvue_type_script_lang_js_ = (notificationsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/notifications.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_notificationsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3ff4d80a"
  
)

/* harmony default export */ var notifications = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SvgSpinner: __webpack_require__(75).default,ElementsNotificationList: __webpack_require__(116).default,BlockBlank: __webpack_require__(77).default})


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/Spinner.vue?vue&type=template&id=df4f7eb6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","viewBox":"0 0 100 100","preserveAspectRatio":"xMidYMid"}},[_vm._ssrNode("<circle cx=\"50\" cy=\"50\" r=\"40\" stroke-width=\"12\" fill=\"none\" class=\"dark:stroke-brand-dark stroke-brand-light\"></circle> "),_vm._ssrNode("<circle cx=\"50\" cy=\"50\" r=\"40\" stroke-width=\"12\" stroke-linecap=\"round\" fill=\"none\""+(_vm._ssrClass(null,_vm.stroke))+">","</circle>",[_c('animateTransform',{attrs:{"attributeName":"transform","type":"rotate","repeatCount":"indefinite","dur":"1s","values":"0 50 50;180 50 50;720 50 50","keyTimes":"0;0.5;1"}}),_vm._ssrNode(" <animate attributeName=\"stroke-dasharray\" repeatCount=\"indefinite\" dur=\"1s\" values=\"25.132741228718345 226.1946710584651;170.90264035528475 80.4247719318987;25.132741228718345 226.1946710584651\" keyTimes=\"0;0.5;1\"></animate>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/svg/Spinner.vue?vue&type=template&id=df4f7eb6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/svg/Spinner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Spinnervue_type_script_lang_js_ = ({
  name: 'SvgSpinner',
  props: {
    stroke: {
      type: String,
      default: 'stroke-brand'
    }
  }
});
// CONCATENATED MODULE: ./components/svg/Spinner.vue?vue&type=script&lang=js&
 /* harmony default export */ var svg_Spinnervue_type_script_lang_js_ = (Spinnervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/svg/Spinner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  svg_Spinnervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "db2c681e"
  
)

/* harmony default export */ var Spinner = __webpack_exports__["default"] = (component.exports);

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

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/Loading.vue?vue&type=template&id=7c069364&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex absolute inset-0 flex-col justify-center items-center",class:_vm.variant},[_c('svg-spinner',{staticClass:"block",attrs:{"width":_vm.size + 'px',"height":_vm.size + 'px'}}),_vm._ssrNode(" "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/block/Loading.vue?vue&type=template&id=7c069364&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/Loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Loadingvue_type_script_lang_js_ = ({
  name: 'Loading',
  props: {
    size: {
      type: Number,
      default: 46
    },
    variant: {
      type: String,
      default: 'bg-gray-900 bg-opacity-50'
    }
  }
});
// CONCATENATED MODULE: ./components/block/Loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var block_Loadingvue_type_script_lang_js_ = (Loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/block/Loading.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  block_Loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2c9e6786"
  
)

/* harmony default export */ var Loading = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SvgSpinner: __webpack_require__(75).default})


/***/ })

};;
//# sourceMappingURL=notifications.js.map