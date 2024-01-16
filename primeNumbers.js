const isPrime = (num) => {
    for (let i = 2; i < num - 1; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

const getPrimes = (num) => {
    const arr = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    return arr;
}


console.log(isPrime(71))
console.log(getPrimes(71))


const getPrimeOptimizated = (num) => { //O(loglog n)
    const seive = [];
    const primes = [];

    for (let i = 2; i < num; i++) {
        if (!seive[i]) {
            primes.push(i);
        }
        for (let j = i * 2; j <= num; j += i) {
            seive[j] = true;
        }
    }
    console.log(seive)
    return primes
}

console.log(getPrimeOptimizated(71))
