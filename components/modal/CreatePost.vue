<template>
  <div class="flex fixed inset-0 z-50 justify-center bg-black bg-opacity-50">
    <div class="overflow-y-auto relative p-3 w-full sm:py-14 sm:max-w-lg">
      <form v-click-outside="onClickOutside" method="POST" class="block bg-white rounded shadow-lg" @submit.prevent="submit(form)" >
        <div class="flex items-center p-4 border-b">
          <h3 class="leading-0 flex-1 text-xl font-semibold">Buat {{ type === 'Video' ? 'video' : 'artikel' }}</h3>
          <div class="pl-3">
            <button type="button" class="flex justify-center items-center p-0 w-8 h-8 text-lg font-semibold text-red-600 bg-gray-100 rounded-full hover:text-white hover:bg-red-600" @click.prevent="$emit('close')">
              <i class="ft-x"></i>
            </button>
          </div>
        </div>
        <div class="p-4 pb-6">
          <div class="block">
            <div class="text-sm">Judul</div>
            <form-input v-model="form.title" name="title" :error="errors.title" />
          </div>
          <div class="block">
            <div class="text-sm">Deskripsi</div>
            <form-textarea v-model="form.description" name="description" :error="errors.description"/>
          </div>
          <div class="block pt-3">
            <form-button class="block w-20" :loading="loading">Buat</form-button>
            <form-button class="block ml-3 w-20" type="button" light @click="$emit('close')">Batal</form-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
const initialData = {
  title: '',
  description: ''
}
export default {
  name: 'CreatePostModal',
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    type: {
      type: String,
      default: 'Video'
    }
  },
  data() {
    return {
      errors: {...initialData},
      form: {...initialData},
      loading: false
    }
  },
  methods: {
    onClickOutside() {
      this.$emit('close')
    },
    async submit(data) {
      this.loading = true
      const url = `minitutor/request-${this.type.toLowerCase()}s`
      try {
        const { id } = await this.$axios.$post(url, data)
        this.$router.push(`/dashboard/minitutor/${this.type.toLowerCase()}s/${id}`)
      } catch (e) {
        const { errors, message } = this.$errorResponse(e)
        this.errors = {
          ...initialData,
          ...errors,
        }
        if (message) {
          this.$toast.danger(message)
        }
        if (!Object.keys(errors).length && !message) {
          this.$toast.danger(this.$errorMessage(e))
        }
        this.loading = false
      }
    }
  }
}
</script>
