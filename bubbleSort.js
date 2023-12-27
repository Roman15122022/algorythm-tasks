const arr = [0, 4, 3, 1, 2, 5, 7, 8, 6, 9, 12, 10, 11];
let count = 0;

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
            count++
        }
    }
    return arr;
}

console.log(bubbleSort(arr)); // O(n^2)
console.log('count', count);
