function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const controls = document.querySelector("#controls");
const boxs = document.querySelector("#boxes");
// boxs styles
boxs.style.backgroundColor = "#F6F6FE";
boxs.style.display = "flex";
boxs.style.gap = "44px";
boxs.style.padding = "32px";
boxs.style.flexWrap = "wrap";
// input styles
input.style.width = "150px";
input.style.borderRadius = "8px";
input.style.border = "1px solid #808080";
input.style.height = "40px";
// controls styles
controls.style.display = "flex";
controls.style.gap = "16px";
controls.style.backgroundColor = "#F6F6FE";
controls.style.padding = "32px";
controls.style.marginBottom = "16px";
// create styles
create.style.width = "120px";
create.style.border = "none";
create.style.padding = "8px 16px 8px 16px";
create.style.borderRadius = "8px";
create.style.backgroundColor = "#4E75FF";
create.style.color = "#FFFFFF";
// destroy styles
destroy.style.width = "120px";
destroy.style.border = "none";
destroy.style.padding = "8px 16px 8px 16px";
destroy.style.borderRadius = "8px";
destroy.style.backgroundColor = "#FF4E4E";
destroy.style.color = "#FFFFFF";
// code
function createColl() {
  let counter = 30;
  document.querySelector("#boxes").innerHTML = "";
  if (input.value >= 1 && input.value <= 100) {
    for (let index = 0; index < input.value; index++) {
      const box = document.createElement("div");
      box.style.width = `${counter}px`;
      box.style.height = `${counter}px`;
      box.style.backgroundColor = `${getRandomHexColor()}`;
      document.querySelector("#boxes").append(box);
      counter += 10;
    }
  }
  input.value = "";
}
function destroyColl() {
  document.querySelector("#boxes").innerHTML = "";
}

create.addEventListener("click", createColl);
destroy.addEventListener("click", destroyColl);
