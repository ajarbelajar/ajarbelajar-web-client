export default function (contex, inject) {
  inject('images', {
    avatar: '/images/avatar.png',
    hero: {
      large: '/images/hero-large.jpg',
      thumb: '/images/hero-thumb.jpg',
      small: '/images/hero-small.jpg',
    },
  })
}
