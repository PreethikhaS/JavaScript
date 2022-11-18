// closures -> a function binds with lexical env forms closure

// function parentfn() {
//   let age = 10;
//   let num = 5;
//   console.log(num);
//   return function () {
//     console.log("checking", age, num);
//   };
// }

// let child = parentfn();
// child();

// let name = "vasanth";

// function parentfn() {
//   let count = 1;
//   return function () {
//     // console.log(count);
//     if (count % 3 === 0) {
//       console.log("checking");
//     }
//     count += 1;
//   };
// }

// let child = parentfn();
// child();
// child();
// child();

// // IIFE -Immediately invoked function expression
// (function (n1, n2) {
//   console.log("sum", n1, n2);
// })(5, 10);

// function getCredentials() {
//   let username = "vasanth";
//   let password = "1234";
//   return function () {
//     let credentials = { username, password };
//     return credentials;
//   };
// }

// let vasanthCredentials = getCredentials();
// console.log(vasanthCredentials());

// rest vs spread operator -> ...
// spread
// 1, 2, 3, 'vasanth', 'abi', 'vaathu', 6, 7, 8
// let arr1 = [1, 2, 3];
// let arr2 = [6, 7, 8];
// let result = [...arr1, "vasanth", "abi", "vaathu", ...arr2];
// console.log(result);

// let sriram = {
//   bike: "splendor",
//   cricket: "mrf",
// };

// let thamizh = {
//   ...sriram,
//   car: "mercedez",
// };

// console.log(thamizh.bike);

// rest operator

// function add(n1, ...nums) {
//   console.log(nums, n1);
// }

// add(5, 2, 4, 6);

// destructuring
// let [num1, ...nums] = [1, 2, 3, 4];
// console.log(num1, nums);

// let { name, age, place } = {
//   name: "vasanth",
//   age: 24,
//   place: "chennai",
// };

// console.log(name, age, place);

// object properties

// let vishal = {
//   name: "manick vishal",
//   age: 23,
// };

// let suresh = {
//   name: "Suresh Kumar",
//   age: 24,
// };

// let getData = function (place = "chennai", citizen = "UK") {
//   console.log(
//     `${this.name} is ${this.age} years old. I'm from ${place}. I have a ${citizen} citizeship`
//   );
// };

// function borrowing -> call, apply
// getData.call(vishal, "salem", "USA");
// getData.call(suresh);

// getData.apply(vishal, ["Salem", "USA"]);

// // bind
// let getVishalData = getData.bind(vishal, "salem", "USA");
// getVishalData();
// getVishalData();

// prototypes

// let parent = {
//   name: "vasanth",
//   age: 5,
// };

// let child = {
//   name: "santhosh",
// };

// child.__proto__ = parent;
// console.log(child.age);

// let nums = [1, 2, 3];
// console.log(nums.__proto__.__proto__);

// const parentObj = {
//   name: "vasanth",
//   age: 5,
// };

// console.log(Object.getPrototypeOf(nums));
// console.log(Object.hasOwn(parentObj, "ages"));
// Object.freeze(parentObj);
// parentObj["place"] = "chennai";
// // parentObj["name"] = "rajni";
// console.log(parentObj);

// let person = {
//   age: 20,
// };

// Object.defineProperty(person, "name", {
//   value: "vasanth",
//   writable: false,
// });

// // person["name"] = "vasanth";
// console.log(person["name"]);
// person["name"] = "kumar";
// person["age"] = 10;
// console.log(person);

// function add(n1, n2) {
//   console.log(arguments);
// }

// add(5, 10, 15);

// let values = [
//   1,
//   2,
//   "xyz",
//   true,
//   ["a1", "a2"],
//   5,
//   6,
//   ["vasanth", "dinesh"],
//   { place: "chennai" },
// ];

// for (let value of values) {
//   //   console.log(typeof value);
//   if (Array.isArray(value)) {
//     console.log(value);
//   }
// }

// console.log(isNaN("10"));

let discount = 10;
var amount = 1000;
if (true) {
  let discount = 15;
  amount = 1200;
  console.log("In discount: " + discount);
  console.log("In amount: " + amount);
}
console.log("Out discount: " + discount);
console.log("Out amount: " + amount);
