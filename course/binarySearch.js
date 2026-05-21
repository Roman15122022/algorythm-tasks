function binarySearch(arr, target) {
  let rightIndex = arr.length - 1;
  let leftIndex = 0;

  while (leftIndex <= rightIndex) {
    let mid = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[mid] > target) {
      rightIndex = mid;
    }

    if (arr[mid] < target) {
      leftIndex = mid;
    }

    if (arr[mid] === target) return target;
  }
}

const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

console.log(binarySearch(numbers, 35));

function binarySearch(arr, target) {
  let rightIndex = arr.length - 1;

  let leftIndex = 0;

  while (leftIndex <= rightIndex) {
    const mid = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] > target) {
      rightIndex = mid - 1;
    } else {
      leftIndex = mid + 1;
    }
  }

  return -1;
}
