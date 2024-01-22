const addImage = (href, alt) => {
  const image = new Image();
  image.src = href;
  image.alt = alt;
  return image;
}

const buildAccordion = (data, container) => {
  const parser = new DOMParser();

  data.forEach((item) => {
    const item_container = document.createElement("div");
    item_container.className = "accordion-item";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "accordion-button no-display";
    button.textContent = item.title;

    const icon = addImage("./assets/icons/arrowDown.svg", "arrow");
    button.appendChild(icon);

    const doc = parser.parseFromString(item.info, 'text/html');
    const content = doc.querySelector(".accordion-dropdown");

    item_container.append(button, content);
    container.appendChild(item_container);
  })
}

const accordionFunctionality = (container) => {

  container.addEventListener("click", (e) => {
    const items = container.querySelectorAll(".accordion-button");
    const button = e.target.closest('.accordion-button');

    if (button) {
      items.forEach(item => {
        if (item !== button) item.classList.add("no-display");
      });

      button.classList.toggle("no-display");
    }
  })
}

export const accordion = (data, container) => {
  buildAccordion(data, container);
  accordionFunctionality(container);
}


