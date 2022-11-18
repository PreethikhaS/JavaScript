// callback
// single threaded synchronuous
// steps ->
// Enter the hotel
// go the seat
// order food
// prepare food
// serve food
// eat food
// pay the bill
// walk away

// function preparingFood() {
//   setTimeout(() => {
//     console.log("preparing food");
//     console.log("serving the food");
//     eatFood();
//   }, 2000);
// }

// function eatFood() {
//   setTimeout(() => {
//     console.log("eating the food");
//     console.log("pay bill and walk away");
//   }, 3000);
// }

// function hotel() {
//   console.log("Enter the hotel and find a seat");
//   console.log("ordering the food");
//   prepareFood();
// }

// hotel();

// seperation of concern or loosely coupled
// dependency injection

// function circle(radius) {
//   return 3.14 * radius * radius;
// }

// function square(side1, side2) {
//   return side1 * side2;
// }

// function rectange(length, breadth) {
//   return length * breadth;
// }

// // let radius = 5;
// let side = 4;
// // let len = 3;
// // let breadth = 5;

// // console.log(areaOfCircle(radius));
// console.log(square(side, side));
// // console.log(areaOfRectangle(len, breadth));

// function calculateArea(fn) {
//   console.log(fn);
// }

// // calculateArea(circle);
// // calculateArea(square);
// // calculateArea(rectange);

// function validate(username, password) {
//   let originalUserName, originalPassword;
//   setTimeout(() => {
//     // console.log("calling database");
//     originalUserName = "vasanth";
//     originalPassword = "123";
//   }, 2000);
//   console.log(originalUserName, originalPassword);
//   if (username === originalUserName && password === originalPassword) {
//   } else {
//     console.log("invalid data");
//   }
// }

// validate("vasanth", "123");
