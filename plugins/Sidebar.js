import Vue from 'vue'

const SidebarStore = {
  closeSidebar: true,
  display(value) {
    this.closeSidebar = !value
  },
}

const SidebarPlugin = {
  install(Vue) {
    const app = new Vue({
      data: {
        sidebarStore: SidebarStore,
      },
    })

    Vue.prototype.$sidebar = app.sidebarStore
  },
}

Vue.use(SidebarPlugin)
