let studentTitleName = document.getElementById("studentTitleName");
let profileCard = document.getElementById("profileCard");
let users = JSON.parse(localStorage.getItem("usersKey")) || [];

let selectedUserIndex = localStorage.getItem("selectedUserIndex");
console.log(selectedUserIndex);

function read() {
  profileCard.innerHTML = "";
  if (selectedUserIndex !== null) {
    const user = users[selectedUserIndex];
    
    profileCard.innerHTML += `
      <div class="cardInfo flex max-sm:flex-col-reverse">
        <div class="cardImg max-h-[216px] max-w-[209px] ">
          <img src="./image/student.jpg" alt="img" class="w-[100%] h-[100%] rounded-[8px]">
        </div>
        <div class="cardForm ml-[40px] max-sm:ml-[0px]">
          <div class="part">
            <h4 class="text-[#ACACAC] text-[12px] font-semibold">Name</h4>
            <p class="text-[14px] mt-[2px] mb-[15px]">${user.name}</p>
          </div>
          <div class="part">
            <h4 class="text-[#ACACAC] text-[12px] font-semibold">Email</h4>
            <p class="text-[14px] mt-[2px] mb-[15px]">${user.email}</p>
          </div>
          <div class="part">
            <h4 class="text-[#ACACAC] text-[12px] font-semibold">Phone</h4>
            <p class="text-[14px] mt-[2px] mb-[15px]">${user.number}</p>
          </div>
          <div class="part">
            <h4 class="text-[#ACACAC] text-[12px] font-semibold">Date admission</h4>
            <p class="text-[14px] mt-[2px] mb-[15px]">${user.admissionDate}</p>
          </div>
        </div>
      </div>
      <img src="./image/Vector2.svg" alt="vector">
    `;
  };
}

let leftClose = document.getElementById("leftClose");
let profileLeft = document.getElementById("profileLeft");
let h2 = document.querySelector("#profileLeft h2");
let adminName = document.getElementById("adminName");
let btnStudent = document.getElementById("btnStudent");
let logOut = document.getElementById("logOut");
let isOpen = true;

leftClose.onclick = function () {
  if (isOpen) {
    profileLeft.style.width = "70px";
    profileLeft.style.padding = "3px";
    adminName.style.fontSize = "12px";
    h2.style.fontSize = "12px";
    h2.style.width = "70px";
    h2.style.paddingLeft = "0px";
    btnStudent.style.display = "none";
    logOut.style.display = "none";
  } else {
    profileLeft.style.width = "290px";
    profileLeft.style.padding = "18px 25px";
    adminName.style.fontSize = "16px";
    h2.style.fontSize = "20px";
    h2.style.width = "190px";
    h2.style.paddingLeft = "12px";
    btnStudent.style.display = "block";
    logOut.style.display = "block";
  }
  isOpen = !isOpen;
};

read();
