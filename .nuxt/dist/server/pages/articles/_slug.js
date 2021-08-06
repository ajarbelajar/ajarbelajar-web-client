exports.ids = [39,2,3,4,7,8,12,13,21,24,25,37];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/RenderPost.vue?vue&type=template&id=6d4dfce9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"border-primary-600 pb-6 mb-3 w-full bg-white rounded border-b-4 shadow"},[(_vm.auth && _vm.post.type === 'video')?_vm._ssrNode("<video"+(_vm._ssrAttr("src",_vm.post.video))+" disablePictureInPicture controlsList=\"nodownload\""+(_vm._ssrAttr("poster",_vm.post.hero.large || _vm.$images.hero.large))+" autoplay=\"autoplay\" controls=\"controls\" class=\"block overflow-hidden w-full rounded-t rounded-b-xl\">","</video>"):_c('v-img',{staticClass:"block w-full rounded-t rounded-b-xl",attrs:{"src":_vm.post.hero.large || _vm.$images.hero.large,"src-placeholder":_vm.$images.hero.large}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex justify-between items-center p-3 border-b\">","</div>",[_vm._ssrNode("<div class=\"flex items-center text-xs text-gray-600\"><span class=\"block\">"+_vm._ssrEscape(_vm._s(_vm._f("moment")(_vm.post.created_at,'dddd, Do MMMM YYYY')))+"</span> <span class=\"block mx-2 w-px h-3 bg-gray-600\"></span> <span class=\"block\"><i class=\"ft ft-eye\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.post.view_count))+"</span></div> "),(_vm.auth)?_c('elements-favorite-toggle',{attrs:{"pid":_vm.post.id,"type":"post"}}):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex items-center p-3\">","</div>",[_c('client-only',[_c('star-rating',{staticClass:"h-3 text-sm leading-none",attrs:{"rating":Number(_vm.post.rating),"read-only":true,"increment":0.01,"star-size":14,"text-class":"mr-1 text-sm h-3 leading-none"}})],1),_vm._ssrNode(" <span class=\"h-3 text-sm leading-none\">"+_vm._ssrEscape("dari "+_vm._s(_vm.post.feedback_count)+" Feedback")+"</span>")],2),_vm._ssrNode(" <div class=\"p-3\"><h1 class=\"text-3xl md:text-4xl\">"+_vm._ssrEscape(_vm._s(_vm.post.title))+"</h1></div> "),(_vm.post.category)?_vm._ssrNode("<div class=\"flex px-3 pb-4\">","</div>",[_c('router-link',{staticClass:"border-primary-200 text-primary-600 flex justify-center items-center py-1 px-2 text-xs font-semibold uppercase bg-gray-100 rounded border hover:shadow",attrs:{"to":("/categories/" + (_vm.post.category.slug))}},[_vm._v("\n      "+_vm._s(_vm.post.category.name)+"\n    ")])],1):_vm._e(),_vm._ssrNode(" "),(_vm.auth)?_vm._ssrNode("<div class=\"px-3\">","</div>",[(_vm.post.type ==='video')?_vm._ssrNode("<p>","</p>",[_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.post.description)))],2):_c('block-editorjs-compiler',{staticClass:"md:prose-lg prose w-full max-w-none",attrs:{"editor":JSON.parse(_vm.post.body)}})],1):_vm._ssrNode("<div class=\"py-10 px-3 border-t\">","</div>",[_vm._ssrNode("<p class=\"mb-3 text-lg text-center text-gray-500 md:text-xl\">\n      Anda harus login untuk mengakses postingan ini.\n    </p> "),_vm._ssrNode("<div class=\"text-center\">","</div>",[_c('form-button',{attrs:{"tag":"nuxt-link","to":("/login?next=" + (_vm.$route.fullPath))}},[_vm._v("\n        Masuk\n      ")])],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/block/RenderPost.vue?vue&type=template&id=6d4dfce9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/RenderPost.vue?vue&type=script&lang=js&
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
/* harmony default export */ var RenderPostvue_type_script_lang_js_ = ({
  name: 'RenderPost',
  props: {
    post: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    auth() {
      return this.$store.getters.auth;
    }

  }
});
// CONCATENATED MODULE: ./components/block/RenderPost.vue?vue&type=script&lang=js&
 /* harmony default export */ var block_RenderPostvue_type_script_lang_js_ = (RenderPostvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/block/RenderPost.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  block_RenderPostvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "71b92036"
  
)

/* harmony default export */ var RenderPost = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ElementsFavoriteToggle: __webpack_require__(88).default,BlockEditorjsCompiler: __webpack_require__(89).default,FormButton: __webpack_require__(76).default})


/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/Feedback.vue?vue&type=template&id=52265492&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-primary-600 p-3 mb-3 bg-white rounded border-b-4 shadow"},[_vm._ssrNode("<div class=\"mb-2 text-2xl font-semibold\">Feedback konstruktif</div> <div class=\"mb-4 text-sm text-gray-500\">Feedback akan kami teruskan langsung ke MiniTutor, tidak akan ditampilkan ke publik, feedback kamu sangat berharga untuk kemajuan konten MiniTutor kedepannya.</div> "),_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<label class=\"block\">","</label>",[_vm._ssrNode("<div class=\"text-sm\">\n        Tingkat pemahaman kamu\n      </div> "),_c('form-select',{attrs:{"name":"understand","error":_vm.errors.understand,"options":['1', '2', '3', '4', '5']},model:{value:(_vm.form.understand),callback:function ($$v) {_vm.$set(_vm.form, "understand", $$v)},expression:"form.understand"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<label class=\"block\">","</label>",[_vm._ssrNode("<div class=\"text-sm\">\n        Inspiratif\n      </div> "),_c('form-select',{attrs:{"name":"inspiring","error":_vm.errors.inspiring,"options":['1', '2', '3', '4', '5']},model:{value:(_vm.form.inspiring),callback:function ($$v) {_vm.$set(_vm.form, "inspiring", $$v)},expression:"form.inspiring"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<label class=\"block\">","</label>",[_vm._ssrNode("<div class=\"text-sm\">\n        Bahasa dan gaya penyampaian konten\n      </div> "),_c('form-select',{attrs:{"name":"language_style","error":_vm.errors.language_style,"options":['1', '2', '3', '4', '5']},model:{value:(_vm.form.language_style),callback:function ($$v) {_vm.$set(_vm.form, "language_style", $$v)},expression:"form.language_style"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<label class=\"block\">","</label>",[_vm._ssrNode("<div class=\"text-sm\">\n        Alur penyampaian konten\n      </div> "),_c('form-select',{attrs:{"name":"content_flow","error":_vm.errors.content_flow,"options":['1', '2', '3', '4', '5']},model:{value:(_vm.form.content_flow),callback:function ($$v) {_vm.$set(_vm.form, "content_flow", $$v)},expression:"form.content_flow"}})],2),_vm._ssrNode(" "),_vm._ssrNode("<label class=\"block\">","</label>",[_vm._ssrNode("<div class=\"text-sm\">\n        Tuliskan pesan untuk MiniTutor\n      </div> "),_c('form-textarea',{attrs:{"name":"message","error":_vm.errors.message},model:{value:(_vm.form.message),callback:function ($$v) {_vm.$set(_vm.form, "message", $$v)},expression:"form.message"}})],2),_vm._ssrNode(" <div class=\"block\"><label class=\"block py-2 text-sm\"><input type=\"checkbox\" name=\"sync_with_me\""+(_vm._ssrAttr("checked",Array.isArray(_vm.form.sync_with_me)?_vm._i(_vm.form.sync_with_me,null)>-1:(_vm.form.sync_with_me)))+" class=\"rounded border-gray-300 shadow\">\n        Apakah bidangmu berkaitan dengan topik diatas?\n      </label></div> "),_vm._ssrNode("<div class=\"block pt-3\">","</div>",[_c('form-button',{staticClass:"block w-24",attrs:{"loading":_vm.loading}},[_vm._v("Kirim")])],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/block/Feedback.vue?vue&type=template&id=52265492&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/Feedback.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Feedbackvue_type_script_lang_js_ = ({
  name: 'Feedback',
  props: {
    url: {
      type: String,
      required: true,
      default: ''
    }
  },

  data() {
    return {
      loading: false,
      form: {
        understand: '',
        inspiring: '',
        language_style: '',
        content_flow: '',
        message: '',
        sync_with_me: false
      },
      errors: {
        understand: '',
        inspiring: '',
        language_style: '',
        content_flow: '',
        message: '',
        sync_with_me: ''
      }
    };
  },

  methods: {
    async submit(form) {
      this.loading = true;
      this.errors = {
        understand: '',
        inspiring: '',
        language_style: '',
        content_flow: '',
        message: '',
        sync_with_me: ''
      };

      try {
        await this.$axios.$post(this.url, form);
        this.form = {
          body: ''
        };
        this.$toast.success('Feedback anda telah terkirim.');
        this.$emit('close');
      } catch (e) {
        const {
          errors,
          message
        } = this.$errorResponse(e);
        this.errors = { ...this.errors,
          ...errors
        };

        if (message) {
          this.$toast.danger(message);
        }

        if (!Object.keys(errors).length && !message) {
          this.$toast.danger(this.$errorMessage(e));
        }
      }

      this.loading = false;
    }

  }
});
// CONCATENATED MODULE: ./components/block/Feedback.vue?vue&type=script&lang=js&
 /* harmony default export */ var block_Feedbackvue_type_script_lang_js_ = (Feedbackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/block/Feedback.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  block_Feedbackvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d7f82b58"
  
)

/* harmony default export */ var Feedback = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FormSelect: __webpack_require__(83).default,FormTextarea: __webpack_require__(79).default,FormButton: __webpack_require__(76).default})


/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/Comment.vue?vue&type=template&id=1f175222&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-primary-600 p-3 mb-3 bg-white rounded border-b-4 shadow"},[_vm._ssrNode("<div class=\"text-2xl font-semibold\">"+_vm._ssrEscape("Komentar "+_vm._s(_vm.comments.length))+"</div> "),_vm._ssrNode("<div class=\"py-3\">","</div>",_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"flex mb-3\">","</div>",[_vm._ssrNode("<div class=\"pr-3\">","</div>",[_c('nuxt-link',{staticClass:"block w-10 rounded-full border",attrs:{"to":("/users/" + (comment.user.username))}},[_c('v-img',{staticClass:"block w-full rounded-full",attrs:{"src":comment.user ? comment.user.avatar : _vm.$images.avatar,"src-placeholder":_vm.$images.avatar,"alt":comment.user ? comment.user.username : null}})],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex-1 pb-3 border-b\">","</div>",[_vm._ssrNode("<div class=\"flex items-center mb-3\">","</div>",[_c('nuxt-link',{staticClass:"text-primary-600 block text-sm font-semibold leading-none capitalize",attrs:{"to":("/users/" + (comment.user.username))}},[_vm._v("\n            "+_vm._s(comment.user.name)+"\n          ")]),_vm._ssrNode(" <span class=\"block pl-1 text-xs leading-none\">"+_vm._ssrEscape("\n            "+_vm._s(_vm._f("moment")(comment.created_at,'from', 'now'))+"\n          ")+"</span>")],2),_vm._ssrNode(" <p class=\"text-sm\">"+_vm._ssrEscape("\n          "+_vm._s(comment.body)+"\n        ")+"</p>")],2)],2)}),0),_vm._ssrNode(" "),(_vm.$store.getters.auth)?_vm._ssrNode("<form class=\"pt-4\">","</form>",[_vm._ssrNode("<h3 class=\"mb-3 text-lg font-semibold\">Tulis Komentar</h3> "),_c('form-textarea',{attrs:{"error":_vm.errors.body,"placeholder":"Komentar..."},model:{value:(_vm.form.body),callback:function ($$v) {_vm.$set(_vm.form, "body", $$v)},expression:"form.body"}}),_vm._ssrNode(" "),_c('form-button',{staticClass:"w-24",attrs:{"loading":_vm.loading}},[_vm._v("Komantar")])],2):_vm._ssrNode("<div class=\"py-4\">","</div>",[_vm._ssrNode("<p class=\"mb-3 text-center\">\n      Silahkan Masuk untuk dapat mengirimkan komentar anda.\n    </p> "),_vm._ssrNode("<div class=\"text-center\">","</div>",[_c('form-button',{attrs:{"tag":"nuxt-link","to":("/login?next=" + (_vm.$route.fullPath))}},[_vm._v("\n        Masuk\n      ")])],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/block/Comment.vue?vue&type=template&id=1f175222&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/Comment.vue?vue&type=script&lang=js&
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
//
//
//
/* harmony default export */ var Commentvue_type_script_lang_js_ = ({
  props: {
    url: {
      type: String,
      required: true,
      default: ''
    },
    comments: {
      type: Array,
      deep: false,
      immediate: false,
      default: () => []
    }
  },

  data() {
    return {
      loading: false,
      form: {
        body: ''
      },
      errors: {
        body: ''
      }
    };
  },

  methods: {
    async submit(form) {
      this.loading = true;
      this.errors = {
        body: ''
      };

      try {
        await this.$axios.$post(this.url, form);
        this.form = {
          body: ''
        };
        this.$toast.success('Komentar anda telah terkirim dan akan segera ditinjau.');
      } catch (e) {
        const {
          errors,
          message
        } = this.$errorResponse(e);
        this.errors = { ...this.errors,
          ...errors
        };

        if (message) {
          this.$toast.danger(message);
        }

        if (!Object.keys(errors).length && !message) {
          this.$toast.danger(this.$errorMessage(e));
        }
      }

      this.loading = false;
    }

  }
});
// CONCATENATED MODULE: ./components/block/Comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var block_Commentvue_type_script_lang_js_ = (Commentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/block/Comment.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  block_Commentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "74e48fe0"
  
)

/* harmony default export */ var Comment = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FormTextarea: __webpack_require__(79).default,FormButton: __webpack_require__(76).default})


/***/ }),

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

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/_slug.vue?vue&type=template&id=4c4cc1e4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"p-3"},[_vm._ssrNode("<div class=\"grid relative grid-cols-1 md:grid-cols-3 md:gap-3\">","</div>",[_vm._ssrNode("<div class=\"md:col-span-2\">","</div>",[_c('block-render-post',{attrs:{"post":_vm.article}}),_vm._ssrNode(" "),(_vm.auth && !_vm.feedback)?_c('block-feedback',{attrs:{"url":("/feedback/" + (_vm.article.id))},on:{"close":function($event){_vm.feedback = true}}}):_vm._e(),_vm._ssrNode(" "),_c('block-comment',{attrs:{"url":("/comments/" + (_vm.article.id)),"comments":_vm.article.comments}})],2),_vm._ssrNode(" "),_c('block-post-side-bar',{attrs:{"user":_vm.article.user,"minitutor":_vm.article.minitutor,"lates":_vm.latesPosts}})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/articles/_slug.vue?vue&type=template&id=4c4cc1e4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/articles/_slug.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: 'ShowArticle',

  async asyncData({
    store,
    error,
    $axios,
    params
  }) {
    let data = {};

    try {
      data = await $axios.$get(`/articles/${params.slug}`);
    } catch (e) {
      return error(e);
    }

    data.feedback = false;

    if (store.getters.auth) {
      try {
        data.feedback = await $axios.$get(`/feedback/${data.article.id}`);
      } catch (e) {}
    }

    return data;
  },

  head() {
    return {
      title: this.article.title,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.article.description || ''
      }, {
        hid: 'og:title',
        name: 'og:title',
        content: this.article.title || ''
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: this.article.description || ''
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: 'article'
      }, {
        hid: 'og:url',
        name: 'og:url',
        content: `${this.$config.baseUrl}/articles/${this.article.slug}`
      }, {
        hid: 'og:image',
        name: 'og:image',
        content: this.article.hero.large
      }]
    };
  },

  computed: {
    auth() {
      return this.$store.getters.auth;
    }

  }
});
// CONCATENATED MODULE: ./pages/articles/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var articles_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/articles/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  articles_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "258f420e"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BlockRenderPost: __webpack_require__(100).default,BlockFeedback: __webpack_require__(101).default,BlockComment: __webpack_require__(102).default,BlockPostSideBar: __webpack_require__(103).default})


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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/Button.vue?vue&type=template&id=60b36a6a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,_vm._b({tag:"component",staticClass:"disabled:opacity-70 inline-flex justify-center items-center py-0 px-4 h-10 text-sm font-medium leading-none text-center rounded cursor-pointer select-none",class:_vm.light ? 'hover:bg-gray-200 bg-gray-100' : 'hover:bg-primary-700 bg-primary-600 text-white',attrs:{"disabled":_vm.loading},on:{"click":function($event){return _vm.$emit('click')}}},'component',_vm.$attrs,false),[(_vm.loading)?_c('svg-spinner',{staticClass:"w-6 h-6",attrs:{"light":""}}):_vm._t("default",function(){return [_vm._v("Button")]})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/Button.vue?vue&type=template&id=60b36a6a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/Button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
  name: 'Button',
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    loading: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/form/Button.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/form/Button.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_Buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c1984f4c"
  
)

/* harmony default export */ var Button = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SvgSpinner: __webpack_require__(75).default})


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/Textarea.vue?vue&type=template&id=7a1ba2a1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative pb-3"},[_vm._ssrNode("<textarea"+(_vm._ssrAttr("value",_vm.value))+(_vm._ssrAttrs(_vm.$attrs))+(_vm._ssrClass("block w-full border-gray-300",{ 'border-red-600' : _vm.error, 'shadow rounded': !_vm.minimal, 'text-sm rounded': _vm.minimal }))+"></textarea> "+((_vm.error)?("<span class=\"block text-xs text-red-900\">"+_vm._ssrEscape(_vm._s(_vm.error))+"</span>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/Textarea.vue?vue&type=template&id=7a1ba2a1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/Textarea.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var Textareavue_type_script_lang_js_ = ({
  name: 'Input',
  props: {
    minimal: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  },
  methods: {
    onChange(e) {
      this.$emit('input', e.target.value);
    }

  }
});
// CONCATENATED MODULE: ./components/form/Textarea.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_Textareavue_type_script_lang_js_ = (Textareavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/form/Textarea.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_Textareavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "30d28062"
  
)

