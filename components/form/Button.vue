<template>
  <component :is="tag" v-bind="$attrs" :class="loading && 'opacity-75'" :disabled="loading" class="btn-action hover:bg-primary-700 btn-action bg-primary-600 text-white inline-flex justify-center items-center py-0 px-4 h-10 text-sm font-medium leading-none text-center rounded cursor-pointer select-none rounded-lg" @click="$emit('click')">
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
    }
  }
}
</script>

<style lang="css" scoped>
  .btn-action:disabled {
    @apply bg-primary-600 cursor-wait;
  }
</style>
