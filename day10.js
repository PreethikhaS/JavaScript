// // Arrays -> [] -> contiguous memory allocation --> mutable
// let nums = [10, 20, 30, "vasanth", true, null, undefined];
// console.log(nums, typeof nums);
// console.log(nums[0], nums[1], nums[2]);
// // indexed, searching, sort -> advantages
// // add, delete -> disadvantage

// let nums = ["pavithra", "suresh", "vishal", "bharadan", 10, 20];
// console.log(nums[0], nums[1]);
// console.log(nums);
// nums[0] = "vasanth";
// console.log(nums, nums.length);

// for (let index = 0; index < nums.length; index++) {
//   console.log(index, nums[index]);
// }

// for of loop -> async
// for (let val of nums) {
//   console.log(val);
// }

// let nums = [1, 2, 3, 4, 5, 6, 7];
// // first and last
// console.log(nums[0], nums[nums.length - 1]);

// add
// let players = ["sachin", "virat", "dhoni"];
// players.push("rohit");
// players.unshift("rohit");
// players.pop();
// players.shift();
// console.log(players);

// players.push("rohit", "jadeja", "raina");
// players.unshift("rohit", "jadeja", "raina");
// console.log(players.unshift("rohit"));
// console.log(players.push("rohit"));
// console.log(players.pop(), players);
// console.log(players.shift(), players);

// methods

// concat
// let playersA = ["sachin", "virat", "dhoni"];
// let playersB = ["samson", "rahul", "kishan"];
// let team = playersA.concat(playersB);
// console.log(team, playersA, playersB);

// fill
// let players = ["sachin", "dhoni", "virat", "rohit"];
// console.log(players.fill("0", 1), players);
// console.log(players.fill("0", 1, 3), players);

// includes -> case sensitive
// let players = ["sachin", "dhoni", "virat", "rohit"];
// console.log(players.includes("sachin"));
// console.log(players.includes("Sachin"));
// console.log(players.includes("sachin", 1));

// indexOf
// let players = ["sachin", "dhoni", "virat", "rohit"];
// console.log(players.indexOf("dhoni"));
// console.log(players.indexOf("dhoni", 3));
// console.log(players.indexOf("raina"));

// join
// let players = ["sachin", "dhoni", "virat", "rohit"];
// console.log(players.join("---"));

// last indexOf
// let players = ["sachin", "dhoni", "virat", "rohit", "sachin"];
// console.log(players.lastIndexOf("sachin"));

// reverse
// let players = ["sachin", "dhoni", "virat", "rohit", "raina", "jadeja"];
// console.log(players.reverse());

// custom reverse
// let result = [];
// let length = players.length;
// for (let i = 0; i < length; i++) {
//   let lastValue = players.pop();
//   result.push(lastValue);
// }

// console.log(result);

// sort
// let players = [
//   "sachin",
//   "dhoni",
//   "virat",
//   "rohit",
//   "raina",
//   "jadeja",
//   "Suresh",
// ];
// let players = ["sachin", "dhoni", "virat", "rohit", "raina", "jadeja"];
// console.log(players.sort((a, b) => a.localeCompare(b)));
// console.log(players.sort((a, b) => b.localeCompare(a)));

// let nums = [2, 4, 1, 5, 7, 9, 19, 28, 32, 23];
// console.log(nums.sort((a, b) => a - b)); // asc
// console.log(nums.sort((a, b) => b - a)); // des

// slice
// let nums = [1, 2, 3, 4, 5];
// console.log(nums.slice(1));
// console.log(nums.slice(1, 3));
// console.log(nums.slice(-4, -1));
