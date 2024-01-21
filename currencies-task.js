const  input = [
    ['usd', 'buy', 10000],
    ['usd', 'sell', 5000],
    ['gbp', 'buy', 9000],
    ['eur', 'sell', 7000],
    ['uah', 'buy', 10000],
    ['usd', 'sell', 25000],
]

const output = {
    usd: [10000, 30000],
    gbp: [9000, 0],
    eur: [0, 7000],
    uah: [10000, 0],
}

const currency = (arr) => {
    return arr.reduce((memo, item) => {
        const key = item[0]
        if (!memo[key]){
            memo[key] = [0, 0];
        }
        if (item[1] === 'buy') {
            memo[key][0] = memo[key][0] + item[2];
        }
        if (item[1] === 'sell'){
            memo[key][1] = memo[key][1] + item[2];
        }
        return memo
    }, {})
}

console.log(currency(input))
