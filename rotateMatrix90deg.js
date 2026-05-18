// //[
// //
// //   [1, 2, 3],
// //
// //   [4, 5, 6],
// //
// //   [7, 8, 9]
// //
// // ]
//
// //[
// //   [7, 4, 1],
// //   [8, 5, 2],
// //   [9, 6, 3]
// // ]
//
// function rotateMatrix(matrix) {
//   const n = matrix.length;
//
//   const result = Array.from({ length: n }, () => Array(n));
//
//   for (let row = 0; row < n; row++) {
//     for (let col = 0; col < n; col++) {
//       result[col][n - 1 - row] = matrix[row][col];
//     }
//   }
//
//   return result;
// }
//
// console.log(
//   rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );
//
// class EventEmitter {
//   constructor() {
//     this.events = {};
//   }
//
//   on(event, callback) {
//     if (!this.events[event]) {
//       this.events[event] = [];
//     }
//
//     this.events[event].push(callback);
//   }
//   off(event, callback) {
//     if (!this.events[event]) return;
//
//     this.events[event] = this.events[event].filter((item) => item !== callback);
//   }
//   emit(event, data) {
//     if (!this.events[event]) return;
//
//     this.events[event].forEach((callback) => callback(data));
//   }
// }
//
// function mergeSortedArrays(arr1, arr2) {
//   const result = [];
//
//   let firstIndex = 0;
//   let secondIndex = 0;
//
//   while (firstIndex < arr1.length && secondIndex < arr2.length) {
//     if (arr1[firstIndex] <= arr2[secondIndex]) {
//       result.push(arr1[firstIndex]);
//       firstIndex++;
//     } else {
//       result.push(arr2[secondIndex]);
//       secondIndex++;
//     }
//   }
//
//   while (firstIndex < arr1.length) {
//     result.push(arr1[firstIndex]);
//     firstIndex++;
//   }
//   while (secondIndex < arr2.length) {
//     result.push(arr2[secondIndex]);
//     secondIndex++;
//   }
//
//   return result;
// }

class Test {
  constructor() {
    return 'asdas';
  }
}

const testt = new Test();

console.log(testt);
