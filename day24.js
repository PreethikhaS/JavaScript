// Quick sort
// function quickSort(arr) {
//   if (arr.length === 1) return arr;

//   const pivot = arr[arr.length - 1];
//   const leftArr = [];
//   const rightArr = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) leftArr.push(arr[i]);
//     else rightArr.push(arr[i]);
//   }

//   //   console.log(leftArr, rightArr);

//   if (leftArr.length > 0 && rightArr.length > 0) {
//     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
//   } else if (leftArr.length > 0) {
//     return [...quickSort(leftArr), pivot];
//   } else {
//     return [pivot, ...quickSort(rightArr)];
//   }
// }

// const arr = [2, 1, 5, 7, 3, 8];
// console.log(quickSort(arr));

// optimised
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    // if (arr[i] < pivot) leftArr.push(arr[i]);
    // else rightArr.push(arr[i]);
    arr[i] < pivot ? leftArr.push(arr[i]) : rightArr.push(arr[i]);
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [2, 1, 4, 7, 3];
console.log(quickSort(arr));
