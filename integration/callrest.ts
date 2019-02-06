/// <reference path="./../node_modules/@types/jquery/JQuery.d.ts" />
// call to service
function getProductsNew(): Promise<any> {
  return new Promise<any>(function(onResolve: any, onRejected: any) {
    $.ajax({
      url: "http://apiapptrainingservice.azurewebsites.net/api/Products",
      type: "GET"
    })
      .done(onResolve)
      .fail(onRejected);
  });
}

function getProductsNew1() {
  return $.ajax({
    url: "http://apiapptrainingservice.azurewebsites.net/api/Products",
    type: "GET"
  });
}
// access the service method
// async function callRestNew() {
//   console.log("Enter into method");
//   var response = await getProductsNew();
//   console.log(`Response is ${JSON.stringify(response)}`);
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log("Exit from method");
// }
// final call to method accessing service method

function callRestNew() {
  console.log("Enter into method");
  var response = getProductsNew1()
    .then(function(response) {
      console.log(`Response is ${JSON.stringify(response)}`);
    })
    .catch(function(err) {
      console.log(`Response is ${err.status}`);
    });

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Exit from method");
}

callRestNew();
