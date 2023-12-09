
function fibo(num){ //O(2^n)
    if (num < 0) return 0;
    if (num <= 2) return 1;
    return  fibo(num-1) + fibo(num-2);

}

console.log(fibo(23))
