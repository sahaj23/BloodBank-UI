function register() {
  var name = document.getElementById("name").value;
  var contact = document.getElementById("inputContactNo").value;
  var email = document.getElementById("inputEmail4").value;
  var password = document.getElementById("inputPassword4").value;
  var address = document.getElementById("inputAddress").value;
  var location = document.getElementById("inputCity").value;
  var role;
  var ele = document.getElementsByTagName("input");

  for (i = 0; i < ele.length; i++) {
    if ((ele[i].type = "radio")) {
      if (ele[i].checked) {
        role = ele[i].value;
      }
    }
  }

  var data = {
    name: name,
    contact_number: contact,
    email: email,
    address: address,
    role: role,
    location: location,
    password: password,
  };
  //   console.log(data);
  //   alert(data.location);
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
    alert(url);
    redirectTo = "Blood-bank/bloodbank-home.html";
  }
  $.ajax({
    type: "POST",
    url: "http://localhost:8080/" + url,
    dataType: "JSON",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function (data) {
      window.location.href = redirectTo;
    },
    error: function () {
      alert("error");
    },
  });
}
