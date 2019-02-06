/// <reference path="./../node_modules/@types/jquery/JQuery.d.ts" />
// call to service
function getProducts() {
  let prds: string = "";
  $.ajax({
    url: "http://apiapptrainingservice.azurewebsites.net/api/Products",
    type: "GET",
    async: false
  })
    .done(function(resp) {
      //console.log(JSON.stringify(resp));
      prds = JSON.stringify(resp);
    })
    .fail(function(err) {
      prds = err.status.toString();
    });
  return prds;
}
// access the service method
function callRest(): void {
  console.log("Enter in callRest Method");
  let response = getProducts();
  console.log(`Received Response is 
     ${response}`);
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Exit from callRest Method");
}
// final call to method accessing service method
callRest();
