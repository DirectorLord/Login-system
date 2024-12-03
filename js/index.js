"use strict"
// Inputs and buttons
// name
var nameInput = document.getElementById("name");
// email
var emailInput = document.getElementById("email");
// password
var passwordInput = document.getElementById("password");
// signup button
var signUpBtn = document.getElementById("signupbtn");
// login email
var loginEmailInput = document.getElementById("loginEmail");
// login password
var loginPasswordInput = document.getElementById("loginPassword");
// login btn
var loginBtn = document.getElementById("loginbtn");

// Load users
var users = JSON.parse(localStorage.getItem("users")) || [];

// Signup function
signUpBtn.addEventListener("click", function () {
    var email = emailInput.value.trim();
    if (users.some(user => user.email === email)) {
        alert("User already exists!");
    } else {
        users.push({
            name: nameInput.value.trim(),
            email: email,
            password: passwordInput.value.trim()
        });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Sign-up successful!");
    }
    display();
});

// Login function
loginBtn.addEventListener("click", function () {
    var email = loginEmailInput.value.trim();
    var password = loginPasswordInput.value.trim();
    var user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful! Welcome, " + user.name);
    } else {
        alert("Invalid email or password!");
    }
});
// display function
function display(){
    var package =`<div class="text-white">
                <h2 class="c-h1">${users["nameInput"].value}</h2>
            </div>`
    document.getElementById("username").innerHTML = package;
}
