<template>
  <div class="relative pb-3">
    <textarea :value="value" class="block w-full border-gray-300" v-bind="$attrs" :class="{ 'border-red-600' : error, 'shadow rounded': !minimal, 'text-sm rounded': minimal }" @change="onChange"></textarea>
    <span v-if="error" class="block text-xs text-red-900">{{ error }}</span>
  </div>
</template>

<script>
export default {
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
      this.$emit('input', e.target.value)
    }
  }
}
</script>
