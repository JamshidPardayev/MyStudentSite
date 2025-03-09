let login = document.getElementById("login");
let password = document.getElementById("password");
let checkLogin = document.getElementById("checkLogin");
let checkPassword = document.getElementById("checkPassword");
let btnSignUp = document.getElementById("btnSignUp");
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    signIn();
});

function signIn() {
    let adminUserObj = JSON.parse(localStorage.getItem("userObj"));

    checkLogin.classList.add("hidden");
    checkPassword.classList.add("hidden");

    if (adminUserObj) {
        if (login.value === adminUserObj.login && password.value === adminUserObj.password) {
            alert("Kirish muvaffaqiyatli!");
            window.location.href = "./crud.html";
        } else {
            if (login.value.trim() == "") {
                checkLogin.classList.remove("hidden");
            }
            if (password.value.trim() == "") {
                checkPassword.classList.remove("hidden");
            }
            alert("Foydalanuvchi Topilmadi, Ma'lumotlarni Tug'ri Kiriting");
        }
    } else {
        alert("Foydalanuvchi topilmadi. Iltimos, avval ro'yxatdan o'ting.");
    }
}