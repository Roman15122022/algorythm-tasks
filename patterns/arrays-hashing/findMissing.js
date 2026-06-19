console.log(findMissingNumber([1, 2, 4, 5]));

function findMissingNumber(arr) {
  if (arr[0] !== 1) {
    return 1;
  }

  for (let i = 1; i < arr.length; i++) {
    const currentItem = arr[i];

    if (currentItem - 1 !== arr[i - 1]) {
      return currentItem - 1;
    }
  }
}

function findMissingNumbe2r(numbers) {
  const expectedLength = numbers.length + 1;

  const expectedSum = (expectedLength * (expectedLength + 1)) / 2;

  const actualSum = numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);

  return expectedSum - actualSum;
}
