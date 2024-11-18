const map = function(arr, fn) {
    let answer = [];
    for(let i = 0; i < arr.length; i++){
        answer.push(fn(arr[i], i));
    }
    return answer;
};

console.log(map([1, 2, 3], (x) => x * 2));

/*console.log(1);

setTimeout(() => console.log(2));

Promise.reject(3).catch(console.log);

new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

Promise.resolve(5).then(console.log);

console.log(6);

setTimeout(() => console.log(7),0);*/

//1 6 3 5 2 4 7
