<template>
  <div class="infinite__error">
    <div class="infinite__error-wrap">
      <span class="message">Terjadi kesalahan saat memuat!</span>
      <button
        class="btn btn-default btn-outline btn-sm"
        @click="$attrs.trigger"
      >
        Muat Ulang
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.infinite__error {
  display: flex;
  padding: $spacer/2 0;
  margin-bottom: $spacer/2;

  &-wrap {
    display: block;
    margin: auto;
    text-align: center;
    width: 100%;

    .message {
      display: block;
      margin-bottom: 5px;
      font-size: 16px;
    }
  }
}
</style>
