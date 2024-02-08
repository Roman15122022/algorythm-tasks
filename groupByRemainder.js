const numbers = [15, 21, 30, 45, 17, 22, 36, 41, 57];
const divisor = 6;


const groupByRemainder = (numbers, divisor) => {
    return numbers.reduce((memo, item) => {
        const rest = item % divisor;
        memo[rest] = [...memo[rest] || [], item];
        return memo;
    }, {})
}

console.log(groupByRemainder(numbers, divisor))
