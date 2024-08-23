const form = document.querySelector(".login-form");
const labels = document.querySelectorAll("label");
const subm = document.querySelector("button");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formTarg = event.target;
  const email = formTarg.elements.email.value.trim();
  const password = formTarg.elements.password.value.trim();
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const elem = {
    email: event.target.email.value.trim(),
    password: event.target.password.value.trim(),
  };
  console.log(elem);
  form.reset();
});

// styles
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.gap = "10px";
form.style.padding = "24px";
labels[0].style.display = "flex";
labels[0].style.flexDirection = "column";
labels[0].style.gap = "10px";
labels[1].style.gap = "10px";
labels[1].style.display = "flex";
labels[1].style.flexDirection = "column";
form.elements.email.style.height = "40px";
form.elements.email.style.borderRadius = "4px";
form.elements.email.style.border = "1px solid #808080";
form.elements.password.style.height = "40px";
form.elements.password.style.borderRadius = "4px";
form.elements.password.style.border = "1px solid #808080";
subm.style.width = "86px";
subm.style.height = "40px";
subm.style.backgroundColor = "#4E75FF";
subm.style.border = "none";
subm.style.borderRadius = "8px";
subm.style.color = "#FFFFFF";
