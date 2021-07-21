<template>
  <div class="block py-32 w-full text-center rounded-lg border">
    <p class="mb-2 text-2xl font-semibold text-gray-500">{{ text }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Blank',
  props: {
    text: {
      type: String,
      default: 'Tidak ada kontent'
    }
  }
}
</script>
