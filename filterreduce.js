//filter, reduce and map

//FILTER
let nums = [42, 51, 24, 98, 65, 12];

//if we have a condition that is to take all positive values
//before going with forEach, we can use filter
//Filter takes one parameter, we pass a value in funtion it returns true/false
//filter allows the value only if it is true

//filter takes argumemt or parameter and checks for conditon
nums.filter((n) => {
  return n % 2 === 0;
});

console.log(
  nums.filter((n) => {
    return n % 2 === 0;
  })
);

//apply forEach after filtering, so that it returns only the nessessary values

nums
  .filter((n) => n % 2 === 0)
  .forEach((n) => {
    console.log(n * 2);
  });

//MAP
//Can also use map for double the values like above
//Map takes a value and changes it

nums
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .forEach((n) => {
    console.log(n);
  });

//REDUCE
//What if we dont want all the values but addition of all the value
//instead of forEach we can use reduce method
//with map reduce, we map it and reduce it to one single value

let result = nums
  .filter((n) => n % 2 == 0)
  .map((n) => n * 2)
  .reduce((a, b) => a + b);
console.log("---------------");
console.log(result);
