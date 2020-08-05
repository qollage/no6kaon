document.addEventListener("DOMContentLoaded", function () {
  const hero = new HeroSlider(".swiper-container");
});

class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }
  _initSwiper() {
    return new Swiper(this.el, {
      loop: true,
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1,
      speed: 2011,
      breakpoints: {
        1024: {
          slidesPerView: 1,
        },
      },
      autoplay: {
        delay: 2011,
        disableOnInteraction: false,
      },
    });
  }
}
