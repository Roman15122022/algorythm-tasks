function f(arr1, arr2) {
  const result = [];

  for (let i = 0, i1 = 0, i2 = 0; i < arr1.length + arr2.length; i++) {
    result.push(arr1[i1] < arr2[i2] ? arr1[i1++] : arr2[i2++]);
  }

  return result;
}

function f2(arr1, arr2) {
  const result = [];

  for (let i = 0, i1 = 0, i2 = 0; i < arr1.length + arr2.length; i++) {
    if (arr1[i1] < arr2[i2]) {
      result.push(arr1[i1]);
      i1++;
      continue;
    }

    if (arr1[i1] > arr2[i2]) {
      result.push(arr2[i2]);
      i2++;
      continue;
    }

    if (!arr2[i2]) {
      result.push(arr1[i1]);
      i1++;
    }

    if (!arr1[i1]) {
      result.push(arr2[i2]);
      i2++;
    }
  }

  return result;
}

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
console.log(f2([1, 3, 5], [2]));

function f3(arr1, arr2) {
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

console.log(f3([1, 3, 5], [2]));
