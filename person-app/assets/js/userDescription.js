$(document).ready(function () {
  $(".main-border-button-item").each(function (index, element) {
    $(`.main-border-button-item[id=${index}]`).click(function (event) {
     window.location="/details.html?id="+event.target.id
    
    });
  });
});

