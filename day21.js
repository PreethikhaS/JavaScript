// bubble sort

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// let sortedArr = bubbleSort([7, 6, 2, 4, 1, 5, 3]);
// console.log(sortedArr);

// selection sort

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < min) {
//         min = arr[j];
//       }
//     }
//     let minIndex = arr.indexOf(min);

//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }

//   return arr;
// }

// let sortedArr = selectionSort([7, 6, 2, 4, 1, 5, 3]);
// console.log(sortedArr);

// largest of n nums
// let nums = [0, 7, 6, 2, 4, 1, 5];
// let max = nums[0];
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] > max) {
//     max = nums[i];
//   }
// }

// console.log(max);

// minimum of n nums

// let nums = [0, 7, 6, 2, 4, -1, 5];
// let min = nums[0];
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] < min) {
//     min = nums[i];
//   }
// }

// console.log(min);
