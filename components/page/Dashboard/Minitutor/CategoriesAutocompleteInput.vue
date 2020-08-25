<template>
  <div class="form-group category-autocomplete">
    <label>Kategori</label>
    <input
      id="autoComplete"
      ref="input"
      placeholder="Kategori"
      type="text"
      class="form-control"
      :value="value"
      @input="handleInput"
    />
    <div v-if="error" class="invalid-feedback">
      <strong>{{ error }}</strong>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      autocomplete: null,
    }
  },
  computed: {
    ...mapGetters('category', ['categories']),
  },
  mounted() {
    const Autocomplete = require('@tarekraafat/autocomplete.js')
    this.autocomplete = new Autocomplete({
      data: {
        src: () => {
          return this.categories
        },
        key: ['name'],
        cache: false,
      },
      selector: '#autoComplete',
      threshold: 0,
      debounce: 0,
      searchEngine: 'strict',
      highlight: true,
      maxResults: 5,
      resultsList: {
        render: true,
        destination: this.$refs.input,
        position: 'afterend',
        element: 'ul',
      },
      resultItem: {
        content: (data, source) => {
          source.innerHTML = data.match
        },
        element: 'li',
      },
      onSelection: (feedback) => {
        const selection = feedback.selection.value.name
        this.$emit('input', selection)
        setTimeout(() => {
          this.$refs.input.focus()
        }, 50)
      },
    })
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>
<style lang="scss">
.category-autocomplete {
  position: relative;

  .form-control {
    &:focus + ul:not(:empty) {
      display: block;
    }
  }
  ul {
    display: none;
    position: absolute;
    z-index: 5;
    padding: ($spacer / 3) 0;
    margin: 0;
    width: 100%;
    box-shadow: $box-shadow;
    list-style: none;
    border-radius: $border-radius;
    background-color: $white;
    li {
      display: block;
      padding: ($spacer / 3) $spacer;
      line-height: 1;
      font-size: 14px;
      color: $gray-400;
      font-weight: $font-weight-medium;
      cursor: pointer;

      &:hover {
        background-color: $gray-100;
      }

      span {
        color: $gray-800;
      }
    }
  }
}
</style>
