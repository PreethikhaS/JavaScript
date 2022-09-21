// string continuation

// let news = "Indians";
// // console.log(news.slice(2, 5));
// // console.log(news.slice(1, 6));
// // console.log(news.slice(0, 6));
// // console.log(news.slice(6));
// // console.log(news.slice(3));
// // console.log(news.slice(9));
// // console.log(news.slice(-5));
// // console.log(news.slice(-6, -2));
// // console.log(news.slice(-2, -6));
// // console.log(news.slice(1, -2));
// // // .com
// let slicedNews = news.slice(0, -1);
// console.log(news, slicedNews);

// substring
// let fname = "vasanth";
// console.log(fname.substring(0, 4));
// console.log(fname.substring(2, 6));
// console.log(fname.substring(2));

// substr
// let fname = "vasanth";
// console.log(fname.substring(0, 2)); // va
// console.log(fname.substr(0, 2)); // va
// console.log(fname.substring(3, 1)); // a
// console.log(fname.substring(1, 3)); // a
// console.log(fname.substr(5, 1)); // va
// console.log(fname.substr(5, 1)); // va
// console.log(fname.substr(5, 1)); // va

// split
// let news = "India is a good country";
// console.log(news.split(" "));
// console.log(news.split(""));
// console.log(news.split("i"));

// loops
// while loop
// for loop
// for of loop
// for in loop

// let num = 5;
// let count = 1;
// while (num > 0) {
//   console.log(num, " ----------> ", count);
//   console.log(`${num} -----> ${count}`);
//   //   num -= 1;
//   count += 1;
// }

// decrement and increment
// pre and post
// let num = 10;
// console.log(num++, num);
// console.log(++num, num);
// console.log(num++ + ++num); // 10 + 12
// console.log(num++ - ++num + num++ + ++num); // 10 - 12 + 12 + 14

// let num = 10;
// console.log(num--, num);
// console.log(--num, num);
// console.log(num++ - num-- + --num - ++num + --num + num-- - ++num); // 10 - 11 + 9 - 10 + 9 + 9 - 10

// for loop
// let num = 10;
// // let i = 0;
// for (let i = 0; i <= num; i++) {
//   if (i == 3) {
//     break;
//   }
//   console.log(i);
// }
// for (;;) {
//   console.log(i);
//   i += 1;
// }

// while (false);
// {
//   console.log("vasanth");
// }

// problems
// 123 -> 1 + 2 + 3 = 6
// 6472 -> 6 + 4 + 7 + 2 = 19

// fibonacci
// prime nos
// reverse of a string
// leap year
// sum of digit
// palindrome MADAM -> MADAM, RACECAR -> RACECAR

// fibonacci series
// 0 1 1 2 3 5 8 13 21 34 ...

// let nums = 10;
// let n1 = 0;
// let n2 = 1;

// console.log(n1);
// console.log(n2);

// for (let i = 2; i < nums; i++) {
//   let result = n1 + n2;
//   n1 = n2;
//   n2 = result;
//   console.log(result);
// }

// prime nos
let num = 20; // 2, 3, 5, 7, 11, 13, 17, 19
console.time();
function isPrimeOrNot(testNum) {
  let isPrime = true;
  for (let i = 2; i < Math.sqrt(testNum); i++) {
    if (testNum % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

for (let i = 2; i <= num; i++) {
  if (isPrimeOrNot(i)) {
    console.log(i);
  }
}
console.timeEnd();

// find num of digits
// 0-9 -> 1, 23 -> 2, 2345 -> 4

// let num = 2349876;
// let count = 0;
// while (num > 0) {
//   digit = num % 10;
//   num = Math.floor(num / 10);
//   count += 1;
// }

// console.log(count);

// sum of digits
// let num = 1243;
// let sum = 0;
// while (num > 0) {
//   digit = num % 10;
//   num = Math.floor(num / 10);
//   sum += digit;
// }

// console.log(sum);

// armstrong number
// 153 -> 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// let num = 133;
// let originalNumber = num;
// let sum = 0;
// while (num > 0) {
//   let digit = num % 10;
//   sum += digit ** 3;
//   num = Math.floor(num / 10);
// }

// if (originalNumber === sum) {
//   console.log("Armstrong number");
// } else {
//   console.log("not an armstrong number");
// }

// perfect number
// 6 -> 1, 2, 3 => 1 + 2 + 3 = 6
