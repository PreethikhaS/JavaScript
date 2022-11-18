// Recursion problems
// base, exponent => 2, 3 => 8
// function exponential(base, power) {
//   let result = 1;
//   for (let i = 1; i <= power; i++) {
//     result = result * base;
//   }

//   return result;
// }

// console.log(exponential(10, 0));

// recursion
// function exponential(base, power) {
//   //   console.log(base, power);
//   if (power === 0) return 1;
//   let result = base * exponential(base, power - 1);
//   //   console.log(base, power, result);
//   return result;
// }

// console.log(exponential(2, 3));
