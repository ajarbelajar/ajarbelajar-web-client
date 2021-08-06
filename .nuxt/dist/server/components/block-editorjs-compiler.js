exports.ids = [3];
exports.modules = {

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
//# sourceMappingURL=block-editorjs-compiler.js.map