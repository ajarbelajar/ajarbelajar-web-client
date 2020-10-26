<template>
  <div class="container-fluid">
    <div class="panel panel-body minitutor-info-panel">
      <span>Nama Lengkap</span>
      <p class="name">{{ user.name }}</p>
    </div>

    <div class="panel panel-body minitutor-info-panel">
      <span>Jurusan</span>
      <p class="name">{{ minitutor.majors }}</p>
    </div>

    <div class="panel panel-body minitutor-info-panel">
      <span>Jenjang</span>
      <p class="name">{{ minitutor.last_education }}</p>
    </div>

    <div class="panel panel-body minitutor-info-panel">
      <span>Nama Kampus</span>
      <p class="name">{{ minitutor.university }}</p>
    </div>

    <div class="panel panel-body minitutor-info-panel">
      <span>Alamat Kampus</span>
      <p class="name">{{ minitutor.city_and_country_of_study }}</p>
    </div>

    <div class="panel panel-body minitutor-info-panel">
      <span>Minat dan bakat</span>
      <p class="name">{{ minitutor.interest_talent }}</p>
    </div>

    <div class="panel panel-body minitutor-info-panel">
      <span>Tentang</span>
      <p class="name">{{ user.about || '-' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
    minitutor: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss">
.minitutor-info-panel {
  padding: 10px 15px;
  border: 0;
  border-left: 3px solid $primary;
  border-bottom: none !important;
  margin-bottom: $spacer/2;
  span {
    display: block;
    font-size: 12px;
    margin-bottom: 5px;
    color: $gray-500;
    font-weight: $font-weight-bold;
  }
  p {
    display: block;
    margin: 0;
    font-size: 16px;

    &.name {
      display: block;
      font-weight: $font-weight-bold;
    }
  }
}
</style>
