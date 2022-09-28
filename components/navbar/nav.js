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
  