<template>
  <div>
    <!-- eslint-disable vue/no-v-html -->
    <div v-for="(block, i) in blocks" :key="i">
      <component :is="`h${block.data.level}`" v-if="block.type === 'header'" v-html="block.data.text" />
      <p v-if="block.type === 'paragraph'" v-html="block.data.text"></p>

      <hr v-if="block.type === 'delimiter'" />

      <component
        :is="block.data.style === 'ordered' ? 'ol' : 'ul'"
        v-if="block.type === 'list'"
      >
        <li v-for="(item, x) in block.data.items" :key="x" v-html="item"></li>
      </component>

      <table v-if="block.type === 'table'">
        <tbody>
          <tr v-for="(row, ix) in block.data.content" :key="ix">
            <td v-for="(item, x) in row" :key="x" v-html="item"></td>
          </tr>
        </tbody>
      </table>

      <figure v-if="block.type === 'quote'">
          <blockquote v-html="block.data.text" >
              <p v-html="block.data.text" />
          </blockquote>
          <figcaption class="text-right" v-html="block.data.caption"></figcaption>
      </figure>

      <pre v-if="block.type === 'code'">
        {{ block.data.code }}
      </pre>

      <figure v-if="block.type === 'image'">
        <v-img
          :alt="block.data.caption"
          :src="block.data.file.url"
          :src-placeholder="block.data.file.url + '.dot.jpeg'"
          class="block w-full"
        >
        </v-img>
        <figcaption
          class="italic text-center"
          v-html="block.data.caption"
        ></figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditorjsCompiler',
  props: {
    editor: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    blocks() {
      return this.editor ? this.editor.blocks : []
    },
  },
}
</script>
