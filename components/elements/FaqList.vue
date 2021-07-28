<template>
  <div v-click-outside="handleClose" class="mb-3 bg-white rounded" :class="{ 'shadow': !open, 'shadow-lg border-b-4 border-primary-600': open }">
    <div class="flex p-3" @click="open = !open">
      <h4 class="flex-1 pr-3 font-semibold text-gray-900">
        {{ faq.q }}
      </h4>
      <button class="text-primary-600 flex justify-center items-center w-7 h-7 bg-gray-100 rounded border hover:shadow">
        <i class="ft" :class="{ 'ft-plus-circle': !open, 'ft-minus-circle': open }"></i>
      </button>
    </div>
    <div class="p-3 border-t" :class="{ 'hidden': !open }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="text-sm" v-html="faq.a"></p>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'FaqList',
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    faq: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    handleClose() {
      this.open = false
    },
  },
}
</script>
