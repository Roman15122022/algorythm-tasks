function mergeSortedArrays(arr1, arr2) {
  const result = [];

  let firstIndex = 0;
  let secondIndex = 0;

  while (firstIndex < arr1.length && secondIndex < arr2.length) {
    if (arr1[firstIndex] <= arr2[secondIndex]) {
      result.push(arr1[firstIndex]);
      firstIndex++;
    } else {
      result.push(arr2[secondIndex]);
      secondIndex++;
    }
  }

  while (firstIndex < arr1.length) {
    result.push(arr1[firstIndex]);
    firstIndex++;
  }

  while (secondIndex < arr2.length) {
    result.push(arr2[secondIndex]);
    secondIndex++;
  }

  return result;
}

console.log(mergeSortedArrays([1, 3, 5], [2]));
