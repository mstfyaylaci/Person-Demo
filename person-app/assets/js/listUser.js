$(document).ready(function () {
    const users = JSON.parse(localStorage.getItem("person"));



    $.each(users, function (indis, user) {
       $(".item").append(`

             <ul class="user-item">
                    <li><img src="${user.imageURL ? user.imageURL:"assets/images/default.png"}" alt="" class="templatemo-item"></li>
                    <li><h4> İsim</h4><span>${user.name}</span></li>
                    <li><h4>Doğum Tarihi</h4><span>${user.date_of_birth}</span></li>
                    <li><h4>E-Mail</h4><span>${user.email}</span></li>
                    <li><div class="main-border-button "><a href="#" class="main-border-button-item" id="${user.id}">İncele</a></div></li>
             </ul>

        
       `)

       

      });


      $("#userSearch").keyup(function (event) { 
        const filterValue = event.target.value.toLowerCase().trim();
       
       
        $(".item").filter(function (indis,listUser) {
            
           //console.log(listUser);
           $.each(listUser.children,function (indis, person) {
            //console.log(person.children[1].children[1].textContent);

            const user=person.children[1].children[1];
           
          
           if (user.textContent.toLocaleLowerCase().trim().includes(filterValue)) {
            //console.log(user.text.toLocaleLowerCase());
           // console.log(user.textContent);
            person.setAttribute("style","display : block")
                
           }
           else{
            person.setAttribute("style","display: none !important")
             }
           })
            
        })
    });



    // $("#userSearch").keyup(function (event) { 
    //     const filterValue = event.target.value.toLowerCase().trim();
       
       
    //     $(".user-item").filter(function (indis,listUser) {
    //       // console.log(listUser);
            
    //         const user=$(listUser).children()[2];
    //         console.log(user);
          
    //        if (user.text.toLocaleLowerCase().trim().includes(filterValue)) {
    //         //console.log(user.text.toLocaleLowerCase());
    //         listUser.setAttribute("style","display : block")
                
    //        }
    //        else{
    //         listUser.setAttribute("style","display: none !important")
    //     }
    //     })
    // });

    



});


