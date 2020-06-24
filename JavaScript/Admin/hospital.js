function search() {
  var location = document.getElementById("hospitalLocation").value;
  // $("#hospital-table ").empty();
  $("#hospital-table tbody").empty();
  $.ajax({
    type: "GET",
    url: "http://localhost:8080/hospital/" + location,
    success: function (data) {
      for (var i = 0; i < data.length; i++) {
        $("#hospital-table tbody ").append(
          "<tr>" +
            "<th scope='row'></th>" +
            "<td>" +
            data[i].name +
            "</td>" +
            "<td>" +
            data[i].contact_number +
            "</td>" +
            "<td>" +
            data[i].address +
            "</td>" +
            "<td>" +
            data[i].location +
            "</td>" +
            "<td>" +
            data[i].email +
            "</td>" +
            "<td>" +
            "<input " +
            "type='button'" +
            "value='Edit'" +
            "class='btn btn-outline-success'" +
            "onclick='onEdit(this)'" +
            "/>" +
            " </td>" +
            "<td>" +
            "<input " +
            "type='button'" +
            "value='Remove' onclick='deleteHospital(this)'" +
            "class='btn btn-outline-danger'" +
            "/>" +
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

function deleteHospital(o) {
  var email = o.parentNode.parentNode.childNodes[5].innerText;

  $.ajax({
    type: "DELETE",
    url: "http://localhost:8080/hospital/" + email,
    success: function (data) {
      console.log("deleted");
      var p = o.parentNode.parentNode;
      p.parentNode.removeChild(p);
    },
    error: function () {
      alert("error");
    },
  });
}

function onEdit(o) {
  var name = o.parentNode.parentNode.childNodes[1].innerText;
  var contact = o.parentNode.parentNode.childNodes[2].innerText;
  var address = o.parentNode.parentNode.childNodes[3].innerText;
  var location = o.parentNode.parentNode.childNodes[4].innerText;
  var email = o.parentNode.parentNode.childNodes[5].innerText;
  var role = "Hospital";
  var data = {
    name: name,
    contact_number: contact,
    email: email,
    address: address,
    location: location,
    role: role,
  };
  localStorage.setItem("edit", JSON.stringify(data));
  window.location.href = "../edit-details.html";
  console.log(name);
}
