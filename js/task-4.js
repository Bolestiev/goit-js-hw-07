const form = document.querySelector(".login-form");
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
