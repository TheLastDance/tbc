const sliders = document.querySelectorAll(".slider_item");

const sliderLoop = () => {
  for (let i = 0; i < sliders.length; i++) {
    const item = sliders[i];

    if (!item.classList.contains("absolute")) {
      item.classList.toggle("absolute");
      if (i !== sliders.length - 1) {
        return sliders[i + 1].classList.toggle("absolute");
      }
      return sliders[0].classList.toggle("absolute");
    }

  }
}

export const interval = setInterval(() => {
  sliderLoop();
}, 3500);

