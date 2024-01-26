
import { clickOutsidePopup } from "./clickOutside.js";
import { focusTrap } from "./focusTrap.js";

const overlay = document.querySelector("#overlay");

const addBgFilter = (isOverlay) => {
  if (isOverlay) overlay.classList.add("overlay");
}

const removeBgFilter = (isOverlay) => {
  if (isOverlay) overlay.classList.remove("overlay");
}

const addNoScroll = (isBodyNoScroll) => {
  if (isBodyNoScroll) document.querySelector("body").classList.add("no_scroll");
}

const removeNoScroll = (isBodyNoScroll) => {
  if (isBodyNoScroll) document.querySelector("body").classList.remove("no_scroll");
}

const onClosePopup = (params) => {
  const { popupEl, isOverlay, styleClass = "popup_open", isBodyNoScroll } = params;

  removeBgFilter(isOverlay);
  removeNoScroll(isBodyNoScroll);
  popupEl.classList.remove(styleClass);
}

const popupHandler = (params) => {
  const { clickEl, popupEl, closeEl = null, styleClass = "popup_open", isOverlay = false, isBodyNoScroll = false } = params;

  clickEl.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!popupEl.classList.contains(styleClass)) {
      addBgFilter(isOverlay);
      addNoScroll(isBodyNoScroll);
      popupEl.classList.toggle(styleClass);
      popupEl.scrollTop = 0;
      return;
    }
    onClosePopup(params);
  });

  if (closeEl) closeEl.addEventListener("click", () => onClosePopup(params));

  clickOutsidePopup(params, () => onClosePopup(params));
  focusTrap(popupEl, () => onClosePopup(params));
}

export const footerPopUp = () => {
  const privacyPopup = document.querySelector("#privacy_popup");
  const privacyPopupClose = document.querySelector("#privacy_popup_close");
  const privacyPopupCloseBig = document.querySelector("#privacy_popup_close_big");
  const privacyOpenButton = document.querySelector("#privacy_button");

  const params = {
    clickEl: privacyOpenButton,
    popupEl: privacyPopup,
    closeEl: privacyPopupClose,
    isOverlay: true
  }

  popupHandler(params);
  privacyPopupCloseBig.addEventListener("click", () => onClosePopup(params));
}

export const burgerPopup = () => {
  const burger = document.querySelector("#burger");
  const nav = document.querySelector("#navigation_list");

  const params = {
    clickEl: burger,
    popupEl: nav,
    isOverlay: true,
    isBodyNoScroll: true
  }

  popupHandler(params);
}