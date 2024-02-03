
function fibo(num){ //O(2^n)
    if (num < 0) return 0;
    if (num <= 2) return 1;
    return  fibo(num-1) + fibo(num-2);
}

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibo(23))
console.log(fib(23))
