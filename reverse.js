// [1, 2, 3] => [3, 2, 1]

const  reverse = (arr) => {
    let answer = [];
    for (let i = arr.length-1; i >= 0; i--) {
        answer.push(arr[i]);
    }
    return answer;
}

const reverse2 = (arr) => {
    return arr.reverse();
}


console.log(reverse([1,2,3]))
console.log(reverse2([1,2,3]))

