const arr = [0, 4, 3, 1, 2, 5, 7, 8, 6, 9, 12, 10, 11];

let count = 0;

const selectionSort = (arr) => {
    let array = [...arr]; // Создаем копию массива, чтобы не изменять оригинальный
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
            count++;
        }
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    }
    return array;
};


console.log(selectionSort(arr));// O(1/2n^2) -> O(n^2)
console.log('count', count);
