<template>
  <div class="fixed inset-0 z-50 bg-black bg-opacity-50">
    <div class="flex relative justify-center lg:container lg:py-14">
      <div v-click-outside="onClickOutside" class="flex overflow-hidden relative z-10 flex-col w-full max-w-5xl max-h-screen bg-white shadow-xl lg:max-h-96 lg:rounded-lg">
        <div class="min-h-16 flex relative w-full bg-white">
          <div :class="focus ? 'text-primary-600': 'text-gray-400'" class="flex absolute justify-center items-center px-4 h-full text-xl leading-none">
            <i class="ft ft-search"></i>
          </div>
          <input ref="input" v-model.trim="input" class="block flex-1 pr-3 pl-12 w-full h-16 text-xl font-semibold leading-none placeholder-gray-300 text-gray-500 bg-transparent transition-colors outline-none focus:text-gray-700" placeholder="Apa yang anda cari?" @focus="focus = true" @blur="focus = false" />
          <button v-if="input" class="flex justify-center items-center my-auto w-12 h-full text-xl leading-none transition-colors cursor-pointer hover:bg-gray-50" @click="reset">
            <i class="ft ft-x"></i>
          </button>
          <div class="my-auto h-3/5 border-l border-gray-200"></div>
          <button class="flex justify-center items-center px-4 my-auto h-full text-sm font-semibold leading-none text-red-600 transition-colors cursor-pointer hover:bg-gray-50" @click="$emit('close')">Close</button>
        </div>

        <p v-if="logging &&  input.length > 1"  class="leading-1 py-1 px-4 text-sm text-gray-500 bg-gray-200">
          {{ logging }}
        </p>
        <p v-else-if="queryResult &&  input.length > 1 && results.length"  class="leading-1 py-1 px-4 text-sm text-gray-500 bg-gray-200">
          Hasil dari : <span class="font-semibold text-gray-700">{{ queryResult }}</span>
        </p>

        <div v-if="results.length" class="custom-chrome-scrollbar flex overflow-y-auto flex-col max-h-full bg-white">
          <nuxt-link v-for="(item, i) in results" :key="i" :to="`/${item.type}s/${item.slug}`" class="group block px-4 bg-gray-100 cursor-pointer hover:bg-white">
            <div class="last:border-b-5 flex py-4 border-b">
              <div class="flex items-center">
                <div class="block">
                  <v-img :src="item.hero || $images.hero.small" :src-placeholder="$images.hero.small" :alt="item.title" class="h-7 rounded" />
                </div>
              </div>
              <div class="flex flex-col flex-1 justify-center px-3">
                <h3 class="font-semibold text-gray-700" v-html="item._highlightResult.title.value" />
                <p class="flex items-center p-0 m-0 mt-2 text-xs font-semibold">
                  <span class="block pr-1 leading-none text-gray-500">by</span>
                  <span class="block leading-none text-gray-700" v-html="item._highlightResult.name.value" />
                </p>
              </div>
              <div class="flex items-center">
                <span class="text-sm text-gray-500" v-html="item._highlightResult.type.value" />
              </div>
            </div>
          </nuxt-link>
        </div>

        <div v-if="queryResult && !results.length && input.length > 1" class="first:block flex overflow-y-auto flex-col max-h-full bg-gray-100">
          <div class="py-16 text-center">
            <p class="text-gray-700">TIDAK ADA HASIL DARI</p>
            <h3 class="text-primary-600 text-2xl font-semibold">{{ queryResult }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite'
import vClickOutside from 'v-click-outside'

export default {
  name: "SearchModal",
  directives: {
    clickOutside: vClickOutside.directive
  },
    data() {
    return {
      focus: false,
      input: '',
      loading: false,
      results: [],
      queryResult: '',
      typing: false,
      typingTimeout: null
    }
  },
  computed: {
    empty() {
      return !this.input
    },
    logging() {
      if(this.typing) {
        return 'Sedang mengetik...'
      }
      if(this.loading) {
        return 'Sedang mencari...'
      }
      return ''
    },
    searchResults() {
      if(this.input > 1) {
        return this.results
      }
      return []
    }
  },
  watch: {
    $route() {
      this.$emit('close')
    },
    input(val) {
      if(val.length > 1) {
        this.typing = true
        if (this.typingTimeout) {
          clearTimeout(this.typingTimeout)
        }
        this.typingTimeout = setTimeout(() => {
          this.typing = false
        }, 1000)
      }
    },
    typing(val) {
      if(!val && this.input.length > 1) {
        this.search(this.input)
      }
    }
  },
  mounted() {
    this.$refs.input.focus()
  },
  methods: {
    onClickOutside() {
      this.$emit('close')
    },
    reset() {
      this.input = ''
      this.results = []
      this.queryResult = ''
    },
    async search(input) {
      this.loading = true
      const client = algoliasearch(this.$nuxt.$config.algoliaAppId, this.$nuxt.$config.algoliaApiKey);
      try {
        const res = await client.initIndex(this.$nuxt.$config.algoliaIndexName).search(input, { highlightPreTag: '<span class="bg-yellow-200">', highlightPostTag: '</span>' })
        this.results = res.hits || []
        this.queryResult = res.query
      } catch (e) {
        // console.log(e)
      }
      this.loading = false
    }
  },
}
</script>

<style lang="scss">
.custom-chrome-scrollbar {
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #ddd;
    border-radius: 10px;
  }
}
</style>
