<template>
  <div class="landing-grid-1">
    <div class="container">
      <div class="row mb-20">
        <div class="col-lg-8 mx-auto">
          <h2 class="landing-title">Dengan AjarBelajar, kamu dapat!</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 d-flex">
          <div class="grid-card-simple">
            Belajar lebih dari 100+ bidang ilmu, dari sejarah, seni, hingga
            fisika kuantum!
          </div>
        </div>
        <div class="col-md-4 d-flex">
          <div class="grid-card-simple">
            Mendapatkan pendapatan tambahan lewat mengajar online
          </div>
        </div>
        <div class="col-md-4 d-flex">
          <div class="grid-card-simple">
            Diskusi dengan temen-temen dengan semangat belajar yang sama!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.landing-grid-1 {
  width: 100%;
  background-color: $gray-100;
  padding: $spacer 0;

  .grid-card-simple {
    display: block;
    padding: $spacer;
    font-size: 16px;
    color: $gray-500;
    font-weight: $font-weight-light;
    background-color: $white;
    border-radius: $border-radius;
    text-align: center;
    border-bottom: $border-radius solid $primary;
  }
}
</style>
