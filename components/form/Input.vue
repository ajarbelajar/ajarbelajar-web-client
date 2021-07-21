<template>
  <div class="relative pb-3">
    <input :value="value" :type="type" :class="{ 'border-red-600' : error, 'shadow rounded-lg': !minimal, 'text-sm rounded': minimal }"  class="block flex-1 w-full border-gray-300" v-bind="$attrs"  @change="onChange" />
    <button v-if="password" type="button" class="flex absolute top-0 right-0 justify-center items-center w-10 h-10 cursor-pointer" @click="showPassword = !showPassword">
      <i class="ft" :class="showPassword ? 'ft-eye-off' : 'ft-eye'" />
    </button>
    <span v-if="error" class="block text-xs text-red-900">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    password: {
      type: Boolean,
      default: false
    },
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
  data() {
    return {
      showPassword: false
    }
  },
  computed: {
    type() {
      if(this.showPassword && this.password) {
        return 'text'
      }
      if(this.password) {
        return 'password'
      }
      return 'text'
    }
  },
  methods: {
    onChange(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
