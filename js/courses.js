import { coursesData } from "../data/courses.js";
import { addImage } from "./utils.js";

const addPicture = (href1, href2, alt) => {
  const picture = document.createElement("picture");
  const source = document.createElement("source");
  const image = addImage(href2, alt);
  source.srcset = href1;
  source.type = "image/webp";
  picture.append(source, image);
  return picture;
}

const addContent = (heading, paragraph, anchor, src = "#") => {
  const container = document.createElement("div");
  container.className = "course_info";

  const h5 = document.createElement("h5");
  const p = document.createElement("p");
  const a = document.createElement("a");
  const icon = addImage("./assets/icons/rightArrowBlue.svg", "arrow");

  const anchor_div = document.createElement("div");
  anchor_div.className = "course_details"

  h5.textContent = heading;
  p.textContent = paragraph;
  a.textContent = anchor;
  a.href = src;

  anchor_div.append(icon, a);
  container.append(h5, p, anchor_div);

  return container;
}

export const listBuilder = (data, container) => {
  data.forEach(item => {
    const li = document.createElement("li");

    const picture = addPicture(item.webp, item.jpg, "course");
    const course_container = addContent(item.name, item.reg, "კურსის დეტალები");

    li.append(picture, course_container);
    container.appendChild(li);
  })
}

export const courses = () => {
  const list = document.querySelector("#course_list");
  listBuilder(coursesData, list);
}

