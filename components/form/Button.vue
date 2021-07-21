<template>
  <component :is="tag" v-bind="$attrs" :class="light ? 'hover:bg-gray-200 bg-gray-100' : 'hover:bg-primary-700 bg-primary-600 text-white'" :disabled="loading" class="disabled:opacity-70 inline-flex justify-center items-center py-0 px-4 h-10 text-sm font-medium leading-none text-center rounded-lg cursor-pointer select-none" @click="$emit('click')">
    <svg-spinner v-if="loading" light class="w-6 h-6"/>
    <slot v-else>Button</slot>
  </component>
</template>

<script>
export default {
  name: 'Button',
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    loading: {
      type:  Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    }
  }
}
</script>
