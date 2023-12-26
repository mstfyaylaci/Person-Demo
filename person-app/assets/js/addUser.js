$(()=>{
    const oldPersons = JSON.parse(localStorage.getItem("person")) || [];
    console.log(oldPersons.length);
    $("#submit").click(function (e) {
        e.preventDefault();
    
        const name = $("#firstName").val();
        const email = $("#Email").val();
        const phone = $("#phoneNumber").val();
        const date_of_birth = $("#dateOfBirth").val();
        const place_of_birth = $("#placeOfBirth").val();
        const address = $("#adress").val();
        const salary = $("#money").val();
        let gender = "";
        if ($("#man").is(":checked")) {
          gender = "Male";
        }
        if ($("#women").is(":checked")) {
          gender = "Female";
        }
    
        let persons = {
          id: oldPersons.length,
          name: name,
          email: email,
          phone: phone,
          date_of_birth: date_of_birth,
          place_of_birth: place_of_birth,
          address: address,
          salary: salary,
          gender: gender,
        };
    
        oldPersons.push(persons);
        localStorage.setItem("person", JSON.stringify(oldPersons));
    
        $(".item").append(`

             <ul class="user-item">
                    <li><img src="${persons.imageURL ? persons.imageURL:"assets/images/default.png"}" alt="" class="templatemo-item"></li>
                    <li><h4> İsim</h4><span>${persons.name}</span></li>
                    <li><h4>Doğum Tarihi</h4><span>${persons.date_of_birth}</span></li>
                    <li><h4>E-Mail</h4><span>${persons.email}</span></li>
                    <li><div class="main-border-button "><a href="#" class="main-border-button-item" id="${persons.id}">İncele</a></div></li>
             </ul>

        
       `)
      });
})