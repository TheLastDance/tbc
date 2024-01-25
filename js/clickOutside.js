
export const clickOutsidePopup = (params, callback) => {
  const { popupEl, styleClass = "popup_open" } = params;

  document.addEventListener('click', (e) => {
    if (!popupEl.contains(e.target) && popupEl.classList.contains(styleClass)) {
      callback();
    }
  });
}