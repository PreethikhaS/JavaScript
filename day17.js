// callback methods
// filter -> used to filter existing values, return value should be boolean
// let nums = [1, 2, 3, 4, 5];
// console.log(
//   nums.filter(function (num) {
//     return num > 2;
//   })
// );

// let names = [
//   "bharadhan",
//   "manick",
//   "soundappan",
//   "sriram",
//   "thamizh",
//   "vasanth",
// ];

// console.log(
//   names.filter(function (name, index, arr) {
//     console.log(name, index, arr);
//     return name.length > 6;
//   })
// );

// map
// let nums = [1, 2, 3, 4, 5];
// let sqNums = nums.map(function (num) {
//   return num ** 2;
// });
// console.log(sqNums);

// let names = [
//   "bharadhan",
//   "manick",
//   "soundappan",
//   "sriram",
//   "thamizh",
//   "vasanth",
// ];

// console.log(
//   names.map(function (name, index, arr) {
//     console.log(name, index, arr);
//     return name.toUpperCase();
//   })
// );

// reduce
// let nums = [1, 2, 3, 4, 5];
// console.log(
//   nums.reduce(function (accumulator, current, index, arr) {
//     console.log(accumulator, current, index, arr);
//     return accumulator + current;
//   }, 10)
// );

// every
// let nums = [1, 2, 3, 4, 5, 10];
// console.log(
//   nums.every(function (num) {
//     return num < 10;
//   })
// );

// some
// let nums = [1, 2, 3, 4, 5, 20];
// console.log(
//   nums.some(function (num) {
//     return num > 10;
//   })
// );

// find
// let nums = [1, 2, 3, 4, 5, 20];
// console.log(
//   nums.find(function (num) {
//     return num > 3;
//   })
// );

// flat -> very important interview qn
// let nums = [
//   1,
//   2,
//   3,
//   4,
//   [5, 20, 30, 40],
//   [1, 2, [3, 4]],
//   [1, 2, 3, [4, 5, [6, 7, [8, 9]]]],
//   [1, 2, 3, [4, 5, [6, 7, [8, [10, 9]]]]],
// ];
// console.log(nums.flat());
// console.log(nums.flat(4));

// foreach
// let nums = [1, 2, 3, 4, 5, 20];
// let sqNums = nums.forEach(function (num) {
//   console.log(num ** 2);
//   return num ** 2;
// });

// console.log(sqNums);

// splice -> (index, delete count, *values to be added)
// let nums = [1, 2, 3, 4, 5, 20];
// nums.splice(2, 0, 10, 20, 30, 40);
// console.log(nums);

console.log((123450).toLocaleString());
