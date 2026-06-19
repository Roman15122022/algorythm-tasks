console.log(moveZeros([1, 0, 2, 0, 0, 3]));

function moveZeros(arr) {
  let count = 0;

  const result = arr.filter((item) => {
    if (item === 0) {
      count++;
      return false;
    }

    return true;
  });

  for (let i = 0; i < count; i++) {
    result.push(0);
  }

  return result;
}
