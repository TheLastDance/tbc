import { accordionData } from "../data/accordion.js";
import { headerOpacity } from "./navBar.js";
import { listRender } from "./coursesRendering.js";
import { interval } from "./slider.js";

headerOpacity();
listRender();
// interval;

console.log(accordionData[0].info);
