<template>
  <div class="app-layout-nosidebar">
    <app-header no-sidebar />
    <Nuxt />
    <app-footer />
  </div>
</template>

<style lang="scss">
.app-layout-nosidebar {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding-top: 60px;
  background-color: $gray-100;
}
</style>
