// [1,0,2,30,45,0,456,0] -> [1,2,30,45,456,0,0,0]

const zeroToEndArr = (arr) => {
    let counter = 0;
    const array = [];
    arr.forEach((item) => {
        if (item === 0) counter++;
        else array.push(item);
    })
    for (let i = 0; i < counter; i++) {
        array.push(0)
    }
    return array;
}

const zeroToEndTwo = (arr) => {
  const zeroArr = []
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0){
      zeroArr.push(arr[i])
    }else {
      result.push(arr[i])
    }
  }

  return [...result, ...zeroArr]
}

const zeroToEndThree = (arr) => {
  const zeroArr = []

  return [...arr.filter((number) => {
    if (number === 0){
      zeroArr.push(number)
      return  false
    }
    return true
  }), ...zeroArr]
}

console.log(zeroToEndArr([1,0,2,0,3,0,4,0]))
console.log(zeroToEndTwo([1,0,2,0,3,0,4,0]))
console.log(zeroToEndThree([1,0,2,0,3,0,4,0]))