/* harmony default export */ var Textarea = __webpack_exports__["default"] = (component.exports);

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

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/Select.vue?vue&type=template&id=91663ef8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative pb-3"},[_vm._ssrNode("<select"+(_vm._ssrAttr("value",_vm.value))+(_vm._ssrAttrs(_vm.$attrs))+(_vm._ssrClass("block flex-1 w-full border-gray-300",{ 'border-red-600' : _vm.error, 'shadow rounded': !_vm.minimal, 'text-sm rounded': _vm.minimal }))+">"+(_vm._ssrList((_vm.options),function(option){return ("<option>"+_vm._ssrEscape(_vm._s(option))+"</option>")}))+"</select> "+((_vm.error)?("<span class=\"block text-xs text-red-900\">"+_vm._ssrEscape(_vm._s(_vm.error))+"</span>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/form/Select.vue?vue&type=template&id=91663ef8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/form/Select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Selectvue_type_script_lang_js_ = ({
  name: 'Select',
  props: {
    options: {
      type: Array,
      default: () => []
    },
    minimal: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  },
  methods: {
    onChange(e) {
      this.$emit('input', e.target.value);
    }

  }
});
// CONCATENATED MODULE: ./components/form/Select.vue?vue&type=script&lang=js&
 /* harmony default export */ var form_Selectvue_type_script_lang_js_ = (Selectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/form/Select.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  form_Selectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2720f124"
  
)

