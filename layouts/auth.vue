<template>
  <div class="auth-layout">
    <header class="py-3 d-flex bg-white shadow-sm">
      <nuxt-link to="/home" class="d-block m-auto">
        <img
          src="@/assets/img/logo/logo.svg"
          height="40"
          alt="Logo Ajarbelajar"
        />
      </nuxt-link>
    </header>
    <main class="container-fluid">
      <div class="row">
        <div class="col-lg-5 col-md-8 mx-auto">
          <div class="my-4"></div>
          <div class="card border-0 shadow-sm">
            <div class="card-body">
              <div class="container">
                <div class="row">
                  <div class="col-6 pl-0">
                    <nuxt-link
                      to="/login"
                      active-class="disabled"
                      class="font-weight-bold btn btn-primary btn-block"
                      >MASUK</nuxt-link
                    >
                  </div>
                  <div class="col-6 pr-0">
                    <nuxt-link
                      to="/register"
                      active-class="disabled"
                      class="font-weight-bold btn btn-primary btn-block"
                      >DAFTAR</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <div class="my-4"></div>

              <Nuxt class="py-3" />
            </div>
          </div>
          <div class="my-4"></div>
        </div>
      </div>
    </main>
    <footer class="mt-auto bg-white border-top py-4">
      <div class="container">
        <div class="text-center font-weight-bolder text-uppercase">
          &copy; Ajarbelajar 2020
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.auth-layout {
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: $gray-100;
}
</style>
