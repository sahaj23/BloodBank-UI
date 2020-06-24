function register() {
  var user = JSON.parse(localStorage.getItem("user"));
  var name = user.name;
  var contact = user.contact_number;
  var bloodGroup = document.getElementById("inputBloodGroup").value;
  var quantity = document.getElementById("inputQuantity").value;
  var address = user.address;
  var location = user.location;
  var status = true;
  var role = user.role;
  var data = {
    organization_name: name,
    contact_number: contact,
    address: address,
    location: location,
    status: status,
    quantity: quantity,
    blood_group: bloodGroup,
  };
  var redirectTo;
  if (role === "Hospital") redirectTo = "hospital/hospital-home.html";
  if (role === "Blood Bank") redirectTo = "Blood-bank/bloodbank-home.html";
  if (role === "Donor") redirectTo = "Donor/donor-home.html";

  $.ajax({
    type: "POST",
    url: "http://localhost:8080/blood-details/",
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
