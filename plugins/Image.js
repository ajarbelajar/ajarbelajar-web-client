import Logo from '~/assets/img/logo/logo.svg'
import LogoWhite from '~/assets/img/logo/logo-white.svg'
import LogoText from '~/assets/img/logo/logo-text.svg'
import Avatar from '~/assets/img/placeholder/avatar.png'
import HeroLarge from '~/assets/img/placeholder/hero-large.jpg'
import HeroThumb from '~/assets/img/placeholder/hero-thumb.jpg'
import HeroSmall from '~/assets/img/placeholder/hero-small.jpg'

export default function (contex, inject) {
  inject('images', {
    logo: {
      default: Logo,
      white: LogoWhite,
      text: LogoText,
    },
    avatar: Avatar,
    hero: {
      large: HeroLarge,
      thumb: HeroThumb,
      small: HeroSmall,
    },
  })
}
