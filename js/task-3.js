const output = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");
output.addEventListener("input", (event) => {
  nameOut.textContent = event.currentTarget.value.trim();

  if (nameOut.textContent === "") {
    nameOut.textContent = "Anonymous";
  }
});
