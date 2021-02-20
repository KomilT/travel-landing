/* eslint-disable no-unused-vars */
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

const slider = new Swiper(".slider .swiper-container", {
  autoplay: true,
  effect: "fade",
  loop: true,

  navigation: {
    nextEl: ".slider .swiper-button-next",
    prevEl: ".slider .swiper-button-prev",
  },
});
