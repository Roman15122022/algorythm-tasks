const findMissingNumber = [1, 2, 4, 5, 6];
const findMissingNumber2 = [1, 3, 4, 5];
const findMissingNumber3 = [1, 2, 3, 5];

const find = (arr) => {
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            return arr[i] - 1;
        }
    }
}

console.log(find(findMissingNumber3))
