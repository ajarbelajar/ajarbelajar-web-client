import Vue from 'vue'
import VLazyImage from "v-lazy-image"

Vue.component('VImg', VLazyImage)

export default function (contex, inject) {
  inject('images', {
    avatar: require('@/assets/img/placeholder/avatar.png'),
    hero: {
      large: require('@/assets/img/placeholder/hero-large.jpg'),
      thumb: require('@/assets/img/placeholder/hero-thumb.jpg'),
      small: require('@/assets/img/placeholder/hero-small.jpg'),
    },
  })
}
