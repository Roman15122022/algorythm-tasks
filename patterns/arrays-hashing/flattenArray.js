console.log(flatten([1, [2, 3], [4, [5, 6]], 7]));

function flatten(arr) {
  const array = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      array.push(...flatten(item));
    } else {
      array.push(item);
    }
  }

  return array;
}
