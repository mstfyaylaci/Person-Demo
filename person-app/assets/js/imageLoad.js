$(()=>{
    const parameter=new URLSearchParams(window.location.search);

    const users = JSON.parse(localStorage.getItem("person"));
    const userId=parameter.get('id')
    const findUser = users.find((u) => u.id == userId);
    //console.log(findUser);

    localStorage.setItem("selectedUserId", findUser.id !==undefined?findUser.id.toString():"1");

    $("#fileUp").change(async function () {
        const photo = $(this).prop("files")[0];
        const srcData = await toBase64(photo);
  
        findUser.imageURL = srcData;
  
         console.log(findUser);
        $("#imageFile").attr("src", srcData);
  
       
        $("#submit").click(function (e) {
          localStorage.setItem("person", JSON.stringify(users));
        });
      });

      $("#deleteImage").click(function (e) {
        findUser.imageURL = "";
  
        $("#imageFile").attr("src", "/assets/images/default.png");
  
        $("#submit").click(function (e) {
          localStorage.setItem("person", JSON.stringify(users));
        });
      });

});

function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }