const map = function(arr, fn) {
    let answer = [];
    for(let i = 0; i < arr.length; i++){
        answer.push(fn(arr[i], i));
    }
    return answer;
};

console.log(map([1, 2, 3], (x) => x * 2));
