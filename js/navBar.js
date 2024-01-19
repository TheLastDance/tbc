const header = document.querySelector("header");

export const headerOpacity = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("header_scroll");
    } else {
      header.classList.remove("header_scroll");
    }
  })
}