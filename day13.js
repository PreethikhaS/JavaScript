// console.log("first");

// setTimeout(() => {
//   console.log("second");
// }, 0);

// setTimeout(() => {
//   console.log("fourth");
// }, 0);

// console.log("third");

// console.log("first");

// setTimeout(() => {
//   console.log("second");
// }, 3000);

// function add() {
//   console.log("third");
//   setTimeout(() => {
//     console.log("fourth");
//   }, 5000);
// }

// setTimeout(() => {
//   console.log("fifth");
// }, 3000);

// console.log("sixth");

// setTimeout(() => {
//   console.log("seventh");
// }, 1000);

// add();

console.log("start"); // start, undefined, first, end, 123, second, checking, third
console.log(age);

setTimeout(() => {
  console.log("123");
  console.log("second");
}, 0);

console.log("first");

var age = 30;
setTimeout(() => {
  console.log("third");
}, 2000);

var check = function () {
  setTimeout(() => {
    console.log("checking");
  }, 0);
};
check();
console.log("end");
