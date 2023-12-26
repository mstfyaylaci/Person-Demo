$(() => {
  $("#submit").click(function (e) {
    const users = JSON.parse(localStorage.getItem("person"));
    const findUser = users.find(
      (u) => u.id.toString() == localStorage.getItem("selectedUserId")
    );
    findUser.name = $("#firstName").val();
    findUser.email = $("#Email").val();
    findUser.phone = $("#phoneNumber").val();
    findUser.date_of_birth = $("#dateOfBirth").val();
    findUser.place_of_birth = $("#placeOfBirth").val();
    findUser.address = $("#adress").val();
    findUser.salary = $("#money").val();
    

    if ($("#man").is(":checked")) {
      findUser.gender = "Male";
    }
    if ($("#women").is(":checked")) {
      findUser.gender = "Female";
    }

    localStorage.setItem("person", JSON.stringify(users));
  });
});
