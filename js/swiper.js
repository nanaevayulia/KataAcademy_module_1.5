if (document.body.matchMedia < 768) {
  swiper.init(swiper);
}

const swiper = new Swiper(".brends__swiper", {
  spaceBetween: 16,
  width: 240,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewPort: true,
  },

  on: {
    resize: function enableOnlyMobile(swiper) {
      if (768 < window.innerWidth) {
        swiper.disable();
        swiper.el.classList.add("-non-slider");
      } else {
        swiper.enable();
        swiper.el.classList.remove("-non-slider");
      }
    },
  },
});
