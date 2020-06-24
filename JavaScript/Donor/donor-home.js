function search() {
  var user = JSON.parse(localStorage.getItem("user"));
  var name = user.name;
  console.log(name);
  var location = document.getElementById("searchInput").value;
  console.log(localStorage.getItem("user"));
  $("#blood-table tbody").empty();
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/blood-details/" + location,
    success: function (data) {
      for (var i = 0; i < data.length; i++) {
        var status;
        if (data[i].status == true) {
          status = "Available";
        } else {
          status = "Unavailable";
        }
        $("#blood-table tbody").append(
          "<tr>" +
            "<th scope='row'></th>" +
            "<td>" +
            data[i].organization_name +
            "</td>" +
            "<td>" +
            data[i].blood_group +
            "</td>" +
            "<td>" +
            data[i].address +
            "</td>" +
            "<td>" +
            data[i].location +
            "</td>" +
            "<td>" +
            data[i].contact_number +
            "</td>" +
            "<td>" +
            data[i].quantity +
            "</td>" +
            "<td>" +
            status +
            "</td>" +
            "</tr>"
        );
      }
    },
    error: function () {
      alert("error");
    },
  });
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "../login-page.html";
}
