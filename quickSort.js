const arr = [0, 4, 3, 1, 2, 5, 7, 8, 6, 9, 12, 10, 11];
let count = 0;

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (i === pivotIndex){
            continue
        }
        if (arr[i] < pivot){
            less.push(arr[i]);
        }else {
            greater.push(arr[i]);
        }
    }
    return [... quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(arr)); // O(log n * n)
console.log('count', count);

