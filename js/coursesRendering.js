import { coursesData } from "../data/courses.js";

const list = document.querySelector("#course_list");

export const listRender = () => {
  coursesData.forEach(item => {
    const li = document.createElement("li");
    const image = new Image();
    image.src = item.photo;
    list.appendChild(li);
    li.appendChild(image);
  })
}

