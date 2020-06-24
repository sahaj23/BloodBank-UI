var who;
window.onload = function () {
  if (localStorage.getItem("user") == null) {
    this.load("edit");
    who = "edit";
  } else {
    this.load("user");
    who = "user";
  }
};

function load(item) {
  var user = JSON.parse(localStorage.getItem(item));
  var name = user.name;
  var contact = user.contact_number;
  var email = user.email;
  //var password = user.password;
  var address = user.address;
  var location = user.location;
  document.getElementById("name").value = name;
  document.getElementById("inputContactNo").value = contact;
  document.getElementById("inputEmail4").value = email;
  // document.getElementById("inputPassword4").value = password;
  document.getElementById("inputAddress").value = address;
  document.getElementById("inputCity").value = location;
}

function update() {
  alert("submit");
  var name = document.getElementById("name").value;
  var contact = document.getElementById("inputContactNo").value;
  var email = document.getElementById("inputEmail4").value;
  var password = document.getElementById("inputPassword4").value;
  var address = document.getElementById("inputAddress").value;
  var location = document.getElementById("inputCity").value;
  var user = JSON.parse(localStorage.getItem(who));
  var role = user.role;
  var data;
  var url;
  var redirectTo;
  if (role === "Hospital") {
    url = "hospital/";
    alert("hospital");

    redirectTo = "hospital/hospital-home.html";
  }
  if (role === "Donor") {
    url = "donor/";

    redirectTo = "Donor/donor-home.html";
  }
  if (role === "Blood Bank") {
    url = "blood-bank/";

    redirectTo = "Blood-bank/bloodbank-home.html";
  }
  data = {
    name: name,
    contact_number: contact,
    email: email,
    address: address,
    role: role,
    location: location,
    password: password,
  };
  alert(url);
  $.ajax({
    type: "PUT",
    url: "http://localhost:8080/" + url,
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function (data1) {
      if (who == "edit") {
        localStorage.removeItem("edit");
        window.location.href = "Admin/home.html";
      } else {
        localStorage.setItem("user", JSON.stringify(data));
        window.location.href = redirectTo;
      }

      //window.location.href = redirectTo;
    },
    error: function () {
      alert("error");
    },
  });
}
