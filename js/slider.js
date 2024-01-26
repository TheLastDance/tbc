
const buildButtons = (array, element) => {
  array.forEach((_, index) => {
    const button = document.createElement("button");
    button.setAttribute("data-index", index);
    button.type = "button";
    element.appendChild(button);
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

const handleButtons = (array, className, e, interval, startInterval) => {
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

// reusable slider builder function, adds functionality to slider, need to provide elements as arguments and add styles in css after.
export const sliderBuilder = (slides, left, right, buttons, className = "absolute") => {
  let interval;

  const startInterval = () => {
    interval = setInterval(() => {
      sliderLoop(slides, className);
    }, 3500);
  }

  if (buttons) {
    buildButtons(slides, buttons);
    buttons.addEventListener("click", (e) => handleButtons(slides, className, e, interval, startInterval));
  }

  startInterval();

  right.addEventListener("click", () => {
    clearInterval(interval);
    sliderLoop(slides, className);
    startInterval();
  });

  left.addEventListener("click", () => {
    clearInterval(interval);
    sliderLoop(slides, className, true);
    startInterval();
  });

}

export const slider = () => {
  const sliders = document.querySelectorAll(".slider_item");
  const buttons = document.querySelector("#slider_buttons");
  const left = document.querySelector("#left_arrow");
  const right = document.querySelector("#right_arrow");

  sliderBuilder(sliders, left, right, buttons);
}



