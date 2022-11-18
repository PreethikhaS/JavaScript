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

// function includeFalseValue(){
//     arr.includes( number== null && number == undefined)
//     return fi;
// }
// includeFalseValue()
// console.log(arr.join().split(","));
// var flattened = [].concat.apply([],[].concat.apply([],arr));
// console.log(flattened)

//  var flatted = arr.every(includeFalseValue).join(', ');
// console.log(flatted);


// element = arr.flat(4);
// var flatted = arr.filter(function( element ) {
//    return element !== undefined;
// });

// arr.reduce((acc, val) => acc.concat(val), []);
// const flattened = [...flatten(arr, Infinity)];

// // const flattened = (arr) => [].concat(...arr);
// // console.log(flattened)

// console.log(flattened);

// console.log(Array.from(arr).join(','));

var flatted = arr.some(undefined).join(',');
console.log(flatted);