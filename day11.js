// functions type

// function declaration
// function logger() {
//   console.log("logging");
// }

// function expression -> anonymous function
// let logger = function () {
//   console.log("logging....");
// };

// let logger = function vasanth() {
//   console.log("logging....");
// };

// logger();

// FIRST CLASS CITIZEN
// we can able to pass function as a parameter
// we can able to return function as a return type

// callback
// function operations(num1, num2, callbackfn) {
//   callbackfn(num1, num2);
// }

// // operations(10, 15, function (num1, num2) {
// //   console.log(num1 + num2);
// // });

// function add(a, b) {
//   console.log(a + b);
// }

// operations(10, 15, add);

// display();

// function display() {
//   console.log("logging...");
// }

// displayExpression();
// let displayExpression = function () {
//   console.log("logging expression...");
// };

// console.log(name); // undefined
// var name = "vasanth";
// console.log(name); // vasanth

// console.log(age); // error -> cannot access age before initialization
// const age = 10;

// clock methods -> callback fns

// setTimeout(function () {
//   console.log("logging");
// }, 2000);

// setInterval(function () {
//   console.log(Date());
// }, 1000);

// function logger() {
//   console.log("logging...");
// }

// setTimeout(logger, 1000);
// setInterval(logger, 1000);

// const num = [5, 10, 20];
// num[0] = "vasanth";
// console.log(num);
