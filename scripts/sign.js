let url = "https://newjs211app.herokuapp.com/api/user";

let submit = async () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let number = document.getElementById("number").value;

  let data = {
    name,
    email,
    password,
    number,
  };
  if (name == "" || email == "" || password == "" || number == "") {
    alert("Plzz fill The Form Properly");
  } else {
    let res = await fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    alert("Signup Succesfully",window.location="./signin.html")
  }
  name = document.getElementById("name").value = null;
  email = document.getElementById("email").value = null;
  password = document.getElementById("password").value = null;
  number = document.getElementById("number").value = null;
};

document.getElementById("login").onclick = () => {
  window.location.href = "./signin.html";
};
