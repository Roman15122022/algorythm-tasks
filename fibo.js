
function fibo(num){
    let answer = 0
    if (num < 0) return 0;
    if (num <= 2) return 1;
    return  fibo(num-1) + fibo(num-2);

}

console.log(fibo(23))