/* harmony default export */ var Select = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/EditorjsCompiler.vue?vue&type=template&id=25952883&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.blocks),function(block,i){return _vm._ssrNode("<div>","</div>",[(block.type === 'header')?_c(("h" + (block.data.level)),{tag:"component",domProps:{"innerHTML":_vm._s(block.data.text)}}):_vm._e(),_vm._ssrNode(" "+((block.type === 'paragraph')?("<p>"+(_vm._s(block.data.text))+"</p>"):"<!---->")+" "+((block.type === 'delimiter')?("<hr>"):"<!---->")+" "),(block.type === 'list')?_c(block.data.style === 'ordered' ? 'ol' : 'ul',{tag:"component"},_vm._l((block.data.items),function(item,x){return _c('li',{key:x,domProps:{"innerHTML":_vm._s(item)}})}),0):_vm._e(),_vm._ssrNode(" "+((block.type === 'table')?("<table><tbody>"+(_vm._ssrList((block.data.content),function(row,ix){return ("<tr>"+(_vm._ssrList((row),function(item,x){return ("<td>"+(_vm._s(item))+"</td>")}))+"</tr>")}))+"</tbody></table>"):"<!---->")+" "+((block.type === 'quote')?("<figure><blockquote>"+(_vm._s(block.data.text))+"</blockquote> <figcaption class=\"text-right\">"+(_vm._s(block.data.caption))+"</figcaption></figure>"):"<!---->")+" "+((block.type === 'code')?("<pre>"+_vm._ssrEscape("      "+_vm._s(block.data.code)+"\n    ")+"</pre>"):"<!---->")+" "),(block.type === 'image')?_vm._ssrNode("<figure>","</figure>",[_c('v-img',{staticClass:"block w-full",attrs:{"alt":block.data.caption,"src":block.data.file.url,"src-placeholder":block.data.file.url + '.dot.jpeg'}}),_vm._ssrNode(" <figcaption class=\"italic text-center\">"+(_vm._s(block.data.caption))+"</figcaption>")],2):_vm._e()],2)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/block/EditorjsCompiler.vue?vue&type=template&id=25952883&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/block/EditorjsCompiler.vue?vue&type=script&lang=js&
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
//
//
//
/* harmony default export */ var EditorjsCompilervue_type_script_lang_js_ = ({
  name: 'EditorjsCompiler',
  props: {
    editor: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    blocks() {
      return this.editor ? this.editor.blocks : [];
    }

  }
});
// CONCATENATED MODULE: ./components/block/EditorjsCompiler.vue?vue&type=script&lang=js&
 /* harmony default export */ var block_EditorjsCompilervue_type_script_lang_js_ = (EditorjsCompilervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/block/EditorjsCompiler.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  block_EditorjsCompilervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "74d48204"
  
)

/* harmony default export */ var EditorjsCompiler = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map