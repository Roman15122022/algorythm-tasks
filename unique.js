// [1, 2, 3, 1, 2] => [1, 2, 3] without Set

const unique = (arr) => {
    let answer = [];
    let counter = {};
    for (let i = 0; i < arr.length; i++) {
        if (!counter[arr[i]]){
            answer.push(arr[i]);
            counter[arr[i]] = true;
        }
    }
    return answer;
}

console.log(unique([1,2,3,1,2]))
