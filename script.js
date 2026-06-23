const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signinButton = document.querySelector("#signin");
const message = document.querySelector("#message");
const label = document.querySelector("#label");
const showPassword = document.querySelector("#showPassword");

// check if the email is empty
signinButton.addEventListener("click", function () {
  if (email.value === "") {
    message.textContent = "please enter your email address";
  }
  if (password.value === "") {
    message.textContent = "please enter your password";
  }
  if (
    email.value === "chris.nwasiwe@gmail.com" &&
    password.value === "1234567"
  ) {
    message.textContent = "login successful";
    message.style.color = "green";
    signinButton.style.backgroundColor = "green";
  } else {
    message.textContent = "Invalid email or password";
    message.style.color = "red";
  }
});

showPassword.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
