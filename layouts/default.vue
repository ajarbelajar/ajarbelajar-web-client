<template>
  <div class="app-layout">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <div class="content-wrap">
      <Nuxt />
    </div>
    <app-footer />
  </div>
</template>

<style lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding-top: 60px + remToPx($spacer/2);
  padding-left: 240px;
  background-color: $gray-100;

  @include media-breakpoint-down(md) {
    transition: padding-left 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
    padding-left: 0;
  }
}
</style>
