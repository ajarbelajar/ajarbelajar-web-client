<template>
  <div class="relative pb-3">
    <vue-simple-suggest
      class="auto-suggest"
      :class="{ error: !!error, minimal }"
      type="text"
      :value="value || ''"
      :list="categories"
      :filter-by-query="true"
      :max-suggestions="5"
      @input="onChange"
    />
    <span v-if="error" class="block text-xs text-red-900">{{ error }}</span>
  </div>
</template>

<script>
import VueSimpleSuggest from 'vue-simple-suggest'

export default {
  name: 'CategorySuggest',
  components: {
    VueSimpleSuggest
  },
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
  computed: {
    categories() {
      return this.$store.getters.categories.map(el => el.name)
    }
  },
  methods: {
    onChange(e) {
      this.$emit('input', e)
    }
  }
}
</script>

<style lang="css">
.auto-suggest {
  @apply relative;
}

.auto-suggest:not(.minimal) input {
  @apply block flex-1 w-full rounded-lg border-gray-300 shadow;
}

.auto-suggest.minimal input {
  @apply block flex-1 w-full rounded border-gray-300 text-sm;
}

.error.auto-suggest input {
  @apply border-red-600;
}

.auto-suggest .suggestions {
  top: calc(100% + 1px);
  @apply absolute z-10 opacity-100 left-0 right-0 bg-white rounded-lg overflow-hidden shadow-lg py-1;
}

.auto-suggest .suggestions .suggest-item {
  @apply cursor-pointer select-none;
}

.auto-suggest .suggestions .suggest-item,
.auto-suggest .suggestions .misc-item {
  @apply px-3 py-2 leading-none text-xs;
}

.auto-suggest .suggestions .suggest-item.hover {
  @apply bg-primary-100;
}

.auto-suggest .suggestions .suggest-item.selected {
  @apply bg-primary-600 text-white;
}
</style>
