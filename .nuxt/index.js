import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_49c1bcd6 from 'nuxt_plugin_plugin_49c1bcd6' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_workbox_9552d758 from 'nuxt_plugin_workbox_9552d758' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_7a3c1658 from 'nuxt_plugin_metaplugin_7a3c1658' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_70eccb70 from 'nuxt_plugin_iconplugin_70eccb70' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_0316e590 from 'nuxt_plugin_axios_0316e590' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_googleanalytics_0bc4d7ee from 'nuxt_plugin_googleanalytics_0bc4d7ee' // Source: .\\google-analytics.js (mode: 'client')
import nuxt_plugin_Moment_4bad8121 from 'nuxt_plugin_Moment_4bad8121' // Source: ..\\plugins\\Moment.js (mode: 'all')
import nuxt_plugin_Toast_b6446ff4 from 'nuxt_plugin_Toast_b6446ff4' // Source: ..\\plugins\\Toast.js (mode: 'client')
import nuxt_plugin_Editorjs_567b310c from 'nuxt_plugin_Editorjs_567b310c' // Source: ..\\plugins\\Editorjs (mode: 'client')
import nuxt_plugin_Axios_4ea50952 from 'nuxt_plugin_Axios_4ea50952' // Source: ..\\plugins\\Axios.js (mode: 'all')
import nuxt_plugin_ApiErrorResponse_5c054c5c from 'nuxt_plugin_ApiErrorResponse_5c054c5c' // Source: ..\\plugins\\ApiErrorResponse.js (mode: 'all')
import nuxt_plugin_ScreenSize_2b000f18 from 'nuxt_plugin_ScreenSize_2b000f18' // Source: ..\\plugins\\ScreenSize.js (mode: 'all')
import nuxt_plugin_Sidebar_a463859e from 'nuxt_plugin_Sidebar_a463859e' // Source: ..\\plugins\\Sidebar.js (mode: 'all')
import nuxt_plugin_Image_78970f5c from 'nuxt_plugin_Image_78970f5c' // Source: ..\\plugins\\Image.js (mode: 'all')
import nuxt_plugin_InfiniteLoading_193c5b9c from 'nuxt_plugin_InfiniteLoading_193c5b9c' // Source: ..\\plugins\\InfiniteLoading (mode: 'client')
import nuxt_plugin_StarRating_6980baa5 from 'nuxt_plugin_StarRating_6980baa5' // Source: ..\\plugins\\StarRating (mode: 'client')
import nuxt_plugin_libnuxtclientinitpluginclientf758f1a2_6e925319 from 'nuxt_plugin_libnuxtclientinitpluginclientf758f1a2_6e925319' // Source: .\\lib.nuxt-client-init.plugin.client.f758f1a2.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"AjarBelajar","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"format-detection","content":"telephone=no"},{"hid":"description","name":"description","content":"AjarBelajar diisi oleh konten dari MiniTutor dengan berbagai macam latar belakang. Ada banyak bidang ilmu dan topik bahasan yang bisa disimak."},{"hid":"og:title","name":"og:title","content":"AjarBelajar"},{"hid":"og:description","name":"og:description","content":"AjarBelajar diisi oleh konten dari MiniTutor dengan berbagai macam latar belakang. Ada banyak bidang ilmu dan topik bahasan yang bisa disimak."}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_49c1bcd6 === 'function') {
    await nuxt_plugin_plugin_49c1bcd6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_9552d758 === 'function') {
    await nuxt_plugin_workbox_9552d758(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_7a3c1658 === 'function') {
    await nuxt_plugin_metaplugin_7a3c1658(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_70eccb70 === 'function') {
    await nuxt_plugin_iconplugin_70eccb70(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_0316e590 === 'function') {
    await nuxt_plugin_axios_0316e590(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_0bc4d7ee === 'function') {
    await nuxt_plugin_googleanalytics_0bc4d7ee(app.context, inject)
  }

  if (typeof nuxt_plugin_Moment_4bad8121 === 'function') {
    await nuxt_plugin_Moment_4bad8121(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_Toast_b6446ff4 === 'function') {
    await nuxt_plugin_Toast_b6446ff4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_Editorjs_567b310c === 'function') {
    await nuxt_plugin_Editorjs_567b310c(app.context, inject)
  }

  if (typeof nuxt_plugin_Axios_4ea50952 === 'function') {
    await nuxt_plugin_Axios_4ea50952(app.context, inject)
  }

  if (typeof nuxt_plugin_ApiErrorResponse_5c054c5c === 'function') {
    await nuxt_plugin_ApiErrorResponse_5c054c5c(app.context, inject)
  }

  if (typeof nuxt_plugin_ScreenSize_2b000f18 === 'function') {
    await nuxt_plugin_ScreenSize_2b000f18(app.context, inject)
  }

  if (typeof nuxt_plugin_Sidebar_a463859e === 'function') {
    await nuxt_plugin_Sidebar_a463859e(app.context, inject)
  }

  if (typeof nuxt_plugin_Image_78970f5c === 'function') {
    await nuxt_plugin_Image_78970f5c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_InfiniteLoading_193c5b9c === 'function') {
    await nuxt_plugin_InfiniteLoading_193c5b9c(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_StarRating_6980baa5 === 'function') {
    await nuxt_plugin_StarRating_6980baa5(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_libnuxtclientinitpluginclientf758f1a2_6e925319 === 'function') {
    await nuxt_plugin_libnuxtclientinitpluginclientf758f1a2_6e925319(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    const { route } = router.resolve(app.context.route.fullPath)
    // Ignore 404s rather than blindly replacing URL
    if (!route.matched.length && process.client) {
      return resolve()
    }
    router.replace(route, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
