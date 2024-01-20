import { coursesData } from "../data/courses.js";

const list = document.querySelector("#course_list");

export const listRender = () => {
  coursesData.forEach(item => {
    const li = document.createElement("li");
    const picture = document.createElement("picture");
    const source = document.createElement("source");
    source.srcset = item.webp;
    source.type = "image/webp";
    const image = new Image();
    image.src = item.jpg;
    image.alt = "course";
    picture.appendChild(source);
    picture.appendChild(image);
    li.appendChild(picture);
    list.appendChild(li);
  })
}

