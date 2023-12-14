const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
const start = new Date().getTime();

function search(arr, num) { //O(n)
    let answer = 0;
    arr.forEach((item, index) => {
        if (item === num) {
            answer = index;
        }
    })
    return answer;
}

console.log(search(numbers, 79));

const end = new Date().getTime();

console.log(end - start + 'ms')

const start2 = new Date().getTime();

function binarySearch(arr, num) { //O(log n)
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right)/2);

        if (arr[middle] === num){
            return middle;
        }

        if (arr[middle] > num){
            right = middle + 1;
        }
        else {
            left = middle - 1;
        }
    }
}

console.log(binarySearch(numbers, 79))

const end2 = new Date().getTime();

console.log(end2 - start2 + 'ms')

