// Input
const input = [32, 23, 41, 14, 5, 50, 95, 59];

// Output
// [[32, 23], [41, 14, 5, 50], [95, 59]]

function groupByDigitSum(arr) {
  const dictionary = arr.reduce((acc, number) => {
    const arrNum = number.toString().split('')
    const sumOfNum = arrNum.reduce((acc, num) => {
      acc = acc + Number(num)

      return acc
    }, 0)

    acc[sumOfNum] = acc[sumOfNum] ? [...acc[sumOfNum], number] : [number]

    return acc
  }, {})

  return Object.values(dictionary)
}

console.log(groupByDigitSum(input))

