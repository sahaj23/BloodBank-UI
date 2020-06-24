function getCategory(sel) {
  //window.user = sel.options[sel.selectedIndex].text;
}

function onLogin() {
  var sel = document.getElementById("type");
  var text = sel.options[sel.selectedIndex].text;
  var url;
  var redirectTo;
  if (text === "Blood Bank") {
    url = "blood-bank/login";
    redirectTo = "Blood-bank/bloodbank-home.html";
  }
  if (text === "Hospital") {
    url = "hospital/login";
    redirectTo = "hospital/hospital-home.html";
  }
  if (text === "Donor") {
    url = "donor/login";
    redirectTo = "Donor/donor-home.html";
  }
  // if(text==="Admin"){
  //   url="blood-bank/login"
  // }
  var email = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;

  var data = {
    email: email,
    password: password,
  };
  if (text !== "Admin") {
    $.ajax({
      type: "POST",
      url: "http://localhost:8080/" + url,
      dataType: "JSON",
      contentType: "application/json",
      data: JSON.stringify(data),
      success: function (data) {
        if (data === null) {
          alert("Wrong credentials");
        } else {
          alert(url);
          localStorage.setItem("user", JSON.stringify(data));
          window.location.href = redirectTo;
        }
      },
      error: function () {
        alert("error");
      },
    });
  } else {
    if (email === "admin@gmail.com" && password === "password") {
      window.location.href = "Admin/home.html";
    } else {
      alert("Wrong credentials");
    }
  }
}

function redirectToRegisterPage() {
  console.log("called");
  window.location.href = "signup-page.html";
}
