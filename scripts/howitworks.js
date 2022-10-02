


window.onload  = () =>{
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './styles/navBar.css';
  link.href = './styles/footer.css';
  // append this link to head of document
  document.querySelector('head').append(link);
  
document.getElementById('signin').addEventListener('click', toggleLogin)
}








let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
event.addEventListener('click', () => {
    if (event.classList.contains("active")) {
        event.classList.remove("active");
    }
    else {
        event.classList.add("active");
    }
})
});


$(function () {
// Owl Carousel
let owl = $(".owl-carousel");
owl.owlCarousel({
    items: 3,
    margin: 40,
    loop: true,
    nav: true
});
});

var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

if(index<0){
index = slides.length-1;
}

if(index>slides.length-1){
index = 0;
}

for(let i=0;i<slides.length;i++){
slides[i].style.display = "none";
dot[i].classList.remove("active");
}

slides[index].style.display= "block";
dot[index].classList.add("active");

index++;

setTimeout(changeSlide,2000);

}

changeSlide();


let url = "https://newjs211app.herokuapp.com/api/user";
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

let side = () => {
  let status = document.getElementById("sidebar").classList.toggle("sidecheck");

  let lab = document.getElementById("lab");
  let sidebar = document.querySelector("#sidebar");

  if (!status) {
    sidebar.style.transform = "translateX(-100%)";
    lab.innerHTML = `<i class="fa-solid fa-bars">`;
  } else {
    sidebar.style.transform = "translateX(0)";
    lab.innerHTML = `<i class="fa-solid fa-x"></i>`;
  }
};

let whatsapp = () => {
  window.location.href = "https://api.whatsapp.com/send?phone=919930088522";
};

window.onscroll = function (e) {
  // print "false" if direction is down and "true" if up
  let status = this.oldScroll > this.scrollY;
  if (status) {
    console.log("nav.style.position:", nav.style.position);
  } else {
    nav.style.position = "static";
  }

  this.oldScroll = this.scrollY;
};

let signShow = () => {
  let x = document.getElementById("signin");
  let container = document.getElementById("container");
  let nav = document.getElementById("nav");

  if (x.style.display === "none") {
    x.style.display = "block";
    nav.style.filter = "brightness(0.3)";
    container.style.filter = "brightness(0.3)";
  } else {
    x.style.display = "none";
    nav.style.filter = "brightness(1)";
    container.style.filter = "brightness(1)";
  }
};

let getOTP = async () => {
  let mobile = document.getElementById("mobile").value;

  let input_OTP = document.getElementById("otp");
  let btn1 = document.querySelector("#s21 > #button1");
  let btn2 = document.getElementById("button2");
  let res = await fetch(`${url}`);
  res = await res.json();

  if (mobile == "") {
    alert("Fill The Filed Properly");
  } else {
    let flag = false;
    for (let i = 0; i < res.length; i++) {
      if (res[i].number == mobile) {
        flag = true;
      }
    }

    if (flag == true) {
      let genrate_OTP = Math.floor((Math.random() + 1) * 1000);
      localStorage.setItem("otp", JSON.stringify(genrate_OTP));
      console.log("Hii");
      input_OTP.style.display = "block";
      btn1.style.display = "none";
      btn2.style.display = "flex";
      alert(genrate_OTP);
    } else {
      alert("You have To Sign In First");
      window.location.href = "./sign.html";
    }
  }
};

let login = () => {
  let otp = JSON.parse(localStorage.getItem("otp"));
  let otpin = document.getElementById("otp").value;
  if (otp == otpin) {
    alert("Login Succesfully");
    document.querySelectorAll(".signbtn").innerText = "Sign Out";
  } else {
    alert("Wrong Credential");
  }
};

let Pass = () => {
  let status = document.getElementById("nor").classList.toggle("passt");
  let mobile = document.getElementById("mobile");
  let logPass = document.getElementById("logPass");
  let btn1 = document.querySelector("#s21 > #button1");
  let btn2 = document.querySelector("#button3");

  let input_OTP = document.getElementById("otp");
  if (status) {
    mobile.placeholder = "Enter Your Email";
    input_OTP.placeholder = "Enter Your Password";
    input_OTP.style.display = "block";
    btn2.style.display = "flex";
    btn1.style.display = "none";

    logPass.innerText = "Login Via OTP";
  } else {
    mobile.placeholder = "Email/Mobile Number";
    input_OTP.placeholder = "Enter OTP";
    input_OTP.style.display = "none";
    btn1.innerText = "Get OTP";
    logPass.innerText = "Login Via Password";
    btn2.style.display = "none";
    btn1.style.display = "flex";
  }
};
let signup = () => {
  window.location.href = "./signup/sign.html";
};

// function main() {
//   myFunction();
//   mytFunction();
// //   side();
// //   whatsapp();
// //   signShow();
// //   getOTP();
// //   login();
// //   Pass();
// //   signup();
// }

// window.onload = main();


