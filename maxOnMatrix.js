const matrix = [
    [5, 2, 9],
    [8, 3, 1],
    [6, 7, 4]
]

const maxOnMatrix = (arr) => {
   let max = arr[0][0];

   arr.forEach((item) => {
       item.forEach((num) => {
           if (num > max) max = num;
       })
   })

    return max;
}

const max = (arr) => {
    return Math.max(...arr.flat(2))
}

console.log(maxOnMatrix(matrix))
console.log(max(matrix))
