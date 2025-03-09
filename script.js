let login = document.getElementById("login");
let password = document.getElementById("password");
let checkLogin = document.getElementById("checkLogin");
let checkPassword = document.getElementById("checkPassword");
let btnSignUp = document.getElementById("btnSignUp");
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    create();
});

function create() {
    let userObj = {
        login: login.value,
        password: password.value
    };
    check(userObj);
}

function check(userObj) {
    let count = 0;
    if (login.value.trim() == "") {
        checkLogin.classList.remove("hidden");
        count++;
    } else {
        checkLogin.classList.add("hidden");
    }
    if (password.value.trim() == "") {
        checkPassword.classList.remove("hidden");
        count++;
    } else {
        checkPassword.classList.add("hidden");
    }
    if (count === 0) {
        localStorage.setItem("userObj", JSON.stringify(userObj));
        window.location.href = "./singin.html";
        login.value = "";
        password.value = "";
    }
}