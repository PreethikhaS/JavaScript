// -----------------> problem 1 <-----------------
// odd or even

// num = -1;
// if (num % 2 === 0) console.log("even");
// else console.log("odd");

// -----------------> problem 2 <-----------------
// factorial
// num = 5 -> 5 * 4 * 3 * 2 * 1 = 120
// function getFactorial(num) {
//   if (num < 0) return -1;
//   let factorial = 1;
//   for (let i = 2; i <= num; i++) {
//     factorial = factorial * i;
//   }
//   return factorial;
// }

// console.log(getFactorial(1));

// -----------------> problem 3 <-----------------
// prime no
// num is divisible only by 1 or the same num
// function checkPrime(num) {
//   let count = 0;
//   let isPrime = true;
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     count += 1;
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   console.log("count", count);

//   return isPrime;
// }

// console.log(checkPrime(19997));

// -----------------> problem 4 <-----------------
// swap
// num1 = 10;
// num2 = 5;

// logic 1
// let temp = num1;
// num1 = num2;
// num2 = temp;

// logic 2
// num1 = num1 + num2;
// num2 = num1 - num2;
// num1 = num1 - num2;
// console.log(num1, num2); // 10, 5

// -----------------> problem 5 <-----------------
// 3 -> fizz, 5 -> buzz, 3, 5 -> fizzbuzz
// 15 -> 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz
// num = 20;
// for (let i = 1; i <= num; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("fizz buzz");
//   } else if (i % 3 == 0) {
//     console.log("fizz");
//   } else if (i % 5 == 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }

// -----------------> problem 5 <-----------------
// anagram -> sort
// dog == god, coal == cola, sriram != vishal, leef != fell
// function checkAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   let sortedStr1 = str1.split("").sort();
//   let sortedStr2 = str2.split("").sort();
//   let isAnagram = true;
//   for (let i = 0; i < sortedStr1.length; i++) {
//     if (sortedStr1[i] !== sortedStr2[i]) {
//       isAnagram = false;
//       break;
//     }
//   }

//   return isAnagram;
// }

// console.log(checkAnagram("dog", "godd"));

// -----------------> problem 6 <-----------------
// palindrome -> MADAM -> MADAM, RACECAR -> RACECAR

// function checkPalindrome(str1) {
//   let Str1 = str1.split("");
//   let reversedStr1 = str1.split("").reverse();
//   if (Str1.length !== reversedStr1.length) return false;
//   let isPalindrome = true;
//   for (let i = 0; i < Str1.length; i++) {
//     if (Str1[i] !== reversedStr1[i]) {
//       isPalindrome = false;
//       break;
//     }
//   }

//   return isPalindrome;
// }

// console.log(checkPalindrome("mam"));