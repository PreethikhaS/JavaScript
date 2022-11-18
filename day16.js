// steps ->
// Enter the hotel
// go the seat
// order food
// prepare food
// serve food
// eat food
// pay the bill
// walk away

// callback method

// function prepareFood(eatFoodCallback) {
//   setTimeout(function () {
//     console.log("prepare food");
//     console.log("serve food");
//     eatFoodCallback();
//   }, 2000);
// }

// function eatFood() {
//   setTimeout(function () {
//     console.log("eat food");
//     console.log("paybill and walk away");
//   }, 1500);
// }

// function hotelScenario() {
//   console.log("Enter hotel");
//   console.log("go to seat");
//   console.log("order food");
//   prepareFood(eatFood);
// }

// hotelScenario();

// Promise

// function prepareFood() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("prepare food");
//     }, 2000);
//   });
// }

// function eatFood() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("eat food");
//     }, 1500);
//   });
// }

// function hotelScenario() {
//   console.log("Enter hotel");
//   console.log("go to seat");
//   console.log("order food");
//   prepareFood()
//     .then(function (result) {
//       console.log(result);
//       console.log("serve food");
//       return eatFood();
//     })
//     .then(function (res) {
//       console.log(res);
//       console.log("paybill");
//     })
//     .catch(function (err) {
//       console.log(err);
//     })
//     .finally(function () {
//       console.log("walk away");
//     });
// }

// hotelScenario();

// ASYNC AWAIT
// function prepareFood() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("prepare food");
//       //   reject("no food");
//     }, 2000);
//   });
// }

// function eatFood() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("eat food");
//     }, 1500);
//   });
// }

// async function hotelScenario() {
//   try {
//     console.log("Enter hotel");
//     console.log("go to seat");
//     console.log("order food");
//     console.log(await prepareFood());
//     console.log("serve food");
//     console.log(await eatFood());
//     console.log("pay bill");
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("walk away");
//   }
// }

// hotelScenario();
