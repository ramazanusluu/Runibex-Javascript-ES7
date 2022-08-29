const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}
function success(input) {
  input.className = "form-control is-valid";
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // if (username.value === "") {
  //   error(username, "Username zorunlu alan");
  // } else {
  //   success(username);
  // }
  // if (email.value === "") {
  //   error(email, "Email zorunlu alan");
  // } else if (!validateEmail(email.value)) {
  //   error(email, "Email adresi hatalı");
  // } else {
  //   success(email);
  // }
  // if (password.value === "") {
  //   error(password, "Password zorunlu alan");
  // } else {
  //   success(password);
  // }
  // if (repassword.value === "") {
  //   error(repassword, "Re-Password zorunlu alan");
  // } else {
  //   success(repassword);
  // }
  checkRequired([username, email, password, repassword]);
  checkLength(username, 3, 5);
  checkLength(password, 7, 12);
  checkPasswords(password, repassword);
});

//---------------------------------------------------------

function checkRequired(inputs) {
  inputs.forEach(function (input) {
    if (input.value === "") {
      error(input, `${input.id} is required`);
    } else if (!validateEmail(email.value)) {
      error(email, "Email adresi hatalı");
    } else {
      success(input);
    }
  });
}

//---------------------------------------------------------

function checkLength(input, min, max) {
  if (input.value.length < min) {
    error(input, `${input.id} en az ${min} karakter olmalıdır`);
  } else if (input.value.length > max) {
    error(input, `${input.id} en fazla ${max} karakter olmalıdır`);
  } else {
    success(input);
  }
}

//---------------------------------------------------------

function checkPasswords(input1, input2) {
  if (input1.value !== input2.value) {
    error(input2, "Parolalar eşleşmiyor");
  }
}
