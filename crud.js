let addBtn = document.getElementById("addBtn");
let nameInp = document.getElementById("name");
let emailInp = document.getElementById("email");
let numberInp = document.getElementById("number");
let enrollInp = document.getElementById("enroll");
let click = document.getElementById("click");
let nameMis = document.getElementById("nameMis");
let emailMis = document.getElementById("emailMis");
let numberMis = document.getElementById("numberMis");
let enrollMis = document.getElementById("enrollMis");
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let inputclear = document.querySelectorAll("input");
let users = [];

window.onload = function () {
  const storedUsers = localStorage.getItem("usersKey");
  if (storedUsers) {
    users = JSON.parse(storedUsers);
    read();
  }
};

let countBtn = 0;
addBtn.addEventListener("click", function () {
  if (countBtn == 0) {
    form.style.transform = "translateY(150%)";
    addBtn.textContent = "CLOSE NEW STUDENT";
    countBtn++;
  } else if (countBtn == 1) {
    form.style.transform = "translateY(-150%)";
    addBtn.textContent = "ADD NEW STUDENT";
    countBtn--;
  }
  console.log(countBtn);
});

function create() {
  let userObject = {
    name: nameInp.value,
    email: emailInp.value,
    number: numberInp.value,
    enroll: enrollInp.value,
    admissionDate: new Date().toLocaleDateString(),
  };
  check(userObject);
}

function check(arg) {
  let count = 0;
  if (arg.name.trim() == "") {
    nameMis.style.display = "block";
  } else {
    nameMis.style.display = "none";
    count++;
  }
  if (arg.email.trim() == "") {
    emailMis.style.display = "block";
  } else {
    emailMis.style.display = "none";
    count++;
  }
  if (arg.number.trim() == "") {
    numberMis.style.display = "block";
  } else {
    numberMis.style.display = "none";
    count++;
  }
  if (arg.enroll == "") {
    enrollMis.style.display = "block";
  } else {
    enrollMis.style.display = "none";
    count++;
  }
  console.log(count);

  if (count === 4) {
    users.push(arg);
    localStorage.setItem("usersKey", JSON.stringify(users));
    read();
  }
}

let currentIndex = -1;
function updateUser(index) {
  currentIndex = index;
  nameInp.value = users[index].name;
  emailInp.value = users[index].email;
  numberInp.value = users[index].number;
  enrollInp.value = users[index].enroll;
  form.style.transform = "translateY(150%)";
  addBtn.textContent = "CLOSE NEW STUDENT";
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (currentIndex >= 0) {
    updateArray(currentIndex);
  } else {
    create();
  }
});

function updateArray(index) {
  users[index] = {
    name: nameInp.value,
    email: emailInp.value,
    number: numberInp.value,
    enroll: enrollInp.value,
    admissionDate: users[index].admissionDate,
  };

  localStorage.setItem("usersKey", JSON.stringify(users));
  read();
  resetForm();
}

function deleteUser(index) {
  users.splice(index, 1);
  localStorage.setItem("usersKey", JSON.stringify(users));
  read();
}

function resetForm() {
  inputclear.forEach((input) => {
    input.value = "";
  });
  form.style.transform = "translateY(-150%)";
  addBtn.textContent = "ADD NEW STUDENT";
  currentIndex = -1;
}
function read() {
    tbody.innerHTML = "";
    const usersWithIndex = users.map((user, index) => ({ user, index }));
    usersWithIndex.sort((a, b) => a.user.name.localeCompare(b.user.name));
    usersWithIndex.forEach(({ user, index }) => {
      tbody.innerHTML += `
              <tr class="bg-[white] border-[1px]" onclick="showUserDetails(${index})">
                  <td class="py-[3px] px-[5px]"><img src="./image/download.png" alt="admin" class="w-[50px] h-[40px] rounded-[50%]"></td>
                  <td class="inpName py-[3px] px-[5px]">${user.name}</td>
                  <td class="py-[3px] px-[5px]">${user.email}</td>
                  <td class="py-[3px] px-[5px]">${user.number}</td>
                  <td class="py-[3px] px-[5px]">${user.enroll}</td>
                  <td class="py-[3px] px-[5px]">${user.admissionDate}</td>
                  <td class="py-[3px] px-[5px] text-[20px] text-[#0000008A] hover:text-[#ffdb11] cursor-pointer duration-[.3s]"><i class='bx bx-dots-horizontal-rounded'></i></td>
                  <td class="py-[3px] px-[5px]"><button onclick="updateUser(${index})"><i class='bx bx-edit-alt text-[#FEAF00] text-[20px] hover:text-[#ffdb11] cursor-pointer duration-[.3s]'></i></button></td>
                  <td class="py-[3px] px-[5px]"><button onclick="deleteUser(${index})"><i class='bx bx-box text-[#FEAF00] text-[20px] hover:text-[#ffdb11] cursor-pointer duration-[.3s]'></i></button></td>
              </tr>
          `;
    });
    resetForm();
  }
  

function showUserDetails(index) {
  localStorage.setItem("selectedUserIndex", index);
  window.location.href = "profile.html";
}

function searchFunction(inpValue) {
  let userNames = document.querySelectorAll(".inpName");

  userNames.forEach((name) => {
    if (name.textContent.toLowerCase().includes(inpValue.value.toLowerCase())) {
      name.parentElement.style.display = "table-row";
    } else {
      name.parentElement.style.display = "none";
    }
  });
}

let leftClose = document.getElementById("leftClose");
let crudeLeft = document.getElementById("crudeLeft");
let h2 = document.querySelector("#crudeLeft h2");
let adminName = document.getElementById("adminName");
let btnStudent = document.getElementById("btnStudent");
let logOut = document.getElementById("logOut");
let isOpen = true;
leftClose.onclick = function () {
  if (isOpen) {
    crudeLeft.style.width = "70px";
    crudeLeft.style.padding = "3px";
    adminName.style.fontSize = "12px";
    h2.style.fontSize = "12px";
    h2.style.width = "70px";
    h2.style.paddingLeft = "0px";
    btnStudent.style.display = "none";
    logOut.style.display = "none";
  } else {
    crudeLeft.style.width = "290px";
    crudeLeft.style.padding = "18px 25px";
    adminName.style.fontSize = "16px";
    h2.style.fontSize = "20px";
    h2.style.width = "190px";
    h2.style.paddingLeft = "12px";
    btnStudent.style.display = "block";
    logOut.style.display = "block";
  }
  isOpen = !isOpen;
};
