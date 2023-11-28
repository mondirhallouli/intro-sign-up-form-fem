let firstName = document.querySelector(".firstname");
let lastName = document.querySelector(".lastname");
let email = document.querySelector("input[type='email']");
let password = document.querySelector("input[type='password']");
let form = document.querySelector("form");
let errors = document.querySelectorAll(".error-msg");
let fnameErr = document.querySelector(".fname");
let lnameErr = document.querySelector(".lname");
let emailErr = document.querySelector(".email");
let passwordErr = document.querySelector(".password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // reset the inputs' styles and hide error messages
    lastName.classList.remove('error');
    lnameErr.style.display = "none";
    firstName.classList.remove('error');
    fnameErr.style.display = "none";
    email.classList.remove('error');
    emailErr.style.display = "none";
    password.classList.remove('error');
    passwordErr.style.display = "none";


    // display the error message and highlight the inputs accordingly
    if (!firstName.value) {
        firstName.classList.add("error");
        fnameErr.style.display = "block";
    }
    if (!lastName.value) {
        lastName.classList.add("error");
        lnameErr.style.display = "block";
    }
    if (!email.value) {
        email.classList.add("error");
        emailErr.style.display = "block";
    }
    if (!password.value) {
        password.classList.add("error");
        passwordErr.style.display = "block";
    }
});
