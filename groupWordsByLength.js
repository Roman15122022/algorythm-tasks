const words = ['apple', 'banana', 'orange', 'pear', 'kiwi', 'grape'];

const groupWordsByLength = (words) => {
    return words.reduce((memo, item) => {
        memo[item.length] = [...memo[item.length] || [], item];
        return memo;
    }, {})
}

console.log(groupWordsByLength(words))
