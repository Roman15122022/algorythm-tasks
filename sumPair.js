// [1,2,3,5,7] , target = 6 => [1,5]


const targetSum = (arr, target) => {
  const map = new Map()

  for (let i = 0; i < arr.length; i++) {
    const dif = target - arr[i]

    if (map.has(dif)) {
      return [arr[map.get(dif)],arr[i]]
    }

    map.set(arr[i], i)
  }
}

console.log(targetSum([1,2,3,5,7], 8))
