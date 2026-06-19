console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));

function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let firstIndex = 0;
  let secondIndex = 0;

  while (firstIndex < arr1.length && secondIndex < arr2.length) {
    const firstItem = arr1[firstIndex];
    const secondItem = arr2[secondIndex];

    if (firstItem <= secondItem) {
      result.push(firstItem);
      firstIndex++;
    } else {
      result.push(secondItem);
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
