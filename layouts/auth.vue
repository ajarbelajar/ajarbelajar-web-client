<template>
  <div :style="{ 'min-height': '100vh' }" class="is-flex is-flex-direction-column">
    <header class="py-3 has-background-white is-flex">
      <nuxt-link to="/home" class="is-block m-auto">
        <img src="@/assets/logo/logo.svg" height="40" width="40" alt="Logo Ajarbelajar" />
      </nuxt-link>
    </header>
    <section class="section">
      <div class="mx-auto" :style="{'max-width': '480px'}">
        <div class="box is-shadowless">
          <div class="columns">
            <div class="column">
              <nuxt-link
                to="/login"
                active-class="has-background-primary has-text-white"
                class="button is-primary is-light is-fullwidth"
                >MASUK</nuxt-link
              >
            </div>
            <div class="column">
              <nuxt-link
                to="/register"
                active-class="has-background-primary has-text-white"
                class="button is-primary is-light is-fullwidth"
                >DAFTAR</nuxt-link
              >
            </div>
          </div>
          <Nuxt />
        </div>
      </div>
    </section>
    <footer class="footer has-text-centered mt-auto">
      © AJARBELAJAR {{(new Date()).getFullYear()}}
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
}
</script>

<style>
html {
  font-size: 14px;
}
</style>
