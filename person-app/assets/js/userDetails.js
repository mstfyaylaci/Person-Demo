
$(()=>{
    $("#Email").inputmask("email");
    $("#phoneNumber").inputmask({ mask: "(999) 999-9999" });

    const parameter=new URLSearchParams(window.location.search);

    const users = JSON.parse(localStorage.getItem("person"));
    const userId=parameter.get('id')
    const findUser = users.find((u) => u.id == userId);
    //console.log(findUser);

    localStorage.setItem("selectedUserId", findUser.id !==undefined?findUser.id.toString():"1");

    $("#firstName").val(findUser.name);
    $("#Email").val(findUser.email);
    $("#phoneNumber").val(findUser.phone);
    $("#placeOfBirth").val(findUser.place_of_birth);
    $("#dateOfBirth").val(findUser.date_of_birth);
    $("#adress").val(findUser.address);
   
    
   // console.log($("#imageFile"));
   
    const money=findUser.salary.replace("$","");
   
     let num = (Number(money));
     $("#money").val(num);
     

    if (findUser.gender == "Male") {
      $("#women").removeAttr("checked");
      $("#man").attr("checked", true);
    }
    if (findUser.gender == "Female") {
      $("#man").removeAttr("checked");
      $("#women").attr("checked", true);
    }

   
    
    $("#imageFile").attr("src",findUser?.imageURL?findUser.imageURL:"/assets/images/default.png")
    
})