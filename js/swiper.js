const swiper = new Swiper(".brends__swiper", {
  // Optional parameters
  spaceBetween: 16,
  loop: true,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
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
