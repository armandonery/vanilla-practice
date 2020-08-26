const eyeBtn = document.getElementById("eye-btn");
const passwordField = document.getElementById("password");

eyeBtn.addEventListener("click", (e) => {
  if (passwordField.type === "password") {
    // set button class atribute to eye-slash icon
    e.target.setAttribute("class", "fas fa-eye-slash");
    // change the input type to text
    passwordField.type = "text";
  } else {
    // set button class atribute to eye icon
    e.target.setAttribute("class", "fas fa-eye");
    // change the input type to password
    passwordField.type = "password";
  }
});

