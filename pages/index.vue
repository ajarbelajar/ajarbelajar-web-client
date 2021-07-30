<template>
  <main class="bg-white">
    <landing-navbar />
    <landing-header />
    <div class="py-6" />
    <landing-counter :count="{ user: 600, minitutor: 120, video: 120, article: 40 }" />
    <div class="py-6" />
  </main>
</template>

<script>
export default {
  name: 'LandingPage',
  layout: 'blank'
}
</script>
