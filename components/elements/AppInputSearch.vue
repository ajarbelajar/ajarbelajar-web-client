<template>
  <div class="container-fluid">
    <div class="app-input-search">
      <input
        type="search"
        class="form-control"
        name="search"
        :placeholder="placeholder"
        :value="value"
        @input="handleInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Cari...',
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>

<style lang="scss">
.app-input-search {
  display: block;
  margin-bottom: $spacer/2;
  border-radius: 4px;
  box-shadow: $box-shadow-sm;
  background-color: $white;
  padding: 5px;
}
</style>
