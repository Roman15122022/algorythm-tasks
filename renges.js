const array = [1, 4, 5, 2, 3, 9, 8, 11, 0]


const ranges = (arr) => {
    const answer = []
    let tempArr = []
    const sortedArr = [...arr.sort((a, b) => a - b)]

    for (let i = 0; i < sortedArr.length; i++) {

        if (!tempArr.length) {
            tempArr.push(sortedArr[i])
            continue
        }

        if (sortedArr[i] !== sortedArr[i - 1] + 1) {
            tempArr.push(sortedArr[i - 1])
            answer.push(tempArr)
            tempArr = [sortedArr[i]]
        }

        if (sortedArr[i] === sortedArr[sortedArr.length - 1]) {
            tempArr.push(sortedArr[i])
        }

    }

    if (tempArr.length) {
        answer.push(tempArr)
    }

    return answer
}

function findRanges(array) {
    // Сортируем массив
    array.sort((a, b) => a - b);

    const ranges = [];
    let start = array[0];
    let end = array[0];

    for (let i = 1; i < array.length; i++) {
        // Проверяем, является ли текущий элемент последовательным
        if (array[i] === end + 1) {
            end = array[i];
        } else {
            // Добавляем диапазон в массив
            if (start === end) {
                ranges.push([start]);
            } else {
                ranges.push([start, end]);
            }
            // Обновляем старт и конец для нового диапазона
            start = array[i];
            end = array[i];
        }
    }

    // Добавляем последний диапазон
    if (start === end) {
        ranges.push([start]);
    } else {
        ranges.push([start, end]);
    }

    return ranges;
}

console.log(ranges(array)) //[[0, 5], [8, 9], [11]]
