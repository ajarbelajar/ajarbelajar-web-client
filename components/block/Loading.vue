<template>
  <div class="flex absolute inset-0 flex-col justify-center items-center" :class="variant">
    <svg-spinner :width="size + 'px'" :height="size + 'px'" class="block" />
    <slot />
  </div>
</template>
<script>
export default {
  name: 'Loading',
  props: {
    size: {
      type: Number,
      default: 46
    },
    variant: {
      type: String,
      default: 'bg-gray-900 bg-opacity-50'
    }
  }
}
</script>
