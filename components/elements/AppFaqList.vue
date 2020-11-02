<template>
  <div
    v-click-outside="handleClose"
    class="panel"
    :class="{ 'border-0 shadow-0': !open, 'shadow-sm': open }"
  >
    <div class="panel-heading">
      <h4
        class="panel-title font-size-16"
        style="padding-right: 60px;"
        @click="open = !open"
      >
        {{ faq.q }}
      </h4>
      <div class="panel-actions">
        <button
          class="btn btn-outline-default btn-icon btn-sm"
          @click="open = !open"
        >
          <i class="icon" :class="{ 'wb-plus': !open, 'wb-minus': open }"></i>
        </button>
      </div>
    </div>
    <div class="panel-body" :class="{ 'd-none': !open }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p v-html="faq.a"></p>
    </div>
  </div>
</template>

<script>
export default {
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
