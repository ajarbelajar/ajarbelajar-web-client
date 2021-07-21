<template>
  <div ref="editorjs"></div>
</template>

<script>
import EditorJS from '@editorjs/editorjs'
import Image from '@editorjs/image'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Checklist from '@editorjs/checklist'
import Quote from '@editorjs/quote'
import Warning from '@editorjs/warning'
import Marker from '@editorjs/marker'
import CodeTool from '@editorjs/code'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import LinkTool from '@editorjs/link'
import Embed from '@editorjs/embed'
import Table from 'editorjs-table'
import FormData from 'form-data'

export default {
  name: 'EditorJs',
  props: {
    value: {
      type: String,
      default: '',
    },
    uploadUrl: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      editor: null,
      holder: null,
    }
  },
  mounted() {
    const self = this
    this.holder = this.$refs.editorjs
    this.body = this.value ? JSON.parse(this.value) : {}
    this.editor = new EditorJS({
      holder: this.holder,
      autofocus: true,
      minHeight: 300,
      tools: {
        image: {
          class: Image,
          config: {
            uploader: {
              uploadByFile(file) {
                const data = new FormData()
                data.append('file', file)
                const url = self.uploadUrl
                return self.$axios.$post(url, data)
              },
            },
          },
        },
        header: {
          class: Header,
          inlineToolbar: ['link'],
          config: {
            placeholder: 'Header',
          },
          shortcut: 'CMD+SHIFT+H',
        },
        list: {
          class: List,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+L',
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          config: {
            quotePlaceholder: 'Enter a quote',
            captionPlaceholder: "Quote's author",
          },
          shortcut: 'CMD+SHIFT+O',
        },
        warning: Warning,
        marker: {
          class: Marker,
          shortcut: 'CMD+SHIFT+M',
        },
        code: {
          class: CodeTool,
          shortcut: 'CMD+SHIFT+C',
        },
        delimiter: Delimiter,
        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+C',
        },
        linkTool: LinkTool,
        embed: Embed,
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
          shortcut: 'CMD+ALT+T',
        },
      },
      data: self.value ? JSON.parse(self.value) : '',
      async onChange() {
        try {
          self.$emit('input', JSON.stringify(await self.editor.save()))
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log('Editor.js error', e)
        }
      },
      i18n: {
        messages: {
          toolNames: {},
        },
      },
    })
  },
  destroyed() {
    if (this.editor) {
      this.editor.destroy()
    }
  },
}
</script>
