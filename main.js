document.addEventListener("DOMContentLoaded",function(){new HeroSlider(".swiper-container")});class HeroSlider{constructor(e){this.el=e,this.swiper=this._initSwiper()}_initSwiper(){return new Swiper(this.el,{loop:!0,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:1,speed:2011,breakpoints:{1024:{slidesPerView:1}},autoplay:{delay:2011,disableOnInteraction:!1}})}}
