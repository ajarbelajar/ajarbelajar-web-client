import Vue from 'vue'

const SidebarStore = {
  open: false,
  display(value) {
    this.open = value
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
