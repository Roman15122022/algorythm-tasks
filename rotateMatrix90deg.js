//[
//
//   [1, 2, 3],
//
//   [4, 5, 6],
//
//   [7, 8, 9]
//
// ]

//[
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

function rotateMatrix(matrix) {
  const n = matrix.length;

  const result = Array.from({ length: n }, () => Array(n));

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      result[col][n - 1 - row] = matrix[row][col];
    }
  }

  return result;
}

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
