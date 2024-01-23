
import { clickOutside } from "./clickOutside.js";
import { focusTrap } from "./focusTrap.js";

export const popupHandler = (clickEl, closeEl, popupEl) => {

  clickEl.addEventListener("click", (e) => {
    e.stopPropagation();
    popupEl.classList.toggle("popup_open");
  });

  closeEl.addEventListener("click", () => {
    popupEl.classList.remove("popup_open");
  })

  clickOutside(popupEl, () => {
    popupEl.classList.remove("popup_open");
  })

  focusTrap(popupEl, () => popupEl.classList.remove("popup_open"));
}