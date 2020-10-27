<template>
  <div class="welcome-layout">
    <app-header-2 />
    <Nuxt />
    <app-footer />
  </div>
</template>

<style lang="scss">
.welcome-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding-left: 0;
  background-color: $gray-100;

  .welcome-nav {
    background-color: $white;
    box-shadow: $box-shadow-sm;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    .nav-wrap {
      display: flex;
      height: 58px;
      .brand {
        display: block;
        padding: 15px 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        img {
          display: block;
          height: 28px;
        }
      }

      .search-wrap {
        display: block;
        margin: auto;
        margin-left: 0;

        .search-toggle {
          display: flex;
          width: 200px;
          height: 36px;
          border: none;
          padding: 0 10px;
          background-color: $gray-100;
          &:hover {
            background-color: $gray-200;
          }

          .text {
            display: block;
            padding-top: 2px;
            margin: auto;
            margin-left: 0;
            color: $primary;
            line-height: 1;
            font-size: 16px;
            font-weight: $font-weight-bold;
          }

          .icon {
            display: block;
            margin: auto;
            margin-right: 0;
            color: $gray-400;
            line-height: 1;
            font-size: 18px;
            font-weight: $font-weight-bold;
          }
        }
      }

      .links {
        display: flex;
        height: 36px;
        margin: auto 0;

        .btn {
          font-weight: $font-weight-bold;
          min-width: 98px;
          display: block;
          &.btn-signup {
            margin-left: 5px;
          }
        }
      }
    }
  }

  .welcome-header {
    padding-top: 58px;
    .wrapper {
      min-height: calc(100vh - 58px);
      margin: 0;
      display: flex;
      padding: 50px 0;
    }
    .info {
      margin: auto;
      text-align: center;
      h1 {
        font-size: 54px;
        margin: 0;
        font-weight: $font-weight-bold;
        color: $white;
        text-transform: uppercase;
      }
      p {
        font-size: 18px;
        letter-spacing: 1px;
        font-weight: $font-weight-light;
        color: $white;
      }
      .btn {
        margin-top: 20px;
        font-weight: $font-weight-bold;
        padding-left: 20px;
        padding-right: 20px;
        background-color: $white;
      }
    }
  }

  .welcome-section-1 {
    padding: 50px 0;
    .section-title {
      color: $primary;
      text-align: center;
      margin-bottom: 30px;
    }
  }

  .welcome-section-2 {
    .image-wrap {
      width: 100%;
    }
  }

  .welcome-section-3 {
    background-attachment: fixed;
    background-size: cover;
    color: $white;
  }
}
</style>
