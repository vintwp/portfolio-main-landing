'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // burger menu
  const burger = document.querySelector('.burger');
  const headerMenu = document.querySelector('.header__menu');

  burger.addEventListener('click', (e) => {
    burger.classList.toggle('active');
    headerMenu.classList.toggle('active');
  });

  // swiper
  // eslint-disable-next-line no-undef
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
    },
  });
});
