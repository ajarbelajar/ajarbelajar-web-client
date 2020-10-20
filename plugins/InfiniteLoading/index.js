import Vue from 'vue'
import InfiniteLoading from 'vue-infinite-loading'
import NoMore from './NoMore'
import Spinner from './Spinner'
import OnError from './Error'

Vue.use(InfiniteLoading, {
  slots: {
    noMore: NoMore,
    spinner: Spinner,
    error: OnError,
  },
})
