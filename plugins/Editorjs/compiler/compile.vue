<template>
  <div>
    <!-- eslint-disable vue/no-v-html -->
    <div v-for="(block, i) in blocks" :key="i">
      <component
        :is="`h${block.data.level}`"
        v-if="block.type === 'header'"
        v-html="block.data.text"
      >
      </component>

      <p v-if="block.type === 'paragraph'" v-html="block.data.text"></p>

      <hr v-if="block.type === 'delimiter'" />

      <component
        :is="block.data.style === 'ordered' ? 'ol' : 'ul'"
        v-if="block.type === 'list'"
      >
        <li v-for="(item, x) in block.data.items" :key="x" v-html="item"></li>
      </component>

      <table v-if="block.type === 'table'" class="table table-bordered">
        <tbody>
          <tr v-for="(row, ix) in block.data.content" :key="ix">
            <td v-for="(item, x) in row" :key="x" v-html="item"></td>
          </tr>
        </tbody>
      </table>

      <blockquote
        v-if="block.type === 'quote'"
        class="blockquote"
        :class="{ 'blockquote-reverse': block.data.alignment !== 'left' }"
      >
        <span v-html="block.data.text"></span>
        <footer
          v-if="block.data.caption"
          class="blockquote-footer"
          v-html="block.data.caption"
        ></footer>
      </blockquote>

      <ul v-if="block.type === 'checklist'" class="list-group">
        <li
          v-for="(item, x) in block.data.items"
          :key="x"
          class="list-group-item"
        >
          <i v-if="item.checked" class="icon wb-check-circle text-primary"></i>
          <i v-else class="icon wb-minus-circle"></i>
          <span v-html="item.text"></span>
        </li>
      </ul>

      <div
        v-if="block.type === 'warning'"
        class="alert alert-alt alert-warning alert-dismissible"
      >
        <h4 v-html="block.data.title"></h4>
        <p v-html="block.data.message"></p>
      </div>

      <pre v-if="block.type === 'code'" class="bg-light">
        {{ block.data.code }}
      </pre>

      <div
        v-if="block.type === 'embed'"
        class="embed-responsive embed-responsive-16by9"
      >
        <iframe :src="block.data.embed" class="embed-responsive-item"></iframe>
      </div>

      <figure v-if="block.type === 'image'">
        <span class="v-lazy-image-wrap">
          <v-lazy-image
            class="img-fluid img-rounded"
            :alt="block.data.caption"
            :src="block.data.file.url"
            :src-placeholder="block.data.file.url + '.dot.jpeg'"
          >
          </v-lazy-image>
        </span>
        <figcaption
          class="text-center"
          v-html="block.data.caption"
        ></figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editor: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    blocks() {
      return this.editor.blocks || []
    },
  },
}
</script>

<style lang="scss" scoped>
.v-lazy-image-wrap {
  display: block;
  overflow: hidden;
  border-radius: $border-radius;
}
.v-lazy-image {
  filter: blur(10px);
  transition: filter 250ms ease-out;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
