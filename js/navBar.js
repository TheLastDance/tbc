import { VerticalSwiper } from "./utils.js";


export const header = () => {
  const header = document.querySelector("header");

  // adding opacity to header
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("header_scroll");
    } else {
      header.classList.remove("header_scroll");
      header.style.top = "0";
    }
  })

  // adding header animation on touch
  VerticalSwiper(window, () => {
    header.style.top = "0";
  }, () => {
    header.style.top = "-84px";
  })

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) header.style.top = "0";
  })
}