const sum = 10;
const arr = [1, 4, 6, 8, 7];

function targetSum(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];

    if (map.has(diff)) {
      return [map.get(diff), i];
    } else {
      map.set(arr[i], i);
    }
  }
}

console.log(targetSum(arr, sum));
