// [1, 2, 3] => [3, 2, 1]

const  reverse = (arr) => {
    let answer = [];
    for (let i = arr.length-1; i >= 0; i--) {
        answer.push(arr[i]);
    }
    return answer;
}


console.log(reverse([1,2,3]))
