<template>
  <div class="default-layout">
    <layout-navbar />
    <div class="flex">
      <div class="dark:bg-gray-900 dark:border-gray-800 flex fixed left-0 z-30 pt-16 w-60 h-screen bg-white shadow transition-transform transform lg:left-auto lg:transition-none lg:-translate-x-0" :class="$sidebar.open ? '-translate-x-0' : '-translate-x-full'">
        <layout-sidebar />
      </div>
      <div class="flex relative flex-col flex-1 pl-0 min-h-screen lg:pl-60">
        <div class="flex-1 pt-16 w-full">
          <nuxt />
        </div>
        <layout-footer />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
