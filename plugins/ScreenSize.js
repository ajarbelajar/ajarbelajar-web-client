export default function (ctx, inject) {
  const getScreenSize = {
    width() {
        return typeof window === "undefined" && 1024
        || window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth
    },
    height() {
        return typeof window === "undefined" && 768
        || window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight
    }
  }
  inject('getScreenSize', getScreenSize)
}
