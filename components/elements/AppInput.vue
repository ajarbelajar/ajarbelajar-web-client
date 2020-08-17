<template>
  <div class="form-group">
    <label v-if="label" :for="inputId" class="m-0">{{ placeholder }}</label>
    <textarea
      v-if="textarea"
      :id="inputId"
      v-bind="$attrs"
      :value="value"
      class="form-control"
      :class="{ 'is-invalid': !!error }"
      :placeholder="placeholder"
      @input="handleInput"
    ></textarea>
    <select
      v-else-if="select.length"
      :id="inputId"
      v-bind="$attrs"
      :value="value"
      :type="type"
      class="form-control"
      :class="{ 'is-invalid': !!error }"
      @input="handleInput"
    >
      <option value="" disabled>{{ placeholder }}</option>
      <option v-for="i in select" :key="i">{{ i }}</option>
    </select>
    <input
      v-else
      :id="inputId"
      v-bind="$attrs"
      :value="value"
      :type="type"
      class="form-control"
      :class="{ 'is-invalid': !!error }"
      :placeholder="placeholder"
      @input="handleInput"
    />
    <div v-if="!!error" class="invalid-feedback">
      <strong>{{ error }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Placeholder',
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: Boolean,
      default: true,
    },
    textarea: {
      type: Boolean,
      default: false,
    },
    select: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    const id = Math.random().toString(36).substring(7)
    return {
      id,
    }
  },
  computed: {
    inputId() {
      return this.type + '_' + this.id
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
  },
}
</script>
