function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.borderRadius = "8px";
    box.style.margin = "5px";
    boxes.push(box);
    size += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const value = Number(input.value);

  if (value >= 1 && value <= 100) {
    createBoxes(value);
  }

  input.value = "";
});

destroyButton.addEventListener("click", destroyBoxes);
