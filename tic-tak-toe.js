/*
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
  [
      [0, 0, 1],
      [0, 1, 2],
      [2, 1, 0]
  ]
  */

/*We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
*/

const board =  [
    [0, 0, 1],
    [0, 1, 2],
    [2, 1, 0]
]
const board2 = [
    [1, 2, 1],
    [2, 1, 2],
    [2, 1, 1]
]

const checkResult = (arr) => {
    const flat = arr.flat(2);
    for (let i = 0; i < flat.length; i++) {
        if (flat[i] === 0) return -1;
    }
    return 0;
}

console.log(checkResult(board2));
