// Шаблон, если будут будут нужны разные стили для ПК и мобильных устройств (с тачпадом)

// "use strict";

// const isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBerry: function () {
//     return navigator.userAgent.match(/BlackBerry/i);
//   },
//   iOS: function () {
//     return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//   },
//   Opera: function () {
//     return navigator.userAgent.match(/Opera Mini/i);
//   },
//   Windows: function () {
//     return navigator.userAgent.match(/IEMobile/i);
//   },
//   any: function () {
//     return (
//       isMobile.Android() ||
//       isMobile.BlackBerry() ||
//       isMobile.iOS() ||
//       isMobile.Opera() ||
//       isMobile.Windows()
//     );
//   },
// };

// if (isMobile.any()) {
//   document.body.classList.add("_touch");

// } else {
//   document.body.classList.add("_pc");
// }

// ========== Меню-бургер (открытие-закрытие) ========== //

const body = document.querySelector("body");
const headerMenu = document.querySelector(".header__menu");
const headerMenuOpenButton = document.querySelector(
  ".header__menu-open-button"
);
const menuButtonClose = document.querySelector(".menu__button-close");

headerMenuOpenButton.addEventListener("click", openMenu);
menuButtonClose.addEventListener("click", closeMenu);
document.addEventListener("keydown", closeMenu2);
headerMenu.addEventListener("click", closeMenu3);

function openMenu() {
  headerMenu.classList.add("_open");
  menuButtonClose.classList.remove("_hidden");
  body.classList.add("_lock");
}

function closeMenu() {
  headerMenu.classList.remove("_open");
  menuButtonClose.classList.add("_hidden");
  body.classList.remove("_lock");
}

function closeMenu2(event) {
  if (event.code == "Escape") {
    headerMenu.classList.remove("_open");
    menuButtonClose.classList.add("_hidden");
    body.classList.remove("_lock");
  }
}

function closeMenu3(event) {
  if (!event.target.closest(".menu__list")) {
    headerMenu.classList.remove("_open");
    menuButtonClose.classList.add("_hidden");
    body.classList.remove("_lock");
  }
  if (event.target.classList.contains("menu__link")) {
    headerMenu.classList.remove("_open");
    menuButtonClose.classList.add("_hidden");
    body.classList.remove("_lock");
  }
}

// ============== top-slider =============== //

const swiper = new Swiper(".top-slider", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
  },
  navigation: {
    nextEl: ".top-slider__button-next",
    prevEl: ".top-slider__button-prev",
  },
  keyboard: {
    enabled: true,
  },
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  // },
});

// ============== our-services-swiper =============== //

const servicesSwiper = new Swiper(".our-services__swiper", {
  freeMode: true,
  slidesPerView: "auto",
});

// ============== our-lawyers-items =============== //

const ourLawyersSwiper = new Swiper(".our-lawyers__items", {
  freeMode: true,
  slidesPerView: "auto",
  spaceBetween: 24,
});

// ============== testimonials__items =============== //

const testimonialsItemsSwiper = new Swiper(".testimonials__items", {
  navigation: {
    nextEl: ".testimonials__slider-button-next",
    prevEl: ".testimonials__slider-button-prev",
  },
  // freeMode: true,
  spaceBetween: 24,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    767.98: {
      slidesPerView: "auto",
    },
    1300: {
      slidesPerView: 2,
    },
  },
});

// ============== useful-materials__articles =============== //

const usefulMaterialsSwiper = new Swiper(".useful-materials__articles", {
  freeMode: true,
  // slidesPerView: "auto",
  slidesPerView: 3,
  spaceBetween: 24,
  breakpoints: {
    0: {
      slidesPerView: "auto",
    },
    1055: {
      slidesPerView: 3,
    },
  },
});
