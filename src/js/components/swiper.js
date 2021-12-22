// core version + navigation, pagination modules:
import Swiper, { Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

// configure Swiper to use modules
Swiper.use([Pagination]);

// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,
  slidesPerView: 1,
  centeredSlides: true,
  centeredSlidesBounds: true,
  cssMode: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"><span class="sr-only">' + (index + 1) + "</span></span>";
    }
  },

  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});
