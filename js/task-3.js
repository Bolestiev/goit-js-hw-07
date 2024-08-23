const output = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");
output.addEventListener("input", (event) => {
  nameOut.textContent = event.currentTarget.value.trim();

  if (nameOut.textContent === "") {
    nameOut.textContent = "Anonymous";
  }
});
// styles
output.style.border = "1px solid #808080";
output.style.borderRadius = "4px";
output.style.width = "360px";
output.style.height = "40px";
output.style.padding = "8px 16px";
output.style.color = "#2E2F42";
console.log(output.placeholder);
