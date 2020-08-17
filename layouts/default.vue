<template>
  <div class="app-layout">
    <app-header></app-header>
    <Nuxt />
  </div>
</template>

<style lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding-top: 60px;
  padding-left: 240px;
  background-color: $gray-100;
}
</style>
