import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

//swiper
const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto", // 參考解答解決換行問題了
    allowTouchMove: false, // 參考解答加上
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 8000,
  });