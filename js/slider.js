const sliders = document.querySelectorAll(".slider_item");
const buttons = document.querySelector("#slider_buttons");
const left = document.querySelector("#left_arrow");
const right = document.querySelector("#right_arrow");
let interval;

const buildButtons = (array) => {
  array.forEach((_, index) => {
    const button = document.createElement("button");
    button.setAttribute("data-index", index);
    button.attr
    button.type = "button";
    buttons.appendChild(button);
  })
}

const sliderLoop = (array, className, reversed) => {
  const index = [...array].findIndex(item => !item.classList.contains(className));
  const item = [...array].find(item => !item.classList.contains(className));
  item.classList.toggle(className);

  if (reversed) return goLeft(index, array).classList.toggle(className);
  return goRight(index, array).classList.toggle(className);
}

const goRight = (index, array) => {
  if (index !== array.length - 1) return array[index + 1];
  return array[0];
}

const goLeft = (index, array) => {
  if (index === 0) return array[array.length - 1];
  return array[index - 1];
}

const startInterval = () => {
  interval = setInterval(() => {
    sliderLoop(sliders, "absolute");
  }, 3500);
}

const handleButtons = (array, className, e) => {
  if (e.target.tagName.toLowerCase() === "button") {
    const index = e.target.getAttribute("data-index");
    clearInterval(interval);
    array.forEach(item => {
      item.classList.add(className);
    })
    array[index].classList.remove(className);
    startInterval();
  }
}

export const sliderFunc = () => {
  buildButtons(sliders);
  startInterval();

  right.addEventListener("click", () => {
    clearInterval(interval);
    sliderLoop(sliders, "absolute", false);
    startInterval();
  });

  left.addEventListener("click", () => {
    clearInterval(interval);
    sliderLoop(sliders, "absolute", true);
    startInterval();
  });

  buttons.addEventListener("click", (e) => handleButtons(sliders, "absolute", e))
}



