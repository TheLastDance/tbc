import { accordionData } from "../data/accordion.js";
import { headerOpacity } from "./navBar.js";
import { listRender } from "./coursesRendering.js";
import { sliderFunc } from "./slider.js";
import { accordion } from "./accordion.js";

const container = document.querySelector("#accordion_questions");

headerOpacity();
listRender();
sliderFunc();
accordion(accordionData, container);
// interval;

console.log(accordionData[0].info);
