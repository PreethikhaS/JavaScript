// class - blue print of an object
// object - real world entity
// class Parent {
//   constructor(name, place) {
//     this.name = name;
//     this.place = place;
//   }

//   getName() {
//     return `${this.name} is my name`;
//   }

//   getPlace() {
//     return this.place;
//   }
// }

// let vinayagam = new Parent("vinayagam", "Vellore");
// console.log(vinayagam.getName(), vinayagam.name);

// attributes or properties
// methods or behaviour
// class Human {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }

//   sleep() {
//     console.log(this.name, "sleeping");
//   }

//   eat() {
//     console.log("eating");
//   }

//   walk() {
//     console.log("walking");
//   }
// }

// let vasanth = new Human("vasanth", 24, "male");
// vasanth.sleep();
// vasanth.color = "dark tone";
// console.log(vasanth);
// let pavithra = new Human("Pavithra", 24, "female");
// console.log(pavithra);

class Product {
  constructor(name, price, quantity = 1) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotalPrice() {
    this.totalPrice = this.quantity * this.price;
    return this.totalPrice;
  }
}

class Phone extends Product {
  constructor(name, price, quantity, isBackcaseAvailable = false) {
    super(name, price, quantity);
    this.isBackcaseAvailable = isBackcaseAvailable;
  }

  // method overriding -> polymorphism
  calculateTotalPrice() {
    let discount = 0.2;
    this.totalPrice = this.quantity * this.price;
    this.totalPrice = this.totalPrice - this.totalPrice * discount;
    return this.totalPrice;
  }
}

// let iphone13 = new Product("Iphone", 70000, 1);
// let realme3 = new Product("Realme 3", 8500, 1);
// realme3.isBackcaseAvailable = true;
// let tomato = new Product("tomato", 200, 1);
// let iphoneCharger = new Product("Iphone charger 20w", 5000, 1);
// console.log(iphone13, iphoneCharger, realme3);

let iphone13 = new Phone("Iphone", 70000, 1);
// console.log(iphone13.isBackcaseAvailable);

function foo() {
  console.log("Inside Foo");
  return bar;
}
function bar() {
  console.log("Inside Bar");
  return test;
}

function test() {
  console.log("Inside Test");
}

// function chaining
// foo()()();

// function foo(bar) {
//   console.log("Inside Foo");
//   bar();
// }
// function bar(test) {
//   console.log("Inside Bar");
// }
// foo(bar);

// function check(value) {
//   console.log(value);
// }
// function getTrip() {
//   return new Promise((res, rej) => {
//     setTimeout(function () {
//       res("Lets go to Trip");
//     }, 1500);
//   });
// }
// async function execute() {
//   value = await getTrip();
//   check(value);
// }

// execute();

// getTrip().then((res) => check(res));

// recursion -> calling myself until a condition is satisfied.

// function getFactorial(num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//   }
//   console.log(fact);
// }

// function getFactorial(num) {
//   // base condition
//   if (num < 0 || num === undefined) return -1;
//   if (num === 1 || num === 0) return 1;
//   return num * getFactorial(num - 1);
// }

// console.log(getFactorial(0));

// let nums = [1, 2, 3, 4, 5];
// // sum

// function findSum(arr) {
//   let total = 0;
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     total += arr[i];
//   }
//   return total;
// }
// console.time();
// console.log(findSum(nums));
// console.timeEnd();

// let nums = [1, 2, 3, 4, 5];

// function findSum(arr) {
//   if (arr.length === 0) return -1;
//   if (arr.length === 1) return arr[0];
//   let firstValue = arr.shift();
//   return firstValue + findSum(arr);
// }

// console.log(findSum(nums));

// [1, 2, [3, 4]]; // [1, 2, 3, 4]
let arr = [
  0,
  1,
  2,
  [3, 4],
  true,
  "vasanth",
  undefined,
  null,
  [5, 6, [7, 8, [9, 10]]],
];

// function flatten(arr) {
//   let flattenedArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       // flattenedArray = flattenedArray.concat(flatten(arr[i]));
//       flattenedArray = [...flattenedArray, ...flatten(arr[i])];
//     } else {
//       flattenedArray.push(arr[i]);
//     }
//   }
//   return flattenedArray;
// }

// console.log(flatten(arr));

console.log(arr.join().split(","));
