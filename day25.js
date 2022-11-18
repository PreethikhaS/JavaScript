// searching algorithms
//  -> Linear search
//  -> Binary search

// Linear search
// Time complexity -> O(n)
// let nums = [12, 19, 32, 7, 4, 89, 5, 37];
// let target = 17;

// // using flags
// let isFound = false;
// for (let num of nums) {
//   if (num === target) {
//     isFound = true;
//   }
// }

// if (isFound) console.log("found");
// else console.log("not found");

// index -> found return index position. Not found return -1
// let foundAt = -1;
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] === target) {
//     foundAt = i;
//     break;
//   }
// }
// console.log(foundAt);

// scopes
// var -> function

// function scope() {
//   var num = 20;
//   for (let i = 0; i < 5; i++) {
//     num = 10;
//     console.log(num);
//   }
//   console.log("outside", num);
// }

// console.log(num);
// function scope() {
//   // let and const are block scope
//   for (let i = 0; i < 5; i++) {
//     let num = 10;
//     console.log(num);
//   }
//   console.log("outside", num);
// }

// function scope() {
//   num = 20;
//   for (let i = 0; i < 5; i++) {
//     num = 10;
//     console.log(num);
//   }
//   console.log("outside", num);
// }

// console.log(num);
// scope();

// Binary search - sorted
let nums = [4, 5, 7, 12, 19, 32, 37, 89];
let target = 7;

let start = 0;
let end = nums.length - 1;
let foundAt = -1;

while (start <= end) {
  let middle = Math.floor((start + end) / 2);

  if (target === nums[middle]) {
    foundAt = middle;
    break;
  } else if (target < nums[middle]) {
    end = middle - 1;
  } else {
    start = middle + 1;
  }
}

console.log(foundAt);