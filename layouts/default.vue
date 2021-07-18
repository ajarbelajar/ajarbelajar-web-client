<template>
  <div class="default-layout">
    <layout-navbar />
    <div class="flex lg:container">
      <div class="dark:bg-gray-900 dark:border-gray-800 flex fixed left-0 z-30 pt-16 w-60 h-screen bg-white border-r transition-transform transform lg:left-auto lg:border-r-0 lg:transition-none lg:-translate-x-0" :class="$sidebar.open ? '-translate-x-0' : '-translate-x-full'">
        <layout-sidebar />
      </div>
      <div class="relative flex-1 pl-0 lg:pl-60">
        <div class="p-3 pt-16">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
