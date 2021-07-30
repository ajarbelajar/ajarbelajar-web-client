<template>
  <main class="bg-white">
    <landing-navbar />
    <landing-header />
    <landing-counter :count="{ user: 600, minitutor: 120, video: 120, article: 40 }" />
    <landing-info />
  </main>
</template>

<script>
export default {
  name: 'LandingPage',
  layout: 'blank'
}
</script>
