import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BlockBlank: () => import('../..\\components\\block\\Blank.vue' /* webpackChunkName: "components/block-blank" */).then(c => wrapFunctional(c.default || c)),
  BlockComment: () => import('../..\\components\\block\\Comment.vue' /* webpackChunkName: "components/block-comment" */).then(c => wrapFunctional(c.default || c)),
  BlockEditorjsCompiler: () => import('../..\\components\\block\\EditorjsCompiler.vue' /* webpackChunkName: "components/block-editorjs-compiler" */).then(c => wrapFunctional(c.default || c)),
  BlockFeedback: () => import('../..\\components\\block\\Feedback.vue' /* webpackChunkName: "components/block-feedback" */).then(c => wrapFunctional(c.default || c)),
  BlockLoading: () => import('../..\\components\\block\\Loading.vue' /* webpackChunkName: "components/block-loading" */).then(c => wrapFunctional(c.default || c)),
  BlockPopularPosts: () => import('../..\\components\\block\\PopularPosts.vue' /* webpackChunkName: "components/block-popular-posts" */).then(c => wrapFunctional(c.default || c)),
  BlockPostSideBar: () => import('../..\\components\\block\\PostSideBar.vue' /* webpackChunkName: "components/block-post-side-bar" */).then(c => wrapFunctional(c.default || c)),
  BlockRenderPost: () => import('../..\\components\\block\\RenderPost.vue' /* webpackChunkName: "components/block-render-post" */).then(c => wrapFunctional(c.default || c)),
  BlockWideHeader: () => import('../..\\components\\block\\WideHeader.vue' /* webpackChunkName: "components/block-wide-header" */).then(c => wrapFunctional(c.default || c)),
  ElementsCategoryList: () => import('../..\\components\\elements\\CategoryList.vue' /* webpackChunkName: "components/elements-category-list" */).then(c => wrapFunctional(c.default || c)),
  ElementsFaqList: () => import('../..\\components\\elements\\FaqList.vue' /* webpackChunkName: "components/elements-faq-list" */).then(c => wrapFunctional(c.default || c)),
  ElementsFavoriteToggle: () => import('../..\\components\\elements\\FavoriteToggle.vue' /* webpackChunkName: "components/elements-favorite-toggle" */).then(c => wrapFunctional(c.default || c)),
  ElementsFollowToggle: () => import('../..\\components\\elements\\FollowToggle.vue' /* webpackChunkName: "components/elements-follow-toggle" */).then(c => wrapFunctional(c.default || c)),
  ElementsHeroUploader: () => import('../..\\components\\elements\\HeroUploader.vue' /* webpackChunkName: "components/elements-hero-uploader" */).then(c => wrapFunctional(c.default || c)),
  ElementsMinitutorList: () => import('../..\\components\\elements\\MinitutorList.vue' /* webpackChunkName: "components/elements-minitutor-list" */).then(c => wrapFunctional(c.default || c)),
  ElementsNotificationList: () => import('../..\\components\\elements\\NotificationList.vue' /* webpackChunkName: "components/elements-notification-list" */).then(c => wrapFunctional(c.default || c)),
  ElementsPostList: () => import('../..\\components\\elements\\PostList.vue' /* webpackChunkName: "components/elements-post-list" */).then(c => wrapFunctional(c.default || c)),
  ElementsRequestPostList: () => import('../..\\components\\elements\\RequestPostList.vue' /* webpackChunkName: "components/elements-request-post-list" */).then(c => wrapFunctional(c.default || c)),
  ElementsUserList: () => import('../..\\components\\elements\\UserList.vue' /* webpackChunkName: "components/elements-user-list" */).then(c => wrapFunctional(c.default || c)),
  ElementsVideoUploader: () => import('../..\\components\\elements\\VideoUploader.vue' /* webpackChunkName: "components/elements-video-uploader" */).then(c => wrapFunctional(c.default || c)),
  FormButton: () => import('../..\\components\\form\\Button.vue' /* webpackChunkName: "components/form-button" */).then(c => wrapFunctional(c.default || c)),
  FormCategorySuggest: () => import('../..\\components\\form\\CategorySuggest.vue' /* webpackChunkName: "components/form-category-suggest" */).then(c => wrapFunctional(c.default || c)),
  FormInput: () => import('../..\\components\\form\\Input.vue' /* webpackChunkName: "components/form-input" */).then(c => wrapFunctional(c.default || c)),
  FormSelect: () => import('../..\\components\\form\\Select.vue' /* webpackChunkName: "components/form-select" */).then(c => wrapFunctional(c.default || c)),
  FormTextarea: () => import('../..\\components\\form\\Textarea.vue' /* webpackChunkName: "components/form-textarea" */).then(c => wrapFunctional(c.default || c)),
  LandingCallToActions: () => import('../..\\components\\landing\\CallToActions.vue' /* webpackChunkName: "components/landing-call-to-actions" */).then(c => wrapFunctional(c.default || c)),
  LandingCounter: () => import('../..\\components\\landing\\Counter.vue' /* webpackChunkName: "components/landing-counter" */).then(c => wrapFunctional(c.default || c)),
  LandingFooter: () => import('../..\\components\\landing\\Footer.vue' /* webpackChunkName: "components/landing-footer" */).then(c => wrapFunctional(c.default || c)),
  LandingHeader: () => import('../..\\components\\landing\\Header.vue' /* webpackChunkName: "components/landing-header" */).then(c => wrapFunctional(c.default || c)),
  LandingInfo: () => import('../..\\components\\landing\\Info.vue' /* webpackChunkName: "components/landing-info" */).then(c => wrapFunctional(c.default || c)),
  LandingNavbar: () => import('../..\\components\\landing\\Navbar.vue' /* webpackChunkName: "components/landing-navbar" */).then(c => wrapFunctional(c.default || c)),
  LandingTestimonials: () => import('../..\\components\\landing\\Testimonials.vue' /* webpackChunkName: "components/landing-testimonials" */).then(c => wrapFunctional(c.default || c)),
  LayoutFooter: () => import('../..\\components\\layout\\Footer.vue' /* webpackChunkName: "components/layout-footer" */).then(c => wrapFunctional(c.default || c)),
  LayoutMinitutorSidebar: () => import('../..\\components\\layout\\MinitutorSidebar.vue' /* webpackChunkName: "components/layout-minitutor-sidebar" */).then(c => wrapFunctional(c.default || c)),
  LayoutNavbar: () => import('../..\\components\\layout\\Navbar.vue' /* webpackChunkName: "components/layout-navbar" */).then(c => wrapFunctional(c.default || c)),
  LayoutSidebar: () => import('../..\\components\\layout\\Sidebar.vue' /* webpackChunkName: "components/layout-sidebar" */).then(c => wrapFunctional(c.default || c)),
  ModalCreatePost: () => import('../..\\components\\modal\\CreatePost.vue' /* webpackChunkName: "components/modal-create-post" */).then(c => wrapFunctional(c.default || c)),
  ModalSearch: () => import('../..\\components\\modal\\Search.vue' /* webpackChunkName: "components/modal-search" */).then(c => wrapFunctional(c.default || c)),
  SvgBrand: () => import('../..\\components\\svg\\Brand.vue' /* webpackChunkName: "components/svg-brand" */).then(c => wrapFunctional(c.default || c)),
  SvgCurve: () => import('../..\\components\\svg\\Curve.vue' /* webpackChunkName: "components/svg-curve" */).then(c => wrapFunctional(c.default || c)),
  SvgQuote: () => import('../..\\components\\svg\\Quote.vue' /* webpackChunkName: "components/svg-quote" */).then(c => wrapFunctional(c.default || c)),
  SvgSpinner: () => import('../..\\components\\svg\\Spinner.vue' /* webpackChunkName: "components/svg-spinner" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
