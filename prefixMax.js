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
    while (counter <= arr[0].length) {
        let temp = arr[0][counter] || '';
        let flag = false;
        for (let i = 0; i < arr.length; i++) {
            flag = temp === arr[i][counter];
        }
        if (flag) {
            answer += temp;
        } else return answer
        counter++;
    }
    return answer;
}

console.log(prefixMax(['o323', 'o323', 'o323'])) /// fl
