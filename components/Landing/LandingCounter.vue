<template>
  <section class="landing-counter py-30">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2 class="landing-title">Beragam dan akan terus bertumbuh!</h2>
          <p class="landing-description">
            AjarBelajar diisi oleh konten dari MiniTutor dengan berbagai macam
            latar belakang. Ada banyak bidang ilmu dan topik bahasan yang bisa
            disimak, dan akan terus bertambah.
          </p>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-md-3 d-flex counter-col">
          <div class="card counter-card">
            <div class="card-body">
              <div class="counter-icon">
                <span>
                  <i class="wb-user-circle"></i>
                </span>
              </div>
              <div class="counter-number">{{ counters.user }}</div>
              <div class="counter-text">Pengguna Terdaftar</div>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex counter-col">
          <div class="card counter-card">
            <div class="card-body">
              <div class="counter-icon">
                <span>
                  <i class="wb-users"></i>
                </span>
              </div>
              <div class="counter-number">{{ counters.minitutor }}</div>
              <div class="counter-text">MiniTutor Berkontribusi</div>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex counter-col">
          <div class="card counter-card">
            <div class="card-body">
              <div class="counter-icon">
                <span>
                  <i class="wb-video"></i>
                </span>
              </div>
              <div class="counter-number">{{ counters.playlist }}</div>
              <div class="counter-text">Playlist Terbit</div>
            </div>
          </div>
        </div>
        <div class="col-md-3 d-flex counter-col">
          <div class="card counter-card">
            <div class="card-body">
              <div class="counter-icon">
                <span>
                  <i class="wb-order"></i>
                </span>
              </div>
              <div class="counter-number">{{ counters.article }}</div>
              <div class="counter-text">Artikel Terbit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    counters: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss">
.counter-col {
  &:last-child {
    &::before,
    &::after {
      display: none;
    }
  }

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: 5;
    height: 4px;
    width: 40%;
    background-color: $primary;
    right: -20%;
    top: 70px;
    border-radius: 4px;

    @include media-breakpoint-down(md) {
      display: none;
    }
  }

  &::after {
    width: 20%;
    top: 80px;
    right: -10%;
    opacity: 0.5;
  }
}
.counter-card {
  width: 100%;
  display: flex;
  flex-direction: column;

  .counter-icon {
    margin: auto;
    width: 120px;
    height: 120px;
    border: 1px solid $border-color;
    border-radius: 100%;
    padding: 4px;
    span {
      display: flex;
      width: 100%;
      height: 100%;
      background-color: $primary;
      border-radius: 100%;
    }

    i {
      display: block;
      margin: auto;
      line-height: 1;
      font-size: 64px;
      color: $white;
    }
  }

  .counter-number {
    font-size: 42px;
    text-align: center;
    font-weight: $font-weight-bold;
    color: $gray-400;
  }

  .counter-text {
    font-size: 14px;
    text-align: center;
    font-weight: $font-weight-light;
    color: $gray-500;
  }
}
</style>
