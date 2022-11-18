const p = new Promise(function (resolve, reject) {
  let id = 10;
  setTimeout(function (id, userName) {
    console.log(`Reading data from database with ${id}...`);
    let userName = "vasanth";
  }, 3000);
});

p.then(function (result) {
  console.log(result);
}).catch(function (error) {
  console.log(error);
});
