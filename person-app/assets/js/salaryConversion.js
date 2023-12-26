$(document).ready(async function () {
   
    const {response} =await $.ajax({
       type: "GET",
       url: "https://api.currencybeacon.com/v1/latest?api_key=e7ffaa401756bf02412e0f77bc48d6aa&base=USD",
       dataType: "json",
       
     });
     
    
     console.log( response.rates);
    $.each(response.rates, function (moneyName, money) { 
     $("#currency ").append(
         $("<option>" + moneyName + "</option>")
       );
     });
 
     let selectedCurrency="TRY"
    
 
     $("#currency").on("change input mouseup",function () { 
         const money=Number($("#money").val())
         selectedCurrency=$(this).val()
         $("#currencyMoney").val((response.rates[selectedCurrency]*money).toFixed(2))
         
        
     });
     $("#money").on("change keyup",function () { 
         const money=Number($("#money").val())
         selectedCurrency=$("#currency").val()
         $("#currencyMoney").val((response.rates[selectedCurrency]*money).toFixed(2))
         
        
     });
   });
   