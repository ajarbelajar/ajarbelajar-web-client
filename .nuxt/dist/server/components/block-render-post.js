exports.ids = [8,3,12,21,37];
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
//# sourceMappingURL=block-render-post.js.map