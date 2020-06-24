function register() {
  var name = document.getElementById("name").value;
  var contact = document.getElementById("inputContactNo").value;
  var email = document.getElementById("inputEmail4").value;
  var password = document.getElementById("inputPassword4").value;
  var address = document.getElementById("inputAddress").value;
  var location = document.getElementById("inputCity").value;

  var data = {
    name: name,
    contact_number: contact,
    email: email,
    address: address,
    role: "Hospital",
    location: location,
    password: password,
  };
  //   console.log(data);
  //   alert(data.location);

  $.ajax({
    type: "POST",
    url: "http://localhost:8080/hospital/",
    dataType: "JSON",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function (data) {
      window.location.href = "home.html";
    },
    error: function () {
      alert("error");
    },
  });
}
