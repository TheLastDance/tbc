import { accordionData } from "../data/accordion.js";
import { headerOpacity } from "./navBar.js";
import { listRender } from "./coursesRendering.js";
import { sliderFunc } from "./slider.js";
import { accordion } from "./accordion.js";

headerOpacity();
listRender();
sliderFunc();
accordion(accordionData);
// interval;

console.log(accordionData[0].info);
