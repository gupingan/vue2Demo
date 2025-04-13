window.VueSlideIn = {
  config: {
    offset: 200,
    duration: 500,
  },
  $map: new WeakMap(),
  $oberver: null,
}
;(() => {
  function inViewportBelow(el) {
    // console.log(el.getBoundingClientRect().top, window.innerHeight)
    return el.getBoundingClientRect().top > window.innerHeight
  }
  function createObsever(options = {}) {
    return new IntersectionObserver(function (entries) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          VueSlideIn.$map.get(entry.target)?.play()
          VueSlideIn.$oberver.unobserve(entry.target)
        }
      }
    }, options)
  }

  VueSlideIn.$oberver = createObsever()

  VueSlideIn.install = function (Vue, options) {
    Vue.directive('slide-in', {
      inserted: function (el, binding, vnode) {
        Vue.nextTick(() => {
          setTimeout(() => {
            if (!inViewportBelow(el)) return

            const animation = el.animate(
              [
                {
                  transform: `translateY(${VueSlideIn.config.offset}px)`,
                  opacity: 0.5,
                },
                {
                  transform: `translateY(0px)`,
                  opacity: 1,
                },
              ],
              {
                duration: VueSlideIn.config.duration,
                easing: 'ease-out',
                fill: 'forwards',
              }
            )

            animation.pause()
            VueSlideIn.$oberver.observe(el)
            VueSlideIn.$map.set(el, animation)
          }, 100)
        })
      },

      unbind: function (el, binding, vnode) {
        VueSlideIn.$oberver.unobserve(el)
        VueSlideIn.$map.get(el)?.cancel()
        VueSlideIn.$map.delete(el)
      },
    })
  }
})()
