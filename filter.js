const filter = function(arr, fn) {
    let answer = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)){
            answer.push(arr[i]);
        }
    }
    return answer;
};

console.log(filter([1,2,6,7,8,], (x) => x>5))

