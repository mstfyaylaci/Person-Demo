if (localStorage.getItem("person") === null) {
    $.getJSON("/assets/MOCK_DATA.json", function (data) {
      localStorage.setItem("person", JSON.stringify(data));
    });
  }
 