// [['a', 1], ['b', 2]] => { a: 1, b: 2 }

const fromPairs = (arr) => {
    return arr.reduce((memo,item) => {
        memo[item[0]] = item[1];
        return memo;
    },{})
}

console.log(fromPairs([['a', 1], ['b', 2]]))
