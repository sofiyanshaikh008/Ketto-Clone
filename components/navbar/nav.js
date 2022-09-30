function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function mytFunction() {
  document.getElementById("tmyDropdown").classList.toggle("tshow");
  console.log(
    'document.getElementById("tmyDropdown").classList:',
    document.getElementById("tmyDropdown").classList
  );
}
window.onclick = function (event) {
  if (!event.target.matches(".tdropbtn")) {
    var dropdowns = document.getElementsByClassName("tdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("tshow")) {
        openDropdown.classList.remove("tshow");
      }
    }
  }
};

document.getElementById("sidecheck").addEventListener("click", function () {
  let side = document.getElementById("sidecheck");
  let lab = document.getElementById("lab");
  let sidebar = document.querySelector("#sidebar");

  if (side.checked == false) {
    sidebar.style.transform = "translateX(-100%)";
    lab.innerHTML = `<i class="fa-solid fa-bars">`;
  } else {
    sidebar.style.transform = "translateX(0)";
    lab.innerHTML = `<i class="fa-solid fa-x"></i>`;
  }
});

document.getElementById("whatsapp").addEventListener("click", function () {
  window.location.href = "https://api.whatsapp.com/send?phone=919930088522";
});
document.getElementById("logo").addEventListener("click", function () {
  window.location.href = "./index.html";
});

window.onscroll = function (e) {
  // print "false" if direction is down and "true" if up
  let status = this.oldScroll > this.scrollY;
  if (status) {
    nav.style.position = "sticky";
  } else {
    nav.style.position = "static";
  }

  this.oldScroll = this.scrollY;
};



let getOTP = () => {
  let number = document.getElementById("mobile").value;
  let logi = document.getElementById("login").value;
  let get = document.getElementById("getotp").value;
  let otp = document.getElementById("otpin").value;
  if (number.length == 10) {
    let OTP = Math.floor((Math.random() + 1) * 1000);
    otpin.style.display = "block";
    login.style.display = "block";
    getotp.style.display = "none";

    alert(OTP);
    localStorage.setItem("otp", JSON.stringify(OTP));
  } else {
    alert("plzz fill filed properly");
  }
};

let login = () => {
  let otp = JSON.parse(localStorage.getItem("otp"));
  let otpin = document.getElementById("otpin").value;
  if (otp == otpin) {
    alert("Login Succesfully");
  } else {
    alert("Wrong Credential");
  }
};
