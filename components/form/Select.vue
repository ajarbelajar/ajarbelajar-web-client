<template>
  <div class="relative pb-3">
    <select :value="value" class="block flex-1 w-full border-gray-300" v-bind="$attrs" :class="{ 'border-red-600' : error, 'shadow rounded': !minimal, 'text-sm rounded': minimal }" @change="onChange">
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
    <span v-if="error" class="block text-xs text-red-900">{{ error }}</span>
  </div>
</template>

<script>
export default {
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
      this.$emit('input', e.target.value)
    }
  }
}
</script>
