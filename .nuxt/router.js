import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9601bf96 = () => interopDefault(import('..\\pages\\about-minitutor.vue' /* webpackChunkName: "pages/about-minitutor" */))
const _006b16ab = () => interopDefault(import('..\\pages\\articles\\index.vue' /* webpackChunkName: "pages/articles/index" */))
const _0a307c28 = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _34760032 = () => interopDefault(import('..\\pages\\constructive-feedback.vue' /* webpackChunkName: "pages/constructive-feedback" */))
const _2c058c68 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _06168c99 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _4efc1316 = () => interopDefault(import('..\\pages\\join-minitutor.vue' /* webpackChunkName: "pages/join-minitutor" */))
const _4ac025c2 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _73d5a5f4 = () => interopDefault(import('..\\pages\\minitutors\\index.vue' /* webpackChunkName: "pages/minitutors/index" */))
const _78993d1e = () => interopDefault(import('..\\pages\\notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _571c235d = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _8ab3a3a0 = () => interopDefault(import('..\\pages\\videos\\index.vue' /* webpackChunkName: "pages/videos/index" */))
const _6d9d403c = () => interopDefault(import('..\\pages\\dashboard\\me.vue' /* webpackChunkName: "pages/dashboard/me" */))
const _171c9b40 = () => interopDefault(import('..\\pages\\dashboard\\me\\index.vue' /* webpackChunkName: "pages/dashboard/me/index" */))
const _609aa4ec = () => interopDefault(import('..\\pages\\dashboard\\me\\edit.vue' /* webpackChunkName: "pages/dashboard/me/edit" */))
const _27fa8336 = () => interopDefault(import('..\\pages\\dashboard\\me\\favorites.vue' /* webpackChunkName: "pages/dashboard/me/favorites" */))
const _275f3b64 = () => interopDefault(import('..\\pages\\dashboard\\me\\followings.vue' /* webpackChunkName: "pages/dashboard/me/followings" */))
const _ef7f9736 = () => interopDefault(import('..\\pages\\dashboard\\minitutor.vue' /* webpackChunkName: "pages/dashboard/minitutor" */))
const _6b06547d = () => interopDefault(import('..\\pages\\dashboard\\minitutor\\index.vue' /* webpackChunkName: "pages/dashboard/minitutor/index" */))
const _c70b5a40 = () => interopDefault(import('..\\pages\\dashboard\\minitutor\\articles\\index.vue' /* webpackChunkName: "pages/dashboard/minitutor/articles/index" */))
const _955eb0ce = () => interopDefault(import('..\\pages\\dashboard\\minitutor\\comments.vue' /* webpackChunkName: "pages/dashboard/minitutor/comments" */))
const _1dfb84aa = () => interopDefault(import('..\\pages\\dashboard\\minitutor\\feedback.vue' /* webpackChunkName: "pages/dashboard/minitutor/feedback" */))
const _d35e18b6 = () => interopDefault(import('..\\pages\\dashboard\\minitutor\\videos\\index.vue' /* webpackChunkName: "pages/dashboard/minitutor/videos/index" */))
const _0380e570 = () => interopDefault(import('..\\pages\\dashboard\\minitutor\\articles\\_id.vue' /* webpackChunkName: "pages/dashboard/minitutor/articles/_id" */))
const _0f3cc966 = () => interopDefault(import('..\\pages\\dashboard\\minitutor\\videos\\_id.vue' /* webpackChunkName: "pages/dashboard/minitutor/videos/_id" */))
const _3793b542 = () => interopDefault(import('..\\pages\\password\\forget.vue' /* webpackChunkName: "pages/password/forget" */))
const _7b7e558a = () => interopDefault(import('..\\pages\\password\\reset.vue' /* webpackChunkName: "pages/password/reset" */))
const _0297153a = () => interopDefault(import('..\\pages\\articles\\_slug.vue' /* webpackChunkName: "pages/articles/_slug" */))
const _0d9dbeb8 = () => interopDefault(import('..\\pages\\categories\\_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _5c4af8d7 = () => interopDefault(import('..\\pages\\minitutors\\_username.vue' /* webpackChunkName: "pages/minitutors/_username" */))
const _ff45e86a = () => interopDefault(import('..\\pages\\minitutors\\_username\\index.vue' /* webpackChunkName: "pages/minitutors/_username/index" */))
const _b6bca558 = () => interopDefault(import('..\\pages\\minitutors\\_username\\articles.vue' /* webpackChunkName: "pages/minitutors/_username/articles" */))
const _229dd50e = () => interopDefault(import('..\\pages\\minitutors\\_username\\followers.vue' /* webpackChunkName: "pages/minitutors/_username/followers" */))
const _01f904af = () => interopDefault(import('..\\pages\\minitutors\\_username\\videos.vue' /* webpackChunkName: "pages/minitutors/_username/videos" */))
const _0d91cd32 = () => interopDefault(import('..\\pages\\users\\_username.vue' /* webpackChunkName: "pages/users/_username" */))
const _5636293b = () => interopDefault(import('..\\pages\\users\\_username\\index.vue' /* webpackChunkName: "pages/users/_username/index" */))
const _11a9d569 = () => interopDefault(import('..\\pages\\users\\_username\\followings.vue' /* webpackChunkName: "pages/users/_username/followings" */))
const _8e20e630 = () => interopDefault(import('..\\pages\\videos\\_slug.vue' /* webpackChunkName: "pages/videos/_slug" */))
const _10f84a08 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-minitutor",
    component: _9601bf96,
    name: "about-minitutor"
  }, {
    path: "/articles",
    component: _006b16ab,
    name: "articles"
  }, {
    path: "/categories",
    component: _0a307c28,
    name: "categories"
  }, {
    path: "/constructive-feedback",
    component: _34760032,
    name: "constructive-feedback"
  }, {
    path: "/faq",
    component: _2c058c68,
    name: "faq"
  }, {
    path: "/home",
    component: _06168c99,
    name: "home"
  }, {
    path: "/join-minitutor",
    component: _4efc1316,
    name: "join-minitutor"
  }, {
    path: "/login",
    component: _4ac025c2,
    name: "login"
  }, {
    path: "/minitutors",
    component: _73d5a5f4,
    name: "minitutors"
  }, {
    path: "/notifications",
    component: _78993d1e,
    name: "notifications"
  }, {
    path: "/register",
    component: _571c235d,
    name: "register"
  }, {
    path: "/videos",
    component: _8ab3a3a0,
    name: "videos"
  }, {
    path: "/dashboard/me",
    component: _6d9d403c,
    children: [{
      path: "",
      component: _171c9b40,
      name: "dashboard-me"
    }, {
      path: "edit",
      component: _609aa4ec,
      name: "dashboard-me-edit"
    }, {
      path: "favorites",
      component: _27fa8336,
      name: "dashboard-me-favorites"
    }, {
      path: "followings",
      component: _275f3b64,
      name: "dashboard-me-followings"
    }]
  }, {
    path: "/dashboard/minitutor",
    component: _ef7f9736,
    children: [{
      path: "",
      component: _6b06547d,
      name: "dashboard-minitutor"
    }, {
      path: "articles",
      component: _c70b5a40,
      name: "dashboard-minitutor-articles"
    }, {
      path: "comments",
      component: _955eb0ce,
      name: "dashboard-minitutor-comments"
    }, {
      path: "feedback",
      component: _1dfb84aa,
      name: "dashboard-minitutor-feedback"
    }, {
      path: "videos",
      component: _d35e18b6,
      name: "dashboard-minitutor-videos"
    }, {
      path: "articles/:id",
      component: _0380e570,
      name: "dashboard-minitutor-articles-id"
    }, {
      path: "videos/:id",
      component: _0f3cc966,
      name: "dashboard-minitutor-videos-id"
    }]
  }, {
    path: "/password/forget",
    component: _3793b542,
    name: "password-forget"
  }, {
    path: "/password/reset",
    component: _7b7e558a,
    name: "password-reset"
  }, {
    path: "/articles/:slug",
    component: _0297153a,
    name: "articles-slug"
  }, {
    path: "/categories/:slug",
    component: _0d9dbeb8,
    name: "categories-slug"
  }, {
    path: "/minitutors/:username",
    component: _5c4af8d7,
    children: [{
      path: "",
      component: _ff45e86a,
      name: "minitutors-username"
    }, {
      path: "articles",
      component: _b6bca558,
      name: "minitutors-username-articles"
    }, {
      path: "followers",
      component: _229dd50e,
      name: "minitutors-username-followers"
    }, {
      path: "videos",
      component: _01f904af,
      name: "minitutors-username-videos"
    }]
  }, {
    path: "/users/:username?",
    component: _0d91cd32,
    children: [{
      path: "",
      component: _5636293b,
      name: "users-username"
    }, {
      path: "followings",
      component: _11a9d569,
      name: "users-username-followings"
    }]
  }, {
    path: "/videos/:slug",
    component: _8e20e630,
    name: "videos-slug"
  }, {
    path: "/",
    component: _10f84a08,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
