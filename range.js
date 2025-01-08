/*
  range ([1, 4, 5, 2, 3 ,35 9, 10 ,8 11, 0]) 7 '0-5,8-9,11'|
  range ([1, 4, 3, 2]) // ‘1-4"
*/

function range(arr) {
  const sortedArr = arr.sort((a, b) => a - b)
  let answer = []
  let currentDiapazon = [sortedArr[0]]

  for (let i = 1; i < sortedArr.length; i++) {
    const current = sortedArr[i]
    const lastInDiapazon = currentDiapazon.at(-1)

    if (current - 1 !== lastInDiapazon) {
      answer.push(currentDiapazon)
      currentDiapazon = [current]
    } else {
      currentDiapazon.push(current)
    }
  }

  if (currentDiapazon.length){
    answer.push(currentDiapazon)
  }

  return answer.map(item => {
    if (item.length < 2){
      return item[0]
    }
    return `${item[0]} - ${item.at(-1)}, `
  })
}

console.log(range([1, 4, 5, 2, 3, 35, 9, 10, 8, 11, 0]))
