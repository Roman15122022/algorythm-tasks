// [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

const compact = (arr) => {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]){
            answer.push(arr[i]);
        }
    }
    return answer;
}

console.log(compact([0, 1, false, 2, undefined, '', 3, null]))
