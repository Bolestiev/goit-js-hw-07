function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor());
function changeColor() {
  const bodyan = (document.querySelector("body").style.backgroundColor =
    getRandomHexColor());
  document.querySelector(".color").textContent = bodyan;
}
const button = document.querySelector(".change-color");
button.addEventListener("click", changeColor);

const widget = document.querySelector(".widget");
// styles
button.style.backgroundColor = "#4E75FF";
button.style.color = "#FFFFFF";
button.style.border = "none";
button.style.borderRadius = "8px";
button.style.width = "148px";
button.style.height = "40px";
widget.style.display = "flex";
widget.style.flexDirection = "column";

widget.style.alignItems = "center";
