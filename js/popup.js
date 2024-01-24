
import { clickOutside } from "./clickOutside.js";
import { focusTrap } from "./focusTrap.js";

const privacyPopup = document.querySelector("#privacy_popup");
const privacyPopupClose = document.querySelector("#privacy_popup_close");
const privacyPopupCloseBig = document.querySelector("#privacy_popup_close_big");
const privacyOpenButton = document.querySelector("#privacy_button");
const overlay = document.querySelector("#overlay");
const burger = document.querySelector("#burger");
const nav = document.querySelector("#navigation_list");

const addBgFilter = () => {
  overlay.classList.add("overlay");
}

const removeBgFilter = () => {
  overlay.classList.remove("overlay");
}

const onClosePopup = (popup) => {
  removeBgFilter();
  popup.classList.remove("popup_open");
}

export const popupHandler = (clickEl, closeEl, popupEl) => {

  clickEl.addEventListener("click", (e) => {
    e.stopPropagation();
    addBgFilter();
    popupEl.classList.toggle("popup_open");
    popupEl.scrollTop = 0;
  });

  if (closeEl) closeEl.addEventListener("click", () => onClosePopup(popupEl));

  clickOutside(popupEl, () => onClosePopup(popupEl));
  focusTrap(popupEl, () => onClosePopup(popupEl));
}

export const footerPopUp = () => {
  popupHandler(privacyOpenButton, privacyPopupClose, privacyPopup);
  privacyPopupCloseBig.addEventListener("click", () => onClosePopup(privacyPopup))
}

export const burgerPopup = () => {
  popupHandler(burger, null, nav);
}