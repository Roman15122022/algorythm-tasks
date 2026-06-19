const findMissingNumber = [1, 2, 4, 5, 6];
const findMissingNumber2 = [1, 3, 4, 5];
const findMissingNumber3 = [1, 2, 3, 5];

const find = (arr) => {
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i] - 1;
    }
  }
};

// console.log(find(findMissingNumber3));

function findMissing2(arr) {
  const expectedLength = arr.length + 1;
  const expectedSum = (expectedLength * (expectedLength + 1)) / 2;

  return expectedSum - arr.reduce((acc, item) => (acc += item), 0);
}

console.log(findMissing2(findMissingNumber));
console.log(findMissing2(findMissingNumber2));
console.log(findMissing2(findMissingNumber3));
