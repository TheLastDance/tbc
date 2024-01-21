import { accordionData } from "../data/accordion.js";
import { headerOpacity } from "./navBar.js";
import { listRender } from "./coursesRendering.js";
import { sliderFunc } from "./slider.js";

headerOpacity();
listRender();
sliderFunc();
// interval;

console.log(accordionData[0].info);
