const container = document.querySelector("#accordion_questions");

const addImage = (href, alt) => {
  const image = new Image();
  image.src = href;
  image.alt = alt;
  return image;
}

const buildAccordion = (data) => {
  const parser = new DOMParser();

  data.forEach((item) => {
    const item_container = document.createElement("div");
    item_container.className = "accordion-item";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "accordion-button";
    button.textContent = item.title;

    const icon = addImage("./assets/icons/arrowDown.svg", "arrow");
    button.appendChild(icon);

    const doc = parser.parseFromString(item.info, 'text/html');
    const content = doc.querySelector(".accordion-dropdown");

    item_container.append(button, content);
    container.appendChild(item_container);
  })
}

const accordionFunctionality = () => {

  container.addEventListener("click", (e) => {
    const items = document.querySelectorAll(".accordion-dropdown");
    const dropdown = e.target.parentNode.querySelector(".accordion-dropdown");

    if (e.target.className === "accordion-button") {
      items.forEach(item => {
        if (item !== dropdown) item.classList.add("no-display");
      });

      dropdown.classList.toggle("no-display");
    }
  })
}

export const accordion = (data) => {
  buildAccordion(data);
  accordionFunctionality();
}


