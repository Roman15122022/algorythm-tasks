// [1, 2, 3, 1, 2] without 1, 2 => [3]

const without = (arr, ...rest) => {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (!rest.find(item => item === arr[i])){
            answer.push(arr[i]);
        }
    }

    return answer;
}

console.log(without([1,2,3,4,5,6],2,5));
