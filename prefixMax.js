/*const prefixMax = (arr) => {
    const dictionary = {};
    let count = 0;
    while (count < arr.length) {
        arr.forEach((item) => {
            dictionary[item[count]] = (dictionary[item[count]] || 0) + 1;
        })
        const strArr = Object.keys(dictionary);
        const valueArr = Object.values(dictionary)
        if (valueArr[count] / arr.length !== 1) {
            let answer = ''
            for (let i = 0; i < count; i++) {
                answer += strArr[i];
            }
            return answer;
        }
        count++;
    }
}*/

const prefixMax = (arr) => {
    let answer = '';
    let counter = 0;

    while (counter < arr[0].length) {
        let temp = arr[0][counter];

        for (let i = 1; i < arr.length; i++) {
            if (temp !== arr[i][counter]) {
                return answer;
            }
        }

        answer += temp;
        counter++;
    }

    return answer;
}

console.log(prefixMax(['o323432423', 'o32343434', 'o323432432'])) /// fl
