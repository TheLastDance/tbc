import { accordionData } from "../data/accordion.js";
import { headerOpacity } from "./navBar.js";
import { listRender } from "./coursesRendering.js";

headerOpacity();
listRender();

console.log(accordionData[0].info);
