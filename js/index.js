import { accordionData } from "../data/accordion.js";
import { headerOpacity } from "./navBar.js";
import { listRender } from "./coursesRendering.js";
import { sliderFunc } from "./slider.js";
import { accordion } from "./accordion.js";
import { popupHandler } from "./popup.js";

const container = document.querySelector("#accordion_questions");
const privacyPopup = document.querySelector("#privacy_popup");
const privacyPopupClose = document.querySelector("#privacy_popup_close");
const privacyOpenButton = document.querySelector("#privacy_button");

headerOpacity();
listRender();
sliderFunc();
accordion(accordionData, container);
popupHandler(privacyOpenButton, privacyPopupClose, privacyPopup);

