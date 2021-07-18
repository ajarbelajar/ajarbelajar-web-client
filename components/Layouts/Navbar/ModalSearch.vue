<template>
  <div class="form-search box" :class="queryResult ? 'has-background-white-bis' : ''">
    <div class="field m-0">
      <div class="control has-icons-right has-icons-left is-large is-clearfix" :class="loading && 'is-loading'">
        <input ref="input" v-model.trim="input" type="text" placeholder="Apa yang anda cari?" class="input is-large" @focus="focus = true" @blur="focus = false">
        <span class="icon is-left" :class="focus && 'has-text-primary'"><i class="mdi mdi-magnify"></i></span>
      </div>
    </div>
    <div v-if="queryResult || logging" class="search-info has-text-weight-bold">
      {{ logging || 'Hasil dari :'}} <span v-if="!logging">{{ queryResult}}</span>
    </div>
    <div v-if="queryResult && results.length" class="search-results">
      <a v-for="(item, i) in results" :key="i" href="#" class="search-result">
        <div class="result-wrapper">
          <div class="result-thumb">
            <img
              :src="item.img || $images.hero.small"
              :alt="item.title"
            />
          </div>
          <div class="result-info">
            <h4 class="result-title" v-html="item._highlightResult.title.value" />
            <div class="result-author">
              by : <span class="has-text-weight-bold" v-html="item._highlightResult.name.value"></span>
            </div>
          </div>
          <div class="result-type">
            <span class="has-text-weight-bold" v-html="item._highlightResult.type.value"></span>
          </div>
        </div>
      </a>
    </div>
    <div v-if="queryResult && !results.length" class="search-empty is-flex">
      <h3 class="m-auto has-text-centered is-size-4 has-text-weight-light">Tidak ada hasil pencarian dari <br> <span class="is-size-2 has-text-weight-normall has-text-primary">{{ queryResult }}</span></h3>
    </div>
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite';

export default {
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
    }
  },
  watch: {
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
    async search(input) {
      this.loading = true
      const client = algoliasearch(this.$nuxt.$config.algoliaAppId, this.$nuxt.$config.algoliaApiKey);
      try {
        const res = await client.initIndex(this.$nuxt.$config.algoliaIndexName).search(input, { highlightPreTag: '<strong class="has-text-primary">', highlightPostTag: '</strong>'})
        this.results = res.hits || []
        this.queryResult = res.query
      } catch (e) {
        // console.log(e)
      }
      this.loading = false
    }
  }
};
</script>

<style lang="scss" scoped>
.form-search {
  height: calc(100vh - 160px);
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  overflow: hidden;
  .control {
    border: none;
    .input {
      height: 64px;
      border: none;
      box-shadow: none;
      font-size: 18px;
      padding: 0 64px;
    }
    .icon {
      height: 64px;
      width: 64px;
      padding: 0;
      i {
        font-size: 30px;
      }
    }
    &.is-loading::after {
      border-right-color: $primary;
      border-top-color: $primary;
      right: 20px;
    }
  }



  .search-info {
    padding: 0 20px;
    line-height: 2;
    background-color: $grey-lighter;
    font-size: 12px;
    color: $grey;

    span {
      color: $grey-darker;
    }
  }

  .search-results {
    flex: 1;
    overflow-y: auto;
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

    .search-result {
      display: block;
      padding: 0 20px;
      text-decoration: none;
      color: $grey-dark;
      &:hover {
        background-color: $white;
      }

      .result-wrapper {
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid $grey-lighter;

        .result-thumb {
          margin: auto 0;
          width: 50px;
          img {
            display: block;
            width: 100%;
            border-radius: 3px;
          }
        }
        .result-info {
          flex: 1;
          margin: auto 0;
          padding: 0 10px;
          .result-title {
            font-size: 16px;
            line-height: 18px;
            margin: 0;
            letter-spacing: 0.5px;
          }
          .result-author {
            color: $grey-light;
            letter-spacing: 0.5px;
            font-size: 12px;
            span {
              color: $grey;
            }
          }
        }
        .result-type {
          margin: auto;
          color: $grey-light;
          letter-spacing: 0.5px;
          font-size: 13px;
        }
      }
    }
  }

  .search-empty {
    flex: 1;

  }
}
</style>
