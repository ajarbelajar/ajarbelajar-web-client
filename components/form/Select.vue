<template>
  <div class="relative pb-3">
    <select :value="value" class="block flex-1 w-full rounded-lg border-gray-300 shadow" v-bind="$attrs" :class="{ 'border-red-600' : error }" @change="onChange">
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
